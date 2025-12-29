package com.uasz.gestion_recrutement.controller;

import com.uasz.gestion_recrutement.model.Entreprise;
import com.uasz.gestion_recrutement.repository.EntrepriseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/entreprises")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class EntrepriseController {

    private final EntrepriseRepository entrepriseRepository;

    @GetMapping
    public ResponseEntity<List<Entreprise>> obtenirTous() {
        return ResponseEntity.ok(entrepriseRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entreprise> obtenirParId(@PathVariable Long id) {
        return entrepriseRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Entreprise> creer(@RequestBody Entreprise entreprise) {
        return new ResponseEntity<>(entrepriseRepository.save(entreprise), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Entreprise> modifier(@PathVariable Long id, @RequestBody Entreprise entrepriseDetails) {
        return entrepriseRepository.findById(id)
                .map(entreprise -> {
                    entreprise.setNom(entrepriseDetails.getNom());
                    entreprise.setSecteur(entrepriseDetails.getSecteur());
                    entreprise.setAdresse(entrepriseDetails.getAdresse());
                    entreprise.setDescription(entrepriseDetails.getDescription());
                    entreprise.setLogo(entrepriseDetails.getLogo());
                    return ResponseEntity.ok(entrepriseRepository.save(entreprise));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimer(@PathVariable Long id) {
        return entrepriseRepository.findById(id)
                .map(entreprise -> {
                    entrepriseRepository.delete(entreprise);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}