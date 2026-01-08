import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  DollarSign,
  Clock,
  ArrowRight,
  Sparkles,
  Building2,
} from "lucide-react";

// Interface pour les offres d'emploi
interface OffreEmploiResponse {
  id: number;
  titre: string;
  entrepriseNom: string;
  localisation: string;
  salaire?: string;
  typeContrat: string;
  competencesRequises?: string;
  nombreCandidatures: number;
  dateExpiration: string;
}

// Données d'exemple (remplace par un fetch réel vers ton API)
const sampleOffres: OffreEmploiResponse[] = [
  {
    id: 1,
    titre: "Ingénieur DevOps",
    entrepriseNom: "InnoSoft",
    localisation: "Remote",
    salaire: "45k - 60k €/an",
    typeContrat: "Freelance",
    competencesRequises: "Agile, Scrum",
    nombreCandidatures: 29,
    dateExpiration: "2026-01-15",
  },
  {
    id: 2,
    titre: "Product Manager",
    entrepriseNom: "DigitalForge",
    localisation: "Berlin",
    salaire: "45k - 60k €/an",
    typeContrat: "Freelance",
    competencesRequises: "Python, ML",
    nombreCandidatures: 40,
    dateExpiration: "2026-01-29",
  },
  {
    id: 3,
    titre: "Ingénieur DevOps",
    entrepriseNom: "CodeWave",
    localisation: "Dakar",
    salaire: "60k - 80k €/an",
    typeContrat: "CDD",
    competencesRequises: "Figma, Adobe XD",
    nombreCandidatures: 42,
    dateExpiration: "2026-02-07",
  },
  {
    id: 4,
    titre: "Ingénieur DevOps",
    entrepriseNom: "TechNova",
    localisation: "Paris",
    salaire: "45k - 60k €/an",
    typeContrat: "Stage",
    competencesRequises: "Python, ML",
    nombreCandidatures: 43,
    dateExpiration: "2026-01-21",
  },
  {
    id: 5,
    titre: "Développeur Full Stack",
    entrepriseNom: "InnoSoft",
    localisation: "London",
    salaire: "45k - 60k €/an",
    typeContrat: "Freelance",
    competencesRequises: "Figma, Adobe XD",
    nombreCandidatures: 38,
    dateExpiration: "2026-01-23",
  },
  {
    id: 6,
    titre: "Développeur Full Stack",
    entrepriseNom: "ByteSphere",
    localisation: "Berlin",
    salaire: "60k - 80k €/an",
    typeContrat: "Stage",
    competencesRequises: "Figma, Adobe XD",
    nombreCandidatures: 16,
    dateExpiration: "2026-01-24",
  },
];

export default function FeaturedJobsSection() {
  const [offres, setOffres] = useState<OffreEmploiResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remplace par un appel API réel, ex. :
    // fetch('/api/offres').then(res => res.json()).then(setOffres).finally(() => setLoading(false));

    // Simulation avec données d'exemple
    const timer = setTimeout(() => {
      setOffres(sampleOffres);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-500/10 blur-[120px] rounded-full" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Opportunités Premium
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Propulsez votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              carrière
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Accédez à des postes exclusifs dans les meilleures entreprises tech.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            <AnimatePresence>
              {offres.map((offre, index) => (
                <JobCard key={offre.id} offre={offre} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <Link
            to="/offres"
            className="group relative px-10 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            aria-label="Voir toutes les offres d'emploi"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              Voir tout le catalogue <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function JobCard({
  offre,
  index,
}: {
  offre: OffreEmploiResponse;
  index: number;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Nombre d'avatars à afficher (max 3)
  const avatarCount = Math.min(3, offre.nombreCandidatures);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glow effect confiné */}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent)`,
        }}
      />
      <Link
        to={`/offres/${offre.id}`}
        className="block relative h-full"
        aria-label={`Postuler à ${offre.titre} chez ${offre.entrepriseNom}`}
      >
        <div className="h-full p-8 rounded-[2rem] bg-[#0f0f0f] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden relative">
          {/* Header avec nom d'entreprise */}
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-gray-400 uppercase">
              {offre.typeContrat}
            </div>
          </div>

          {/* Titre et entreprise */}
          <div className="space-y-2 mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {offre.titre}
            </h3>
            <p className="text-sm text-gray-400">{offre.entrepriseNom}</p>
          </div>

          {/* Compétences */}
          <div className="flex flex-wrap gap-2 mb-6">
            {offre.competencesRequises
              ?.split(",")
              .slice(0, 2)
              .map((skill, i) => (
                <span
                  key={i}
                  className="text-[11px] text-gray-400 bg-white/5 px-2 py-1 rounded-md border border-white/5"
                >
                  {skill.trim()}
                </span>
              ))}
          </div>

          {/* Infos pratiques */}
          <div className="pt-6 space-y-3 border-t border-white/5 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-primary-500" />
              <span>{offre.localisation}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <DollarSign className="w-4 h-4 text-accent-500" />
              <span className="text-white font-medium">
                {offre.salaire || "Salaire non précisé"}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Clock className="w-4 h-4 text-gray-400" />
              <span>
                Expire le{" "}
                {new Date(offre.dateExpiration).toLocaleDateString("fr-FR")}
              </span>
            </div>
          </div>

          {/* Footer avec avatars dynamiques */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center -space-x-2">
              {[...Array(avatarCount)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-white border-2 border-[#0f0f0f] flex items-center justify-center"
                >
                  <span className="text-[10px] font-bold text-black">
                    {i + 1}
                  </span>
                </div>
              ))}
              {offre.nombreCandidatures > 3 && (
                <span className="pl-4 text-[11px] text-gray-500">
                  +{offre.nombreCandidatures - 3} postulants
                </span>
              )}
            </div>
            <div
              className={`w-10 h-10 rounded-full bg-white flex items-center justify-center transform transition-all duration-500 ${
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
            >
              <ArrowRight className="w-5 h-5 text-black" />
            </div>
          </div>

          {/* Border animation */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-[2rem] transition-colors pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}

function SkeletonCard() {
  return (
    <div className="h-[400px] rounded-[2rem] bg-white/5 animate-pulse border border-white/5" />
  );
}
