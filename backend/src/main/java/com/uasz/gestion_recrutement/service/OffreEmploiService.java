package com.uasz.gestion_recrutement.service;

import com.uasz.gestion_recrutement.dto.request.OffreEmploiRequest;
import com.uasz.gestion_recrutement.dto.response.OffreEmploiResponse;
import com.uasz.gestion_recrutement.exception.ResourceNotFoundException;
import com.uasz.gestion_recrutement.model.Entreprise;
import com.uasz.gestion_recrutement.model.OffreEmploi;
import com.uasz.gestion_recrutement.model.enums.StatutOffre;
import com.uasz.gestion_recrutement.repository.EntrepriseRepository;
import com.uasz.gestion_recrutement.repository.OffreEmploiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OffreEmploiService {

    private final OffreEmploiRepository offreEmploiRepository;
    private final EntrepriseRepository entrepriseRepository;

    public List<OffreEmploiResponse> obtenirTous() {
        return offreEmploiRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<OffreEmploiResponse> obtenirOffresActives() {
        return offreEmploiRepository.findOffresActives().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public OffreEmploiResponse obtenirParId(Long id) {
        OffreEmploi offre = offreEmploiRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Offre d'emploi introuvable"));
        return mapToResponse(offre);
    }

    public List<OffreEmploiResponse> rechercherOffres(String motCle) {
        return offreEmploiRepository
                .findByTitreContainingIgnoreCaseOrDescriptionContainingIgnoreCase(motCle, motCle)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public OffreEmploiResponse creer(OffreEmploiRequest request) {
        Entreprise entreprise = entrepriseRepository.findById(request.getEntrepriseId())
                .orElseThrow(() -> new ResourceNotFoundException("Entreprise introuvable"));

        OffreEmploi offre = OffreEmploi.builder()
                .titre(request.getTitre())
                .description(request.getDescription())
                .competencesRequises(request.getCompetencesRequises())
                .typeContrat(request.getTypeContrat())
                .salaire(request.getSalaire())
                .localisation(request.getLocalisation())
                .datePublication(LocalDate.now())
                .dateExpiration(request.getDateExpiration())
                .statut(StatutOffre.ACTIVE)
                .entreprise(entreprise)
                .build();

        offre = offreEmploiRepository.save(offre);
        return mapToResponse(offre);
    }

    @Transactional
    public OffreEmploiResponse modifier(Long id, OffreEmploiRequest request) {
        OffreEmploi offre = offreEmploiRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Offre d'emploi introuvable"));

        offre.setTitre(request.getTitre());
        offre.setDescription(request.getDescription());
        offre.setCompetencesRequises(request.getCompetencesRequises());
        offre.setTypeContrat(request.getTypeContrat());
        offre.setSalaire(request.getSalaire());
        offre.setLocalisation(request.getLocalisation());
        offre.setDateExpiration(request.getDateExpiration());

        offre = offreEmploiRepository.save(offre);
        return mapToResponse(offre);
    }

    @Transactional
    public void cloturer(Long id) {
        OffreEmploi offre = offreEmploiRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Offre d'emploi introuvable"));
        offre.setStatut(StatutOffre.POURVUE);
        offreEmploiRepository.save(offre);
    }

    @Transactional
    public void supprimer(Long id) {
        OffreEmploi offre = offreEmploiRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Offre d'emploi introuvable"));
        offreEmploiRepository.delete(offre);
    }

    private OffreEmploiResponse mapToResponse(OffreEmploi offre) {
        return OffreEmploiResponse.builder()
                .id(offre.getId())
                .titre(offre.getTitre())
                .description(offre.getDescription())
                .competencesRequises(offre.getCompetencesRequises())
                .typeContrat(offre.getTypeContrat())
                .salaire(offre.getSalaire())
                .localisation(offre.getLocalisation())
                .datePublication(offre.getDatePublication())
                .dateExpiration(offre.getDateExpiration())
                .statut(offre.getStatut())
                .entrepriseNom(offre.getEntreprise().getNom())
                .entrepriseId(offre.getEntreprise().getId())
                .nombreCandidatures(offre.getCandidatures() != null ? offre.getCandidatures().size() : 0)
                .build();
    }
}