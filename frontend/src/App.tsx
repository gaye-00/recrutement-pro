// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect, type JSX } from "react";
// import LoadingSpinner from "./components/common/LoadingSpinner";
// import Layout from "./components/common/Layout/Layout";
// import HomePage from "./pages/HomePage";
// import OffresPage from "./pages/OffresPage";
// import OffreDetailPage from "./components/offresPage/OffreDetailPage";

// interface User {
//   id: number;
//   email: string;
//   nom: string;
//   prenom: string;
//   role: "CANDIDAT" | "RECRUTEUR" | "ADMIN";
//   token: string;
// }

// function App() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   // Vérifier si l'utilisateur est connecté au chargement
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const handleLogin = (userData: User) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//     window.location.href = "/";
//   };

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   // Composant pour les routes protégées
//   const ProtectedRoute = ({
//     children,
//     allowedRoles,
//   }: {
//     children: JSX.Element;
//     allowedRoles: string[];
//   }) => {
//     if (!user) {
//       return <Navigate to="/connexion" replace />;
//     }

//     if (!allowedRoles.includes(user.role)) {
//       return <Navigate to="/" replace />;
//     }

//     return children;
//   };

//   return (
//     <BrowserRouter>
//       <Layout
//         isAuthenticated={!!user}
//         userRole={user?.role}
//         userName={user ? `${user.prenom} ${user.nom}` : undefined}
//         onLogout={handleLogout}
//       >
//         <Routes>
//           {/* Routes publiques */}
//           <Route
//             path="/"
//             element={
//               <HomePage
//                 onLogin={function (user: any): void {
//                   throw new Error("Function not implemented.");
//                 }}
//               />
//             }
//           />
//           <Route path="/offres" element={<OffresPage />} />
//           <Route path="/offres/:id" element={<OffreDetailPage />} />

//           {/* Routes d'authentification */}
//           {/* <Route
//             path="/connexion"
//             element={
//               user ? (
//                 <Navigate to="/" replace />
//               ) : (
//                 <ConnexionPage onLogin={handleLogin} />
//               )
//             }
//           />
//           <Route
//             path="/inscription"
//             element={
//               user ? (
//                 <Navigate to="/" replace />
//               ) : (
//                 <InscriptionPage onLogin={handleLogin} />
//               )
//             }
//           /> 8/}

//           {/* Routes candidat */}
//           {/* <Route
//             path="/candidat/profil"
//             element={
//               <ProtectedRoute allowedRoles={["CANDIDAT"]}>
//                 <CandidatProfilPage user={user!} />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/candidat/candidatures"
//             element={
//               <ProtectedRoute allowedRoles={["CANDIDAT"]}>
//                 <CandidatCandidaturesPage user={user!} />
//               </ProtectedRoute>
//             }
//           /> */}

//           {/* Routes recruteur */}
//           {/* <Route
//             path="/recruteur/dashboard"
//             element={
//               <ProtectedRoute allowedRoles={["RECRUTEUR", "ADMIN"]}>
//                 <RecruteurDashboardPage user={user!} />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/recruteur/offres"
//             element={
//               <ProtectedRoute allowedRoles={["RECRUTEUR", "ADMIN"]}>
//                 <RecruteurOffresPage user={user!} />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/recruteur/candidatures"
//             element={
//               <ProtectedRoute allowedRoles={["RECRUTEUR", "ADMIN"]}>
//                 <RecruteurCandidaturesPage user={user!} />
//               </ProtectedRoute>
//             }
//           /> */}

//           {/* Route 404 */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { authService } from "./services/authService";
import ProtectedRoute from "./components/ProtectedRoute";
import ConnexionPage from "./components/auth/ConnexionPage";
import OffreDetailPage from "./components/offresPage/OffreDetailPage";
import OffresPage from "./pages/OffresPage";
import HomePage from "./pages/HomePage";
import InscriptionPage from "./components/auth/InscriptionPage";
import CandidatProfilPage from "./pages/CandidatProfilPage";
import RecruteurDashboardPage from "./pages/RecruteurDashboardPage";
import RecruteurOffresPage from "./pages/RecruteurOffresPage";
import RecruteurCandidaturesPage from "./pages/RecruteurCandidaturesPage";
import LoadingSpinner from "./components/common/LoadingSpinner";
import Layout from "./components/common/Layout/Layout";
import CandidatCandidaturesPage from "./pages/CandidatCandidaturesPage";

interface User {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  role: "CANDIDAT" | "RECRUTEUR" | "ADMIN";
  token: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Vérifier si l'utilisateur est connecté au chargement
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

  return (
    <BrowserRouter>
      <Layout
        isAuthenticated={!!user}
        userRole={user?.role}
        userName={user ? `${user.prenom} ${user.nom}` : undefined}
        onLogout={handleLogout}
      >
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
