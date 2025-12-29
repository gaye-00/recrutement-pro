package com.uasz.gestion_recrutement.controller;

import com.uasz.gestion_recrutement.dto.response.CandidatResponse;
import com.uasz.gestion_recrutement.model.Candidat;
import com.uasz.gestion_recrutement.service.CandidatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/candidats")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CandidatController {

    private final CandidatService candidatService;

    @GetMapping
    public ResponseEntity<List<CandidatResponse>> obtenirTous() {
        return ResponseEntity.ok(candidatService.obtenirTous());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CandidatResponse> obtenirParId(@PathVariable Long id) {
        return ResponseEntity.ok(candidatService.obtenirParId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CandidatResponse> modifierProfil(@PathVariable Long id, @RequestBody Candidat candidat) {
        return ResponseEntity.ok(candidatService.modifierProfil(id, candidat));
    }

    @PostMapping("/{id}/cv")
    public ResponseEntity<CandidatResponse> uploadCV(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(candidatService.uploadCV(id, file));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimer(@PathVariable Long id) {
        candidatService.supprimer(id);
        return ResponseEntity.noContent().build();
    }
}