package com.uasz.gestion_recrutement.controller;

import com.uasz.gestion_recrutement.dto.request.EntretienRequest;
import com.uasz.gestion_recrutement.dto.response.EntretienResponse;
import com.uasz.gestion_recrutement.service.EntretienService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entretiens")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class EntretienController {

    private final EntretienService entretienService;

    @GetMapping("/recruteur/{recruteurId}")
    public ResponseEntity<List<EntretienResponse>> obtenirParRecruteur(@PathVariable Long recruteurId) {
        return ResponseEntity.ok(entretienService.obtenirParRecruteur(recruteurId));
    }

    @GetMapping("/candidature/{candidatureId}")
    public ResponseEntity<List<EntretienResponse>> obtenirParCandidature(@PathVariable Long candidatureId) {
        return ResponseEntity.ok(entretienService.obtenirParCandidature(candidatureId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<EntretienResponse> obtenirParId(@PathVariable Long id) {
        return ResponseEntity.ok(entretienService.obtenirParId(id));
    }

    @PostMapping("/recruteur/{recruteurId}")
    public ResponseEntity<EntretienResponse> planifier(
            @PathVariable Long recruteurId,
            @Valid @RequestBody EntretienRequest request) {
        return new ResponseEntity<>(entretienService.planifier(recruteurId, request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EntretienResponse> modifier(@PathVariable Long id, @Valid @RequestBody EntretienRequest request) {
        return ResponseEntity.ok(entretienService.modifier(id, request));
    }

    @PatchMapping("/{id}/annuler")
    public ResponseEntity<Void> annuler(@PathVariable Long id) {
        entretienService.annuler(id);
        return ResponseEntity.noContent().build();
    }
}