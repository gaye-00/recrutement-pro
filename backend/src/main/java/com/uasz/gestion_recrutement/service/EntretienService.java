package com.uasz.gestion_recrutement.service;

import com.uasz.gestion_recrutement.dto.request.EntretienRequest;
import com.uasz.gestion_recrutement.dto.response.EntretienResponse;
import com.uasz.gestion_recrutement.exception.ResourceNotFoundException;
import com.uasz.gestion_recrutement.model.Candidature;
import com.uasz.gestion_recrutement.model.Entretien;
import com.uasz.gestion_recrutement.model.Recruteur;
import com.uasz.gestion_recrutement.model.enums.StatutCandidature;
import com.uasz.gestion_recrutement.model.enums.StatutEntretien;
import com.uasz.gestion_recrutement.repository.CandidatureRepository;
import com.uasz.gestion_recrutement.repository.EntretienRepository;
import com.uasz.gestion_recrutement.repository.RecruteurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EntretienService {

    private final EntretienRepository entretienRepository;
    private final CandidatureRepository candidatureRepository;
    private final RecruteurRepository recruteurRepository;
    private final NotificationService notificationService;

    public List<EntretienResponse> obtenirParRecruteur(Long recruteurId) {
        return entretienRepository.findByRecruteurId(recruteurId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<EntretienResponse> obtenirParCandidature(Long candidatureId) {
        return entretienRepository.findByCandidatureId(candidatureId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public EntretienResponse obtenirParId(Long id) {
        Entretien entretien = entretienRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Entretien introuvable"));
        return mapToResponse(entretien);
    }

    @Transactional
    public EntretienResponse planifier(Long recruteurId, EntretienRequest request) {
        Candidature candidature = candidatureRepository.findById(request.getCandidatureId())
                .orElseThrow(() -> new ResourceNotFoundException("Candidature introuvable"));

        Recruteur recruteur = recruteurRepository.findById(recruteurId)
                .orElseThrow(() -> new ResourceNotFoundException("Recruteur introuvable"));

        Entretien entretien = Entretien.builder()
                .candidature(candidature)
                .recruteur(recruteur)
                .dateHeure(request.getDateHeure())
                .lieu(request.getLieu())
                .type(request.getType())
                .notes(request.getNotes())
                .statut(StatutEntretien.PLANIFIE)
                .build();

        entretien = entretienRepository.save(entretien);

        // Mise à jour statut candidature
        candidature.setStatut(StatutCandidature.ENTRETIEN_PLANIFIE);
        candidatureRepository.save(candidature);

        // Notification au candidat
        notificationService.notifierEntretienPlanifie(candidature.getCandidat().getId(), entretien.getId());

        return mapToResponse(entretien);
    }

    @Transactional
    public EntretienResponse modifier(Long id, EntretienRequest request) {
        Entretien entretien = entretienRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Entretien introuvable"));

        entretien.setDateHeure(request.getDateHeure());
        entretien.setLieu(request.getLieu());
        entretien.setType(request.getType());
        entretien.setNotes(request.getNotes());

        entretien = entretienRepository.save(entretien);
        return mapToResponse(entretien);
    }

    @Transactional
    public void annuler(Long id) {
        Entretien entretien = entretienRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Entretien introuvable"));
        entretien.setStatut(StatutEntretien.ANNULE);
        entretienRepository.save(entretien);
    }

    private EntretienResponse mapToResponse(Entretien entretien) {
        return EntretienResponse.builder()
                .id(entretien.getId())
                .dateHeure(entretien.getDateHeure())
                .lieu(entretien.getLieu())
                .type(entretien.getType())
                .notes(entretien.getNotes())
                .statut(entretien.getStatut())
                .candidatNom(entretien.getCandidature().getCandidat().getNom() + " " + 
                           entretien.getCandidature().getCandidat().getPrenom())
                .recruteurNom(entretien.getRecruteur().getNom() + " " + 
                            entretien.getRecruteur().getPrenom())
                .candidatureId(entretien.getCandidature().getId())
                .build();
    }
}