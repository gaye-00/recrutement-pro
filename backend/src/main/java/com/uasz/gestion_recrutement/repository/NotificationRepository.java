package com.uasz.gestion_recrutement.repository;

import com.uasz.gestion_recrutement.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUtilisateurIdOrderByDateEnvoiDesc(Long utilisateurId);
    List<Notification> findByUtilisateurIdAndLu(Long utilisateurId, Boolean lu);
    Long countByUtilisateurIdAndLu(Long utilisateurId, Boolean lu);
}