package com.uasz.gestion_recrutement.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class InscriptionCandidatRequest {
    
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
    private String adresse;
    
    @Past(message = "La date de naissance doit être dans le passé")
    private LocalDate dateNaissance;
    
    private String competences;
    private String experience;
    private String formation;
}