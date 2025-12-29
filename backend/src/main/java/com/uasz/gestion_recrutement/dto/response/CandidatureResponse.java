package com.uasz.gestion_recrutement.dto.response;

import com.uasz.gestion_recrutement.model.enums.StatutCandidature;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CandidatureResponse {
    private Long id;
    private LocalDate datePostulation;
    private StatutCandidature statut;
    private String lettreMotivation;
    private String cvUrl;
    private CandidatResponse candidat;
    private OffreEmploiResponse offreEmploi;
}