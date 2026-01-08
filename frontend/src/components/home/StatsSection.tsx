// import { Briefcase, Users, Building2, TrendingUp } from "lucide-react";
// import { useEffect, useState } from "react";

// const stats = [
//   { icon: Briefcase, label: "Offres d'emploi", value: 500, suffix: "+" },
//   { icon: Users, label: "Candidats inscrits", value: 10000, suffix: "+" },
//   {
//     icon: Building2,
//     label: "Entreprises partenaires",
//     value: 150,
//     suffix: "+",
//   },
//   { icon: TrendingUp, label: "Taux de placement", value: 85, suffix: "%" },
// ];

// export default function StatsSection() {
//   return (
//     <section className="relative py-24 bg-ink-950 overflow-hidden">
//       {/* Pattern de fond */}
//       <div className="absolute inset-0 pattern-dots opacity-10"></div>

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/50 to-transparent"></div>

//       {/* Éléments décoratifs */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <h2 className="text-4xl sm:text-5xl font-bold text-white">
//             RecrutePro en chiffres
//           </h2>
//           <p className="text-xl text-ink-300">
//             La plateforme de référence pour l'emploi au Sénégal
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <StatCard key={index} {...stat} delay={index * 100} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function StatCard({
//   icon: Icon,
//   label,
//   value,
//   suffix,
//   delay,
// }: {
//   icon: any;
//   label: string;
//   value: number;
//   suffix: string;
//   delay: number;
// }) {
//   const [count, setCount] = useState(0);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     if (hasAnimated) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setHasAnimated(true);
//           const duration = 2000;
//           const steps = 60;
//           const increment = value / steps;
//           let current = 0;

//           const timer = setInterval(() => {
//             current += increment;
//             if (current >= value) {
//               setCount(value);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(current));
//             }
//           }, duration / steps);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     const element = document.getElementById(`stat-${label}`);
//     if (element) observer.observe(element);

//     return () => observer.disconnect();
//   }, [value, label, hasAnimated]);

//   return (
//     <div
//       id={`stat-${label}`}
//       className="relative group"
//       style={{ animationDelay: `${delay}ms` }}
//     >
//       {/* Card avec border gradient */}
//       <div className="relative p-8 bg-ink-900 rounded-2xl border border-ink-800 hover:border-ink-700 transition-all">
//         {/* Icône */}
//         <div className="w-12 h-12 bg-ink-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all">
//           <Icon className="w-6 h-6 text-white group-hover:text-ink-950 transition-colors" />
//         </div>

//         {/* Nombre animé */}
//         <div className="text-5xl font-bold text-white mb-2">
//           {count.toLocaleString("fr-FR")}
//           <span className="text-ink-400">{suffix}</span>
//         </div>

//         {/* Label */}
//         <p className="text-ink-400 font-medium">{label}</p>

//         {/* Effet de brillance */}
//         <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//       </div>
//     </div>
//   );
// }

import {
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  Target,
  Award,
  Zap,
  Star,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const mainStats = [
  {
    icon: Briefcase,
    label: "Offres d'emploi actives",
    value: 500,
    suffix: "+",
    gradient: "from-primary-500 to-cyan-500",
    color: "primary",
  },
  {
    icon: Users,
    label: "Candidats qualifiés",
    value: 10000,
    suffix: "+",
    gradient: "from-secondary-500 to-violet-500",
    color: "secondary",
  },
  {
    icon: Building2,
    label: "Entreprises partenaires",
    value: 150,
    suffix: "+",
    gradient: "from-accent-500 to-pink-500",
    color: "accent",
  },
  {
    icon: TrendingUp,
    label: "Taux de placement",
    value: 85,
    suffix: "%",
    gradient: "from-cyan-500 to-primary-500",
    color: "cyan",
  },
];

const additionalStats = [
  {
    icon: Target,
    label: "Matching précis",
    value: "94%",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    label: "Satisfaction client",
    value: "4.9/5",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Zap,
    label: "Temps de réponse",
    value: "<24h",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    label: "Avis positifs",
    value: "98%",
    color: "from-purple-500 to-pink-500",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background complexe avec multiple layers */}
      <div className="absolute inset-0">
        {/* Gradient de base */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-900 to-dark"></div>

        {/* Aurora effects multiples */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[150px] animate-pulse-aurora"></div>
        <div
          className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-secondary-500/20 rounded-full blur-[150px] animate-pulse-aurora"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[150px] animate-pulse-aurora"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grilles et patterns */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="absolute inset-0 dot-pattern opacity-5"></div>
      </div>

      {/* Particules flottantes ambiantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 15
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec effet spectaculaire */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fadeIn">
          {/* Badge premium */}
          <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full group hover:border-primary-500/30 transition-all cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 blur-lg opacity-50 animate-pulse"></div>
              <TrendingUp className="w-4 h-4 text-primary-400 relative" />
            </div>
            <span className="text-sm font-medium text-gray-300">
              Statistiques en temps réel
            </span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div>
              <div
                className="w-1.5 h-1.5 bg-secondary-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Titre principal */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-white">RecrutePro en</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-aurora bg-clip-text text-transparent animate-shimmer-aurora bg-[length:200%_100%]">
                chiffres
              </span>
              {/* Effet de lueur sous le texte */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-aurora blur-2xl opacity-50"></div>
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 leading-relaxed">
            La plateforme de référence pour l'emploi au Sénégal
          </p>

          {/* Séparateur décoratif animé */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary-500 animate-pulse"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"></div>
            <div className="w-24 h-px bg-gradient-aurora animate-shimmer-aurora bg-[length:200%_100%]"></div>
            <div
              className="w-2 h-2 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent-500 animate-pulse"></div>
          </div>
        </div>

        {/* Stats principales - Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainStats.map((stat, index) => (
            <MainStatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Stats secondaires - Bande horizontale premium */}
        <div
          className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-glow-aurora animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          {/* Effet de lueur animée en arrière-plan */}
          <div className="absolute inset-0 bg-gradient-aurora opacity-5 animate-aurora-wave bg-[length:200%_100%] rounded-3xl"></div>

          {/* Pattern de fond */}
          <div className="absolute inset-0 grid-pattern opacity-5 rounded-3xl"></div>

          {/* Contenu */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {additionalStats.map((stat, index) => (
              <AdditionalStatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Border animation */}
          <div className="absolute inset-0 rounded-3xl opacity-50">
            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
          </div>
        </div>

        {/* Texte de confiance */}
        <div
          className="text-center mt-12 animate-fadeIn"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-gray-500 text-sm">
            Rejoint par{" "}
            <span className="text-white font-semibold">10,000+</span>{" "}
            professionnels et{" "}
            <span className="text-white font-semibold">150+</span> entreprises
            de confiance
          </p>

          {/* Logos entreprises défilantes (optionnel) */}
          <div className="flex items-center justify-center gap-8 mt-8 opacity-50">
            {["🏢", "🏦", "🏭", "🏪", "🏛️"].map((emoji, i) => (
              <div
                key={i}
                className="text-3xl grayscale hover:grayscale-0 transition-all cursor-pointer hover:scale-110"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant MainStatCard avec animations de comptage
function MainStatCard({ stat, index }: { stat: any; index: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = stat.icon;

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  return (
    <div
      ref={cardRef}
      className="group relative animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de lueur derrière la card */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-500 rounded-3xl`}
      ></div>

      {/* Card principale */}
      <div className="relative h-full backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 group-hover:scale-105 shadow-glow-aurora group-hover:shadow-glow-cyan-lg cursor-pointer overflow-hidden">
        {/* Pattern de fond */}
        <div className="absolute inset-0 dot-pattern opacity-5"></div>

        {/* Gradient overlay au hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        {/* Contenu */}
        <div className="relative space-y-6">
          {/* Icône avec effet 3D spectaculaire */}
          <div className="relative inline-block">
            {/* Cercles de lueur multiples */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-40 blur-2xl group-hover:blur-3xl transition-all duration-500 rounded-2xl scale-110`}
            ></div>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-20 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl scale-125 animate-pulse`}
            ></div>

            {/* Container de l'icône */}
            <div
              className={`relative w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
            >
              <Icon
                className="w-8 h-8 text-white relative z-10"
                strokeWidth={2}
              />

              {/* Particules décoratives */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              <div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>

              {/* Ring orbital */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-2xl scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
            </div>
          </div>

          {/* Nombre animé avec effet spectaculaire */}
          <div>
            <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {count.toLocaleString("fr-FR")}
              </span>
              <span
                className={`text-4xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent ml-1`}
              >
                {stat.suffix}
              </span>
            </div>

            {/* Barre de progression animée */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-3">
              <div
                className={`h-full bg-gradient-to-r ${stat.gradient} transition-all duration-2000 ease-out`}
                style={{ width: hasAnimated ? "100%" : "0%" }}
              />
            </div>

            {/* Label */}
            <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
              {stat.label}
            </p>
          </div>
        </div>

        {/* Particules flottantes dans la card */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${stat.gradient} rounded-full animate-float`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Border shimmer au hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
        </div>
      </div>
    </div>
  );
}

// Composant AdditionalStatCard
function AdditionalStatCard({ stat, index }: { stat: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = stat.icon;

  return (
    <div
      className="group relative flex flex-col items-center text-center space-y-4 cursor-pointer animate-fadeIn"
      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icône */}
      <div className="relative">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-30 blur-xl group-hover:blur-2xl transition-all`}
        ></div>
        <div
          className={`relative w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan-lg transition-all group-hover:scale-110 group-hover:rotate-12`}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Valeur */}
      <div>
        <p className="text-3xl font-bold text-white group-hover:scale-110 transition-transform mb-1">
          {stat.value}
        </p>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
          {stat.label}
        </p>
      </div>

      {/* Indicateur de hover */}
      <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>

      {/* Particules au hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full animate-float`}
              style={{
                left: `${25 + Math.random() * 50}%`,
                top: `${25 + Math.random() * 50}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
