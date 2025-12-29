package com.uasz.gestion_recrutement.model;

import com.uasz.gestion_recrutement.model.enums.StatutOffre;
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
public class OffreEmploi extends EntiteDeBase {
    
    @Column(nullable = false)
    private String titre;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;
    
    @Column(columnDefinition = "TEXT")
    private String competencesRequises;
    
    private String typeContrat;
    
    private Double salaire;
    
    private String localisation;
    
    @Column(nullable = false)
    private LocalDate datePublication;
    
    private LocalDate dateExpiration;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutOffre statut;
    
    @ManyToOne
    @JoinColumn(name = "entreprise_id", nullable = false)
    private Entreprise entreprise;
    
    @OneToMany(mappedBy = "offreEmploi", cascade = CascadeType.ALL)
    private List<Candidature> candidatures;
}