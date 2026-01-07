// import {
//   Search,
//   FileText,
//   Calendar,
//   CheckCircle,
//   Bell,
//   Shield,
// } from "lucide-react";

// const features = [
//   {
//     icon: Search,
//     title: "Recherche intelligente",
//     description:
//       "Trouvez des opportunités qui correspondent parfaitement à votre profil et vos compétences.",
//   },
//   {
//     icon: FileText,
//     title: "Candidature simplifiée",
//     description:
//       "Postulez en un clic avec votre CV et lettre de motivation pré-enregistrés.",
//   },
//   {
//     icon: Calendar,
//     title: "Suivi des entretiens",
//     description:
//       "Gérez tous vos entretiens et rendez-vous depuis votre tableau de bord.",
//   },
//   {
//     icon: CheckCircle,
//     title: "Statut en temps réel",
//     description:
//       "Suivez l'évolution de vos candidatures à chaque étape du processus.",
//   },
//   {
//     icon: Bell,
//     title: "Notifications instantanées",
//     description:
//       "Recevez des alertes pour chaque mise à jour de vos candidatures.",
//   },
//   {
//     icon: Shield,
//     title: "Données sécurisées",
//     description:
//       "Vos informations personnelles sont protégées et confidentielles.",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
//       {/* Pattern de fond subtil */}
//       <div className="absolute inset-0 pattern-grid opacity-30"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-ink-50 border border-ink-200 rounded-full">
//             <span className="text-sm font-medium text-ink-700">
//               Fonctionnalités
//             </span>
//           </div>

//           <h2 className="text-4xl sm:text-5xl font-bold text-ink-950">
//             Tout ce dont vous avez besoin
//           </h2>

//           <p className="text-xl text-ink-600">
//             Une plateforme complète pour gérer votre recherche d'emploi de A à Z
//           </p>
//         </div>

//         {/* Grid de fonctionnalités */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative p-8 bg-white border border-ink-200 rounded-2xl hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Icône */}
//               <div className="w-14 h-14 bg-ink-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-ink-950 transition-colors">
//                 <feature.icon className="w-7 h-7 text-ink-950 group-hover:text-white transition-colors" />
//               </div>

//               {/* Contenu */}
//               <h3 className="text-xl font-semibold text-ink-950 mb-3">
//                 {feature.title}
//               </h3>

//               <p className="text-ink-600 leading-relaxed">
//                 {feature.description}
//               </p>

//               {/* Border animation au hover */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity border-2 border-ink-950 pointer-events-none"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  Search,
  FileText,
  Calendar,
  CheckCircle,
  Bell,
  Shield,
  Zap,
  Target,
  Award,
  Clock,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Search,
    title: "Recherche intelligente",
    description:
      "Trouvez des opportunités qui correspondent parfaitement à votre profil et vos compétences grâce à notre IA.",
    color: "primary",
    gradient: "from-primary-500 to-primary-600",
  },
  {
    icon: Zap,
    title: "Candidature express",
    description:
      "Postulez en un clic avec votre CV et lettre de motivation pré-enregistrés. Gagnez du temps.",
    color: "secondary",
    gradient: "from-secondary-500 to-secondary-600",
  },
  {
    icon: Calendar,
    title: "Gestion des entretiens",
    description:
      "Organisez et suivez tous vos entretiens depuis un tableau de bord centralisé et intuitif.",
    color: "accent",
    gradient: "from-accent-500 to-accent-600",
  },
  {
    icon: Target,
    title: "Matching intelligent",
    description:
      "Notre algorithme vous recommande les offres les plus pertinentes selon votre profil.",
    color: "cyan",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Bell,
    title: "Notifications temps réel",
    description:
      "Recevez des alertes instantanées pour chaque mise à jour de vos candidatures.",
    color: "violet",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    icon: Shield,
    title: "Sécurité maximale",
    description:
      "Vos données personnelles sont cryptées et protégées selon les normes les plus strictes.",
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: Award,
    title: "Profil certifié",
    description:
      "Obtenez des badges de certification pour valoriser vos compétences et votre expérience.",
    color: "primary",
    gradient: "from-primary-500 to-secondary-500",
  },
  {
    icon: Clock,
    title: "Suivi en direct",
    description:
      "Visualisez l'évolution de vos candidatures à chaque étape du processus de recrutement.",
    color: "accent",
    gradient: "from-secondary-500 to-accent-500",
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-950 to-dark"></div>

      {/* Aurora effects subtils */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] animate-pulse-aurora"></div>
        <div
          className="absolute top-2/3 right-1/4 w-[450px] h-[450px] bg-secondary-500/10 rounded-full blur-[120px] animate-pulse-aurora"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Grille pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 animate-fadeIn">
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full">
            <div className="relative">
              <Zap className="w-4 h-4 text-primary-400" />
              <div className="absolute inset-0 blur-md bg-primary-400 opacity-50 animate-pulse"></div>
            </div>
            <span className="text-sm font-medium text-gray-300">
              Fonctionnalités
            </span>
          </div>

          {/* Titre avec gradient */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Tout ce dont vous</span>
            <br />
            <span className="bg-gradient-aurora bg-clip-text text-transparent animate-shimmer-aurora bg-[length:200%_100%]">
              avez besoin
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 leading-relaxed">
            Une plateforme complète pour gérer votre recherche d'emploi de A à Z
            avec les outils les plus performants
          </p>

          {/* Séparateur décoratif */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-500"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <div className="w-24 h-px bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"></div>
            <div
              className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent-500"></div>
          </div>
        </div>

        {/* Grid de fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Stats bar en bas */}
        <div className="mt-20 p-8 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-glow-aurora">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              icon={CheckCircle}
              value="99.9%"
              label="Disponibilité"
              gradient="from-green-500 to-emerald-500"
            />
            <StatItem
              icon={Zap}
              value="<1s"
              label="Temps de réponse"
              gradient="from-primary-500 to-cyan-500"
            />
            <StatItem
              icon={Shield}
              value="100%"
              label="Sécurisé"
              gradient="from-secondary-500 to-violet-500"
            />
            <StatItem
              icon={Award}
              value="4.9/5"
              label="Satisfaction"
              gradient="from-accent-500 to-pink-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant FeatureCard avec effets premium
function FeatureCard({
  feature,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  feature: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const Icon = feature.icon;

  return (
    <div
      className="group relative animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Effet de lueur derrière la card */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}
      ></div>

      {/* Card principale */}
      <div className="relative h-full p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden">
        {/* Pattern de fond */}
        <div className="absolute inset-0 dot-pattern opacity-5"></div>

        {/* Gradient overlay au hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        ></div>

        {/* Contenu */}
        <div className="relative space-y-4">
          {/* Icône avec effet 3D */}
          <div className="relative inline-block">
            {/* Cercle de lueur */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-30 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl scale-110`}
            ></div>

            {/* Container de l'icône */}
            <div
              className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
            >
              <Icon className="w-8 h-8 text-white" strokeWidth={2} />

              {/* Particules décoratives */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>

          {/* Titre */}
          <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
            {feature.description}
          </p>

          {/* Arrow indicator */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-primary-400 transition-colors">
            <span>En savoir plus</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Border animation */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Composant StatItem
function StatItem({
  icon: Icon,
  value,
  label,
  gradient,
}: {
  icon: any;
  value: string;
  label: string;
  gradient: string;
}) {
  return (
    <div className="group flex flex-col items-center text-center space-y-3 cursor-pointer">
      {/* Icône */}
      <div className="relative">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30 blur-xl group-hover:blur-2xl transition-all`}
        ></div>
        <div
          className={`relative w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan-lg transition-all group-hover:scale-110 group-hover:rotate-6`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Valeur */}
      <div>
        <p className="text-3xl font-bold text-white group-hover:scale-110 transition-transform">
          {value}
        </p>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
          {label}
        </p>
      </div>

      {/* Indicateur de hover */}
      <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
    </div>
  );
}
