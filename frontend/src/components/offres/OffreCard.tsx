import { Link } from "react-router-dom";
import {
  MapPin,
  DollarSign,
  Briefcase,
  Building2,
  Clock,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import { useState } from "react";
import {
  offreService,
  type OffreEmploiResponse,
} from "../../services/offreEmploi.service";

interface OffreCardProps {
  offre: OffreEmploiResponse;
  index: number;
}

export default function OffreCard({ offre, index }: OffreCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Extraire les compétences (max 3)
  const competences = offre.competencesRequises?.split(",").slice(0, 3) || [];

  // Calculer les jours restants
  const daysRemaining = offreService.getDaysRemaining(offre.dateExpiration);

  // Gradient rotatif selon l'index
  const gradients = [
    "from-primary-500 to-cyan-500",
    "from-secondary-500 to-violet-500",
    "from-accent-500 to-pink-500",
    "from-cyan-500 to-primary-500",
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <Link
      to={`/offres/${offre.id}`}
      className="group block animate-fadeIn relative"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de lueur derrière la card */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-3xl pointer-events-none`}
      ></div>

      {/* Card principale */}
      <div className="relative h-full backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1 shadow-glow-aurora group-hover:shadow-glow-cyan-lg cursor-pointer group-hover:bg-white/5">
        {/* Pattern de fond */}
        <div className="absolute inset-0 dot-pattern opacity-5"></div>

        {/* Gradient overlay au hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        {/* Badge "Nouveau" si récent */}
        {daysRemaining && daysRemaining > 25 && (
          <div className="absolute top-4 right-4 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-500 blur-lg opacity-50 animate-pulse"></div>
              <div className="relative px-3 py-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full text-xs font-bold text-white shadow-glow-pink flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                NOUVEAU
              </div>
            </div>
          </div>
        )}

        {/* Contenu */}
        <div className="relative p-6 space-y-4">
          {/* Header avec logo entreprise */}
          <div className="flex items-start gap-4">
            {/* Logo entreprise avec effet 3D */}
            <div className="relative flex-shrink-0 group/logo">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30 blur-xl group-hover:blur-2xl transition-all`}
              ></div>
              <div
                className={`relative w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                <Building2 className="w-8 h-8 text-white" />

                {/* Ring orbital */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl scale-110 opacity-0 group-hover/logo:opacity-100 group-hover/logo:scale-125 transition-all duration-700"></div>
              </div>
            </div>

            {/* Info entreprise et titre */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                {offre.titre}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                <Building2 className="w-3.5 h-3.5" />
                <span className="font-medium">{offre.entrepriseNom}</span>
              </div>
            </div>
          </div>

          {/* Tags de compétences */}
          {competences.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {competences.map((comp, i) => (
                <div
                  key={i}
                  className="group/tag relative px-3 py-1.5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 hover:border-white/20 transition-all overflow-hidden"
                >
                  {/* Gradient au hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover/tag:opacity-10 transition-opacity`}
                  ></div>
                  <span className="relative">{comp.trim()}</span>
                </div>
              ))}
            </div>
          )}

          {/* Séparateur décoratif */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Informations principales en grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Localisation */}
            <InfoItem
              icon={MapPin}
              label={offre.localisation || "Non spécifié"}
              gradient={gradient}
            />

            {/* Type de contrat */}
            <InfoItem
              icon={Briefcase}
              label={offre.typeContrat}
              gradient={gradient}
            />

            {/* Salaire */}
            {offre.salaire && (
              <InfoItem
                icon={DollarSign}
                label={offreService.formatSalary(offre.salaire)}
                gradient={gradient}
                highlight
              />
            )}

            {/* Candidatures */}
            <InfoItem
              icon={Users}
              label={`${offre.nombreCandidatures} candidat${
                offre.nombreCandidatures > 1 ? "s" : ""
              }`}
              gradient={gradient}
            />
          </div>

          {/* Footer avec stats et CTA */}
          <div className="flex items-center justify-between pt-2">
            {/* Jours restants */}
            {daysRemaining && daysRemaining > 0 && (
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                <span>
                  {daysRemaining < 7 && (
                    <span className="text-accent-400 font-semibold">
                      Urgent -{" "}
                    </span>
                  )}
                  {daysRemaining}j restants
                </span>
              </div>
            )}

            {/* Bouton d'action */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-all ml-auto">
              <span>Voir l'offre</span>
              {/* <Link to={`/offres/${offre.id}`}> */}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Border animation shimmer */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
        </div>

        {/* Particules décoratives au hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${gradient} rounded-full animate-float`}
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

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div
            className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${gradient} opacity-20 blur-3xl rounded-full`}
          ></div>
        </div>
      </div>
    </Link>
  );
}

// Composant InfoItem
function InfoItem({ icon: Icon, label, gradient, highlight = false }: any) {
  return (
    <div className="flex items-center gap-2 text-sm group/info">
      <div
        className={`w-8 h-8 bg-gradient-to-br ${gradient} opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/info:opacity-30 transition-opacity`}
      >
        <Icon
          className={`w-4 h-4 ${highlight ? "text-white" : "text-gray-300"}`}
        />
      </div>
      <span
        className={`${
          highlight ? "text-white font-semibold" : "text-gray-400"
        } group-hover/info:text-gray-300 transition-colors truncate`}
      >
        {label}
      </span>
    </div>
  );
}
