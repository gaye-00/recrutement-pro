import { apiClient } from "./api";

// ===== INTERFACES =====
export interface CandidatResponse {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  telephone?: string;
  adresse?: string;
  dateNaissance?: string;
  competences?: string;
  experience?: string;
  formation?: string;
  cvUrl?: string;
  dateCreation: string;
  dateModification: string;
}

export interface UpdateCandidatRequest {
  nom: string;
  prenom: string;
  telephone?: string;
  adresse?: string;
  dateNaissance?: string;
  competences?: string;
  experience?: string;
  formation?: string;
}

// ===== SERVICE =====
export const candidatService = {
  /**
   * Récupérer tous les candidats
   */
  getAll: () => apiClient.get<CandidatResponse[]>("/candidats"),

  /**
   * Récupérer un candidat par ID
   */
  getById: (id: number) => apiClient.get<CandidatResponse>(`/candidats/${id}`),

  /**
   * Modifier le profil d'un candidat
   */
  updateProfile: (id: number, data: UpdateCandidatRequest) =>
    apiClient.put<CandidatResponse>(`/candidats/${id}`, data),

  /**
   * Upload CV
   */
  uploadCV: (id: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return apiClient.upload<CandidatResponse>(`/candidats/${id}/cv`, formData);
  },

  /**
   * Supprimer un candidat
   */
  delete: (id: number) => apiClient.delete(`/candidats/${id}`),

  // ===== UTILITAIRES =====

  /**
   * Obtenir le nom complet
   */
  getFullName: (candidat: CandidatResponse): string => {
    return `${candidat.prenom} ${candidat.nom}`;
  },

  /**
   * Calculer l'âge
   */
  getAge: (dateNaissance?: string): number | null => {
    if (!dateNaissance) return null;
    const birthDate = new Date(dateNaissance);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  },

  /**
   * Formater la date de naissance
   */
  formatDateNaissance: (dateNaissance?: string): string => {
    if (!dateNaissance) return "Non spécifiée";
    return new Intl.DateTimeFormat("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateNaissance));
  },

  /**
   * Vérifier si le profil est complet
   */
  isProfileComplete: (candidat: CandidatResponse): boolean => {
    return !!(
      candidat.nom &&
      candidat.prenom &&
      candidat.email &&
      candidat.telephone &&
      candidat.adresse &&
      candidat.competences &&
      candidat.cvUrl
    );
  },

  /**
   * Calculer le pourcentage de complétion du profil
   */
  getProfileCompletionPercentage: (candidat: CandidatResponse): number => {
    const fields = [
      candidat.nom,
      candidat.prenom,
      candidat.email,
      candidat.telephone,
      candidat.adresse,
      candidat.dateNaissance,
      candidat.competences,
      candidat.experience,
      candidat.formation,
      candidat.cvUrl,
    ];

    const completedFields = fields.filter((field) => !!field).length;
    return Math.round((completedFields / fields.length) * 100);
  },

  /**
   * Valider le format de l'email
   */
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Valider le format du téléphone sénégalais
   */
  isValidPhone: (phone: string): boolean => {
    // Format: 77 123 45 67 ou 771234567 ou +221771234567
    const phoneRegex = /^(\+221)?[7][0-9]{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  },
};
