package com.uasz.gestion_recrutement.service;

import com.uasz.gestion_recrutement.exception.FileStorageException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FichierService {

    @Value("${file.upload-dir:uploads}")
    private String uploadDir;

    public String sauvegarderFichier(MultipartFile file, String subDir) {
        try {
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            String extension = fileName.substring(fileName.lastIndexOf("."));
            String newFileName = UUID.randomUUID().toString() + extension;

            Path uploadPath = Paths.get(uploadDir, subDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(newFileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            return "/" + subDir + "/" + newFileName;
        } catch (IOException ex) {
            throw new FileStorageException("Erreur lors de la sauvegarde du fichier", ex);
        }
    }

    public void supprimerFichier(String fileUrl) {
        try {
            Path filePath = Paths.get(uploadDir + fileUrl);
            Files.deleteIfExists(filePath);
        } catch (IOException ex) {
            throw new FileStorageException("Erreur lors de la suppression du fichier", ex);
        }
    }
}