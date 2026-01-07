// import { Link } from "react-router-dom";
// import {
//   Briefcase,
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Twitter,
// } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-ink-950 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
//                 <Briefcase className="w-5 h-5 text-ink-950" strokeWidth={2.5} />
//               </div>
//               <span className="text-xl font-bold">RecrutePro</span>
//             </div>
//             <p className="text-sm text-ink-400 leading-relaxed">
//               Connectons les talents aux opportunités au Sénégal.
//             </p>
//             <div className="flex items-center gap-2">
//               <a
//                 href="#"
//                 className="w-9 h-9 flex items-center justify-center bg-ink-800 hover:bg-ink-700 rounded-lg transition-colors"
//               >
//                 <Linkedin className="w-4 h-4" />
//               </a>
//               <a
//                 href="#"
//                 className="w-9 h-9 flex items-center justify-center bg-ink-800 hover:bg-ink-700 rounded-lg transition-colors"
//               >
//                 <Twitter className="w-4 h-4" />
//               </a>
//               <a
//                 href="#"
//                 className="w-9 h-9 flex items-center justify-center bg-ink-800 hover:bg-ink-700 rounded-lg transition-colors"
//               >
//                 <Github className="w-4 h-4" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-sm font-semibold mb-4">Liens rapides</h3>
//             <ul className="space-y-2.5">
//               <li>
//                 <FooterLink to="/offres">Offres d'emploi</FooterLink>
//               </li>
//               <li>
//                 <FooterLink to="/entreprises">Entreprises</FooterLink>
//               </li>
//               <li>
//                 <FooterLink to="/a-propos">À propos</FooterLink>
//               </li>
//               <li>
//                 <FooterLink to="/contact">Contact</FooterLink>
//               </li>
//             </ul>
//           </div>

//           {/* For Recruiters */}
//           <div>
//             <h3 className="text-sm font-semibold mb-4">Recruteurs</h3>
//             <ul className="space-y-2.5">
//               <li>
//                 <FooterLink to="/recruteur/inscription">
//                   Créer un compte
//                 </FooterLink>
//               </li>
//               <li>
//                 <FooterLink to="/recruteur/publier">
//                   Publier une offre
//                 </FooterLink>
//               </li>
//               <li>
//                 <FooterLink to="/recruteur/tarifs">Nos tarifs</FooterLink>
//               </li>
//               <li>
//                 <FooterLink to="/recruteur/guide">Guide</FooterLink>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-sm font-semibold mb-4">Contact</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2.5 text-sm text-ink-400">
//                 <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
//                 <span>
//                   UASZ, Diabir
//                   <br />
//                   Ziguinchor, Sénégal
//                 </span>
//               </li>
//               <li className="flex items-center gap-2.5 text-sm text-ink-400">
//                 <Phone className="w-4 h-4 flex-shrink-0" />
//                 <span>+221 77 123 45 67</span>
//               </li>
//               <li className="flex items-center gap-2.5 text-sm text-ink-400">
//                 <Mail className="w-4 h-4 flex-shrink-0" />
//                 <span>contact@recrutepro.sn</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-ink-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-ink-500">
//             © {currentYear} RecrutePro. Tous droits réservés.
//           </p>
//           <div className="flex items-center gap-6">
//             <FooterLink to="/mentions-legales" className="text-sm">
//               Mentions légales
//             </FooterLink>
//             <FooterLink to="/confidentialite" className="text-sm">
//               Confidentialité
//             </FooterLink>
//             <FooterLink to="/cgu" className="text-sm">
//               CGU
//             </FooterLink>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterLink({
//   to,
//   children,
//   className = "",
// }: {
//   to: string;
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <Link
//       to={to}
//       className={`text-ink-400 hover:text-white transition-colors ${className}`}
//     >
//       {children}
//     </Link>
//   );
// }

import { Link } from "react-router-dom";
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Gradient animé en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark to-dark-950"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 animate-aurora-wave"></div>

      {/* Pattern de grille */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Effet de lueur en haut */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-aurora"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Colonne 1 - Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-aurora rounded-xl flex items-center justify-center shadow-glow-aurora">
                <Briefcase className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold bg-gradient-aurora bg-clip-text text-transparent">
                RecrutePro
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              La plateforme de référence pour connecter les talents aux
              opportunités au Sénégal.
            </p>

            {/* Social Links avec effet hover */}
            <div className="flex items-center gap-2">
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Github} />
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-aurora rounded-full"></span>
              Liens rapides
            </h3>
            <ul className="space-y-2.5">
              <FooterLink to="/offres">Offres d'emploi</FooterLink>
              <FooterLink to="/entreprises">Entreprises</FooterLink>
              <FooterLink to="/a-propos">À propos</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Colonne 3 - Pour les recruteurs */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-aurora rounded-full"></span>
              Recruteurs
            </h3>
            <ul className="space-y-2.5">
              <FooterLink to="/recruteur/inscription">
                Créer un compte
              </FooterLink>
              <FooterLink to="/recruteur/publier">Publier une offre</FooterLink>
              <FooterLink to="/recruteur/tarifs">Nos tarifs</FooterLink>
              <FooterLink to="/recruteur/guide">Guide du recruteur</FooterLink>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-aurora rounded-full"></span>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm group">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5 group-hover:text-primary-300 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  UASZ, Diabir
                  <br />
                  Ziguinchor, Sénégal
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm group">
                <Phone className="w-4 h-4 text-secondary-400 flex-shrink-0 group-hover:text-secondary-300 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  +221 77 123 45 67
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm group">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0 group-hover:text-accent-300 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  contact@recrutepro.sn
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 border border-gray-700/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-aurora rounded-xl flex items-center justify-center shadow-glow-aurora">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Restez informé</h3>
                <p className="text-sm text-gray-400">
                  Recevez les dernières opportunités
                </p>
              </div>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 md:w-64 px-4 py-2 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <button className="group relative px-6 py-2 rounded-xl overflow-hidden font-medium text-white transition-all">
                <div className="absolute inset-0 bg-gradient-aurora"></div>
                <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                <span className="relative">S'abonner</span>
              </button>
            </div>
          </div>
        </div>

        {/* Séparateur avec effet */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8">
          <div className="absolute inset-0 bg-gradient-aurora opacity-30 blur-sm"></div>
        </div>

        {/* Copyright et mentions légales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="text-gray-400 font-medium">RecrutePro</span>. Tous
            droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <FooterLink to="/mentions-legales" className="text-sm">
              Mentions légales
            </FooterLink>
            <FooterLink to="/confidentialite" className="text-sm">
              Confidentialité
            </FooterLink>
            <FooterLink to="/cgu" className="text-sm">
              CGU
            </FooterLink>
          </div>
        </div>
      </div>

      {/* Effet de brillance animé en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-shimmer-aurora"></div>
      </div>
    </footer>
  );
}

// Social Link avec effet hover
function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-9 h-9 flex items-center justify-center bg-dark-800 hover:bg-dark-700 rounded-lg transition-all overflow-hidden"
    >
      {/* Effet de lueur au hover */}
      <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover:opacity-20 transition-opacity"></div>
      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors relative z-10" />
    </a>
  );
}

// Footer Link avec effet hover
function FooterLink({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`text-gray-400 hover:text-white transition-colors relative group ${className}`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-aurora group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}
