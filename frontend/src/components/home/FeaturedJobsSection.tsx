import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Users,
  ArrowRight,
  Sparkles,
  Building2,
} from "lucide-react";
import { offreService } from "../../services/offreEmploi.service";

export default function FeaturedJobsSection() {
  const [offres, setOffres] = useState<OffreEmploiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    loadOffres();
  }, []);

  const loadOffres = async () => {
    try {
      setLoading(true);
      const data = await offreService.getActives();
      // Limiter à 6 offres
      setOffres(data.slice(0, 6));
    } catch (error) {
      console.error("Erreur lors du chargement des offres:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour obtenir un gradient aléatoire
  const getRandomGradient = (index: number) => {
    const gradients = [
      "from-primary-500 to-primary-600",
      "from-secondary-500 to-secondary-600",
      "from-accent-500 to-accent-600",
      "from-cyan-500 to-cyan-600",
      "from-violet-500 to-violet-600",
      "from-pink-500 to-pink-600",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-950 to-dark"></div>

      {/* Aurora effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-[120px] animate-pulse-aurora"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] animate-pulse-aurora"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grille pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6 animate-fadeIn">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <div className="absolute inset-0 blur-md bg-accent-400 opacity-50 animate-pulse"></div>
            </div>
            <span className="text-sm font-medium text-gray-300">
              Offres du moment
            </span>
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
          </div>

          {/* Titre */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Découvrez les</span>
            <br />
            <span className="bg-gradient-aurora bg-clip-text text-transparent animate-shimmer-aurora bg-[length:200%_100%]">
              meilleures opportunités
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 leading-relaxed">
            Des centaines d'offres d'emploi vous attendent. Trouvez celle qui
            correspond à vos aspirations.
          </p>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} index={i} />
            ))}
          </div>
        ) : (
          <>
            {/* Grid des offres */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {offres.map((offre, index) => (
                <JobCard
                  key={offre.id}
                  offre={offre}
                  index={index}
                  gradient={getRandomGradient(index)}
                  isHovered={hoveredId === offre.id}
                  onHover={() => setHoveredId(offre.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>

            {/* CTA pour voir toutes les offres */}
            <div
              className="flex justify-center animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                to="/offres"
                className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all hover:scale-105"
              >
                {/* Gradient de fond animé */}
                <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

                {/* Effet de lueur */}
                <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"></div>

                {/* Contenu */}
                <span className="relative flex items-center gap-2 text-white">
                  Voir toutes les offres
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// Composant JobCard avec effets premium
function JobCard({
  offre,
  index,
  gradient,
  isHovered,
  onHover,
  onLeave,
}: {
  offre: OffreEmploiResponse;
  index: number;
  gradient: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  // Extraire les tags de compétences
  const competences = offre.competencesRequises?.split(",").slice(0, 3) || [];

  // Calculer les jours restants
  const daysRemaining = offreService.getDaysRemaining(offre.dateExpiration);

  return (
    <Link
      to={`/offres/${offre.id}`}
      className="group block animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Effet de lueur derrière la card */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-3xl`}
      ></div>

      {/* Card principale */}
      <div className="relative h-full backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 shadow-glow-aurora group-hover:shadow-glow-cyan-lg">
        {/* Pattern de fond */}
        <div className="absolute inset-0 grid-pattern opacity-5"></div>

        {/* Gradient overlay au hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        {/* Badge "Nouveau" si récent */}
        {daysRemaining && daysRemaining > 25 && (
          <div className="absolute top-4 right-4 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-500 blur-lg opacity-50 animate-pulse"></div>
              <div className="relative px-3 py-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full text-xs font-bold text-white shadow-glow-pink">
                NOUVEAU
              </div>
            </div>
          </div>
        )}

        {/* Contenu de la card */}
        <div className="relative p-6 space-y-4">
          {/* Header avec logo entreprise */}
          <div className="flex items-start gap-4">
            {/* Logo entreprise */}
            <div className="relative flex-shrink-0">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30 blur-xl`}
              ></div>
              <div
                className={`relative w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-glow-cyan group-hover:shadow-glow-cyan-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Info entreprise */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                {offre.titre}
              </h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {offre.entrepriseNom}
              </p>
            </div>
          </div>

          {/* Tags de compétences */}
          {competences.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {competences.map((comp, i) => (
                <div
                  key={i}
                  className="px-3 py-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 group-hover:border-white/20 transition-all"
                >
                  {comp.trim()}
                </div>
              ))}
            </div>
          )}

          {/* Informations principales */}
          <div className="space-y-3">
            {/* Localisation */}
            <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              <div
                className={`w-8 h-8 bg-gradient-to-br ${gradient} opacity-20 rounded-lg flex items-center justify-center`}
              >
                <MapPin className="w-4 h-4 text-primary-400" />
              </div>
              <span>{offre.localisation}</span>
            </div>

            {/* Salaire */}
            {offre.salaire && (
              <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                <div
                  className={`w-8 h-8 bg-gradient-to-br ${gradient} opacity-20 rounded-lg flex items-center justify-center`}
                >
                  <DollarSign className="w-4 h-4 text-secondary-400" />
                </div>
                <span className="font-semibold text-white">
                  {offreService.formatSalary(offre.salaire)}
                </span>
              </div>
            )}

            {/* Type de contrat */}
            <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              <div
                className={`w-8 h-8 bg-gradient-to-br ${gradient} opacity-20 rounded-lg flex items-center justify-center`}
              >
                <Briefcase className="w-4 h-4 text-accent-400" />
              </div>
              <span>{offre.typeContrat}</span>
            </div>
          </div>

          {/* Séparateur */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Statistiques */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              {/* Candidatures */}
              <div className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                <span>
                  {offre.nombreCandidatures} candidat
                  {offre.nombreCandidatures > 1 ? "s" : ""}
                </span>
              </div>

              {/* Jours restants */}
              {daysRemaining && daysRemaining > 0 && (
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{daysRemaining}j restants</span>
                </div>
              )}
            </div>

            {/* Bouton d'action */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors">
              <span>Postuler</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Border animation au hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
        </div>

        {/* Particules décoratives */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div
            className={`absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-float`}
          ></div>
          <div
            className={`absolute top-8 right-12 w-1.5 h-1.5 bg-primary-400 rounded-full animate-float`}
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className={`absolute top-12 right-8 w-1 h-1 bg-secondary-400 rounded-full animate-float`}
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </Link>
  );
}

// Composant SkeletonCard pour le loading
function SkeletonCard({ index }: { index: number }) {
  return (
    <div
      className="animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 space-y-4">
        {/* Header skeleton */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-white/10 rounded-2xl animate-pulse"></div>
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-white/10 rounded-lg animate-pulse w-3/4"></div>
            <div className="h-4 bg-white/10 rounded-lg animate-pulse w-1/2"></div>
          </div>
        </div>

        {/* Tags skeleton */}
        <div className="flex gap-2">
          <div className="h-7 w-20 bg-white/10 rounded-lg animate-pulse"></div>
          <div className="h-7 w-16 bg-white/10 rounded-lg animate-pulse"></div>
          <div className="h-7 w-24 bg-white/10 rounded-lg animate-pulse"></div>
        </div>

        {/* Info skeleton */}
        <div className="space-y-3">
          <div className="h-8 bg-white/10 rounded-lg animate-pulse"></div>
          <div className="h-8 bg-white/10 rounded-lg animate-pulse"></div>
          <div className="h-8 bg-white/10 rounded-lg animate-pulse"></div>
        </div>

        {/* Footer skeleton */}
        <div className="h-px bg-white/10"></div>
        <div className="flex justify-between">
          <div className="h-5 w-24 bg-white/10 rounded animate-pulse"></div>
          <div className="h-5 w-20 bg-white/10 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
