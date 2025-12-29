package com.uasz.gestion_recrutement.dto.response;

import com.uasz.gestion_recrutement.model.enums.TypeUtilisateur;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;

    @Builder.Default
    private String type = "Bearer";
    private Long id;
    private String email;
    private String nom;
    private String prenom;
    private TypeUtilisateur role;
}