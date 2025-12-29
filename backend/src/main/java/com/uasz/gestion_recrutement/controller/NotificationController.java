package com.uasz.gestion_recrutement.controller;

import com.uasz.gestion_recrutement.model.Notification;
import com.uasz.gestion_recrutement.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping("/utilisateur/{utilisateurId}")
    public ResponseEntity<List<Notification>> obtenirParUtilisateur(@PathVariable Long utilisateurId) {
        return ResponseEntity.ok(notificationService.obtenirParUtilisateur(utilisateurId));
    }

    @GetMapping("/utilisateur/{utilisateurId}/non-lues/count")
    public ResponseEntity<Long> compterNonLues(@PathVariable Long utilisateurId) {
        return ResponseEntity.ok(notificationService.compterNonLues(utilisateurId));
    }

    @PatchMapping("/{id}/lire")
    public ResponseEntity<Void> marquerCommeLu(@PathVariable Long id) {
        notificationService.marquerCommeLu(id);
        return ResponseEntity.noContent().build();
    }
}