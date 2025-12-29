package com.uasz.gestion_recrutement.controller;

import com.uasz.gestion_recrutement.dto.request.OffreEmploiRequest;
import com.uasz.gestion_recrutement.dto.response.OffreEmploiResponse;
import com.uasz.gestion_recrutement.service.OffreEmploiService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/offres")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OffreEmploiController {

    private final OffreEmploiService offreEmploiService;

    @GetMapping
    public ResponseEntity<List<OffreEmploiResponse>> obtenirTous() {
        return ResponseEntity.ok(offreEmploiService.obtenirTous());
    }

    @GetMapping("/actives")
    public ResponseEntity<List<OffreEmploiResponse>> obtenirOffresActives() {
        return ResponseEntity.ok(offreEmploiService.obtenirOffresActives());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OffreEmploiResponse> obtenirParId(@PathVariable Long id) {
        return ResponseEntity.ok(offreEmploiService.obtenirParId(id));
    }

    @GetMapping("/recherche")
    public ResponseEntity<List<OffreEmploiResponse>> rechercher(@RequestParam String motCle) {
        return ResponseEntity.ok(offreEmploiService.rechercherOffres(motCle));
    }

    @PostMapping
    public ResponseEntity<OffreEmploiResponse> creer(@Valid @RequestBody OffreEmploiRequest request) {
        return new ResponseEntity<>(offreEmploiService.creer(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OffreEmploiResponse> modifier(@PathVariable Long id, @Valid @RequestBody OffreEmploiRequest request) {
        return ResponseEntity.ok(offreEmploiService.modifier(id, request));
    }

    @PatchMapping("/{id}/cloturer")
    public ResponseEntity<Void> cloturer(@PathVariable Long id) {
        offreEmploiService.cloturer(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimer(@PathVariable Long id) {
        offreEmploiService.supprimer(id);
        return ResponseEntity.noContent().build();
    }
}