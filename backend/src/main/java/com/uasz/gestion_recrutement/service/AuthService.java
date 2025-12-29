package com.uasz.gestion_recrutement.service;

import com.uasz.gestion_recrutement.dto.request.ConnexionRequest;
import com.uasz.gestion_recrutement.dto.request.InscriptionCandidatRequest;
import com.uasz.gestion_recrutement.dto.request.InscriptionRecruteurRequest;
import com.uasz.gestion_recrutement.dto.response.AuthResponse;
import com.uasz.gestion_recrutement.exception.BadRequestException;
import com.uasz.gestion_recrutement.exception.ResourceNotFoundException;
import com.uasz.gestion_recrutement.model.Candidat;
import com.uasz.gestion_recrutement.model.Entreprise;
import com.uasz.gestion_recrutement.model.Recruteur;
import com.uasz.gestion_recrutement.model.Utilisateur;
import com.uasz.gestion_recrutement.model.enums.TypeUtilisateur;
import com.uasz.gestion_recrutement.repository.CandidatRepository;
import com.uasz.gestion_recrutement.repository.EntrepriseRepository;
import com.uasz.gestion_recrutement.repository.RecruteurRepository;
import com.uasz.gestion_recrutement.repository.UtilisateurRepository;
import com.uasz.gestion_recrutement.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UtilisateurRepository utilisateurRepository;
    private final CandidatRepository candidatRepository;
    private final RecruteurRepository recruteurRepository;
    private final EntrepriseRepository entrepriseRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Transactional
    public AuthResponse inscrireCandidat(InscriptionCandidatRequest request) {
        if (utilisateurRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Cet email est déjà utilisé");
        }

        Candidat candidat = Candidat.builder()
                .email(request.getEmail())
                .motDePasse(passwordEncoder.encode(request.getMotDePasse()))
                .nom(request.getNom())
                .prenom(request.getPrenom())
                .telephone(request.getTelephone())
                .role(TypeUtilisateur.CANDIDAT)
                .adresse(request.getAdresse())
                .dateNaissance(request.getDateNaissance())
                .competences(request.getCompetences())
                .experience(request.getExperience())
                .formation(request.getFormation())
                .build();

        candidat = candidatRepository.save(candidat);

        String token = jwtUtil.generateToken(candidat.getEmail());

        return AuthResponse.builder()
                .token(token)
                .id(candidat.getId())
                .email(candidat.getEmail())
                .nom(candidat.getNom())
                .prenom(candidat.getPrenom())
                .role(candidat.getRole())
                .build();
    }

    @Transactional
    public AuthResponse inscrireRecruteur(InscriptionRecruteurRequest request) {
        if (utilisateurRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Cet email est déjà utilisé");
        }

        Entreprise entreprise = entrepriseRepository.findById(request.getEntrepriseId())
                .orElseThrow(() -> new ResourceNotFoundException("Entreprise introuvable"));

        Recruteur recruteur = Recruteur.builder()
                .email(request.getEmail())
                .motDePasse(passwordEncoder.encode(request.getMotDePasse()))
                .nom(request.getNom())
                .prenom(request.getPrenom())
                .telephone(request.getTelephone())
                .role(TypeUtilisateur.RECRUTEUR)
                .entreprise(entreprise)
                .poste(request.getPoste())
                .build();

        recruteur = recruteurRepository.save(recruteur);

        String token = jwtUtil.generateToken(recruteur.getEmail());

        return AuthResponse.builder()
                .token(token)
                .id(recruteur.getId())
                .email(recruteur.getEmail())
                .nom(recruteur.getNom())
                .prenom(recruteur.getPrenom())
                .role(recruteur.getRole())
                .build();
    }

    public AuthResponse seConnecter(ConnexionRequest request) {
        Utilisateur utilisateur = utilisateurRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BadRequestException("Email ou mot de passe incorrect"));

        if (!passwordEncoder.matches(request.getMotDePasse(), utilisateur.getMotDePasse())) {
            throw new BadRequestException("Email ou mot de passe incorrect");
        }

        String token = jwtUtil.generateToken(utilisateur.getEmail());

        return AuthResponse.builder()
                .token(token)
                .id(utilisateur.getId())
                .email(utilisateur.getEmail())
                .nom(utilisateur.getNom())
                .prenom(utilisateur.getPrenom())
                .role(utilisateur.getRole())
                .build();
    }
}