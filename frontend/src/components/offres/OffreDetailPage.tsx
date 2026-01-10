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
  AlertCircle,
  ExternalLink,
  Globe,
  Star,
  Zap,
  Shield,
} from "lucide-react";
import {
  offreService,
  type OffreEmploiResponse,
} from "../../services/offreEmploi.service";
import LoadingSpinner from "../common/LoadingSpinner";

export default function OffreDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [offre, setOffre] = useState<OffreEmploiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

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
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Erreur lors du chargement de l'offre:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: offre?.titre,
        text: `Découvrez cette offre d'emploi chez ${offre?.entrepriseNom}`,
        url: window.location.href,
      });
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!offre) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/5 border border-white/10 mb-6">
            <AlertCircle className="w-12 h-12 text-gray-500" />
          </div>
          <h2 className="text-3xl font-bold text-white">Offre non trouvée</h2>
          <p className="text-gray-400">
            Cette offre n'existe pas ou a été supprimée
          </p>
          <button
            onClick={() => navigate("/offres")}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>
            <span className="relative text-white">Retour aux offres</span>
          </button>
        </div>
      </div>
    );
  }

  const competences =
    offre.competencesRequises?.split(",").filter(Boolean) || [];
  const daysRemaining = offreService.getDaysRemaining(offre.dateExpiration);
  const isUrgent = daysRemaining !== null && daysRemaining < 7;

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section avec background spectaculaire */}
      <section className="relative py-12 overflow-hidden">
        {/* Background multicouches */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-950 to-dark"></div>
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-500/25 rounded-full blur-[140px] animate-pulse-aurora"></div>
          <div
            className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-secondary-500/25 rounded-full blur-[140px] animate-pulse-aurora"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[140px] animate-pulse-aurora"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grille pattern */}
        <div className="absolute inset-0 dot-pattern opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bouton retour premium */}
          <button
            onClick={() => navigate("/offres")}
            className="group flex items-center gap-2 mb-8 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all animate-fadeIn"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Retour aux offres</span>
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonne principale (2/3) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Card principale ultra premium */}
              <div className="relative group animate-fadeIn">
                {/* Effet de lueur géante */}
                <div className="absolute -inset-3 bg-gradient-aurora opacity-20 blur-[60px] group-hover:opacity-30 transition-opacity rounded-[3rem]"></div>

                <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[3rem] shadow-glow-aurora overflow-hidden">
                  {/* Pattern de fond */}
                  <div className="absolute inset-0 dot-pattern opacity-5"></div>

                  <div className="relative p-8 lg:p-10">
                    {/* Header avec logo entreprise */}
                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                      {/* Logo entreprise mega premium avec animations */}
                      <div className="relative group/logo">
                        <div className="absolute inset-0 bg-gradient-aurora opacity-40 blur-3xl animate-pulse"></div>
                        <div
                          className="absolute inset-0 bg-gradient-aurora opacity-20 blur-2xl animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>

                        <div className="relative w-28 h-28 bg-gradient-aurora rounded-3xl flex items-center justify-center shadow-glow-cyan-lg group-hover/logo:scale-110 group-hover/logo:rotate-6 transition-all duration-500">
                          <Building2
                            className="w-14 h-14 text-white"
                            strokeWidth={2}
                          />

                          {/* Ring orbital */}
                          <div className="absolute inset-0 border-2 border-white/30 rounded-3xl scale-110 opacity-0 group-hover/logo:opacity-100 group-hover/logo:scale-125 transition-all duration-700"></div>

                          {/* Particules décoratives */}
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity animate-pulse"></div>
                          <div
                            className="absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity animate-pulse"
                            style={{ animationDelay: "0.3s" }}
                          ></div>
                        </div>
                      </div>

                      {/* Informations principales */}
                      <div className="flex-1">
                        {/* Badge urgent si nécessaire */}
                        {isUrgent && (
                          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 bg-accent-500/20 border border-accent-500/30 rounded-full animate-pulse">
                            <Zap className="w-4 h-4 text-accent-400 fill-accent-400" />
                            <span className="text-xs font-bold text-accent-300">
                              URGENT - {daysRemaining}j restants
                            </span>
                          </div>
                        )}

                        {/* Titre et entreprise */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                          {offre.titre}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <div className="flex items-center gap-2 text-lg">
                            <Building2 className="w-5 h-5 text-gray-400" />
                            <span className="font-semibold text-white">
                              {offre.entrepriseNom}
                            </span>
                          </div>

                          {/* Badge statut avec animation */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-500 blur-lg opacity-50 animate-pulse"></div>
                            <div className="relative px-4 py-1.5 bg-green-500/20 text-green-400 rounded-xl border border-green-500/30 font-semibold text-sm flex items-center gap-1.5">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              Active
                            </div>
                          </div>
                        </div>

                        {/* Quick info grid premium */}
                        <div className="grid grid-cols-2 gap-3">
                          <QuickInfoPremium
                            icon={MapPin}
                            label={offre.localisation || "Non spécifié"}
                            gradient="from-primary-500 to-cyan-500"
                          />
                          <QuickInfoPremium
                            icon={Briefcase}
                            label={offre.typeContrat}
                            gradient="from-secondary-500 to-violet-500"
                          />

                          {offre.salaire && (
                            <QuickInfoPremium
                              icon={DollarSign}
                              label={offreService.formatSalary(offre.salaire)}
                              gradient="from-accent-500 to-pink-500"
                              highlight
                            />
                          )}

                          {daysRemaining && daysRemaining > 0 && (
                            <QuickInfoPremium
                              icon={Clock}
                              label={`${daysRemaining} jours restants`}
                              gradient="from-cyan-500 to-primary-500"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Séparateur décoratif */}
                    <div className="relative h-px my-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-aurora opacity-30 blur-sm"></div>
                    </div>

                    {/* Description du poste */}
                    <div className="space-y-6 mb-8">
                      <SectionTitle
                        icon={Target}
                        title="Description du poste"
                        gradient="from-primary-500 to-cyan-500"
                      />
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                          {offre.description}
                        </p>
                      </div>
                    </div>

                    {/* Compétences requises avec animations */}
                    {competences.length > 0 && (
                      <div className="space-y-6">
                        <SectionTitle
                          icon={Award}
                          title="Compétences requises"
                          gradient="from-secondary-500 to-violet-500"
                        />
                        <div className="grid sm:grid-cols-2 gap-3">
                          {competences.map((comp, i) => (
                            <CompetenceTag
                              key={i}
                              competence={comp.trim()}
                              index={i}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Border shimmer animation */}
                  <div className="absolute inset-0 rounded-[3rem] pointer-events-none">
                    <div className="absolute inset-0 rounded-[3rem] border-2 border-transparent bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-aurora bg-[length:200%_100%]"></div>
                  </div>
                </div>
              </div>

              {/* Informations complémentaires */}
              <div
                className="grid sm:grid-cols-2 gap-6 animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              >
                <InfoCardPremium
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
                  gradient="from-primary-500 to-cyan-500"
                />

                <InfoCardPremium
                  icon={Users}
                  title="Candidatures reçues"
                  value={`${offre.nombreCandidatures} candidat${
                    offre.nombreCandidatures > 1 ? "s" : ""
                  }`}
                  gradient="from-secondary-500 to-violet-500"
                />
              </div>

              {/* À propos de l'entreprise */}
              <div
                className="relative group animate-fadeIn"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="absolute -inset-1 bg-gradient-aurora opacity-10 blur-2xl group-hover:opacity-20 transition-opacity rounded-3xl"></div>

                <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-8">
                  <SectionTitle
                    icon={Building2}
                    title={`À propos de ${offre.entrepriseNom}`}
                    gradient="from-accent-500 to-pink-500"
                  />

                  <p className="text-gray-400 leading-relaxed mt-6">
                    {offre.entrepriseNom} est l'une des entreprises leaders dans
                    son secteur au Sénégal. Rejoignez une équipe dynamique et
                    innovante qui place le développement professionnel de ses
                    collaborateurs au cœur de ses priorités.
                  </p>

                  <div className="flex items-center gap-4 mt-6">
                    <button className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors">
                      <Globe className="w-4 h-4" />
                      Voir le site web
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar (1/3) */}
            <div className="space-y-6">
              {/* CTA Card ultra premium - Sticky */}
              <div
                className="relative group sticky top-24 animate-fadeIn"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute -inset-2 bg-gradient-aurora opacity-30 blur-3xl group-hover:opacity-50 transition-opacity rounded-3xl"></div>

                <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-glow-aurora">
                  {/* Bouton principal mega premium */}
                  <Link
                    to="/inscription"
                    className="group/btn relative block mb-4 px-6 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105"
                  >
                    {/* Gradient animé */}
                    <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

                    {/* Effet de lueur massive */}
                    <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/btn:opacity-100 blur-2xl transition-opacity"></div>

                    {/* Border lumineux */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/30"></div>

                    {/* Contenu */}
                    <span className="relative flex items-center justify-center gap-3 text-white">
                      <Send className="w-6 h-6" />
                      Postuler maintenant
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </span>

                    {/* Particules au hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-float"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </Link>

                  {/* Actions secondaires */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <ActionButton
                      icon={Bookmark}
                      label="Sauvegarder"
                      isActive={isSaved}
                      onClick={() => setIsSaved(!isSaved)}
                    />

                    <ActionButton
                      icon={Share2}
                      label="Partager"
                      onClick={handleShare}
                    />
                  </div>

                  {/* Séparateur */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

                  {/* Stats entreprise premium */}
                  <div className="space-y-3">
                    <StatItem
                      icon={TrendingUp}
                      label="Taux de réponse"
                      value="85%"
                      gradient="from-green-500 to-emerald-500"
                    />

                    <StatItem
                      icon={Clock}
                      label="Temps de réponse"
                      value="< 48h"
                      gradient="from-primary-500 to-cyan-500"
                    />

                    <StatItem
                      icon={Shield}
                      label="Entreprise vérifiée"
                      value="Certifiée"
                      gradient="from-secondary-500 to-violet-500"
                    />
                  </div>
                </div>
              </div>

              {/* Conseils pour postuler */}
              <div
                className="relative group animate-fadeIn"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="absolute -inset-1 bg-gradient-aurora opacity-10 blur-2xl group-hover:opacity-20 transition-opacity rounded-3xl"></div>

                <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-pink-500 rounded-xl flex items-center justify-center shadow-glow-pink">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Conseils pour postuler
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    <TipItem text="Personnalisez votre CV selon l'offre" />
                    <TipItem text="Rédigez une lettre de motivation convaincante" />
                    <TipItem text="Mettez en avant vos compétences clés" />
                    <TipItem text="Vérifiez vos coordonnées" />
                  </ul>
                </div>
              </div>

              {/* Offres similaires */}
              <div
                className="relative group animate-fadeIn"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-primary-500 rounded-xl flex items-center justify-center shadow-glow-cyan">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Offres similaires
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-4">
                    Découvrez d'autres opportunités qui correspondent à votre
                    profil
                  </p>

                  <Link
                    to="/offres"
                    className="group/link flex items-center justify-between px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <span className="text-sm font-medium text-white">
                      Voir toutes les offres
                    </span>
                    <ArrowLeft className="w-4 h-4 text-primary-400 rotate-180 group-hover/link:translate-x-1 transition-transform" />
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

// ========== COMPOSANTS PREMIUM ==========

// Composant QuickInfoPremium avec gradient
function QuickInfoPremium({
  icon: Icon,
  label,
  gradient,
  highlight = false,
}: any) {
  return (
    <div className="group/info flex items-center gap-3 p-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all">
      <div
        className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center shadow-glow-cyan flex-shrink-0 group-hover/info:scale-110 transition-transform`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span
        className={`text-sm ${
          highlight ? "text-white font-bold" : "text-gray-300"
        } group-hover/info:text-white transition-colors truncate`}
      >
        {label}
      </span>
    </div>
  );
}

// Composant SectionTitle avec icône gradient
function SectionTitle({ icon: Icon, title, gradient }: any) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-glow-cyan`}
      >
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
  );
}

// Composant CompetenceTag avec animation
function CompetenceTag({
  competence,
  index,
}: {
  competence: string;
  index: number;
}) {
  return (
    <div
      className="group/tag relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-primary-500/50 transition-all cursor-pointer overflow-hidden"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Gradient au hover */}
      <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/tag:opacity-10 transition-opacity"></div>

      {/* Contenu */}
      <div className="relative flex items-center gap-3">
        <div className="w-6 h-6 bg-gradient-aurora rounded-lg flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-medium text-white">{competence}</span>
      </div>
    </div>
  );
}

// Composant InfoCardPremium
function InfoCardPremium({ icon: Icon, title, value, gradient }: any) {
  return (
    <div className="group/card relative">
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover/card:opacity-20 blur-2xl transition-opacity rounded-2xl`}
      ></div>

      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-glow-cyan group-hover/card:scale-110 transition-transform`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">{title}</p>
            <p className="text-base font-bold text-white">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant ActionButton
function ActionButton({ icon: Icon, label, isActive = false, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center gap-2 px-4 py-3 backdrop-blur-xl border rounded-xl font-medium transition-all group/action ${
        isActive
          ? "bg-primary-500/20 border-primary-500/50 text-primary-300"
          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white"
      }`}
    >
      <Icon
        className={`w-4 h-4 ${
          isActive ? "fill-current" : ""
        } group-hover/action:scale-110 transition-transform`}
      />
      <span className="text-sm">{label}</span>
    </button>
  );
}

// Composant StatItem
function StatItem({ icon: Icon, label, value, gradient }: any) {
  return (
    <div className="flex items-center gap-3 p-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
      <div
        className={`w-10 h-10 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-glow-cyan flex-shrink-0`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );
}

// Composant TipItem
function TipItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-400">
      <CheckCircle className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}
