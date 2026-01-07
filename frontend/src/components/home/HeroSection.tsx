// import { Link } from "react-router-dom";
// import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Pattern de fond animé */}
//       <div className="absolute inset-0 pattern-dots opacity-40"></div>

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>

//       {/* Éléments décoratifs flottants */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-ink-950 rounded-full opacity-5 blur-3xl animate-float"></div>
//       <div
//         className="absolute bottom-20 right-10 w-96 h-96 bg-ink-900 rounded-full opacity-5 blur-3xl animate-float"
//         style={{ animationDelay: "1s" }}
//       ></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Contenu gauche */}
//           <div className="space-y-8 animate-in">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-ink-50 border border-ink-200 rounded-full">
//               <span className="w-2 h-2 bg-ink-950 rounded-full animate-pulse"></span>
//               <span className="text-sm font-medium text-ink-700">
//                 Plateforme #1 au Sénégal
//               </span>
//             </div>

//             {/* Titre principal */}
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
//               Trouvez votre
//               <span className="block mt-2 gradient-text">
//                 prochaine opportunité
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-xl text-ink-600 leading-relaxed max-w-xl">
//               Connectez-vous aux meilleures entreprises du Sénégal. Plus de 500
//               offres d'emploi et des milliers de talents qualifiés.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/offres"
//                 className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink-950 text-white rounded-xl font-medium hover:bg-ink-800 transition-all shadow-medium hover:shadow-strong hover:scale-105"
//               >
//                 Voir les offres
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Link>

//               <Link
//                 to="/inscription"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ink-950 border-2 border-ink-200 rounded-xl font-medium hover:border-ink-950 transition-all"
//               >
//                 Créer un compte
//               </Link>
//             </div>

//             {/* Stats rapides */}
//             <div className="flex items-center gap-8 pt-4">
//               <div className="flex items-center gap-2">
//                 <div className="w-10 h-10 bg-ink-100 rounded-lg flex items-center justify-center">
//                   <Briefcase className="w-5 h-5 text-ink-950" />
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-ink-950">500+</p>
//                   <p className="text-sm text-ink-600">Offres actives</p>
//                 </div>
//               </div>

//               <div className="w-px h-12 bg-ink-200"></div>

//               <div className="flex items-center gap-2">
//                 <div className="w-10 h-10 bg-ink-100 rounded-lg flex items-center justify-center">
//                   <Users className="w-5 h-5 text-ink-950" />
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-ink-950">10k+</p>
//                   <p className="text-sm text-ink-600">Candidats</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contenu droite - Card avec animation */}
//           <div className="relative lg:block hidden">
//             <div className="relative">
//               {/* Card principale avec border animation */}
//               <div className="relative border-beam bg-white rounded-3xl p-8 shadow-strong">
//                 <div className="space-y-6">
//                   {/* Header */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-ink-950 rounded-xl flex items-center justify-center">
//                         <Briefcase className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-ink-950">
//                           Offre du jour
//                         </p>
//                         <p className="text-sm text-ink-500">
//                           Développeur Full Stack
//                         </p>
//                       </div>
//                     </div>
//                     <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
//                       Active
//                     </div>
//                   </div>

//                   {/* Company */}
//                   <div className="flex items-center gap-3 p-4 bg-ink-50 rounded-xl">
//                     <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-soft">
//                       <span className="text-2xl">🏢</span>
//                     </div>
//                     <div>
//                       <p className="font-medium text-ink-950">SONATEL</p>
//                       <p className="text-sm text-ink-600">Dakar, Sénégal</p>
//                     </div>
//                   </div>

//                   {/* Details */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="p-4 bg-ink-50 rounded-xl">
//                       <p className="text-sm text-ink-600 mb-1">Salaire</p>
//                       <p className="font-semibold text-ink-950">800k XOF</p>
//                     </div>
//                     <div className="p-4 bg-ink-50 rounded-xl">
//                       <p className="text-sm text-ink-600 mb-1">Type</p>
//                       <p className="font-semibold text-ink-950">CDI</p>
//                     </div>
//                   </div>

//                   {/* CTA */}
//                   <button className="w-full py-3 bg-ink-950 text-white rounded-xl font-medium hover:bg-ink-800 transition-all">
//                     Postuler maintenant
//                   </button>
//                 </div>
//               </div>

//               {/* Cards flottantes décoratives */}
//               <div className="absolute -top-4 -right-4 w-32 h-32 bg-white rounded-2xl shadow-medium p-4 animate-float">
//                 <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center">
//                   <TrendingUp className="w-8 h-8 text-green-700" />
//                 </div>
//               </div>

//               <div
//                 className="absolute -bottom-4 -left-4 w-28 h-28 bg-white rounded-2xl shadow-medium p-4 animate-float"
//                 style={{ animationDelay: "0.5s" }}
//               >
//                 <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
//                   <Users className="w-7 h-7 text-blue-700" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Users,
  Sparkles,
  Zap,
  TrendingUp,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "opportunité de rêve";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-950 to-dark"></div>

      {/* Aurora effect en arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse-aurora"></div>
        <div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary-500/20 rounded-full blur-[120px] animate-pulse-aurora"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-accent-500/20 rounded-full blur-[120px] animate-pulse-aurora"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grille animée */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Particules flottantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu gauche */}
          <div className="space-y-8 animate-fadeIn">
            {/* Badge premium avec effet shimmer */}
            <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full group hover:border-primary-500/50 transition-all cursor-pointer">
              <div className="relative">
                <Sparkles className="w-4 h-4 text-primary-400" />
                <div className="absolute inset-0 blur-md bg-primary-400 opacity-50 animate-pulse"></div>
              </div>
              <span className="text-sm font-medium text-white">
                Plateforme #1 au Sénégal
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-glow-cyan"></div>
            </div>

            {/* Titre principal avec effet typing */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Trouvez votre</span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="bg-gradient-aurora bg-clip-text text-transparent animate-shimmer-aurora bg-[length:200%_100%]">
                    {typedText}
                  </span>
                  <span className="animate-pulse text-primary-400">|</span>

                  {/* Effet de lueur sous le texte */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-aurora blur-xl opacity-50"></div>
                </span>
              </h1>
            </div>

            {/* Description avec effet d'apparition */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl animate-slideUp">
              Connectez-vous aux{" "}
              <span className="text-primary-400 font-semibold">
                meilleures entreprises
              </span>{" "}
              du Sénégal. Plus de{" "}
              <span className="text-secondary-400 font-semibold">
                500 offres
              </span>{" "}
              et des milliers de talents qualifiés.
            </p>

            {/* CTA Buttons avec effets premium */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slideUp"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                to="/offres"
                className="group relative px-8 py-4 rounded-xl font-medium overflow-hidden transition-all hover:scale-105"
              >
                {/* Gradient animé de fond */}
                <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

                {/* Effet de lueur */}
                <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"></div>

                {/* Contenu du bouton */}
                <span className="relative flex items-center justify-center gap-2 text-white">
                  Voir les offres
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Border animation */}
                <div className="absolute inset-0 rounded-xl border-2 border-white/20"></div>
              </Link>

              <Link
                to="/inscription"
                className="group relative px-8 py-4 backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-xl font-medium hover:bg-white/10 hover:border-primary-500/50 transition-all"
              >
                <span className="relative flex items-center justify-center gap-2 text-white">
                  <Zap className="w-5 h-5 text-primary-400" />
                  Créer un compte
                </span>
              </Link>
            </div>

            {/* Stats rapides avec animations */}
            <div className="flex items-center gap-8 pt-6">
              <StatCard
                icon={Briefcase}
                value="500+"
                label="Offres actives"
                color="primary"
              />
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <StatCard
                icon={Users}
                value="10k+"
                label="Candidats"
                color="secondary"
              />
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <StatCard
                icon={TrendingUp}
                value="85%"
                label="Placement"
                color="accent"
              />
            </div>
          </div>

          {/* Contenu droite - Card premium 3D */}
          <div
            className="relative lg:block hidden animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Card principale avec glassmorphism et effets */}
              <div className="relative group">
                {/* Effet de lueur derrière la card */}
                <div className="absolute -inset-4 bg-gradient-aurora opacity-20 blur-3xl group-hover:opacity-30 transition-opacity rounded-3xl"></div>

                {/* Card principale */}
                <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-glow-aurora hover:shadow-glow-cyan-lg transition-all duration-500 hover:scale-[1.02]">
                  <div className="space-y-6">
                    {/* Header de la card */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-aurora rounded-2xl flex items-center justify-center shadow-glow-aurora">
                            <Briefcase className="w-7 h-7 text-white" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dark animate-pulse"></div>
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            Offre vedette
                          </p>
                          <p className="text-sm text-gray-400">
                            Développeur Full Stack
                          </p>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30 backdrop-blur-sm">
                        Active
                      </div>
                    </div>

                    {/* Company info avec effet hover */}
                    <div className="group/company flex items-center gap-4 p-4 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all cursor-pointer">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-glow-cyan">
                          <span className="text-3xl">🏢</span>
                        </div>
                        {/* Effet de rotation au hover */}
                        <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/company:opacity-20 rounded-xl blur-xl transition-opacity"></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white text-lg">
                          SONATEL
                        </p>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          📍 Dakar, Sénégal
                        </p>
                      </div>
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>

                    {/* Details grid avec animations */}
                    <div className="grid grid-cols-2 gap-4">
                      <DetailCard
                        label="Salaire"
                        value="800k XOF"
                        icon="💰"
                        gradient="from-primary-500/10 to-primary-600/5"
                      />
                      <DetailCard
                        label="Type"
                        value="CDI"
                        icon="📋"
                        gradient="from-secondary-500/10 to-secondary-600/5"
                      />
                      <DetailCard
                        label="Expérience"
                        value="2-5 ans"
                        icon="⏱️"
                        gradient="from-accent-500/10 to-accent-600/5"
                      />
                      <DetailCard
                        label="Candidats"
                        value="12"
                        icon="👥"
                        gradient="from-cyan-500/10 to-cyan-600/5"
                      />
                    </div>

                    {/* CTA Button premium */}
                    <button className="group/btn relative w-full py-4 rounded-xl font-semibold overflow-hidden transition-all hover:scale-[1.02]">
                      {/* Gradient de fond */}
                      <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

                      {/* Effet de lueur au hover */}
                      <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity"></div>

                      {/* Texte */}
                      <span className="relative flex items-center justify-center gap-2 text-white">
                        Postuler maintenant
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>

                    {/* Badge "Nouvelles candidatures" */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                      <span>3 nouvelles candidatures aujourd'hui</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards flottantes décoratives 3D */}
              <FloatingCard
                icon={TrendingUp}
                gradient="from-green-500 to-emerald-500"
                position="top"
                delay="0s"
              />

              <FloatingCard
                icon={Users}
                gradient="from-blue-500 to-cyan-500"
                position="bottom"
                delay="0.5s"
              />

              {/* Cercles décoratifs en arrière-plan */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
                <div
                  className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Découvrir</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-gradient-aurora rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Composant StatCard
function StatCard({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: any;
  value: string;
  label: string;
  color: string;
}) {
  const colorClasses = {
    primary: "from-primary-500 to-primary-600",
    secondary: "from-secondary-500 to-secondary-600",
    accent: "from-accent-500 to-accent-600",
  };

  return (
    <div className="group flex items-center gap-3 cursor-pointer">
      <div
        className={`w-12 h-12 bg-gradient-to-br ${
          colorClasses[color as keyof typeof colorClasses]
        } rounded-xl flex items-center justify-center shadow-glow-cyan group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}

// Composant DetailCard
function DetailCard({
  label,
  value,
  icon,
  gradient,
}: {
  label: string;
  value: string;
  icon: string;
  gradient: string;
}) {
  return (
    <div
      className={`group p-4 backdrop-blur-xl bg-gradient-to-br ${gradient} rounded-2xl border border-white/5 hover:border-white/20 transition-all cursor-pointer hover:scale-105`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-lg font-bold text-white">{value}</p>
    </div>
  );
}

// Composant FloatingCard
function FloatingCard({
  icon: Icon,
  gradient,
  position,
  delay,
}: {
  icon: any;
  gradient: string;
  position: string;
  delay: string;
}) {
  const positionClasses = {
    top: "-top-6 -right-6",
    bottom: "-bottom-6 -left-6",
  };

  return (
    <div
      className={`absolute ${
        positionClasses[position as keyof typeof positionClasses]
      } w-32 h-32 backdrop-blur-2xl bg-white/5 rounded-2xl shadow-glow-aurora border border-white/10 p-4 animate-float hover:scale-110 transition-transform cursor-pointer group`}
      style={{ animationDelay: delay }}
    >
      <div className="w-full h-full bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center relative overflow-hidden">
        <Icon className="w-10 h-10 text-white relative z-10" />

        {/* Effet de brillance au hover */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>

        {/* Particules */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-50"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
                animation: `float ${2 + i}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
