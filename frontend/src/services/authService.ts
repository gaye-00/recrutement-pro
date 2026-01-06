import { apiClient } from "./api";
import type { TypeUtilisateur } from "./types/types";

// ===== INTERFACES =====
export interface ConnexionRequest {
  email: string;
  motDePasse: string;
}

export interface InscriptionCandidatRequest {
  email: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  telephone?: string;
  adresse?: string;
  dateNaissance?: string; // Format YYYY-MM-DD
  competences?: string;
  experience?: string;
  formation?: string;
}

export interface InscriptionRecruteurRequest {
  email: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  telephone?: string;
  entrepriseId: number;
  poste?: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role: TypeUtilisateur;
}

// ===== SERVICE =====
export const authService = {
  /**
   * Connexion utilisateur
   */
  login: (data: ConnexionRequest) =>
    apiClient.post<AuthResponse>("/auth/connexion", data),

  /**
   * Inscription candidat
   */
  registerCandidat: (data: InscriptionCandidatRequest) =>
    apiClient.post<AuthResponse>("/auth/inscription/candidat", data),

  /**
   * Inscription recruteur
   */
  registerRecruteur: (data: InscriptionRecruteurRequest) =>
    apiClient.post<AuthResponse>("/auth/inscription/recruteur", data),

  /**
   * Sauvegarder l'utilisateur en local
   */
  saveUser: (authData: AuthResponse): void => {
    localStorage.setItem("user", JSON.stringify(authData));
  },

  /**
   * Récupérer l'utilisateur depuis le local storage
   */
  getUser: (): AuthResponse | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  /**
   * Déconnexion
   */
  logout: (): void => {
    localStorage.removeItem("user");
  },

  /**
   * Vérifier si l'utilisateur est connecté
   */
  isAuthenticated: (): boolean => {
    return !!authService.getUser();
  },

  /**
   * Obtenir le token
   */
  getToken: (): string | null => {
    const user = authService.getUser();
    return user?.token || null;
  },

  /**
   * Vérifier le rôle de l'utilisateur
   */
  hasRole: (role: TypeUtilisateur): boolean => {
    const user = authService.getUser();
    return user?.role === role;
  },
};
