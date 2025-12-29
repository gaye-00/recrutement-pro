package com.uasz.gestion_recrutement.controller;

import com.uasz.gestion_recrutement.dto.request.ConnexionRequest;
import com.uasz.gestion_recrutement.dto.request.InscriptionCandidatRequest;
import com.uasz.gestion_recrutement.dto.request.InscriptionRecruteurRequest;
import com.uasz.gestion_recrutement.dto.response.AuthResponse;
import com.uasz.gestion_recrutement.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/inscription/candidat")
    public ResponseEntity<AuthResponse> inscrireCandidat(@Valid @RequestBody InscriptionCandidatRequest request) {
        return new ResponseEntity<>(authService.inscrireCandidat(request), HttpStatus.CREATED);
    }

    @PostMapping("/inscription/recruteur")
    public ResponseEntity<AuthResponse> inscrireRecruteur(@Valid @RequestBody InscriptionRecruteurRequest request) {
        return new ResponseEntity<>(authService.inscrireRecruteur(request), HttpStatus.CREATED);
    }

    @PostMapping("/connexion")
    public ResponseEntity<AuthResponse> seConnecter(@Valid @RequestBody ConnexionRequest request) {
        return ResponseEntity.ok(authService.seConnecter(request));
    }
}