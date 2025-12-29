package com.uasz.gestion_recrutement.model;

import com.uasz.gestion_recrutement.model.enums.TypeNotification;
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
public class Notification extends EntiteDeBase {
    
    @ManyToOne
    @JoinColumn(name = "utilisateur_id", nullable = false)
    private Utilisateur utilisateur;
    
    @Column(nullable = false)
    private String message;
    
    @Column(nullable = false)
    private LocalDateTime dateEnvoi;
    
    @Column(nullable = false)
    @Builder.Default
    private Boolean lu = false;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeNotification type;
}