import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
  user: {
    id: number;
    email: string;
    nom: string;
    prenom: string;
    role: "CANDIDAT" | "RECRUTEUR" | "ADMIN";
    token: string;
  } | null;
}

export default function ProtectedRoute({
  children,
  allowedRoles,
  user,
}: ProtectedRouteProps) {
  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!user) {
    return <Navigate to="/connexion" replace />;
  }

  // Si l'utilisateur n'a pas le bon rôle, rediriger vers la page d'accueil
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Si tout est OK, afficher le contenu
  return <>{children}</>;
}
