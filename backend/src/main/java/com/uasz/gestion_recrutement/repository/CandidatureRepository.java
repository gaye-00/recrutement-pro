package com.uasz.gestion_recrutement.repository;

import com.uasz.gestion_recrutement.model.Candidature;
import com.uasz.gestion_recrutement.model.enums.StatutCandidature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CandidatureRepository extends JpaRepository<Candidature, Long> {
    List<Candidature> findByCandidatId(Long candidatId);
    List<Candidature> findByOffreEmploiId(Long offreEmploiId);
    List<Candidature> findByStatut(StatutCandidature statut);
    Boolean existsByCandidatIdAndOffreEmploiId(Long candidatId, Long offreEmploiId);
}