package com.uasz.gestion_recrutement.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class CandidatureRequest {
    
    @NotNull(message = "L'offre d'emploi est obligatoire")
    private Long offreEmploiId;
    
    @NotBlank(message = "La lettre de motivation est obligatoire")
    private String lettreMotivation;
}