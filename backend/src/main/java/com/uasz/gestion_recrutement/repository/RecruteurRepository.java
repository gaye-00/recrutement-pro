package com.uasz.gestion_recrutement.repository;

import com.uasz.gestion_recrutement.model.Recruteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecruteurRepository extends JpaRepository<Recruteur, Long> {
    List<Recruteur> findByEntrepriseId(Long entrepriseId);
}