package com.uasz.gestion_recrutement.model;

import java.util.List;

import com.uasz.gestion_recrutement.model.enums.TypeUtilisateur;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Utilisateur extends EntiteDeBase {
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column(nullable = false)
    private String motDePasse;
    
    @Column(nullable = false)
    private String nom;
    
    @Column(nullable = false)
    private String prenom;
    
    private String telephone;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeUtilisateur role;
    
    @OneToMany(mappedBy = "utilisateur", cascade = CascadeType.ALL)
    private List<Notification> notifications;
}