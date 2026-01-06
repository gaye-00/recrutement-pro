import { apiClient } from "./api";
import type { StatutOffre } from "./types/types";

// ===== INTERFACES =====
export interface OffreEmploiRequest {
  titre: string;
  description: string;
  competencesRequises?: string;
  typeContrat: string;
  salaire?: number;
  localisation?: string;
  dateExpiration?: string; // Format YYYY-MM-DD
  entrepriseId: number;
}

export interface OffreEmploiResponse {
  id: number;
  titre: string;
  description: string;
  competencesRequises?: string;
  typeContrat: string;
  salaire?: number;
  localisation?: string;
  datePublication: string;
  dateExpiration?: string;
  statut: StatutOffre;
  entrepriseNom: string;
  entrepriseId: number;
  nombreCandidatures: number;
  dateCreation: string;
  dateModification: string;
}

// ===== SERVICE =====
export const offreService = {
  /**
   * Récupérer toutes les offres
   */
  getAll: () => apiClient.get<OffreEmploiResponse[]>("/offres"),

  /**
   * Récupérer les offres actives
   */
  getActives: () => apiClient.get<OffreEmploiResponse[]>("/offres/actives"),

  /**
   * Récupérer une offre par ID
   */
  getById: (id: number) => apiClient.get<OffreEmploiResponse>(`/offres/${id}`),

  /**
   * Rechercher des offres
   */
  search: (query: string) =>
    apiClient.get<OffreEmploiResponse[]>("/offres/recherche", {
      params: { motCle: query },
    }),

  /**
   * Créer une offre
   */
  create: (data: OffreEmploiRequest) =>
    apiClient.post<OffreEmploiResponse>("/offres", data),

  /**
   * Modifier une offre
   */
  update: (id: number, data: OffreEmploiRequest) =>
    apiClient.put<OffreEmploiResponse>(`/offres/${id}`, data),

  /**
   * Clôturer une offre
   */
  close: (id: number) => apiClient.patch(`/offres/${id}/cloturer`),

  /**
   * Supprimer une offre
   */
  delete: (id: number) => apiClient.delete(`/offres/${id}`),

  // ===== UTILITAIRES =====

  /**
   * Formater une date pour l'API
   */
  formatDate: (date: Date): string => {
    return date.toISOString().split("T")[0];
  },

  /**
   * Vérifier si une offre est expirée
   */
  isExpired: (offre: OffreEmploiResponse): boolean => {
    if (!offre.dateExpiration) return false;
    return new Date(offre.dateExpiration) < new Date();
  },

  /**
   * Obtenir le libellé du statut
   */
  getStatutLabel: (statut: StatutOffre): string => {
    const labels: Record<StatutOffre, string> = {
      ACTIVE: "Active",
      EXPIREE: "Expirée",
      POURVUE: "Pourvue",
    };
    return labels[statut];
  },

  /**
   * Obtenir la couleur du badge statut
   */
  getStatutColor: (statut: StatutOffre): string => {
    const colors: Record<StatutOffre, string> = {
      ACTIVE: "text-green-700 bg-green-50 border-green-200",
      EXPIREE: "text-red-700 bg-red-50 border-red-200",
      POURVUE: "text-blue-700 bg-blue-50 border-blue-200",
    };
    return colors[statut];
  },

  /**
   * Formater le salaire
   */
  formatSalary: (amount?: number): string => {
    if (!amount) return "Non spécifié";
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
      minimumFractionDigits: 0,
    }).format(amount);
  },

  /**
   * Calculer les jours restants
   */
  getDaysRemaining: (dateExpiration?: string): number | null => {
    if (!dateExpiration) return null;
    const expiry = new Date(dateExpiration);
    const now = new Date();
    const diffTime = expiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  },
};
