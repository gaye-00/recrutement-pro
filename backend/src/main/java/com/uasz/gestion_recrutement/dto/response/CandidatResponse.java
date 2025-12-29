package com.uasz.gestion_recrutement.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CandidatResponse {
    private Long id;
    private String email;
    private String nom;
    private String prenom;
    private String telephone;
    private String adresse;
    private LocalDate dateNaissance;
    private String competences;
    private String experience;
    private String formation;
    private String cvUrl;
}