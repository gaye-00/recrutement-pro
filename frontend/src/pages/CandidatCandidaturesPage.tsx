import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building2,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Filter,
  Search,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Eye,
  Download,
  ExternalLink,
} from "lucide-react";
import type { AuthResponse } from "../services/authService";
import type { StatutCandidature } from "../services/types/types";
import {
  candidatureService,
  type CandidatureResponse,
} from "../services/candidat.service";

interface Props {
  user: AuthResponse;
}

const CandidatCandidaturesPage = ({ user }: Props) => {
  const [candidatures, setCandidatures] = useState<CandidatureResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<StatutCandidature | "ALL">("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCandidature, setSelectedCandidature] =
    useState<CandidatureResponse | null>(null);

  useEffect(() => {
    loadCandidatures();
  }, [user.id]);

  const loadCandidatures = async () => {
    try {
      const data = await candidatureService.getByCandidat(user.id);
      setCandidatures(data);
    } catch (error) {
      console.error("Erreur chargement candidatures:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCandidatures = candidatures.filter((c) => {
    const matchesFilter = filter === "ALL" || c.statut === filter;
    const matchesSearch =
      c.offreTitre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.offreEntreprise.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: candidatures.length,
    enAttente: candidatures.filter((c) => c.statut === "EN_ATTENTE").length,
    enCours: candidatures.filter((c) => c.statut === "EN_COURS").length,
    acceptees: candidatures.filter((c) => c.statut === "ACCEPTEE").length,
    refusees: candidatures.filter((c) => c.statut === "REFUSEE").length,
  };

  const getStatusConfig = (statut: StatutCandidature) => {
    const configs = {
      EN_ATTENTE: {
        icon: Clock,
        label: "En attente",
        color: "from-amber-500 to-orange-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-400",
      },
      EN_COURS: {
        icon: TrendingUp,
        label: "En cours",
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
      },
      ACCEPTEE: {
        icon: CheckCircle2,
        label: "Acceptée",
        color: "from-emerald-500 to-green-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
      },
      REFUSEE: {
        icon: XCircle,
        label: "Refusée",
        color: "from-rose-500 to-red-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
        text: "text-rose-400",
      },
      ENTRETIEN_PLANIFIE: {
        icon: MessageSquare,
        label: "Entretien planifié",
        color: "from-violet-500 to-purple-500",
        bg: "bg-violet-500/10",
        border: "border-violet-500/30",
        text: "text-violet-400",
      },
    };
    return configs[statut];
  };

  const filterOptions: { value: StatutCandidature | "ALL"; label: string }[] = [
    { value: "ALL", label: "Toutes" },
    { value: "EN_ATTENTE", label: "En attente" },
    { value: "EN_COURS", label: "En cours" },
    { value: "ENTRETIEN_PLANIFIE", label: "Entretien" },
    { value: "ACCEPTEE", label: "Acceptées" },
    { value: "REFUSEE", label: "Refusées" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-indigo-500/30 rounded-full" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-indigo-500 rounded-full animate-spin" />
          </div>
          <p className="text-slate-400 font-medium">
            Chargement de vos candidatures...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Mes Candidatures
            </h1>
          </div>
          <p className="text-slate-400 ml-14">
            Suivez l'évolution de vos candidatures en temps réel
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
        >
          {[
            {
              label: "Total",
              value: stats.total,
              gradient: "from-slate-500 to-slate-600",
            },
            {
              label: "En attente",
              value: stats.enAttente,
              gradient: "from-amber-500 to-orange-500",
            },
            {
              label: "En cours",
              value: stats.enCours,
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              label: "Acceptées",
              value: stats.acceptees,
              gradient: "from-emerald-500 to-green-500",
            },
            {
              label: "Refusées",
              value: stats.refusees,
              gradient: "from-rose-500 to-red-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition-all duration-300">
                <p className="text-slate-500 text-sm font-medium mb-1">
                  {stat.label}
                </p>
                <p
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Rechercher par poste ou entreprise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  filter === option.value
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Candidatures Grid */}
        <AnimatePresence mode="popLayout">
          {filteredCandidatures.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">
                Aucune candidature trouvée
              </h3>
              <p className="text-slate-500">
                {searchTerm || filter !== "ALL"
                  ? "Essayez de modifier vos filtres"
                  : "Commencez à postuler pour voir vos candidatures ici"}
              </p>
            </motion.div>
          ) : (
            <motion.div layout className="grid gap-4">
              {filteredCandidatures.map((candidature, index) => {
                const statusConfig = getStatusConfig(candidature.statut);
                const StatusIcon = statusConfig.icon;

                return (
                  <motion.div
                    key={candidature.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedCandidature(candidature)}
                    className="group relative cursor-pointer"
                  >
                    {/* Hover Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${statusConfig.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl`}
                    />

                    <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:translate-x-1">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Company Logo Placeholder */}
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${statusConfig.color} p-0.5 flex-shrink-0`}
                        >
                          <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                            <Building2 className="w-7 h-7 text-slate-400" />
                          </div>
                        </div>

                        {/* Main Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors truncate">
                                {candidature.offreTitre}
                              </h3>
                              <p className="text-slate-400 flex items-center gap-2">
                                <Building2 className="w-4 h-4" />
                                {candidature.offreEntreprise}
                              </p>
                            </div>

                            {/* Status Badge */}
                            <div
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig.bg} ${statusConfig.border} border flex-shrink-0`}
                            >
                              <StatusIcon
                                className={`w-4 h-4 ${statusConfig.text}`}
                              />
                              <span
                                className={`text-sm font-medium ${statusConfig.text}`}
                              >
                                {statusConfig.label}
                              </span>
                            </div>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              Postulé le{" "}
                              {candidatureService.formatDate(
                                candidature.datePostulation
                              )}
                            </span>
                            {candidature.cvUrl && (
                              <span className="flex items-center gap-1.5">
                                <FileText className="w-4 h-4" />
                                CV joint
                              </span>
                            )}
                            {candidature.lettreMotivation && (
                              <span className="flex items-center gap-1.5">
                                <MessageSquare className="w-4 h-4" />
                                Lettre de motivation
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow */}
                        <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all flex-shrink-0 hidden lg:block" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedCandidature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCandidature(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {(() => {
                  const statusConfig = getStatusConfig(
                    selectedCandidature.statut
                  );
                  const StatusIcon = statusConfig.icon;

                  return (
                    <>
                      {/* Modal Header */}
                      <div
                        className={`relative p-8 bg-gradient-to-br ${statusConfig.color} rounded-t-3xl`}
                      >
                        <div className="absolute inset-0 bg-black/30 rounded-t-3xl" />
                        <div className="relative">
                          <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                            <StatusIcon className="w-4 h-4" />
                            {statusConfig.label}
                          </div>
                          <h2 className="text-2xl font-bold text-white mb-1">
                            {selectedCandidature.offreTitre}
                          </h2>
                          <p className="text-white/80 flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            {selectedCandidature.offreEntreprise}
                          </p>
                        </div>
                      </div>

                      {/* Modal Content */}
                      <div className="p-8 space-y-6">
                        {/* Timeline */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Clock className="w-5 h-5 text-indigo-400" />
                            Chronologie
                          </h3>
                          <div className="relative pl-8 border-l-2 border-slate-800 space-y-6">
                            <div className="relative">
                              <div className="absolute -left-[25px] w-4 h-4 bg-indigo-500 rounded-full border-4 border-slate-900" />
                              <p className="text-sm text-slate-500">
                                Postulation
                              </p>
                              <p className="text-white font-medium">
                                {candidatureService.formatDate(
                                  selectedCandidature.datePostulation
                                )}
                              </p>
                            </div>
                            <div className="relative">
                              <div
                                className={`absolute -left-[25px] w-4 h-4 bg-gradient-to-r ${statusConfig.color} rounded-full border-4 border-slate-900`}
                              />
                              <p className="text-sm text-slate-500">
                                Statut actuel
                              </p>
                              <p className={`font-medium ${statusConfig.text}`}>
                                {statusConfig.label}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Lettre de motivation */}
                        {selectedCandidature.lettreMotivation && (
                          <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                              <MessageSquare className="w-5 h-5 text-indigo-400" />
                              Lettre de motivation
                            </h3>
                            <div className="bg-slate-800/50 rounded-xl p-4 text-slate-300 text-sm leading-relaxed">
                              {selectedCandidature.lettreMotivation}
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3 pt-4">
                          {selectedCandidature.cvUrl && (
                            <a
                              href={selectedCandidature.cvUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-white transition-colors"
                            >
                              <Download className="w-4 h-4" />
                              Télécharger CV
                            </a>
                          )}
                          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-white transition-colors">
                            <Eye className="w-4 h-4" />
                            Voir l'offre
                          </button>
                          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white transition-colors ml-auto">
                            <ExternalLink className="w-4 h-4" />
                            Contacter le recruteur
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CandidatCandidaturesPage;
