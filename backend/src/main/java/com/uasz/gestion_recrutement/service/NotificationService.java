package com.uasz.gestion_recrutement.service;

import com.uasz.gestion_recrutement.model.Notification;
import com.uasz.gestion_recrutement.model.Utilisateur;
import com.uasz.gestion_recrutement.model.enums.StatutCandidature;
import com.uasz.gestion_recrutement.model.enums.TypeNotification;
import com.uasz.gestion_recrutement.repository.NotificationRepository;
import com.uasz.gestion_recrutement.repository.UtilisateurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final UtilisateurRepository utilisateurRepository;

    public List<Notification> obtenirParUtilisateur(Long utilisateurId) {
        return notificationRepository.findByUtilisateurIdOrderByDateEnvoiDesc(utilisateurId);
    }

    public Long compterNonLues(Long utilisateurId) {
        return notificationRepository.countByUtilisateurIdAndLu(utilisateurId, false);
    }

    @Transactional
    public void marquerCommeLu(Long notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow();
        notification.setLu(true);
        notificationRepository.save(notification);
    }

    @Transactional
    public void notifierNouvelleCandidature(Long entrepriseId, Long candidatureId) {
        String message = "Nouvelle candidature reçue pour votre offre";
        creerNotification(entrepriseId, message, TypeNotification.NOUVELLE_CANDIDATURE);
    }

    @Transactional
    public void notifierChangementStatut(Long candidatId, Long candidatureId, StatutCandidature statut) {
        String message = "Le statut de votre candidature a changé : " + statut;
        creerNotification(candidatId, message, TypeNotification.CHANGEMENT_STATUT);
    }

    @Transactional
    public void notifierEntretienPlanifie(Long candidatId, Long entretienId) {
        String message = "Un entretien a été planifié pour votre candidature";
        creerNotification(candidatId, message, TypeNotification.ENTRETIEN_PLANIFIE);
    }

    private void creerNotification(Long utilisateurId, String message, TypeNotification type) {
        Utilisateur utilisateur = utilisateurRepository.findById(utilisateurId)
                .orElseThrow();

        Notification notification = Notification.builder()
                .utilisateur(utilisateur)
                .message(message)
                .dateEnvoi(LocalDateTime.now())
                .lu(false)
                .type(type)
                .build();

        notificationRepository.save(notification);
    }
}