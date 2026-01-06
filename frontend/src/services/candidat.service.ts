import { apiClient } from "./api";
import type { StatutCandidature } from "./types/types";

// ===== INTERFACES =====
export interface CandidatureRequest {
  offreEmploiId: number;
  lettreMotivation: string;
}

export interface CandidatureResponse {
  id: number;
  datePostulation: string;
  statut: StatutCandidature;
  lettreMotivation: string;
  cvUrl?: string;
  offreTitre: string;
  offreEntreprise: string;
  candidatNom: string;
  candidatPrenom: string;
  dateCreation: string;
}

// ===== SERVICE =====
export const candidatureService = {
  /**
   * Postuler à une offre
   */
  apply: (candidatId: number, request: CandidatureRequest, cv?: File) => {
    const formData = new FormData();
    formData.append(
      "candidature",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );
    if (cv) {
      formData.append("cv", cv);
    }
    return apiClient.upload<CandidatureResponse>(
      `/candidatures/candidat/${candidatId}`,
      formData
    );
  },

  /**
   * Récupérer les candidatures d'un candidat
   */
  getByCandidat: (candidatId: number) =>
    apiClient.get<CandidatureResponse[]>(
      `/candidatures/candidat/${candidatId}`
    ),

  /**
   * Récupérer les candidatures d'une offre
   */
  getByOffre: (offreId: number) =>
    apiClient.get<CandidatureResponse[]>(`/candidatures/offre/${offreId}`),

  /**
   * Récupérer une candidature par ID
   */
  getById: (id: number) =>
    apiClient.get<CandidatureResponse>(`/candidatures/${id}`),

  /**
   * Changer le statut d'une candidature
   */
  updateStatus: (id: number, statut: StatutCandidature) =>
    apiClient.patch<CandidatureResponse>(`/candidatures/${id}/statut`, null, {
      params: { statut },
    }),

  /**
   * Supprimer une candidature
   */
  delete: (id: number) => apiClient.delete(`/candidatures/${id}`),

  // ===== UTILITAIRES =====

  /**
   * Obtenir le libellé du statut
   */
  getStatutLabel: (statut: StatutCandidature): string => {
    const labels: Record<StatutCandidature, string> = {
      EN_ATTENTE: "En attente",
      EN_COURS: "En cours",
      ACCEPTEE: "Acceptée",
      REFUSEE: "Refusée",
      ENTRETIEN_PLANIFIE: "Entretien planifié",
    };
    return labels[statut];
  },

  /**
   * Obtenir la couleur du badge statut
   */
  getStatutColor: (statut: StatutCandidature): string => {
    const colors: Record<StatutCandidature, string> = {
      EN_ATTENTE: "text-yellow-700 bg-yellow-50 border-yellow-200",
      EN_COURS: "text-blue-700 bg-blue-50 border-blue-200",
      ACCEPTEE: "text-green-700 bg-green-50 border-green-200",
      REFUSEE: "text-red-700 bg-red-50 border-red-200",
      ENTRETIEN_PLANIFIE: "text-purple-700 bg-purple-50 border-purple-200",
    };
    return colors[statut];
  },

  /**
   * Formater la date de postulation
   */
  formatDate: (dateString: string): string => {
    return new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  },
};
