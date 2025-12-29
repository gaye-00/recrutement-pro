package com.uasz.gestion_recrutement.service;

import com.uasz.gestion_recrutement.dto.request.CandidatureRequest;
import com.uasz.gestion_recrutement.dto.response.CandidatureResponse;
import com.uasz.gestion_recrutement.exception.BadRequestException;
import com.uasz.gestion_recrutement.exception.ResourceNotFoundException;
import com.uasz.gestion_recrutement.model.Candidat;
import com.uasz.gestion_recrutement.model.Candidature;
import com.uasz.gestion_recrutement.model.OffreEmploi;
import com.uasz.gestion_recrutement.model.enums.StatutCandidature;
import com.uasz.gestion_recrutement.repository.CandidatRepository;
import com.uasz.gestion_recrutement.repository.CandidatureRepository;
import com.uasz.gestion_recrutement.repository.OffreEmploiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CandidatureService {

    private final CandidatureRepository candidatureRepository;
    private final CandidatRepository candidatRepository;
    private final OffreEmploiRepository offreEmploiRepository;
    private final FichierService fichierService;
    private final NotificationService notificationService;

    public List<CandidatureResponse> obtenirParCandidat(Long candidatId) {
        return candidatureRepository.findByCandidatId(candidatId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<CandidatureResponse> obtenirParOffre(Long offreId) {
        return candidatureRepository.findByOffreEmploiId(offreId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public CandidatureResponse obtenirParId(Long id) {
        Candidature candidature = candidatureRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidature introuvable"));
        return mapToResponse(candidature);
    }

    @Transactional
    public CandidatureResponse postuler(Long candidatId, CandidatureRequest request, MultipartFile cv) {
        Candidat candidat = candidatRepository.findById(candidatId)
                .orElseThrow(() -> new ResourceNotFoundException("Candidat introuvable"));

        OffreEmploi offre = offreEmploiRepository.findById(request.getOffreEmploiId())
                .orElseThrow(() -> new ResourceNotFoundException("Offre d'emploi introuvable"));

        if (candidatureRepository.existsByCandidatIdAndOffreEmploiId(candidatId, request.getOffreEmploiId())) {
            throw new BadRequestException("Vous avez déjà postulé à cette offre");
        }

        String cvUrl = cv != null ? fichierService.sauvegarderFichier(cv, "candidatures") : candidat.getCvUrl();

        Candidature candidature = Candidature.builder()
                .candidat(candidat)
                .offreEmploi(offre)
                .datePostulation(LocalDate.now())
                .statut(StatutCandidature.EN_ATTENTE)
                .lettreMotivation(request.getLettreMotivation())
                .cvUrl(cvUrl)
                .build();

        candidature = candidatureRepository.save(candidature);

        // Notification au recruteur
        notificationService.notifierNouvelleCandidature(offre.getEntreprise().getId(), candidature.getId());

        return mapToResponse(candidature);
    }

    @Transactional
    public CandidatureResponse changerStatut(Long id, StatutCandidature nouveauStatut) {
        Candidature candidature = candidatureRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidature introuvable"));

        candidature.setStatut(nouveauStatut);
        candidature = candidatureRepository.save(candidature);

        // Notification au candidat
        notificationService.notifierChangementStatut(candidature.getCandidat().getId(), id, nouveauStatut);

        return mapToResponse(candidature);
    }

    @Transactional
    public void supprimer(Long id) {
        Candidature candidature = candidatureRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Candidature introuvable"));
        candidatureRepository.delete(candidature);
    }

    private CandidatureResponse mapToResponse(Candidature candidature) {
        return CandidatureResponse.builder()
                .id(candidature.getId())
                .datePostulation(candidature.getDatePostulation())
                .statut(candidature.getStatut())
                .lettreMotivation(candidature.getLettreMotivation())
                .cvUrl(candidature.getCvUrl())
                .build();
    }
}