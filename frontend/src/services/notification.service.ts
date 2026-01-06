import { apiClient } from "./api";
import type { TypeNotification } from "./types/types";

// ===== INTERFACES =====
export interface NotificationResponse {
  id: number;
  message: string;
  dateEnvoi: string;
  lu: boolean;
  type: TypeNotification;
  utilisateurId: number;
  dateCreation: string;
}

export interface NotificationStats {
  total: number;
  nonLues: number;
}

// ===== SERVICE =====
export const notificationService = {
  // ===== CRUD =====

  /**
   * Récupérer les notifications d'un utilisateur
   */
  getByUser: (utilisateurId: number) =>
    apiClient.get<NotificationResponse[]>(
      `/notifications/utilisateur/${utilisateurId}`
    ),

  /**
   * Compter les notifications non lues
   */
  countUnread: (utilisateurId: number) =>
    apiClient.get<number>(
      `/notifications/utilisateur/${utilisateurId}/non-lues/count`
    ),

  /**
   * Marquer une notification comme lue
   */
  markAsRead: (id: number) => apiClient.patch(`/notifications/${id}/lire`),

  /**
   * Marquer toutes les notifications comme lues
   */
  markAllAsRead: (utilisateurId: number) =>
    apiClient.patch(`/notifications/utilisateur/${utilisateurId}/lire-tout`),

  /**
   * Supprimer une notification
   */
  delete: (id: number) => apiClient.delete(`/notifications/${id}`),

  /**
   * Supprimer toutes les notifications d'un utilisateur
   */
  deleteAll: (utilisateurId: number) =>
    apiClient.delete(`/notifications/utilisateur/${utilisateurId}`),

  // ===== UTILITAIRES =====

  /**
   * Obtenir le libellé du type
   */
  getTypeLabel: (type: TypeNotification): string => {
    const labels: Record<TypeNotification, string> = {
      NOUVELLE_CANDIDATURE: "Nouvelle candidature",
      CHANGEMENT_STATUT: "Changement de statut",
      ENTRETIEN_PLANIFIE: "Entretien planifié",
      NOUVELLE_OFFRE: "Nouvelle offre",
      MESSAGE: "Message",
    };
    return labels[type];
  },

  /**
   * Obtenir l'icône du type
   */
  getTypeIcon: (type: TypeNotification): string => {
    const icons: Record<TypeNotification, string> = {
      NOUVELLE_CANDIDATURE: "📝",
      CHANGEMENT_STATUT: "🔄",
      ENTRETIEN_PLANIFIE: "📅",
      NOUVELLE_OFFRE: "💼",
      MESSAGE: "💬",
    };
    return icons[type];
  },

  /**
   * Obtenir la couleur du type
   */
  getTypeColor: (type: TypeNotification): string => {
    const colors: Record<TypeNotification, string> = {
      NOUVELLE_CANDIDATURE: "text-blue-700 bg-blue-50",
      CHANGEMENT_STATUT: "text-purple-700 bg-purple-50",
      ENTRETIEN_PLANIFIE: "text-green-700 bg-green-50",
      NOUVELLE_OFFRE: "text-orange-700 bg-orange-50",
      MESSAGE: "text-ink-700 bg-ink-50",
    };
    return colors[type];
  },

  /**
   * Formater la date relative (il y a X temps)
   */
  getRelativeTime: (dateEnvoi: string): string => {
    const date = new Date(dateEnvoi);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) return "À l'instant";
    if (diffMinutes < 60) return `Il y a ${diffMinutes} min`;
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    if (diffDays < 7) return `Il y a ${diffDays}j`;

    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
    }).format(date);
  },

  /**
   * Formater la date complète
   */
  formatDate: (dateEnvoi: string): string => {
    return new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateEnvoi));
  },

  /**
   * Trier les notifications (non lues en premier)
   */
  sortNotifications: (
    notifications: NotificationResponse[]
  ): NotificationResponse[] => {
    return [...notifications].sort((a, b) => {
      // Non lues en premier
      if (a.lu !== b.lu) return a.lu ? 1 : -1;
      // Puis par date (plus récentes en premier)
      return new Date(b.dateEnvoi).getTime() - new Date(a.dateEnvoi).getTime();
    });
  },

  /**
   * Filtrer les notifications non lues
   */
  getUnreadNotifications: (
    notifications: NotificationResponse[]
  ): NotificationResponse[] => {
    return notifications.filter((notif) => !notif.lu);
  },

  /**
   * Grouper les notifications par date
   */
  groupByDate: (
    notifications: NotificationResponse[]
  ): Record<string, NotificationResponse[]> => {
    const groups: Record<string, NotificationResponse[]> = {
      "Aujourd'hui": [],
      Hier: [],
      "Cette semaine": [],
      "Plus ancien": [],
    };

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const thisWeek = new Date(today);
    thisWeek.setDate(thisWeek.getDate() - 7);

    notifications.forEach((notif) => {
      const notifDate = new Date(notif.dateEnvoi);
      const notifDay = new Date(
        notifDate.getFullYear(),
        notifDate.getMonth(),
        notifDate.getDate()
      );

      if (notifDay.getTime() === today.getTime()) {
        groups["Aujourd'hui"].push(notif);
      } else if (notifDay.getTime() === yesterday.getTime()) {
        groups["Hier"].push(notif);
      } else if (notifDay >= thisWeek) {
        groups["Cette semaine"].push(notif);
      } else {
        groups["Plus ancien"].push(notif);
      }
    });

    // Supprimer les groupes vides
    Object.keys(groups).forEach((key) => {
      if (groups[key].length === 0) delete groups[key];
    });

    return groups;
  },

  /**
   * Demander la permission pour les notifications du navigateur
   */
  requestPermission: async (): Promise<boolean> => {
    if (!("Notification" in window)) {
      console.warn(
        "Les notifications ne sont pas supportées par ce navigateur"
      );
      return false;
    }

    if (Notification.permission === "granted") {
      return true;
    }

    if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      return permission === "granted";
    }

    return false;
  },

  /**
   * Afficher une notification navigateur
   */
  showBrowserNotification: (notification: NotificationResponse): void => {
    if (Notification.permission === "granted") {
      new Notification(notificationService.getTypeLabel(notification.type), {
        body: notification.message,
        icon: "/logo.png",
        badge: "/badge.png",
        timestamp: new Date(notification.dateEnvoi).getTime(),
      });
    }
  },
};
