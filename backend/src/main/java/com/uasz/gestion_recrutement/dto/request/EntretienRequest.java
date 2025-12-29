package com.uasz.gestion_recrutement.dto.request;

import com.uasz.gestion_recrutement.model.enums.TypeEntretien;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class EntretienRequest {
    
    @NotNull(message = "La candidature est obligatoire")
    private Long candidatureId;
    
    @NotNull(message = "La date et heure sont obligatoires")
    @Future(message = "La date doit être dans le futur")
    private LocalDateTime dateHeure;
    
    private String lieu;
    
    @NotNull(message = "Le type d'entretien est obligatoire")
    private TypeEntretien type;
    
    private String notes;
}