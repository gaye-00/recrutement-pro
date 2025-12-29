package com.uasz.gestion_recrutement.dto.response;

import com.uasz.gestion_recrutement.model.enums.StatutOffre;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OffreEmploiResponse {
    private Long id;
    private String titre;
    private String description;
    private String competencesRequises;
    private String typeContrat;
    private Double salaire;
    private String localisation;
    private LocalDate datePublication;
    private LocalDate dateExpiration;
    private StatutOffre statut;
    private String entrepriseNom;
    private Long entrepriseId;
    private Integer nombreCandidatures;
}