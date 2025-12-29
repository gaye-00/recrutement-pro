package com.uasz.gestion_recrutement.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class Entreprise extends EntiteDeBase {
    
    @Column(nullable = false)
    private String nom;
    
    private String secteur;
    
    private String adresse;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    private String logo;
    
    @OneToMany(mappedBy = "entreprise", cascade = CascadeType.ALL)
    private List<Recruteur> recruteurs;
    
    @OneToMany(mappedBy = "entreprise", cascade = CascadeType.ALL)
    private List<OffreEmploi> offresEmploi;
}