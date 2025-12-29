package com.uasz.gestion_recrutement.model;

import com.uasz.gestion_recrutement.model.enums.StatutCandidature;
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
public class Candidature extends EntiteDeBase {
    
    @ManyToOne
    @JoinColumn(name = "candidat_id", nullable = false)
    private Candidat candidat;
    
    @ManyToOne
    @JoinColumn(name = "offre_emploi_id", nullable = false)
    private OffreEmploi offreEmploi;
    
    @Column(nullable = false)
    private LocalDate datePostulation;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatutCandidature statut;
    
    @Column(columnDefinition = "TEXT")
    private String lettreMotivation;
    
    private String cvUrl;
    
    @OneToMany(mappedBy = "candidature", cascade = CascadeType.ALL)
    private List<Entretien> entretiens;
}