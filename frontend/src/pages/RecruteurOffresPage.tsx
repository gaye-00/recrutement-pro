import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit3,
  Trash2,
  Users,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronDown,
  ExternalLink,
  Copy,
  Zap,
  TrendingUp,
  Building2,
  FileText,
  X,
  Sparkles,
  Globe,
  Banknote,
  Timer,
  Target,
  BarChart3,
} from "lucide-react";
import type { AuthResponse } from "../services/authService";

interface Props {
  user: AuthResponse;
}

type StatutOffre = "ACTIVE" | "EXPIREE" | "POURVUE" | "BROUILLON";
type TypeContrat = "CDI" | "CDD" | "STAGE" | "FREELANCE" | "ALTERNANCE";

interface Offre {
  id: number;
  titre: string;
  description: string;
  competencesRequises: string;
  typeContrat: TypeContrat;
  salaire: { min: number; max: number } | null;
  localisation: string;
  remote: boolean;
  datePublication: string;
  dateExpiration: string;
  statut: StatutOffre;
  candidatures: number;
  vues: number;
  nouveauxCandidats: number;
  urgent: boolean;
}

// ===== DONNÉES STATIQUES =====
const offresData: Offre[] = [
  {
    id: 1,
    titre: "Développeur Full Stack Senior",
    description:
      "Nous recherchons un développeur expérimenté pour rejoindre notre équipe produit...",
    competencesRequises: "React, Node.js, TypeScript, PostgreSQL, Docker",
    typeContrat: "CDI",
    salaire: { min: 45000, max: 65000 },
    localisation: "Dakar, Sénégal",
    remote: true,
    datePublication: "2025-01-01",
    dateExpiration: "2025-02-01",
    statut: "ACTIVE",
    candidatures: 45,
    vues: 892,
    nouveauxCandidats: 8,
    urgent: true,
  },
  {
    id: 2,
    titre: "Chef de Projet Digital",
    description:
      "Pilotez nos projets de transformation digitale avec une équipe dynamique...",
    competencesRequises:
      "Gestion de projet, Agile/Scrum, Communication, Leadership",
    typeContrat: "CDI",
    salaire: { min: 50000, max: 70000 },
    localisation: "Dakar, Sénégal",
    remote: false,
    datePublication: "2025-01-05",
    dateExpiration: "2025-02-15",
    statut: "ACTIVE",
    candidatures: 28,
    vues: 456,
    nouveauxCandidats: 3,
    urgent: false,
  },
  {
    id: 3,
    titre: "UX/UI Designer Senior",
    description:
      "Créez des expériences utilisateur exceptionnelles pour nos produits...",
    competencesRequises:
      "Figma, Adobe XD, Design System, Prototypage, User Research",
    typeContrat: "CDD",
    salaire: { min: 35000, max: 50000 },
    localisation: "Remote",
    remote: true,
    datePublication: "2025-01-08",
    dateExpiration: "2025-01-25",
    statut: "ACTIVE",
    candidatures: 32,
    vues: 567,
    nouveauxCandidats: 5,
    urgent: true,
  },
  {
    id: 4,
    titre: "Data Analyst",
    description:
      "Analysez nos données pour éclairer les décisions stratégiques...",
    competencesRequises: "Python, SQL, Power BI, Excel avancé, Statistics",
    typeContrat: "CDI",
    salaire: { min: 40000, max: 55000 },
    localisation: "Dakar, Sénégal",
    remote: true,
    datePublication: "2025-01-10",
    dateExpiration: "2025-02-10",
    statut: "ACTIVE",
    candidatures: 19,
    vues: 234,
    nouveauxCandidats: 2,
    urgent: false,
  },
  {
    id: 5,
    titre: "Développeur Mobile React Native",
    description: "Développez nos applications mobiles cross-platform...",
    competencesRequises: "React Native, TypeScript, Redux, API REST",
    typeContrat: "CDI",
    salaire: { min: 42000, max: 58000 },
    localisation: "Dakar, Sénégal",
    remote: true,
    datePublication: "2024-12-01",
    dateExpiration: "2025-01-10",
    statut: "POURVUE",
    candidatures: 67,
    vues: 1203,
    nouveauxCandidats: 0,
    urgent: false,
  },
  {
    id: 6,
    titre: "Stagiaire Marketing Digital",
    description: "Rejoignez notre équipe marketing pour un stage formateur...",
    competencesRequises: "Marketing digital, Réseaux sociaux, Google Analytics",
    typeContrat: "STAGE",
    salaire: null,
    localisation: "Dakar, Sénégal",
    remote: false,
    datePublication: "2024-11-15",
    dateExpiration: "2024-12-31",
    statut: "EXPIREE",
    candidatures: 89,
    vues: 1567,
    nouveauxCandidats: 0,
    urgent: false,
  },
  {
    id: 7,
    titre: "DevOps Engineer",
    description: "Automatisez et optimisez notre infrastructure cloud...",
    competencesRequises: "AWS, Kubernetes, Terraform, CI/CD, Linux",
    typeContrat: "CDI",
    salaire: { min: 55000, max: 75000 },
    localisation: "Remote",
    remote: true,
    datePublication: "",
    dateExpiration: "",
    statut: "BROUILLON",
    candidatures: 0,
    vues: 0,
    nouveauxCandidats: 0,
    urgent: false,
  },
];

const statsGlobales = {
  totalOffres: 7,
  offresActives: 4,
  totalCandidatures: 280,
  tauxConversion: 12.5,
};

// ===== COMPOSANT PRINCIPAL =====
const RecruteurOffresPage = ({ user }: Props) => {
  const [offres, setOffres] = useState<Offre[]>(offresData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatut, setFilterStatut] = useState<StatutOffre | "ALL">("ALL");
  const [filterContrat, setFilterContrat] = useState<TypeContrat | "ALL">(
    "ALL"
  );
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOffre, setSelectedOffre] = useState<Offre | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const filteredOffres = offres.filter((offre) => {
    const matchesSearch =
      offre.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offre.localisation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatut =
      filterStatut === "ALL" || offre.statut === filterStatut;
    const matchesContrat =
      filterContrat === "ALL" || offre.typeContrat === filterContrat;
    return matchesSearch && matchesStatut && matchesContrat;
  });

  const getStatutConfig = (statut: StatutOffre) => {
    const configs = {
      ACTIVE: {
        label: "Active",
        icon: CheckCircle2,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        gradient: "from-emerald-500 to-teal-500",
      },
      EXPIREE: {
        label: "Expirée",
        icon: XCircle,
        color: "text-slate-400",
        bg: "bg-slate-500/10",
        border: "border-slate-500/30",
        gradient: "from-slate-500 to-slate-600",
      },
      POURVUE: {
        label: "Pourvue",
        icon: CheckCircle2,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        gradient: "from-blue-500 to-cyan-500",
      },
      BROUILLON: {
        label: "Brouillon",
        icon: AlertCircle,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        gradient: "from-amber-500 to-orange-500",
      },
    };
    return configs[statut];
  };

  const getContratColor = (contrat: TypeContrat) => {
    const colors = {
      CDI: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      CDD: "bg-violet-500/20 text-violet-300 border-violet-500/30",
      STAGE: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      FREELANCE: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      ALTERNANCE: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    };
    return colors[contrat];
  };

  const formatSalaire = (salaire: { min: number; max: number } | null) => {
    if (!salaire) return "À négocier";
    return `${(salaire.min / 1000).toFixed(0)}k - ${(salaire.max / 1000).toFixed(0)}k €/an`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "—";
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date(dateString));
  };

  const getDaysRemaining = (dateExpiration: string) => {
    if (!dateExpiration) return null;
    const today = new Date();
    const expDate = new Date(dateExpiration);
    const diff = Math.ceil(
      (expDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diff;
  };

  const handleDeleteOffre = (id: number) => {
    setOffres(offres.filter((o) => o.id !== id));
    setActiveMenu(null);
  };

  const handleDuplicateOffre = (offre: Offre) => {
    const newOffre: Offre = {
      ...offre,
      id: Math.max(...offres.map((o) => o.id)) + 1,
      titre: `${offre.titre} (copie)`,
      statut: "BROUILLON",
      datePublication: "",
      dateExpiration: "",
      candidatures: 0,
      vues: 0,
      nouveauxCandidats: 0,
    };
    setOffres([newOffre, ...offres]);
    setActiveMenu(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg shadow-violet-500/25">
              <Briefcase className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Gestion des Offres
              </h1>
              <p className="text-slate-500">
                Gérez vos offres d'emploi et suivez les candidatures
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl font-semibold shadow-lg shadow-violet-500/25 transition-all"
          >
            <Plus className="w-5 h-5" />
            Nouvelle offre
          </motion.button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            {
              label: "Total offres",
              value: statsGlobales.totalOffres,
              icon: Briefcase,
              gradient: "from-violet-500 to-purple-500",
            },
            {
              label: "Offres actives",
              value: statsGlobales.offresActives,
              icon: Target,
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              label: "Candidatures",
              value: statsGlobales.totalCandidatures,
              icon: Users,
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              label: "Taux conversion",
              value: `${statsGlobales.tauxConversion}%`,
              icon: TrendingUp,
              gradient: "from-amber-500 to-orange-500",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="group relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
                />
                <div className="relative flex items-center gap-4">
                  <div
                    className={`p-3 bg-gradient-to-br ${stat.gradient} rounded-xl`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Rechercher une offre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                showFilters
                  ? "bg-violet-500/20 border-violet-500/50 text-violet-300"
                  : "bg-slate-800/50 border-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              <Filter className="w-5 h-5" />
              Filtres
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Filter Options */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-slate-800 flex flex-wrap gap-4">
                  {/* Statut Filter */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-500">Statut</label>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          "ALL",
                          "ACTIVE",
                          "POURVUE",
                          "EXPIREE",
                          "BROUILLON",
                        ] as const
                      ).map((statut) => (
                        <button
                          key={statut}
                          onClick={() => setFilterStatut(statut)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                            filterStatut === statut
                              ? "bg-violet-500 text-white"
                              : "bg-slate-800 text-slate-400 hover:text-white"
                          }`}
                        >
                          {statut === "ALL"
                            ? "Tous"
                            : getStatutConfig(statut).label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contrat Filter */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-slate-500">
                      Type de contrat
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          "ALL",
                          "CDI",
                          "CDD",
                          "STAGE",
                          "FREELANCE",
                          "ALTERNANCE",
                        ] as const
                      ).map((contrat) => (
                        <button
                          key={contrat}
                          onClick={() => setFilterContrat(contrat)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                            filterContrat === contrat
                              ? "bg-violet-500 text-white"
                              : "bg-slate-800 text-slate-400 hover:text-white"
                          }`}
                        >
                          {contrat === "ALL" ? "Tous" : contrat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-500">
            <span className="text-white font-semibold">
              {filteredOffres.length}
            </span>{" "}
            offre{filteredOffres.length > 1 ? "s" : ""} trouvée
            {filteredOffres.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Offres Grid */}
        <AnimatePresence mode="popLayout">
          {filteredOffres.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">
                Aucune offre trouvée
              </h3>
              <p className="text-slate-500 mb-6">
                Modifiez vos filtres ou créez une nouvelle offre
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-6 py-3 bg-violet-500 hover:bg-violet-600 rounded-xl font-medium transition-colors"
              >
                Créer une offre
              </button>
            </motion.div>
          ) : (
            <motion.div layout className="grid gap-4">
              {filteredOffres.map((offre, index) => {
                const statutConfig = getStatutConfig(offre.statut);
                const StatutIcon = statutConfig.icon;
                const daysRemaining = getDaysRemaining(offre.dateExpiration);

                return (
                  <motion.div
                    key={offre.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.03 }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${statutConfig.gradient} opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-500`}
                    />

                    <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all">
                      <div className="flex flex-col xl:flex-row xl:items-center gap-6">
                        {/* Left: Main Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-4">
                            {/* Icon */}
                            <div
                              className={`relative flex-shrink-0 w-14 h-14 bg-gradient-to-br ${statutConfig.gradient} rounded-xl p-0.5`}
                            >
                              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-slate-400" />
                              </div>
                              {offre.urgent && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
                                  <Zap className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>

                            {/* Title & Meta */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors truncate">
                                  {offre.titre}
                                </h3>
                                <span
                                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${getContratColor(offre.typeContrat)}`}
                                >
                                  {offre.typeContrat}
                                </span>
                                <div
                                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${statutConfig.bg} ${statutConfig.border} border ${statutConfig.color}`}
                                >
                                  <StatutIcon className="w-3.5 h-3.5" />
                                  {statutConfig.label}
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-4 h-4" />
                                  {offre.localisation}
                                </span>
                                {offre.remote && (
                                  <span className="flex items-center gap-1.5 text-cyan-400">
                                    <Globe className="w-4 h-4" />
                                    Remote possible
                                  </span>
                                )}
                                <span className="flex items-center gap-1.5">
                                  <Banknote className="w-4 h-4" />
                                  {formatSalaire(offre.salaire)}
                                </span>
                                {offre.datePublication && (
                                  <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    Publiée le{" "}
                                    {formatDate(offre.datePublication)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Center: Stats */}
                        <div className="flex items-center gap-6 xl:gap-8">
                          <div className="text-center">
                            <div className="flex items-center gap-1.5 justify-center">
                              <p className="text-2xl font-bold text-white">
                                {offre.candidatures}
                              </p>
                              {offre.nouveauxCandidats > 0 && (
                                <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded">
                                  +{offre.nouveauxCandidats}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500">
                              Candidatures
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-slate-400">
                              {offre.vues}
                            </p>
                            <p className="text-xs text-slate-500">Vues</p>
                          </div>
                          {daysRemaining !== null &&
                            offre.statut === "ACTIVE" && (
                              <div className="text-center">
                                <p
                                  className={`text-2xl font-bold ${daysRemaining <= 7 ? "text-rose-400" : "text-slate-400"}`}
                                >
                                  {daysRemaining}j
                                </p>
                                <p className="text-xs text-slate-500">
                                  Restants
                                </p>
                              </div>
                            )}
                        </div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedOffre(offre)}
                            className="p-2.5 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all"
                            title="Voir les détails"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            className="p-2.5 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all"
                            title="Modifier"
                          >
                            <Edit3 className="w-5 h-5" />
                          </button>
                          <div className="relative">
                            <button
                              onClick={() =>
                                setActiveMenu(
                                  activeMenu === offre.id ? null : offre.id
                                )
                              }
                              className="p-2.5 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all"
                            >
                              <MoreVertical className="w-5 h-5" />
                            </button>

                            <AnimatePresence>
                              {activeMenu === offre.id && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                  animate={{ opacity: 1, scale: 1, y: 0 }}
                                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                  className="absolute right-0 top-full mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-20"
                                >
                                  <button
                                    onClick={() => handleDuplicateOffre(offre)}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-left"
                                  >
                                    <Copy className="w-4 h-4" />
                                    Dupliquer
                                  </button>
                                  <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-left">
                                    <ExternalLink className="w-4 h-4" />
                                    Voir en ligne
                                  </button>
                                  <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-left">
                                    <BarChart3 className="w-4 h-4" />
                                    Statistiques
                                  </button>
                                  <div className="border-t border-slate-700" />
                                  <button
                                    onClick={() => handleDeleteOffre(offre.id)}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 transition-colors text-left"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                    Supprimer
                                  </button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>

                      {/* Skills Tags */}
                      <div className="mt-4 pt-4 border-t border-slate-800/50">
                        <div className="flex flex-wrap gap-2">
                          {offre.competencesRequises
                            .split(", ")
                            .slice(0, 5)
                            .map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-slate-800/50 rounded-lg text-xs text-slate-400"
                              >
                                {skill}
                              </span>
                            ))}
                          {offre.competencesRequises.split(", ").length > 5 && (
                            <span className="px-3 py-1 bg-slate-800/50 rounded-lg text-xs text-violet-400">
                              +
                              {offre.competencesRequises.split(", ").length - 5}
                            </span>
                          )}
                        </div>
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
          {selectedOffre && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffre(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
              >
                {(() => {
                  const statutConfig = getStatutConfig(selectedOffre.statut);

                  return (
                    <>
                      {/* Modal Header */}
                      <div
                        className={`relative p-8 bg-gradient-to-br ${statutConfig.gradient}`}
                      >
                        <div className="absolute inset-0 bg-black/40" />
                        <button
                          onClick={() => setSelectedOffre(null)}
                          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>
                        <div className="relative">
                          <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                            <span
                              className={`px-2.5 py-1 rounded-lg text-xs font-medium bg-white/20`}
                            >
                              {selectedOffre.typeContrat}
                            </span>
                            <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/20">
                              {statutConfig.label}
                            </span>
                            {selectedOffre.urgent && (
                              <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-rose-500/80 flex items-center gap-1">
                                <Zap className="w-3 h-3" />
                                Urgent
                              </span>
                            )}
                          </div>
                          <h2 className="text-2xl font-bold text-white mb-2">
                            {selectedOffre.titre}
                          </h2>
                          <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              {selectedOffre.localisation}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Banknote className="w-4 h-4" />
                              {formatSalaire(selectedOffre.salaire)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Modal Content */}
                      <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                            <Users className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">
                              {selectedOffre.candidatures}
                            </p>
                            <p className="text-xs text-slate-500">
                              Candidatures
                            </p>
                          </div>
                          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                            <Eye className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">
                              {selectedOffre.vues}
                            </p>
                            <p className="text-xs text-slate-500">Vues</p>
                          </div>
                          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
                            <TrendingUp className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-white">
                              {selectedOffre.vues > 0
                                ? (
                                    (selectedOffre.candidatures /
                                      selectedOffre.vues) *
                                    100
                                  ).toFixed(1)
                                : 0}
                              %
                            </p>
                            <p className="text-xs text-slate-500">
                              Taux conversion
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-violet-400" />
                            Description
                          </h3>
                          <p className="text-slate-300 leading-relaxed">
                            {selectedOffre.description}
                          </p>
                        </div>

                        {/* Compétences */}
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-violet-400" />
                            Compétences requises
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedOffre.competencesRequises
                              .split(", ")
                              .map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-xl text-sm text-violet-300"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="bg-slate-800/50 rounded-xl p-4">
                            <p className="text-sm text-slate-500 mb-1">
                              Date de publication
                            </p>
                            <p className="text-white font-medium">
                              {selectedOffre.datePublication
                                ? formatDate(selectedOffre.datePublication)
                                : "Non publiée"}
                            </p>
                          </div>
                          <div className="bg-slate-800/50 rounded-xl p-4">
                            <p className="text-sm text-slate-500 mb-1">
                              Date d'expiration
                            </p>
                            <p className="text-white font-medium">
                              {selectedOffre.dateExpiration
                                ? formatDate(selectedOffre.dateExpiration)
                                : "Non définie"}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">
                          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-violet-500 hover:bg-violet-600 rounded-xl font-medium transition-colors">
                            <Users className="w-5 h-5" />
                            Voir les candidatures
                          </button>
                          <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-medium transition-colors">
                            <Edit3 className="w-5 h-5" />
                            Modifier
                          </button>
                          <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-medium transition-colors">
                            <ExternalLink className="w-5 h-5" />
                            Aperçu
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

        {/* Create Modal Placeholder */}
        <AnimatePresence>
          {showCreateModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreateModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Nouvelle offre
                      </h2>
                      <p className="text-sm text-slate-500">
                        Créez une nouvelle offre d'emploi
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="p-2 hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Titre du poste
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Développeur Full Stack Senior"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Type de contrat
                      </label>
                      <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-violet-500 transition-all">
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="STAGE">Stage</option>
                        <option value="FREELANCE">Freelance</option>
                        <option value="ALTERNANCE">Alternance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-2">
                        Localisation
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Dakar, Sénégal"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Décrivez le poste et les responsabilités..."
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-400 mb-2">
                      Compétences requises
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: React, Node.js, TypeScript (séparées par des virgules)"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-medium transition-colors"
                  >
                    Annuler
                  </button>
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl font-medium transition-all shadow-lg shadow-violet-500/25">
                    Créer l'offre
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close menu */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setActiveMenu(null)}
        />
      )}
    </div>
  );
};

export default RecruteurOffresPage;
