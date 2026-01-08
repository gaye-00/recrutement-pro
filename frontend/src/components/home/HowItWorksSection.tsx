// import { UserPlus, Search, Send, CheckCircle } from "lucide-react";

// const steps = [
//   {
//     icon: UserPlus,
//     title: "Créez votre profil",
//     description:
//       "Inscrivez-vous en quelques minutes et complétez votre profil professionnel.",
//     number: "01",
//   },
//   {
//     icon: Search,
//     title: "Explorez les offres",
//     description:
//       "Parcourez des centaines d'offres adaptées à vos compétences et aspirations.",
//     number: "02",
//   },
//   {
//     icon: Send,
//     title: "Postulez facilement",
//     description:
//       "Envoyez vos candidatures en un clic avec votre CV et lettre de motivation.",
//     number: "03",
//   },
//   {
//     icon: CheckCircle,
//     title: "Décrochez le poste",
//     description:
//       "Suivez vos candidatures et préparez-vous pour vos entretiens.",
//     number: "04",
//   },
// ];

// export default function HowItWorksSection() {
//   return (
//     <section className="relative py-24 bg-white overflow-hidden">
//       {/* Pattern diagonal en arrière-plan */}
//       <div className="absolute inset-0 pattern-diagonal opacity-20"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-ink-50 border border-ink-200 rounded-full">
//             <span className="text-sm font-medium text-ink-700">
//               Comment ça marche
//             </span>
//           </div>

//           <h2 className="text-4xl sm:text-5xl font-bold text-ink-950">
//             Trouvez votre emploi en 4 étapes
//           </h2>

//           <p className="text-xl text-ink-600">
//             Un processus simple et rapide pour vous connecter aux meilleures
//             opportunités
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//           {/* Ligne de connexion (desktop uniquement) */}
//           <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-ink-200 via-ink-300 to-ink-200"></div>

//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="relative group"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               {/* Card */}
//               <div className="relative p-8 bg-white border-2 border-ink-200 rounded-2xl hover:border-ink-950 hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
//                 {/* Numéro de l'étape */}
//                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-ink-950 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-medium group-hover:scale-110 transition-transform">
//                   {step.number}
//                 </div>

//                 {/* Icône */}
//                 <div className="w-16 h-16 bg-ink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ink-950 transition-colors">
//                   <step.icon
//                     className="w-8 h-8 text-ink-950 group-hover:text-white transition-colors"
//                     strokeWidth={2}
//                   />
//                 </div>

//                 {/* Contenu */}
//                 <h3 className="text-xl font-semibold text-ink-950 mb-3">
//                   {step.title}
//                 </h3>

//                 <p className="text-ink-600 leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-16">
//           href="/inscription" className="inline-flex items-center gap-2 px-8
//           py-4 bg-ink-950 text-white rounded-xl font-medium hover:bg-ink-800
//           transition-all shadow-medium hover:shadow-strong hover:scale-105"
//           <a>
//             Commencer maintenant
//             <CheckCircle className="w-5 h-5" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  UserPlus,
  Search,
  Send,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Trophy,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: UserPlus,
    title: "Créez votre profil",
    description:
      "Inscrivez-vous en quelques minutes et complétez votre profil professionnel avec vos compétences et expériences.",
    number: "01",
    gradient: "from-primary-500 to-cyan-500",
    features: ["Inscription rapide", "CV intelligent", "Profil optimisé"],
  },
  {
    icon: Search,
    title: "Explorez les offres",
    description:
      "Parcourez des centaines d'offres adaptées à vos compétences grâce à notre algorithme de matching intelligent.",
    number: "02",
    gradient: "from-secondary-500 to-violet-500",
    features: ["Recherche IA", "Filtres avancés", "Recommandations"],
  },
  {
    icon: Send,
    title: "Postulez en un clic",
    description:
      "Envoyez vos candidatures instantanément avec votre CV et lettre de motivation pré-enregistrés.",
    number: "03",
    gradient: "from-accent-500 to-pink-500",
    features: ["Candidature express", "Suivi temps réel", "Notifications"],
  },
  {
    icon: CheckCircle,
    title: "Décrochez le poste",
    description:
      "Suivez vos candidatures, préparez vos entretiens et recevez des offres des meilleures entreprises.",
    number: "04",
    gradient: "from-cyan-500 to-primary-500",
    features: ["Gestion entretiens", "Statistiques", "Placement garanti"],
  },
];

export default function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background spectaculaire */}
      <div className="absolute inset-0">
        {/* Gradient de base */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-950 to-dark"></div>

        {/* Aurora effects multiples */}
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-primary-500/15 rounded-full blur-[140px] animate-pulse-aurora"></div>
        <div
          className="absolute top-2/3 right-1/3 w-[600px] h-[600px] bg-secondary-500/15 rounded-full blur-[140px] animate-pulse-aurora"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-[650px] h-[650px] bg-accent-500/15 rounded-full blur-[140px] animate-pulse-aurora"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Patterns */}
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
      </div>

      {/* Particules flottantes ambiantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
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
        {/* Header spectaculaire */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fadeIn">
          {/* Badge premium */}
          <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full group hover:border-accent-500/30 transition-all cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-500 blur-lg opacity-50 animate-pulse"></div>
              <Zap className="w-4 h-4 text-accent-400 relative" />
            </div>
            <span className="text-sm font-medium text-gray-300">
              Comment ça marche
            </span>
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
          </div>

          {/* Titre avec effet typing */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Trouvez votre emploi</span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-aurora bg-clip-text text-transparent animate-shimmer-aurora bg-[length:200%_100%]">
                en 4 étapes simples
              </span>
              {/* Effet de lueur sous le texte */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-aurora blur-2xl opacity-50"></div>
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 leading-relaxed">
            Un processus optimisé et intuitif pour vous connecter rapidement aux
            meilleures opportunités professionnelles
          </p>

          {/* Stats rapides */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>4.9/5 satisfaction</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Trophy className="w-4 h-4 text-accent-400" />
              <span>85% placement</span>
            </div>
          </div>
        </div>

        {/* Timeline et Steps */}
        <div className="relative">
          {/* Timeline centrale (desktop) */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1">
            <div className="relative w-full h-full">
              {/* Background de la timeline */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>

              {/* Progression animée */}
              <div
                className="absolute inset-0 bg-gradient-aurora rounded-full transition-all duration-1000 animate-shimmer-aurora bg-[length:200%_100%]"
                style={{
                  width: `${(activeStep / (steps.length - 1)) * 100}%`,
                }}
              />

              {/* Points de connexion */}
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-500"
                  style={{
                    left: `${(index / (steps.length - 1)) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`w-full h-full rounded-full border-2 ${
                      index <= activeStep
                        ? "bg-gradient-aurora border-white/30"
                        : "bg-dark border-white/10"
                    } transition-all duration-500`}
                  >
                    {index <= activeStep && (
                      <div className="absolute inset-0 bg-gradient-aurora blur-lg opacity-50 animate-pulse"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid des étapes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isHovered={hoveredStep === index}
                isActive={activeStep === index}
                onHover={() => {
                  setHoveredStep(index);
                  setActiveStep(index);
                }}
                onLeave={() => setHoveredStep(null)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section premium */}
        <div
          className="mt-20 text-center animate-fadeIn"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="inline-block relative group">
            {/* Effet de lueur derrière le bouton */}
            <div className="absolute -inset-4 bg-gradient-aurora opacity-20 blur-3xl group-hover:opacity-40 transition-opacity rounded-3xl"></div>
            <a
              href="/inscription"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold overflow-hidden transition-all hover:scale-105 shadow-glow-aurora hover:shadow-glow-cyan-lg"
            >
              {/* Gradient de fond animé */}
              <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

              {/* Border shimmer */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20"></div>

              {/* Contenu */}
              <span className="relative flex items-center gap-3 text-white text-lg">
                <Sparkles className="w-5 h-5" />
                Commencer maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Texte de réassurance */}
          <p className="mt-6 text-gray-500 text-sm">
            Gratuit et sans engagement • Inscription en 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
}

// Composant StepCard ultra premium
function StepCard({
  step,
  index,
  isHovered,
  isActive,
  onHover,
  onLeave,
}: {
  step: any;
  index: number;
  isHovered: boolean;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const Icon = step.icon;

  return (
    <div
      className="group relative animate-fadeIn"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Effet de lueur derrière la card */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r ${
          step.gradient
        } opacity-0 ${
          isHovered ? "opacity-30" : ""
        } blur-3xl transition-all duration-500 rounded-3xl`}
      ></div>

      {/* Card principale avec glassmorphism */}
      <div
        className={`relative h-full backdrop-blur-2xl bg-white/5 border-2 rounded-3xl p-8 transition-all duration-500 cursor-pointer overflow-hidden ${
          isHovered
            ? "border-white/30 scale-105 -translate-y-2 shadow-glow-cyan-lg"
            : "border-white/10 hover:border-white/20"
        }`}
      >
        {/* Pattern de fond */}
        <div className="absolute inset-0 dot-pattern opacity-5"></div>

        {/* Gradient overlay au hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            step.gradient
          } opacity-0 ${
            isHovered ? "opacity-10" : ""
          } transition-opacity duration-500`}
        ></div>

        {/* Numéro de l'étape - Spectaculaire */}
        <div className="absolute -top-6 -right-6 w-24 h-24">
          <div className="relative w-full h-full">
            {/* Cercles de lueur */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                step.gradient
              } opacity-30 blur-2xl ${
                isHovered ? "blur-3xl scale-110" : ""
              } transition-all duration-500 rounded-full`}
            ></div>

            {/* Container du numéro */}
            <div
              className={`relative w-full h-full bg-gradient-to-br ${
                step.gradient
              } rounded-2xl flex items-center justify-center shadow-glow-cyan ${
                isHovered ? "shadow-glow-cyan-lg rotate-12 scale-110" : ""
              } transition-all duration-500`}
            >
              <span className="text-3xl font-bold text-white">
                {step.number}
              </span>

              {/* Ring orbital */}
              <div
                className={`absolute inset-0 border-2 border-white/30 rounded-2xl ${
                  isHovered ? "scale-125 opacity-100" : "scale-110 opacity-0"
                } transition-all duration-700`}
              ></div>

              {/* Particules */}
              {isHovered && (
                <>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div
                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Contenu */}
        <div className="relative space-y-6 pt-4">
          {/* Icône principale avec effet 3D */}
          <div className="relative inline-block">
            {/* Cercles de lueur multiples */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                step.gradient
              } opacity-40 blur-xl ${
                isHovered ? "blur-2xl" : ""
              } transition-all duration-500 rounded-3xl`}
            ></div>
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                step.gradient
              } opacity-20 blur-2xl ${
                isHovered ? "blur-3xl" : ""
              } transition-all duration-500 rounded-3xl scale-125 animate-pulse`}
            ></div>

            {/* Container de l'icône */}
            <div
              className={`relative w-20 h-20 bg-gradient-to-br ${
                step.gradient
              } rounded-3xl flex items-center justify-center shadow-glow-cyan ${
                isHovered ? "shadow-glow-cyan-lg scale-110 rotate-6" : ""
              } transition-all duration-500`}
            >
              <Icon
                className="w-10 h-10 text-white relative z-10"
                strokeWidth={2}
              />

              {/* Effet brillant */}
              <div
                className={`absolute inset-0 bg-white/0 ${
                  isHovered ? "bg-white/10" : ""
                } rounded-3xl transition-colors duration-300`}
              ></div>
            </div>
          </div>

          {/* Titre */}
          <h3
            className={`text-2xl font-bold transition-all duration-300 ${
              isHovered
                ? "text-transparent bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text"
                : "text-white"
            }`}
          >
            {step.title}
          </h3>

          {/* Description */}
          <p
            className={`text-gray-400 leading-relaxed transition-colors duration-300 ${
              isHovered ? "text-gray-300" : ""
            }`}
          >
            {step.description}
          </p>

          {/* Features list */}
          <div className="space-y-2 pt-2">
            {step.features.map((feature: string, i: number) => (
              <div
                key={i}
                className={`flex items-center gap-2 text-sm text-gray-500 ${
                  isHovered ? "text-gray-400" : ""
                } transition-all duration-300`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className={`w-5 h-5 rounded-lg bg-gradient-to-br ${step.gradient} opacity-20 flex items-center justify-center flex-shrink-0`}
                >
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Arrow indicator */}
          <div
            className={`flex items-center gap-2 text-sm font-medium pt-4 transition-all duration-300 ${
              isHovered ? "text-primary-400 translate-x-2" : "text-gray-500"
            }`}
          >
            <span>Découvrir</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Particules flottantes dans la card au hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${step.gradient} rounded-full animate-float`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        )}

        {/* Border animation shimmer */}
        <div
          className={`absolute inset-0 rounded-3xl opacity-0 ${
            isHovered ? "opacity-100" : ""
          } transition-opacity pointer-events-none`}
        >
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
        </div>

        {/* Corner accent brillant */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 opacity-0 ${
            isHovered ? "opacity-100" : ""
          } transition-opacity pointer-events-none`}
        >
          <div
            className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${step.gradient} opacity-20 blur-3xl rounded-full`}
          ></div>
        </div>
      </div>

      {/* Connecteur vers la prochaine étape (desktop) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-32 -right-4 w-8 h-1 z-0">
          <div
            className={`w-full h-full bg-gradient-to-r from-white/20 to-transparent ${
              isActive ? "from-primary-500 to-secondary-500" : ""
            } transition-all duration-500 rounded-full`}
          ></div>
        </div>
      )}
    </div>
  );
}
