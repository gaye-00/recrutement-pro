package com.uasz.gestion_recrutement.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class InscriptionRecruteurRequest {
    
    @NotBlank(message = "L'email est obligatoire")
    @Email(message = "Email invalide")
    private String email;
    
    @NotBlank(message = "Le mot de passe est obligatoire")
    @Size(min = 6, message = "Le mot de passe doit contenir au moins 6 caractères")
    private String motDePasse;
    
    @NotBlank(message = "Le nom est obligatoire")
    private String nom;
    
    @NotBlank(message = "Le prénom est obligatoire")
    private String prenom;
    
    private String telephone;
    
    @NotNull(message = "L'entreprise est obligatoire")
    private Long entrepriseId;
    
    private String poste;
}