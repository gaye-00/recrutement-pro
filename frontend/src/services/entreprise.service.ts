import { apiClient } from "./api";

// ===== INTERFACES =====
export interface EntrepriseResponse {
  id: number;
  nom: string;
  secteur?: string;
  adresse?: string;
  description?: string;
  logo?: string;
  nombreRecruteurs?: number;
  nombreOffres?: number;
  dateCreation: string;
  dateModification: string;
}

export interface CreateEntrepriseRequest {
  nom: string;
  secteur?: string;
  adresse?: string;
  description?: string;
}

export interface UpdateEntrepriseRequest {
  nom: string;
  secteur?: string;
  adresse?: string;
  description?: string;
}

export interface EntrepriseSearchParams {
  nom?: string;
  secteur?: string;
}

// ===== SERVICE =====
export const entrepriseService = {
  /**
   * Récupérer toutes les entreprises
   */
  getAll: () => apiClient.get<EntrepriseResponse[]>("/entreprises"),

  /**
   * Récupérer une entreprise par ID
   */
  getById: (id: number) =>
    apiClient.get<EntrepriseResponse>(`/entreprises/${id}`),

  /**
   * Rechercher des entreprises par nom
   */
  searchByName: (nom: string) =>
    apiClient.get<EntrepriseResponse[]>("/entreprises/search", {
      params: { nom },
    }),

  /**
   * Filtrer par secteur
   */
  getBySecteur: (secteur: string) =>
    apiClient.get<EntrepriseResponse[]>("/entreprises/secteur", {
      params: { secteur },
    }),

  /**
   * Créer une entreprise
   */
  create: (data: CreateEntrepriseRequest) =>
    apiClient.post<EntrepriseResponse>("/entreprises", data),

  /**
   * Modifier une entreprise
   */
  update: (id: number, data: UpdateEntrepriseRequest) =>
    apiClient.put<EntrepriseResponse>(`/entreprises/${id}`, data),

  /**
   * Upload logo
   */
  uploadLogo: (id: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return apiClient.upload<EntrepriseResponse>(
      `/entreprises/${id}/logo`,
      formData
    );
  },

  /**
   * Supprimer une entreprise
   */
  delete: (id: number) => apiClient.delete(`/entreprises/${id}`),

  // ===== UTILITAIRES =====

  /**
   * Liste des secteurs d'activité au Sénégal
   */
  getSecteurs: (): string[] => {
    return [
      "Agriculture",
      "Agroalimentaire",
      "Banque et Finance",
      "BTP et Immobilier",
      "Commerce et Distribution",
      "Éducation et Formation",
      "Énergie et Mines",
      "Hôtellerie et Tourisme",
      "Industrie",
      "Santé",
      "Technologies et Services IT",
      "Télécommunications",
      "Transport et Logistique",
      "Autre",
    ];
  },

  /**
   * Obtenir l'URL du logo ou un placeholder
   */
  getLogoUrl: (entreprise: EntrepriseResponse): string => {
    if (entreprise.logo) {
      return entreprise.logo;
    }
    // Générer un placeholder avec les initiales
    const initials = entreprise.nom
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
    return `https://ui-avatars.com/api/?name=${initials}&background=0a0a0a&color=fff&size=200`;
  },

  /**
   * Formater la description (extrait)
   */
  getExcerpt: (description?: string, maxLength: number = 150): string => {
    if (!description) return "Aucune description disponible";
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + "...";
  },

  /**
   * Vérifier si l'entreprise a des données complètes
   */
  isProfileComplete: (entreprise: EntrepriseResponse): boolean => {
    return !!(
      entreprise.nom &&
      entreprise.secteur &&
      entreprise.adresse &&
      entreprise.description &&
      entreprise.logo
    );
  },

  /**
   * Formater la date de création
   */
  formatCreationDate: (dateCreation: string): string => {
    return new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "long",
    }).format(new Date(dateCreation));
  },

  /**
   * Obtenir l'ancienneté en années
   */
  getYearsActive: (dateCreation: string): number => {
    const created = new Date(dateCreation);
    const now = new Date();
    const years = now.getFullYear() - created.getFullYear();
    return years;
  },
};
