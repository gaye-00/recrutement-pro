package com.uasz.gestion_recrutement.dto.response;

import com.uasz.gestion_recrutement.model.enums.StatutEntretien;
import com.uasz.gestion_recrutement.model.enums.TypeEntretien;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EntretienResponse {
    private Long id;
    private LocalDateTime dateHeure;
    private String lieu;
    private TypeEntretien type;
    private String notes;
    private StatutEntretien statut;
    private String candidatNom;
    private String recruteurNom;
    private Long candidatureId;
}