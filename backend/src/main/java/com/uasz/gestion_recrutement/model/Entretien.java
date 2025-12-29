package com.uasz.gestion_recrutement.model;

import com.uasz.gestion_recrutement.model.enums.StatutEntretien;
import com.uasz.gestion_recrutement.model.enums.TypeEntretien;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
public class Entretien extends EntiteDeBase {
    
    @ManyToOne
    @JoinColumn(name = "candidature_id", nullable = false)
    private Candidature candidature;
    
    @ManyToOne
    @JoinColumn(name = "recruteur_id", nullable = false)
    private Recruteur recruteur;
    
    @Column(nullable = false)
    private LocalDateTime dateHeure;
    
    private String lieu;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeEntretien type;
    
    @Column(columnDefinition = "TEXT")
    private String notes;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutEntretien statut;
}