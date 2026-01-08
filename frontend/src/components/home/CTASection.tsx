// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles } from "lucide-react";

// export default function CTASection() {
//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Background avec pattern */}
//       <div className="absolute inset-0 bg-ink-950"></div>
//       <div className="absolute inset-0 pattern-hexagon opacity-10"></div>

//       {/* Gradient animé */}
//       <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-900 to-ink-950 opacity-50"></div>

//       {/* Éléments décoratifs */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"></div>
//       <div
//         className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"
//         style={{ animationDelay: "1s" }}
//       ></div>

//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-8">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
//             <Sparkles className="w-4 h-4 text-white" />
//             <span className="text-sm font-medium text-white">
//               Rejoignez des milliers de talents
//             </span>
//           </div>

//           {/* Titre */}
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
//             Prêt à décrocher
//             <br />
//             <span className="bg-gradient-to-r from-white via-ink-200 to-white bg-clip-text text-transparent">
//               votre emploi de rêve ?
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="text-xl text-ink-300 max-w-2xl mx-auto">
//             Créez votre compte gratuitement et accédez à des centaines
//             d'opportunités dès aujourd'hui
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//             <Link
//               to="/inscription"
//               className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ink-950 rounded-xl font-medium hover:bg-ink-100 transition-all shadow-strong hover:scale-105"
//             >
//               Créer mon compte candidat
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>

//             <Link
//               to="/recruteur/inscription"
//               className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl font-medium hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
//             >
//               Espace recruteurs
//             </Link>
//           </div>

//           {/* Trust indicators */}
//           <div className="pt-8 flex items-center justify-center gap-8 text-ink-400 text-sm">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//               <span>Gratuit et sans engagement</span>
//             </div>
//             <div className="hidden sm:flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//               <span>Inscription en 2 minutes</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Border animation en bas */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Zap, text: "Inscription en 2 minutes" },
  { icon: Shield, text: "100% gratuit et sécurisé" },
  { icon: Clock, text: "Accès immédiat" },
  { icon: CheckCircle, text: "Sans engagement" },
];

const testimonials = [
  {
    name: "Aminata Diallo",
    role: "Data Scientist",
    company: "CBAO",
    avatar: "👩🏾‍💼",
    rating: 5,
    text: "J'ai trouvé mon emploi de rêve en moins de 2 semaines !",
  },
  {
    name: "Moussa Sarr",
    role: "Développeur Full Stack",
    company: "SONATEL",
    avatar: "👨🏿‍💻",
    rating: 5,
    text: "Une plateforme exceptionnelle avec un suivi personnalisé.",
  },
  {
    name: "Fatou Mbaye",
    role: "Chef de Projet",
    company: "ISI",
    avatar: "👩🏾‍💼",
    rating: 5,
    text: "Le processus est simple et les offres sont de qualité.",
  },
];

export default function CTASection() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  );
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background ultra sombre avec effets spectaculaires */}
      <div className="absolute inset-0 bg-dark">
        {/* Gradient de base */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-950 to-dark"></div>

        {/* Aurora effects massifs */}
        <div className="absolute top-0 left-1/4 w-[900px] h-[900px] bg-primary-500/25 rounded-full blur-[150px] animate-pulse-aurora"></div>
        <div
          className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-secondary-500/25 rounded-full blur-[150px] animate-pulse-aurora"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-accent-500/25 rounded-full blur-[150px] animate-pulse-aurora"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Patterns superposés */}
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
      </div>

      {/* Particules flottantes massives */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animation: `float ${
                5 + Math.random() * 15
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Rayons lumineux animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-primary-500/30 to-transparent rotate-12 animate-pulse"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent -rotate-12 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container principal avec glassmorphism spectaculaire */}
        <div className="relative">
          {/* Effet de lueur géante derrière */}
          <div className="absolute -inset-8 bg-gradient-aurora opacity-30 blur-[120px] animate-pulse-aurora"></div>

          {/* Card principale mega premium */}
          <div className="relative backdrop-blur-2xl bg-white/5 border-2 border-white/10 rounded-[3rem] overflow-hidden shadow-glow-aurora">
            {/* Pattern de fond */}
            <div className="absolute inset-0 dot-pattern opacity-5"></div>

            {/* Gradient overlay animé */}
            <div className="absolute inset-0 bg-gradient-aurora opacity-5 animate-aurora-wave bg-[length:200%_100%]"></div>

            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="max-w-4xl mx-auto">
                {/* Header spectaculaire */}
                <div className="text-center space-y-8 mb-12 animate-fadeIn">
                  {/* Badge premium avec effet de pulsation */}
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full group hover:border-accent-500/50 transition-all cursor-pointer">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent-500 blur-xl opacity-50 animate-pulse"></div>
                      <Rocket className="w-5 h-5 text-accent-400 relative animate-float" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      Rejoignez 10,000+ professionnels
                    </span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                      <div
                        className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.6s" }}
                      ></div>
                    </div>
                  </div>

                  {/* Titre mega spectaculaire */}
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-white">Prêt à décrocher</span>
                    <br />
                    <span className="relative inline-block mt-2">
                      <span className="bg-gradient-aurora bg-clip-text text-transparent animate-shimmer-aurora bg-[length:200%_100%]">
                        votre emploi de rêve ?
                      </span>
                      {/* Effets de lueur sous le texte */}
                      <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-aurora blur-3xl opacity-60"></div>

                      {/* Particules autour du texte */}
                      <div className="absolute -top-2 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float"></div>
                      <div
                        className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-secondary-400 rounded-full animate-float"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute -bottom-2 left-3/4 w-2 h-2 bg-accent-400 rounded-full animate-float"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    Créez votre compte gratuitement et accédez à des centaines
                    d'opportunités
                    <span className="text-white font-semibold">
                      {" "}
                      dès aujourd'hui
                    </span>
                  </p>
                </div>

                {/* CTA Buttons ultra premium */}
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn"
                  style={{ animationDelay: "0.2s" }}
                >
                  {/* Bouton principal mega spectaculaire */}
                  <Link
                    to="/inscription"
                    className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105"
                  >
                    {/* Gradient de fond animé */}
                    <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

                    {/* Effet de lueur massive */}
                    <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover:opacity-100 blur-3xl transition-opacity"></div>

                    {/* Border lumineux */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/30"></div>

                    {/* Contenu */}
                    <span className="relative flex items-center justify-center gap-3 text-white">
                      <Sparkles className="w-6 h-6 animate-pulse" />
                      Créer mon compte candidat
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>

                    {/* Particules au hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-float"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </Link>

                  {/* Bouton secondaire glassmorphism */}
                  <Link
                    to="/recruteur/inscription"
                    className="group relative px-10 py-5 backdrop-blur-xl bg-white/10 border-2 border-white/20 rounded-2xl font-bold text-lg hover:bg-white/15 hover:border-white/30 transition-all text-white"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <TrendingUp className="w-6 h-6 text-primary-400" />
                      Espace recruteurs
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>

                {/* Features grid */}
                <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fadeIn"
                  style={{ animationDelay: "0.4s" }}
                >
                  {features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} index={index} />
                  ))}
                </div>

                {/* Séparateur premium */}
                <div className="relative h-px my-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-aurora opacity-30 blur-sm"></div>
                </div>

                {/* Témoignages carrousel */}
                <div
                  className="animate-fadeIn"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-2xl font-bold text-white">
                        4.9/5
                      </span>
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <p className="text-gray-400">
                      Ce que disent nos utilisateurs
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                      <TestimonialCard
                        key={index}
                        testimonial={testimonial}
                        index={index}
                        isHovered={hoveredTestimonial === index}
                        onHover={() => setHoveredTestimonial(index)}
                        onLeave={() => setHoveredTestimonial(null)}
                      />
                    ))}
                  </div>
                </div>

                {/* Trust badges */}
                <div
                  className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-gray-500 animate-fadeIn"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Gratuit et sans engagement</span>
                  </div>
                  <div className="w-px h-4 bg-gray-700"></div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary-400" />
                    <span>Données 100% sécurisées</span>
                  </div>
                  <div className="w-px h-4 bg-gray-700"></div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-secondary-400" />
                    <span>10,000+ utilisateurs actifs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Border animation shimmer */}
            <div className="absolute inset-0 rounded-[3rem] pointer-events-none">
              <div className="absolute inset-0 rounded-[3rem] border-2 border-transparent bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-transparent blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-accent-500/20 to-transparent blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Border effect en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full bg-gradient-to-r from-transparent via-primary-500/50 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
      </div>
    </section>
  );
}

// Composant FeatureItem
function FeatureItem({ feature, index }: { feature: any; index: number }) {
  const Icon = feature.icon;

  return (
    <div
      className="group flex items-center gap-3 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
    >
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-aurora opacity-30 blur-lg group-hover:blur-xl transition-all"></div>
        <div className="relative w-10 h-10 bg-gradient-aurora rounded-xl flex items-center justify-center shadow-glow-cyan group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {feature.text}
      </span>
    </div>
  );
}

// Composant TestimonialCard
function TestimonialCard({
  testimonial,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  testimonial: any;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="group relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Effet de lueur derrière */}
      <div
        className={`absolute -inset-2 bg-gradient-aurora opacity-0 ${
          isHovered ? "opacity-20" : ""
        } blur-2xl transition-all duration-500 rounded-3xl`}
      ></div>

      {/* Card */}
      <div
        className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 ${
          isHovered ? "scale-105 border-white/20 shadow-glow-cyan" : ""
        }`}
      >
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        {/* Texte */}
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          "{testimonial.text}"
        </p>

        {/* Auteur */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-aurora rounded-xl flex items-center justify-center text-2xl shadow-glow-cyan">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              {testimonial.name}
            </p>
            <p className="text-gray-400 text-xs">
              {testimonial.role} • {testimonial.company}
            </p>
          </div>
        </div>

        {/* Quote icon décoratif */}
        <div className="absolute top-4 right-4 text-6xl text-white/5 font-serif leading-none">
          "
        </div>
      </div>
    </div>
  );
}
