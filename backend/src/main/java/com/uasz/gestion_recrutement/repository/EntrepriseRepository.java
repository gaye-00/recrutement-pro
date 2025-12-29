package com.uasz.gestion_recrutement.repository;

import com.uasz.gestion_recrutement.model.Entreprise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EntrepriseRepository extends JpaRepository<Entreprise, Long> {
    List<Entreprise> findBySecteur(String secteur);
    List<Entreprise> findByNomContainingIgnoreCase(String nom);
}