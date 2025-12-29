package com.uasz.gestion_recrutement.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class OffreEmploiRequest {
    
    @NotBlank(message = "Le titre est obligatoire")
    private String titre;
    
    @NotBlank(message = "La description est obligatoire")
    private String description;
    
    private String competencesRequises;
    
    @NotBlank(message = "Le type de contrat est obligatoire")
    private String typeContrat;
    
    @Positive(message = "Le salaire doit être positif")
    private Double salaire;
    
    private String localisation;
    
    @Future(message = "La date d'expiration doit être dans le futur")
    private LocalDate dateExpiration;
    
    @NotNull(message = "L'entreprise est obligatoire")
    private Long entrepriseId;
}