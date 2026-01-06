import { apiClient } from "./api";
import type { StatutEntretien, TypeEntretien } from "./types/types";

// ===== INTERFACES =====
export interface EntretienRequest {
  candidatureId: number;
  dateHeure: string; // Format ISO 8601: YYYY-MM-DDTHH:mm:ss
  lieu?: string;
  type: TypeEntretien;
  notes?: string;
}

export interface EntretienResponse {
  id: number;
  dateHeure: string;
  lieu?: string;
  type: TypeEntretien;
  notes?: string;
  statut: StatutEntretien;
  candidatNom: string;
  candidatPrenom: string;
  recruteurNom: string;
  recruteurPrenom: string;
  candidatureId: number;
  offreTitre: string;
  dateCreation: string;
  dateModification: string;
}

export interface UpdateEntretienRequest {
  dateHeure: string;
  lieu?: string;
  type: TypeEntretien;
  notes?: string;
}

export interface EntretienStats {
  total: number;
  planifies: number;
  termines: number;
  annules: number;
  aVenir: number;
}

// ===== SERVICE =====
export const entretienService = {
  // ===== CRUD =====

  /**
   * Planifier un entretien
   */
  create: (recruteurId: number, data: EntretienRequest) =>
    apiClient.post<EntretienResponse>(
      `/entretiens/recruteur/${recruteurId}`,
      data
    ),

  /**
   * Récupérer les entretiens d'un recruteur
   */
  getByRecruteur: (recruteurId: number) =>
    apiClient.get<EntretienResponse[]>(`/entretiens/recruteur/${recruteurId}`),

  /**
   * Récupérer les entretiens d'une candidature
   */
  getByCandidature: (candidatureId: number) =>
    apiClient.get<EntretienResponse[]>(
      `/entretiens/candidature/${candidatureId}`
    ),

  /**
   * Récupérer un entretien par ID
   */
  getById: (id: number) =>
    apiClient.get<EntretienResponse>(`/entretiens/${id}`),

  /**
   * Modifier un entretien
   */
  update: (id: number, data: UpdateEntretienRequest) =>
    apiClient.put<EntretienResponse>(`/entretiens/${id}`, data),

  /**
   * Annuler un entretien
   */
  cancel: (id: number) => apiClient.patch(`/entretiens/${id}/annuler`),

  /**
   * Changer le statut d'un entretien
   */
  updateStatus: (id: number, statut: StatutEntretien) =>
    apiClient.patch<EntretienResponse>(`/entretiens/${id}/statut`, null, {
      params: { statut },
    }),

  // ===== UTILITAIRES =====

  /**
   * Obtenir le libellé du type
   */
  getTypeLabel: (type: TypeEntretien): string => {
    const labels: Record<TypeEntretien, string> = {
      TELEPHONIQUE: "Téléphonique",
      PRESENTIEL: "Présentiel",
      VISIO: "Visioconférence",
    };
    return labels[type];
  },

  /**
   * Obtenir le libellé du statut
   */
  getStatutLabel: (statut: StatutEntretien): string => {
    const labels: Record<StatutEntretien, string> = {
      PLANIFIE: "Planifié",
      EN_COURS: "En cours",
      TERMINE: "Terminé",
      ANNULE: "Annulé",
    };
    return labels[statut];
  },

  /**
   * Obtenir la couleur du badge statut
   */
  getStatutColor: (statut: StatutEntretien): string => {
    const colors: Record<StatutEntretien, string> = {
      PLANIFIE: "text-blue-700 bg-blue-50 border-blue-200",
      EN_COURS: "text-orange-700 bg-orange-50 border-orange-200",
      TERMINE: "text-green-700 bg-green-50 border-green-200",
      ANNULE: "text-red-700 bg-red-50 border-red-200",
    };
    return colors[statut];
  },

  /**
   * Obtenir l'icône du type
   */
  getTypeIcon: (type: TypeEntretien): string => {
    const icons: Record<TypeEntretien, string> = {
      TELEPHONIQUE: "📞",
      PRESENTIEL: "🏢",
      VISIO: "💻",
    };
    return icons[type];
  },

  /**
   * Formater la date et l'heure
   */
  formatDateTime: (dateTime: string): string => {
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateTime));
  },

  /**
   * Formater uniquement la date
   */
  formatDate: (dateTime: string): string => {
    return new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateTime));
  },

  /**
   * Formater uniquement l'heure
   */
  formatTime: (dateTime: string): string => {
    return new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateTime));
  },

  /**
   * Vérifier si l'entretien est dans le futur
   */
  isFuture: (dateTime: string): boolean => {
    return new Date(dateTime) > new Date();
  },

  /**
   * Vérifier si l'entretien est aujourd'hui
   */
  isToday: (dateTime: string): boolean => {
    const entretienDate = new Date(dateTime);
    const today = new Date();
    return (
      entretienDate.getDate() === today.getDate() &&
      entretienDate.getMonth() === today.getMonth() &&
      entretienDate.getFullYear() === today.getFullYear()
    );
  },

  /**
   * Obtenir le temps restant avant l'entretien
   */
  getTimeRemaining: (dateTime: string): string => {
    const entretien = new Date(dateTime);
    const now = new Date();
    const diffMs = entretien.getTime() - now.getTime();

    if (diffMs < 0) return "Passé";

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffDays > 0) return `Dans ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
    if (diffHours > 0)
      return `Dans ${diffHours} heure${diffHours > 1 ? "s" : ""}`;
    return `Dans ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`;
  },

  /**
   * Générer un lien de visioconférence (exemple)
   */
  generateVisioLink: (entretienId: number): string => {
    // Exemple avec Google Meet - adapter selon votre plateforme
    return `https://meet.google.com/entretien-${entretienId}`;
  },

  /**
   * Créer un événement calendrier (format .ics)
   */
  createCalendarEvent: (entretien: EntretienResponse): string => {
    const startDate = new Date(entretien.dateHeure);
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // +1 heure

    const formatDateICS = (date: Date): string => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDateICS(startDate)}
DTEND:${formatDateICS(endDate)}
SUMMARY:Entretien - ${entretien.offreTitre}
DESCRIPTION:Entretien ${entretienService.getTypeLabel(entretien.type)} avec ${
      entretien.candidatPrenom
    } ${entretien.candidatNom}
LOCATION:${entretien.lieu || "À définir"}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
  },

  /**
   * Télécharger l'événement calendrier
   */
  downloadCalendarEvent: (entretien: EntretienResponse): void => {
    const icsContent = entretienService.createCalendarEvent(entretien);
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `entretien-${entretien.id}.ics`;
    link.click();
  },
};
