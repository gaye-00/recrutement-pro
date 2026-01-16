import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { authService, type AuthResponse } from "./services/authService";
import LoadingSpinner from "./components/common/LoadingSpinner";
import HomePage from "./pages/HomePage";
import OffresPage from "./pages/OffresPage";
import OffreDetailPage from "./pages/OffreDetailPage";
import ConnexionPage from "./components/auth/ConnexionPage";
import InscriptionPage from "./components/auth/InscriptionPage";
import ProtectedRoute from "./components/ProtectedRoute";
import CandidatProfilPage from "./pages/CandidatProfilPage";
import CandidatCandidaturesPage from "./pages/CandidatCandidaturesPage";
import RecruteurDashboardPage from "./pages/RecruteurDashboardPage";
import RecruteurOffresPage from "./pages/RecruteurOffresPage";
import RecruteurCandidaturesPage from "./pages/RecruteurCandidaturesPage";
import Layout from "./components/common/Layout/Layout";

type User = AuthResponse;

// Composant wrapper pour gérer le Layout conditionnellement
function AppContent() {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Pages qui ne doivent pas avoir le Layout (Header/Footer)
  const pagesWithoutLayout = ["/connexion", "/inscription"];
  const shouldShowLayout = !pagesWithoutLayout.includes(location.pathname);

  useEffect(() => {
    const storedUser = authService.getUser();
    if (storedUser) {
      setUser(storedUser as User);
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    authService.saveUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    authService.logout();
    window.location.href = "/";
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  const routes = (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<HomePage />} />
      <Route path="/offres" element={<OffresPage />} />
      <Route path="/offres/:id" element={<OffreDetailPage />} />

      {/* Routes d'authentification */}
      <Route
        path="/connexion"
        element={
          user ? (
            <Navigate to="/" replace />
          ) : (
            <ConnexionPage onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/inscription"
        element={
          user ? (
            <Navigate to="/" replace />
          ) : (
            <InscriptionPage onLogin={handleLogin} />
          )
        }
      />

      {/* Routes candidat */}
      <Route
        path="/candidat/profil"
        element={
          <ProtectedRoute user={user} allowedRoles={["CANDIDAT"]}>
            <CandidatProfilPage user={user!} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/candidat/candidatures"
        element={
          <ProtectedRoute user={user} allowedRoles={["CANDIDAT"]}>
            <CandidatCandidaturesPage user={user!} />
          </ProtectedRoute>
        }
      />

      {/* Routes recruteur */}
      <Route
        path="/recruteur/dashboard"
        element={
          <ProtectedRoute user={user} allowedRoles={["RECRUTEUR", "ADMIN"]}>
            <RecruteurDashboardPage user={user!} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/recruteur/offres"
        element={
          <ProtectedRoute user={user} allowedRoles={["RECRUTEUR", "ADMIN"]}>
            <RecruteurOffresPage user={user!} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/recruteur/candidatures"
        element={
          <ProtectedRoute user={user} allowedRoles={["RECRUTEUR", "ADMIN"]}>
            <RecruteurCandidaturesPage user={user!} />
          </ProtectedRoute>
        }
      />

      {/* Route 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  // Si la page doit avoir le Layout, on l'entoure, sinon on retourne juste les routes
  return shouldShowLayout ? (
    <Layout
      isAuthenticated={!!user}
      userRole={user?.role}
      userName={user ? `${user.prenom} ${user.nom}` : undefined}
      onLogout={handleLogout}
    >
      {routes}
    </Layout>
  ) : (
    routes
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
