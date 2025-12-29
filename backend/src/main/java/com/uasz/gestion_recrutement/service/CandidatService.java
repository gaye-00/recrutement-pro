package com.uasz.gestion_recrutement.service;

import com.uasz.gestion_recrutement.dto.response.CandidatResponse;
import com.uasz.gestion_recrutement.exception.ResourceNotFoundException;
import com.uasz.gestion_recrutement.model.Candidat;
import com.uasz.gestion_recrutement.repository.CandidatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CandidatService {

    private final CandidatRepository candidatRepository;
    private final FichierService fichierService;

    public List<CandidatResponse> obtenirTous() {
        return candidatRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public CandidatResponse obtenirParId(Long id) {
        Candidat candidat = candidatRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidat introuvable"));
        return mapToResponse(candidat);
    }

    @Transactional
    public CandidatResponse modifierProfil(Long id, Candidat candidatDetails) {
        Candidat candidat = candidatRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidat introuvable"));

        candidat.setNom(candidatDetails.getNom());
        candidat.setPrenom(candidatDetails.getPrenom());
        candidat.setTelephone(candidatDetails.getTelephone());
        candidat.setAdresse(candidatDetails.getAdresse());
        candidat.setCompetences(candidatDetails.getCompetences());
        candidat.setExperience(candidatDetails.getExperience());
        candidat.setFormation(candidatDetails.getFormation());

        candidat = candidatRepository.save(candidat);
        return mapToResponse(candidat);
    }

    @Transactional
    public CandidatResponse uploadCV(Long id, MultipartFile file) {
        Candidat candidat = candidatRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidat introuvable"));

        String cvUrl = fichierService.sauvegarderFichier(file, "cv");
        candidat.setCvUrl(cvUrl);

        candidat = candidatRepository.save(candidat);
        return mapToResponse(candidat);
    }

    @Transactional
    public void supprimer(Long id) {
        Candidat candidat = candidatRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidat introuvable"));
        candidatRepository.delete(candidat);
    }

    private CandidatResponse mapToResponse(Candidat candidat) {
        return CandidatResponse.builder()
                .id(candidat.getId())
                .email(candidat.getEmail())
                .nom(candidat.getNom())
                .prenom(candidat.getPrenom())
                .telephone(candidat.getTelephone())
                .adresse(candidat.getAdresse())
                .dateNaissance(candidat.getDateNaissance())
                .competences(candidat.getCompetences())
                .experience(candidat.getExperience())
                .formation(candidat.getFormation())
                .cvUrl(candidat.getCvUrl())
                .build();
    }
}