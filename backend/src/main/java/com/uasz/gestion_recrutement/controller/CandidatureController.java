package com.uasz.gestion_recrutement.controller;

import com.uasz.gestion_recrutement.dto.request.CandidatureRequest;
import com.uasz.gestion_recrutement.dto.response.CandidatureResponse;
import com.uasz.gestion_recrutement.model.enums.StatutCandidature;
import com.uasz.gestion_recrutement.service.CandidatureService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/candidatures")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CandidatureController {

    private final CandidatureService candidatureService;

    @GetMapping("/candidat/{candidatId}")
    public ResponseEntity<List<CandidatureResponse>> obtenirParCandidat(@PathVariable Long candidatId) {
        return ResponseEntity.ok(candidatureService.obtenirParCandidat(candidatId));
    }

    @GetMapping("/offre/{offreId}")
    public ResponseEntity<List<CandidatureResponse>> obtenirParOffre(@PathVariable Long offreId) {
        return ResponseEntity.ok(candidatureService.obtenirParOffre(offreId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CandidatureResponse> obtenirParId(@PathVariable Long id) {
        return ResponseEntity.ok(candidatureService.obtenirParId(id));
    }

    @PostMapping("/candidat/{candidatId}")
    public ResponseEntity<CandidatureResponse> postuler(
            @PathVariable Long candidatId,
            @Valid @RequestPart("candidature") CandidatureRequest request,
            @RequestPart(value = "cv", required = false) MultipartFile cv) {
        return new ResponseEntity<>(candidatureService.postuler(candidatId, request, cv), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/statut")
    public ResponseEntity<CandidatureResponse> changerStatut(
            @PathVariable Long id,
            @RequestParam StatutCandidature statut) {
        return ResponseEntity.ok(candidatureService.changerStatut(id, statut));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimer(@PathVariable Long id) {
        candidatureService.supprimer(id);
        return ResponseEntity.noContent().build();
    }
}