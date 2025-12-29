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
public class Recruteur extends Utilisateur {
    
    @ManyToOne
    @JoinColumn(name = "entreprise_id")
    private Entreprise entreprise;
    
    private String poste;
    
    @OneToMany(mappedBy = "recruteur", cascade = CascadeType.ALL)
    private List<Entretien> entretiens;
}