export type TypeUtilisateur = "CANDIDAT" | "RECRUTEUR" | "ADMIN";
export type StatutOffre = "ACTIVE" | "EXPIREE" | "POURVUE";
export type StatutCandidature =
  | "EN_ATTENTE"
  | "EN_COURS"
  | "ACCEPTEE"
  | "REFUSEE"
  | "ENTRETIEN_PLANIFIE";
export type TypeEntretien = "TELEPHONIQUE" | "PRESENTIEL" | "VISIO";
export type StatutEntretien = "PLANIFIE" | "EN_COURS" | "TERMINE" | "ANNULE";
export type TypeNotification =
  | "NOUVELLE_CANDIDATURE"
  | "CHANGEMENT_STATUT"
  | "ENTRETIEN_PLANIFIE"
  | "NOUVELLE_OFFRE"
  | "MESSAGE";

// ===== CONSTANTS =====
export const TYPE_UTILISATEUR_VALUES = {
  CANDIDAT: "CANDIDAT" as const,
  RECRUTEUR: "RECRUTEUR" as const,
  ADMIN: "ADMIN" as const,
} as const;

export const STATUT_OFFRE_VALUES = {
  ACTIVE: "ACTIVE" as const,
  EXPIREE: "EXPIREE" as const,
  POURVUE: "POURVUE" as const,
} as const;

export const STATUT_CANDIDATURE_VALUES = {
  EN_ATTENTE: "EN_ATTENTE" as const,
  EN_COURS: "EN_COURS" as const,
  ACCEPTEE: "ACCEPTEE" as const,
  REFUSEE: "REFUSEE" as const,
  ENTRETIEN_PLANIFIE: "ENTRETIEN_PLANIFIE" as const,
} as const;

export const TYPE_ENTRETIEN_VALUES = {
  TELEPHONIQUE: "TELEPHONIQUE" as const,
  PRESENTIEL: "PRESENTIEL" as const,
  VISIO: "VISIO" as const,
} as const;

export const STATUT_ENTRETIEN_VALUES = {
  PLANIFIE: "PLANIFIE" as const,
  EN_COURS: "EN_COURS" as const,
  TERMINE: "TERMINE" as const,
  ANNULE: "ANNULE" as const,
} as const;

export const TYPE_NOTIFICATION_VALUES = {
  NOUVELLE_CANDIDATURE: "NOUVELLE_CANDIDATURE" as const,
  CHANGEMENT_STATUT: "CHANGEMENT_STATUT" as const,
  ENTRETIEN_PLANIFIE: "ENTRETIEN_PLANIFIE" as const,
  NOUVELLE_OFFRE: "NOUVELLE_OFFRE" as const,
  MESSAGE: "MESSAGE" as const,
} as const;

// ===== INTERFACES COMMUNES =====
export interface Utilisateur {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  telephone?: string;
  role: TypeUtilisateur;
  dateCreation: string;
  dateModification: string;
  actif: boolean;
}

export interface Entreprise {
  id: number;
  nom: string;
  secteur?: string;
  adresse?: string;
  description?: string;
  logo?: string;
  dateCreation: string;
  dateModification: string;
  actif: boolean;
}

export interface Candidat extends Utilisateur {
  adresse?: string;
  dateNaissance?: string;
  competences?: string;
  experience?: string;
  formation?: string;
  cvUrl?: string;
}

export interface Recruteur extends Utilisateur {
  entrepriseId: number;
  entrepriseNom?: string;
  poste?: string;
}

// ===== INTERFACES PAGINATION =====
export interface PageRequest {
  page: number;
  size: number;
  sort?: string;
}

export interface PageResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}
