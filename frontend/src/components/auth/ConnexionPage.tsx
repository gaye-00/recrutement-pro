// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   LogIn,
//   Sparkles,
//   Shield,
//   Zap,
//   ArrowRight,
//   AlertCircle,
//   Loader2,
// } from "lucide-react";
// import { authService, type ConnexionRequest } from "../../services/authService";

// interface ConnexionPageProps {
//   onLogin: (userData: any) => void;
// }

// export default function ConnexionPage({ onLogin }: ConnexionPageProps) {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<ConnexionRequest>({
//     email: "",
//     motDePasse: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [focusedField, setFocusedField] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const response = await authService.login(formData);
//       authService.saveUser(response);
//       onLogin(response);

//       // Rediriger selon le rôle
//       if (response.role === "CANDIDAT") {
//         navigate("/candidat/profil");
//       } else if (response.role === "RECRUTEUR") {
//         navigate("/recruteur/dashboard");
//       } else {
//         navigate("/");
//       }
//     } catch (err: any) {
//       setError(
//         err.response?.data?.message || "Email ou mot de passe incorrect"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (field: keyof ConnexionRequest, value: string) => {
//     setFormData({ ...formData, [field]: value });
//     setError(null);
//   };

//   return (
//     <div className="min-h-screen bg-dark flex items-center justify-center overflow-hidden relative">
//       {/* Background ultra spectaculaire */}
//       <div className="absolute inset-0">
//         {/* Gradient de base */}
//         <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-950 to-dark"></div>

//         {/* Aurora effects massifs */}
//         <div className="absolute top-0 left-1/4 w-[900px] h-[900px] bg-primary-500/30 rounded-full blur-[150px] animate-pulse-aurora"></div>
//         <div
//           className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-secondary-500/30 rounded-full blur-[150px] animate-pulse-aurora"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-accent-500/30 rounded-full blur-[150px] animate-pulse-aurora"
//           style={{ animationDelay: "2s" }}
//         ></div>

//         {/* Grilles et patterns */}
//         <div className="absolute inset-0 dot-pattern opacity-20"></div>
//         <div className="absolute inset-0 grid-pattern opacity-10"></div>
//       </div>

//       {/* Particules flottantes massives */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(50)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-white"
//             style={{
//               width: `${Math.random() * 4 + 1}px`,
//               height: `${Math.random() * 4 + 1}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               opacity: Math.random() * 0.3 + 0.1,
//               animation: `float ${
//                 5 + Math.random() * 15
//               }s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Rayons lumineux animés */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-primary-500/40 to-transparent rotate-12 animate-pulse"></div>
//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent -rotate-12 animate-pulse"
//           style={{ animationDelay: "1s" }}
//         ></div>
//       </div>

//       {/* Container principal */}
//       <div className="relative w-full max-w-md px-4 sm:px-6 animate-fadeIn">
//         {/* Card principale mega ultra premium */}
//         <div className="relative group">
//           {/* Effet de lueur géante derrière */}
//           <div className="absolute -inset-6 bg-gradient-aurora opacity-40 blur-[100px] group-hover:opacity-60 transition-opacity duration-700 animate-pulse-aurora"></div>

//           {/* Card principale */}
//           <div className="relative backdrop-blur-3xl bg-white/5 border-2 border-white/10 rounded-[3rem] shadow-glow-aurora overflow-hidden">
//             {/* Pattern de fond */}
//             <div className="absolute inset-0 dot-pattern opacity-5"></div>

//             {/* Gradient overlay animé */}
//             <div className="absolute inset-0 bg-gradient-aurora opacity-5 animate-aurora-wave bg-[length:200%_100%]"></div>

//             {/* Border animation ultra spectaculaire */}
//             <div className="absolute inset-0 rounded-[3rem] pointer-events-none">
//               <div className="absolute inset-0 rounded-[3rem] border-2 border-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-shimmer-aurora bg-[length:200%_100%] opacity-50"></div>
//             </div>

//             {/* Contenu */}
//             <div className="relative p-8 sm:p-10">
//               {/* Header spectaculaire */}
//               <div className="text-center mb-8 space-y-6">
//                 {/* Logo avec effet 3D */}
//                 <div className="relative inline-block group/logo">
//                   <div className="absolute inset-0 bg-gradient-aurora opacity-50 blur-3xl animate-pulse"></div>
//                   <div
//                     className="absolute inset-0 bg-gradient-aurora opacity-30 blur-2xl animate-pulse"
//                     style={{ animationDelay: "0.5s" }}
//                   ></div>

//                   <div className="relative w-20 h-20 mx-auto bg-gradient-aurora rounded-3xl flex items-center justify-center shadow-glow-aurora group-hover/logo:scale-110 group-hover/logo:rotate-12 transition-all duration-500">
//                     <Shield className="w-10 h-10 text-white" strokeWidth={2} />

//                     {/* Ring orbital */}
//                     <div className="absolute inset-0 border-2 border-white/30 rounded-3xl scale-110 opacity-0 group-hover/logo:opacity-100 group-hover/logo:scale-125 transition-all duration-700"></div>

//                     {/* Particules décoratives */}
//                     <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity animate-pulse"></div>
//                     <div
//                       className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity animate-pulse"
//                       style={{ animationDelay: "0.3s" }}
//                     ></div>
//                   </div>
//                 </div>

//                 {/* Titre avec gradient animé */}
//                 <div>
//                   <h1 className="text-3xl sm:text-4xl font-bold mb-2">
//                     <span className="bg-gradient-aurora bg-clip-text text-transparent animate-shimmer-aurora bg-[length:200%_100%]">
//                       Bon retour !
//                     </span>
//                   </h1>
//                   <p className="text-gray-400 text-lg">
//                     Connectez-vous à votre compte
//                   </p>
//                 </div>

//                 {/* Badge de sécurité */}
//                 <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full">
//                   <Shield className="w-4 h-4 text-primary-400" />
//                   <span className="text-xs text-gray-400">
//                     Connexion sécurisée SSL
//                   </span>
//                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>
//               </div>

//               {/* Formulaire */}
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Champ Email avec animations */}
//                 <div className="relative group/field">
//                   <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
//                     <Mail className="w-4 h-4" />
//                     Adresse email
//                   </label>

//                   <div className="relative">
//                     {/* Effet de lueur au focus */}
//                     {focusedField === "email" && (
//                       <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-cyan-500 opacity-50 blur-xl animate-pulse rounded-2xl"></div>
//                     )}

//                     {/* Input container */}
//                     <div className="relative">
//                       <input
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => handleChange("email", e.target.value)}
//                         onFocus={() => setFocusedField("email")}
//                         onBlur={() => setFocusedField(null)}
//                         placeholder="votre@email.com"
//                         required
//                         className="w-full px-4 py-4 pl-12 backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all duration-300"
//                       />

//                       {/* Icône */}
//                       <div className="absolute left-4 top-1/2 -translate-y-1/2">
//                         <Mail
//                           className={`w-5 h-5 transition-colors ${
//                             focusedField === "email"
//                               ? "text-primary-400"
//                               : "text-gray-500"
//                           }`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Champ Mot de passe avec animations */}
//                 <div className="relative group/field">
//                   <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
//                     <Lock className="w-4 h-4" />
//                     Mot de passe
//                   </label>

//                   <div className="relative">
//                     {/* Effet de lueur au focus */}
//                     {focusedField === "password" && (
//                       <div className="absolute -inset-1 bg-gradient-to-r from-secondary-500 to-violet-500 opacity-50 blur-xl animate-pulse rounded-2xl"></div>
//                     )}

//                     {/* Input container */}
//                     <div className="relative">
//                       <input
//                         type={showPassword ? "text" : "password"}
//                         value={formData.motDePasse}
//                         onChange={(e) =>
//                           handleChange("motDePasse", e.target.value)
//                         }
//                         onFocus={() => setFocusedField("password")}
//                         onBlur={() => setFocusedField(null)}
//                         placeholder="••••••••"
//                         required
//                         className="w-full px-4 py-4 pl-12 pr-12 backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-secondary-500/50 focus:bg-white/10 transition-all duration-300"
//                       />

//                       {/* Icône Lock */}
//                       <div className="absolute left-4 top-1/2 -translate-y-1/2">
//                         <Lock
//                           className={`w-5 h-5 transition-colors ${
//                             focusedField === "password"
//                               ? "text-secondary-400"
//                               : "text-gray-500"
//                           }`}
//                         />
//                       </div>

//                       {/* Toggle password visibility */}
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
//                       >
//                         {showPassword ? (
//                           <EyeOff className="w-5 h-5" />
//                         ) : (
//                           <Eye className="w-5 h-5" />
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Lien mot de passe oublié */}
//                 <div className="flex justify-end">
//                   <Link
//                     to="/mot-de-passe-oublie"
//                     className="text-sm text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1 group/link"
//                   >
//                     Mot de passe oublié ?
//                     <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
//                   </Link>
//                 </div>

//                 {/* Message d'erreur avec animation */}
//                 {error && (
//                   <div className="relative p-4 backdrop-blur-xl bg-red-500/10 border border-red-500/30 rounded-2xl animate-fadeIn">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
//                         <AlertCircle className="w-5 h-5 text-red-400" />
//                       </div>
//                       <p className="text-sm text-red-300">{error}</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Bouton de connexion MEGA ULTRA PREMIUM */}
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="group/btn relative w-full px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//                 >
//                   {/* Gradient animé de fond */}
//                   <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

//                   {/* Effet de lueur massive au hover */}
//                   <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/btn:opacity-100 blur-3xl transition-opacity"></div>

//                   {/* Border lumineux */}
//                   <div className="absolute inset-0 rounded-2xl border-2 border-white/30"></div>

//                   {/* Contenu */}
//                   <span className="relative flex items-center justify-center gap-3 text-white">
//                     {loading ? (
//                       <>
//                         <Loader2 className="w-6 h-6 animate-spin" />
//                         Connexion en cours...
//                       </>
//                     ) : (
//                       <>
//                         <LogIn className="w-6 h-6" />
//                         Se connecter
//                         <Sparkles className="w-5 h-5 animate-pulse" />
//                       </>
//                     )}
//                   </span>

//                   {/* Particules au hover */}
//                   {!loading && (
//                     <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity">
//                       {[...Array(8)].map((_, i) => (
//                         <div
//                           key={i}
//                           className="absolute w-1 h-1 bg-white rounded-full animate-float"
//                           style={{
//                             left: `${15 + i * 12}%`,
//                             top: `${30 + (i % 2) * 40}%`,
//                             animationDelay: `${i * 0.15}s`,
//                           }}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </button>
//               </form>

//               {/* Séparateur décoratif */}
//               <div className="relative my-8">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//                 </div>
//                 <div className="relative flex justify-center">
//                   <span className="px-4 backdrop-blur-xl bg-dark/50 text-sm text-gray-500">
//                     ou
//                   </span>
//                 </div>
//               </div>

//               {/* Lien vers inscription avec animation */}
//               <div className="text-center space-y-4">
//                 <p className="text-gray-400 text-sm">
//                   Vous n'avez pas encore de compte ?
//                 </p>

//                 <Link
//                   to="/inscription"
//                   className="group/signup relative block px-8 py-4 backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-2xl text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden"
//                 >
//                   {/* Gradient au hover */}
//                   <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/signup:opacity-10 transition-opacity"></div>

//                   <span className="relative flex items-center justify-center gap-2">
//                     <Zap className="w-5 h-5 text-accent-400" />
//                     Créer un compte gratuitement
//                     <ArrowRight className="w-5 h-5 group-hover/signup:translate-x-1 transition-transform" />
//                   </span>
//                 </Link>
//               </div>

//               {/* Features de sécurité */}
//               <div className="mt-8 grid grid-cols-3 gap-3">
//                 <SecurityBadge icon={Shield} text="Sécurisé" />
//                 <SecurityBadge icon={Zap} text="Rapide" />
//                 <SecurityBadge icon={Sparkles} text="Gratuit" />
//               </div>
//             </div>

//             {/* Corner accents lumineux */}
//             <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-500/30 to-transparent blur-3xl pointer-events-none"></div>
//             <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent-500/30 to-transparent blur-3xl pointer-events-none"></div>
//           </div>
//         </div>

//         {/* Lien retour accueil */}
//         <div className="text-center mt-8">
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
//           >
//             <ArrowRight className="w-4 h-4 rotate-180" />
//             Retour à l'accueil
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Composant SecurityBadge
// function SecurityBadge({ icon: Icon, text }: { icon: any; text: string }) {
//   return (
//     <div className="group/badge backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
//       <div className="flex flex-col items-center gap-1">
//         <Icon className="w-5 h-5 text-gray-400 group-hover/badge:text-white transition-colors" />
//         <span className="text-xs text-gray-500 group-hover/badge:text-gray-300 transition-colors">
//           {text}
//         </span>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Sparkles,
  Shield,
  Zap,
  ArrowRight,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { authService, type ConnexionRequest } from "../../services/authService";

interface ConnexionPageProps {
  onLogin: (userData: any) => void;
}

export default function ConnexionPage({ onLogin }: ConnexionPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ConnexionRequest>({
    email: "",
    motDePasse: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await authService.login(formData);
      authService.saveUser(response);
      onLogin(response);

      // Rediriger selon le rôle
      if (response.role === "CANDIDAT") {
        navigate("/candidat/profil");
      } else if (response.role === "RECRUTEUR") {
        navigate("/recruteur/dashboard");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Email ou mot de passe incorrect"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof ConnexionRequest, value: string) => {
    setFormData({ ...formData, [field]: value });
    setError(null);
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center overflow-hidden relative py-12">
      {/* Background ultra sombre sublimé */}
      <div className="absolute inset-0">
        {/* Base très sombre */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-950 to-[#000000]"></div>

        {/* Aurora effects subtils mais puissants */}
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-primary-500/15 rounded-full blur-[180px] animate-pulse-aurora"></div>
        <div
          className="absolute top-1/3 right-1/4 w-[900px] h-[900px] bg-secondary-500/15 rounded-full blur-[180px] animate-pulse-aurora"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-accent-500/12 rounded-full blur-[180px] animate-pulse-aurora"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Grilles subtiles */}
        <div className="absolute inset-0 dot-pattern opacity-[0.15]"></div>
        <div className="absolute inset-0 grid-pattern opacity-[0.08]"></div>
      </div>

      {/* Particules flottantes très subtiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15 + 0.05,
              animation: `float ${
                8 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Rayons lumineux très subtils */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent rotate-12"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-secondary-500/15 to-transparent -rotate-12"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Container principal - LARGEUR AUGMENTÉE */}
      <div className="relative w-full max-w-xl px-4 sm:px-6 animate-fadeIn">
        {/* Card principale mega ultra premium */}
        <div className="relative group">
          {/* Effet de lueur géante derrière - Plus subtil mais présent */}
          <div className="absolute -inset-8 bg-gradient-aurora opacity-25 blur-[120px] group-hover:opacity-35 transition-opacity duration-1000 animate-pulse-aurora"></div>

          {/* Card principale */}
          <div className="relative backdrop-blur-3xl bg-dark-900/40 border border-white/[0.08] rounded-[3rem] shadow-glow-aurora overflow-hidden">
            {/* Pattern de fond très subtil */}
            <div className="absolute inset-0 dot-pattern opacity-[0.03]"></div>

            {/* Gradient overlay ultra subtil animé */}
            <div className="absolute inset-0 bg-gradient-aurora opacity-[0.03] animate-aurora-wave bg-[length:200%_100%]"></div>

            {/* Border animation spectaculaire mais élégante */}
            <div className="absolute inset-0 rounded-[3rem] pointer-events-none">
              <div className="absolute inset-0 rounded-[3rem] border border-transparent bg-gradient-to-r from-primary-500/40 via-secondary-500/40 to-accent-500/40 animate-shimmer-aurora bg-[length:200%_100%] opacity-60"></div>
            </div>

            {/* Contenu - PADDING AUGMENTÉ */}
            <div className="relative p-10 sm:p-12">
              {/* Header spectaculaire */}
              <div className="text-center mb-10 space-y-6">
                {/* Logo avec effet 3D subtil */}
                <div className="relative inline-block group/logo">
                  <div className="absolute inset-0 bg-gradient-aurora opacity-40 blur-3xl animate-pulse"></div>
                  <div
                    className="absolute inset-0 bg-gradient-aurora opacity-25 blur-2xl animate-pulse"
                    style={{ animationDelay: "0.7s" }}
                  ></div>

                  <div className="relative w-24 h-24 mx-auto bg-gradient-aurora rounded-3xl flex items-center justify-center shadow-glow-aurora group-hover/logo:scale-110 group-hover/logo:rotate-12 transition-all duration-700">
                    <Shield className="w-12 h-12 text-white" strokeWidth={2} />

                    {/* Ring orbital subtil */}
                    <div className="absolute inset-0 border border-white/20 rounded-3xl scale-110 opacity-0 group-hover/logo:opacity-100 group-hover/logo:scale-125 transition-all duration-1000"></div>

                    {/* Particules décoratives */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary-400 rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity animate-pulse"></div>
                    <div
                      className="absolute -bottom-2 -left-2 w-2 h-2 bg-secondary-400 rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                  </div>
                </div>

                {/* Titre avec gradient animé sublime */}
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                      Bon retour
                    </span>
                  </h1>
                  <p className="text-gray-500 text-lg">
                    Connectez-vous à votre compte
                  </p>
                </div>

                {/* Badge de sécurité discret */}
                <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-full">
                  <Shield className="w-3.5 h-3.5 text-primary-400/80" />
                  <span className="text-xs text-gray-600">
                    Connexion sécurisée
                  </span>
                  <div className="w-1.5 h-1.5 bg-green-500/80 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champ Email avec animations */}
                <div className="relative group/field">
                  <label className="block text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Adresse email
                  </label>

                  <div className="relative">
                    {/* Effet de lueur au focus - subtil */}
                    {focusedField === "email" && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/30 to-cyan-500/30 blur-xl rounded-2xl"></div>
                    )}

                    {/* Input container */}
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="votre@email.com"
                        required
                        className="w-full px-5 py-4 pl-14 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-primary-500/40 focus:bg-white/[0.06] transition-all duration-300"
                      />

                      {/* Icône */}
                      <div className="absolute left-5 top-1/2 -translate-y-1/2">
                        <Mail
                          className={`w-5 h-5 transition-colors ${
                            focusedField === "email"
                              ? "text-primary-400"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Champ Mot de passe avec animations */}
                <div className="relative group/field">
                  <label className="block text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Mot de passe
                  </label>

                  <div className="relative">
                    {/* Effet de lueur au focus - subtil */}
                    {focusedField === "password" && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500/30 to-violet-500/30 blur-xl rounded-2xl"></div>
                    )}

                    {/* Input container */}
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.motDePasse}
                        onChange={(e) =>
                          handleChange("motDePasse", e.target.value)
                        }
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="••••••••"
                        required
                        className="w-full px-5 py-4 pl-14 pr-14 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:border-secondary-500/40 focus:bg-white/[0.06] transition-all duration-300"
                      />

                      {/* Icône Lock */}
                      <div className="absolute left-5 top-1/2 -translate-y-1/2">
                        <Lock
                          className={`w-5 h-5 transition-colors ${
                            focusedField === "password"
                              ? "text-secondary-400"
                              : "text-gray-600"
                          }`}
                        />
                      </div>

                      {/* Toggle password visibility */}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lien mot de passe oublié */}
                <div className="flex justify-end">
                  <Link
                    to="/mot-de-passe-oublie"
                    className="text-sm text-primary-400/80 hover:text-primary-300 transition-colors flex items-center gap-1 group/link"
                  >
                    Mot de passe oublié ?
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Message d'erreur avec animation */}
                {error && (
                  <div className="relative p-4 backdrop-blur-xl bg-red-500/5 border border-red-500/20 rounded-2xl animate-fadeIn">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <p className="text-sm text-red-300/90">{error}</p>
                    </div>
                  </div>
                )}

                {/* Bouton de connexion MEGA ULTRA PREMIUM */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group/btn relative w-full px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-8"
                >
                  {/* Gradient animé de fond */}
                  <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

                  {/* Effet de lueur massive au hover */}
                  <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/btn:opacity-100 blur-3xl transition-opacity duration-500"></div>

                  {/* Border lumineux */}
                  <div className="absolute inset-0 rounded-2xl border border-white/30"></div>

                  {/* Contenu */}
                  <span className="relative flex items-center justify-center gap-3 text-white">
                    {loading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Connexion en cours...
                      </>
                    ) : (
                      <>
                        <LogIn className="w-6 h-6" />
                        Se connecter
                        <Sparkles className="w-5 h-5" />
                      </>
                    )}
                  </span>

                  {/* Particules au hover */}
                  {!loading && (
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-float"
                          style={{
                            left: `${20 + i * 13}%`,
                            top: `${35 + (i % 2) * 30}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              </form>

              {/* Séparateur décoratif subtil */}
              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 backdrop-blur-xl bg-dark-900/50 text-sm text-gray-600">
                    ou
                  </span>
                </div>
              </div>

              {/* Lien vers inscription avec animation */}
              <div className="text-center space-y-5">
                <p className="text-gray-500 text-sm">
                  Vous n'avez pas encore de compte ?
                </p>

                <Link
                  to="/inscription"
                  className="group/signup relative block px-8 py-4 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white font-semibold hover:bg-white/[0.06] hover:border-white/15 transition-all overflow-hidden"
                >
                  {/* Gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/signup:opacity-[0.08] transition-opacity"></div>

                  <span className="relative flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5 text-accent-400" />
                    Créer un compte gratuitement
                    <ArrowRight className="w-5 h-5 group-hover/signup:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Features de sécurité */}
              <div className="mt-10 grid grid-cols-3 gap-3">
                <SecurityBadge icon={Shield} text="Sécurisé" />
                <SecurityBadge icon={Zap} text="Rapide" />
                <SecurityBadge icon={Sparkles} text="Gratuit" />
              </div>
            </div>

            {/* Corner accents lumineux très subtils */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary-500/20 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent-500/15 to-transparent blur-3xl pointer-events-none"></div>
          </div>
        </div>

        {/* Lien retour accueil */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-400 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

// Composant SecurityBadge
function SecurityBadge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="group/badge backdrop-blur-xl bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer">
      <div className="flex flex-col items-center gap-1.5">
        <Icon className="w-5 h-5 text-gray-600 group-hover/badge:text-gray-400 transition-colors" />
        <span className="text-xs text-gray-600 group-hover/badge:text-gray-500 transition-colors">
          {text}
        </span>
      </div>
    </div>
  );
}
