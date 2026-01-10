import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Briefcase,
  Building2,
  Clock,
  Users,
  Calendar,
  Send,
  Bookmark,
  Share2,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";
import {
  offreService,
  type OffreEmploiResponse,
} from "../services/offreEmploi.service";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function OffreDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [offre, setOffre] = useState<OffreEmploiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (id) {
      loadOffre(parseInt(id));
    }
  }, [id]);

  const loadOffre = async (offreId: number) => {
    try {
      setLoading(true);
      const data = await offreService.getById(offreId);
      setOffre(data);
    } catch (error) {
      console.error("Erreur lors du chargement de l'offre:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!offre) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Offre non trouvée
          </h2>
          <button
            onClick={() => navigate("/offres")}
            className="px-6 py-3 bg-gradient-aurora rounded-xl text-white font-medium hover:scale-105 transition-transform"
          >
            Retour aux offres
          </button>
        </div>
      </div>
    );
  }

  const competences = offre.competencesRequises?.split(",") || [];
  const daysRemaining = offreService.getDaysRemaining(offre.dateExpiration);

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section avec background spectaculaire */}
      <section className="relative py-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-950 to-dark"></div>
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse-aurora"></div>
          <div
            className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-secondary-500/20 rounded-full blur-[120px] animate-pulse-aurora"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bouton retour */}
          <button
            onClick={() => navigate("/offres")}
            className="group flex items-center gap-2 mb-8 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux offres
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Card principale ultra premium */}
              <div className="relative group animate-fadeIn">
                {/* Effet de lueur */}
                <div className="absolute -inset-2 bg-gradient-aurora opacity-20 blur-3xl group-hover:opacity-30 transition-opacity rounded-3xl"></div>

                <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-glow-aurora">
                  {/* Header avec logo */}
                  <div className="flex items-start gap-6 mb-8">
                    {/* Logo entreprise mega premium */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-aurora opacity-40 blur-2xl animate-pulse"></div>
                      <div className="relative w-24 h-24 bg-gradient-aurora rounded-3xl flex items-center justify-center shadow-glow-cyan-lg">
                        <Building2 className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    {/* Infos principales */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h1 className="text-3xl font-bold text-white mb-2">
                            {offre.titre}
                          </h1>
                          <div className="flex items-center gap-3 text-gray-400">
                            <Building2 className="w-5 h-5" />
                            <span className="text-lg font-medium text-white">
                              {offre.entrepriseNom}
                            </span>
                          </div>
                        </div>

                        {/* Badge statut */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-green-500 blur-lg opacity-50 animate-pulse"></div>
                          <div className="relative px-4 py-2 bg-green-500/20 text-green-400 rounded-xl border border-green-500/30 font-semibold text-sm">
                            Active
                          </div>
                        </div>
                      </div>

                      {/* Quick info grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <QuickInfo
                          icon={MapPin}
                          label={offre.localisation || "Non spécifié"}
                        />
                        <QuickInfo icon={Briefcase} label={offre.typeContrat} />
                        {offre.salaire && (
                          <QuickInfo
                            icon={DollarSign}
                            label={offreService.formatSalary(offre.salaire)}
                            highlight
                          />
                        )}
                        {daysRemaining && daysRemaining > 0 && (
                          <QuickInfo
                            icon={Clock}
                            label={`${daysRemaining} jours restants`}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-6">
                    <SectionTitle icon={Target} title="Description du poste" />
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {offre.description}
                    </p>
                  </div>

                  {/* Compétences requises */}
                  {competences.length > 0 && (
                    <div className="mt-8 space-y-4">
                      <SectionTitle icon={Award} title="Compétences requises" />
                      <div className="flex flex-wrap gap-3">
                        {competences.map((comp, i) => (
                          <div
                            key={i}
                            className="group/tag relative px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl hover:border-primary-500/50 transition-all overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/tag:opacity-10 transition-opacity"></div>
                            <div className="relative flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary-400" />
                              <span className="text-sm font-medium text-white">
                                {comp.trim()}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Informations complémentaires */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    <InfoCard
                      icon={Calendar}
                      title="Date de publication"
                      value={new Date(offre.datePublication).toLocaleDateString(
                        "fr-FR",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    />
                    <InfoCard
                      icon={Users}
                      title="Candidatures"
                      value={`${offre.nombreCandidatures} candidat${
                        offre.nombreCandidatures > 1 ? "s" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card ultra premium */}
              <div
                className="relative group sticky top-24 animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute -inset-2 bg-gradient-aurora opacity-30 blur-3xl group-hover:opacity-40 transition-opacity rounded-3xl"></div>

                <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-glow-aurora">
                  {/* Bouton principal */}
                  <Link
                    to="/inscription"
                    className="group/btn relative block mb-4 px-6 py-4 rounded-2xl font-bold overflow-hidden transition-all hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>
                    <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity"></div>
                    <span className="relative flex items-center justify-center gap-2 text-white">
                      <Send className="w-5 h-5" />
                      Postuler maintenant
                    </span>
                  </Link>

                  {/* Actions secondaires */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setIsSaved(!isSaved)}
                      className={`flex items-center justify-center gap-2 px-4 py-3 backdrop-blur-xl border rounded-xl font-medium transition-all ${
                        isSaved
                          ? "bg-primary-500/20 border-primary-500/50 text-primary-300"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`}
                      />
                      <span className="text-sm">Sauvegarder</span>
                    </button>

                    <button className="flex items-center justify-center gap-2 px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white font-medium transition-all">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Partager</span>
                    </button>
                  </div>

                  {/* Stats motivantes */}
                  <div className="mt-6 p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-2xl font-bold text-white">85%</p>
                        <p className="text-xs text-gray-400">Taux de réponse</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Cette entreprise répond généralement en moins de 48h
                    </p>
                  </div>
                </div>
              </div>

              {/* Offres similaires */}
              <div
                className="relative group animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-accent-400" />
                    <h3 className="text-lg font-bold text-white">
                      Offres similaires
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Découvrez d'autres opportunités qui pourraient vous
                    intéresser
                  </p>
                  <Link
                    to="/offres"
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Voir toutes les offres
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Composant QuickInfo
function QuickInfo({ icon: Icon, label, highlight = false }: any) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        className={`w-5 h-5 ${
          highlight ? "text-primary-400" : "text-gray-400"
        }`}
      />
      <span
        className={`text-sm ${
          highlight ? "text-white font-semibold" : "text-gray-300"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

// Composant SectionTitle
function SectionTitle({ icon: Icon, title }: any) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-aurora rounded-xl flex items-center justify-center shadow-glow-cyan">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h2 className="text-xl font-bold text-white">{title}</h2>
    </div>
  );
}

// Composant InfoCard
function InfoCard({ icon: Icon, title, value }: any) {
  return (
    <div className="group/card backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-aurora opacity-20 rounded-xl flex items-center justify-center group-hover/card:opacity-30 transition-opacity">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-0.5">{title}</p>
          <p className="text-sm font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}
