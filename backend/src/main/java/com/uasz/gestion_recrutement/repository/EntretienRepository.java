package com.uasz.gestion_recrutement.repository;

import com.uasz.gestion_recrutement.model.Entretien;
import com.uasz.gestion_recrutement.model.enums.StatutEntretien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EntretienRepository extends JpaRepository<Entretien, Long> {
    List<Entretien> findByRecruteurId(Long recruteurId);
    List<Entretien> findByCandidatureId(Long candidatureId);
    List<Entretien> findByStatut(StatutEntretien statut);
    List<Entretien> findByDateHeureBetween(LocalDateTime debut, LocalDateTime fin);
}