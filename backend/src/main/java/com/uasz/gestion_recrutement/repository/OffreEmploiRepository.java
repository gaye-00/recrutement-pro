package com.uasz.gestion_recrutement.repository;

import com.uasz.gestion_recrutement.model.OffreEmploi;
import com.uasz.gestion_recrutement.model.enums.StatutOffre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OffreEmploiRepository extends JpaRepository<OffreEmploi, Long> {
    List<OffreEmploi> findByStatut(StatutOffre statut);
    List<OffreEmploi> findByEntrepriseId(Long entrepriseId);
    List<OffreEmploi> findByTitreContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String titre, String description);
    
    @Query("SELECT o FROM OffreEmploi o WHERE o.statut = 'ACTIVE' AND o.dateExpiration > CURRENT_DATE")
    List<OffreEmploi> findOffresActives();
}