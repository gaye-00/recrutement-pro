// import React, { useState } from "react";
// import api from "../services/api";

// interface Props {
//   onLogin: (user: any) => void;
// }

// export default function ConnexionPage({ onLogin }: Props) {
//   const [email, setEmail] = useState("");
//   const [motDePasse, setMotDePasse] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/auth/connexion", { email, motDePasse });
//       onLogin(res.data);
//     } catch (err) {
//       setError("Email ou mot de passe incorrect");
//     }
//   };

//   return (
//     // FOND DE PAGE : Vert forêt
//     <div className="min-h-screen bg-[#1a3d31] flex items-center justify-center p-6 font-sans">
//       {/* CARTE CENTRALE */}
//       <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl min-h-[550px]">
//         {/* CÔTÉ GAUCHE : Illustration (Blanc) */}
//         <div className="hidden md:flex flex-col justify-between w-1/2 p-12 bg-white">
//           <div className="flex items-center gap-2">
//             {/* ICÔNE : Changée en vert forêt [#234d40] */}
//             <div className="w-7 h-7 bg-[#234d40] rounded flex items-center justify-center text-white text-xs font-bold">
//               R
//             </div>
//             <span className="text-black font-bold tracking-tight">
//               RECRUTEPRO
//             </span>
//           </div>

//           <div className="flex flex-col items-center">
//             <div className="w-64 h-64 bg-gray-50 rounded-full flex items-center justify-center border-2 border-dashed border-gray-200">
//               <span className="text-gray-300 italic font-medium">
//                 Illustration
//               </span>
//             </div>
//           </div>

//           <div className="text-[10px] text-gray-400">
//             © 2026 RecrutePro. Tous droits réservés.
//           </div>
//         </div>

//         {/* CÔTÉ DROIT : Formulaire (Fond vert forêt) */}
//         <div className="w-full md:w-1/2 px-12 py-16 flex flex-col justify-center bg-[#234d40] text-white">
//           <h1 className="text-4xl font-bold mb-10">Connexion</h1>

//           {error && <p className="text-red-300 text-sm mb-4">{error}</p>}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-300 ml-1">
//                 Email
//               </label>
//               <input
//                 className="w-full bg-[#1a3d31] border-none rounded-full py-4 px-6 text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-400 outline-none transition-all"
//                 type="email"
//                 placeholder="Entrez votre email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-300 ml-1">
//                 Mot de passe
//               </label>
//               <input
//                 className="w-full bg-[#1a3d31] border-none rounded-full py-4 px-6 text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-400 outline-none transition-all"
//                 type="motDePasse"
//                 placeholder="Entrez votre mot de passe"
//                 value={motDePasse}
//                 onChange={(e) => setMotDePasse(e.target.value)}
//               />
//               <div className="text-right">
//                 <a
//                   href="#"
//                   className="text-xs text-gray-400 hover:text-white underline-offset-2 hover:underline"
//                 >
//                   Mot de passe oublié ?
//                 </a>
//               </div>
//             </div>

//             {/* BOUTON : Même style que les champs (fond #1a3d31), texte blanc */}
//             <button className="w-full bg-[#1a3d31] hover:bg-[#132c24] text-white font-bold py-4 rounded-full transition-all mt-4 border border-transparent focus:ring-2 focus:ring-gray-400">
//               Se connecter
//             </button>
//           </form>

//           <div className="mt-10 text-center text-sm text-gray-300">
//             Vous n'avez pas de compte ?{" "}
//             <a href="#" className="text-white font-bold hover:underline">
//               S'inscrire maintenant
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import StatsSection from "../components/home/StatsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CTASection from "../components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}
