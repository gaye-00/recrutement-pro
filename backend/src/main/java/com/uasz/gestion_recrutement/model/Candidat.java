package com.uasz.gestion_recrutement.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class Candidat extends Utilisateur {
    
    private String adresse;
    
    private LocalDate dateNaissance;
    
    @Column(columnDefinition = "TEXT")
    private String competences;
    
    @Column(columnDefinition = "TEXT")
    private String experience;
    
    @Column(columnDefinition = "TEXT")
    private String formation;
    
    private String cvUrl; // Chemin du fichier CV
    
    @OneToMany(mappedBy = "candidat", cascade = CascadeType.ALL)
    private List<Candidature> candidatures;
}