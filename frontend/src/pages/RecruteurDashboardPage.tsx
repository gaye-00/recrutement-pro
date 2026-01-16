import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Calendar,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Building2,
  Eye,
  ChevronRight,
  Bell,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Target,
  Zap,
  Award,
  UserCheck,
  FileText,
  Video,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import type { AuthResponse } from "../services/authService";

interface Props {
  user: AuthResponse;
}

// ===== DONNÉES STATIQUES DE TEST =====
const statsData = [
  {
    id: 1,
    label: "Offres actives",
    value: 12,
    change: +2,
    trend: "up",
    icon: Briefcase,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: 2,
    label: "Candidatures reçues",
    value: 148,
    change: +23,
    trend: "up",
    icon: Users,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    label: "Entretiens planifiés",
    value: 8,
    change: +5,
    trend: "up",
    icon: Calendar,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    label: "Recrutements ce mois",
    value: 4,
    change: -1,
    trend: "down",
    icon: Award,
    gradient: "from-rose-500 to-pink-500",
  },
];

const recentCandidatures = [
  {
    id: 1,
    candidat: {
      nom: "Diallo",
      prenom: "Aminata",
      email: "aminata.diallo@email.com",
      avatar: null,
    },
    offre: "Développeur Full Stack",
    datePostulation: "2025-01-15",
    statut: "EN_ATTENTE",
    score: 92,
  },
  {
    id: 2,
    candidat: {
      nom: "Ndiaye",
      prenom: "Moussa",
      email: "moussa.ndiaye@email.com",
      avatar: null,
    },
    offre: "Chef de Projet Digital",
    datePostulation: "2025-01-14",
    statut: "EN_COURS",
    score: 87,
  },
  {
    id: 3,
    candidat: {
      nom: "Sow",
      prenom: "Fatou",
      email: "fatou.sow@email.com",
      avatar: null,
    },
    offre: "UX Designer Senior",
    datePostulation: "2025-01-14",
    statut: "ENTRETIEN_PLANIFIE",
    score: 95,
  },
  {
    id: 4,
    candidat: {
      nom: "Ba",
      prenom: "Ibrahima",
      email: "ibrahima.ba@email.com",
      avatar: null,
    },
    offre: "Data Analyst",
    datePostulation: "2025-01-13",
    statut: "ACCEPTEE",
    score: 89,
  },
  {
    id: 5,
    candidat: {
      nom: "Fall",
      prenom: "Aissatou",
      email: "aissatou.fall@email.com",
      avatar: null,
    },
    offre: "Développeur Full Stack",
    datePostulation: "2025-01-12",
    statut: "REFUSEE",
    score: 65,
  },
];

const offresActives = [
  {
    id: 1,
    titre: "Développeur Full Stack",
    localisation: "Dakar, Sénégal",
    typeContrat: "CDI",
    candidatures: 45,
    vues: 234,
    datePublication: "2025-01-01",
    urgent: true,
  },
  {
    id: 2,
    titre: "Chef de Projet Digital",
    localisation: "Dakar, Sénégal",
    typeContrat: "CDI",
    candidatures: 28,
    vues: 156,
    datePublication: "2025-01-05",
    urgent: false,
  },
  {
    id: 3,
    titre: "UX Designer Senior",
    localisation: "Remote",
    typeContrat: "CDD",
    candidatures: 32,
    vues: 198,
    datePublication: "2025-01-08",
    urgent: true,
  },
  {
    id: 4,
    titre: "Data Analyst",
    localisation: "Dakar, Sénégal",
    typeContrat: "CDI",
    candidatures: 19,
    vues: 87,
    datePublication: "2025-01-10",
    urgent: false,
  },
];

const entretiensAujourdhui = [
  {
    id: 1,
    candidat: { nom: "Sow", prenom: "Fatou" },
    offre: "UX Designer Senior",
    heure: "09:30",
    type: "VIDEO",
    statut: "CONFIRME",
  },
  {
    id: 2,
    candidat: { nom: "Diop", prenom: "Oumar" },
    offre: "Développeur Full Stack",
    heure: "14:00",
    type: "PRESENTIEL",
    statut: "EN_ATTENTE",
  },
  {
    id: 3,
    candidat: { nom: "Gueye", prenom: "Mariama" },
    offre: "Chef de Projet Digital",
    heure: "16:30",
    type: "TELEPHONIQUE",
    statut: "CONFIRME",
  },
];

const notifications = [
  {
    id: 1,
    message: "Nouvelle candidature pour Développeur Full Stack",
    time: "Il y a 5 min",
    type: "candidature",
  },
  {
    id: 2,
    message: "Entretien confirmé avec Fatou Sow",
    time: "Il y a 1h",
    type: "entretien",
  },
  {
    id: 3,
    message: "3 candidatures en attente de review",
    time: "Il y a 2h",
    type: "alert",
  },
];

const performanceData = [
  { month: "Août", candidatures: 85, recrutements: 2 },
  { month: "Sept", candidatures: 102, recrutements: 3 },
  { month: "Oct", candidatures: 120, recrutements: 4 },
  { month: "Nov", candidatures: 95, recrutements: 2 },
  { month: "Déc", candidatures: 135, recrutements: 5 },
  { month: "Jan", candidatures: 148, recrutements: 4 },
];

// ===== COMPOSANT PRINCIPAL =====
const RecruteurDashboardPage = ({ user }: Props) => {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "week" | "month" | "year"
  >("month");
  const [showNotifications, setShowNotifications] = useState(false);

  const getStatusConfig = (statut: string) => {
    const configs: Record<
      string,
      { label: string; color: string; bg: string; border: string }
    > = {
      EN_ATTENTE: {
        label: "En attente",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
      },
      EN_COURS: {
        label: "En cours",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
      },
      ENTRETIEN_PLANIFIE: {
        label: "Entretien",
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/30",
      },
      ACCEPTEE: {
        label: "Acceptée",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
      },
      REFUSEE: {
        label: "Refusée",
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
      },
    };
    return configs[statut] || configs.EN_ATTENTE;
  };

  const getEntretienTypeIcon = (type: string) => {
    const icons: Record<string, typeof Video> = {
      VIDEO: Video,
      PRESENTIEL: MapPin,
      TELEPHONIQUE: Phone,
    };
    return icons[type] || Video;
  };

  const maxCandidatures = Math.max(
    ...performanceData.map((d) => d.candidatures)
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl shadow-lg shadow-indigo-500/25">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Tableau de bord
                </h1>
                <p className="text-slate-500 text-sm">
                  Bienvenue, {user.prenom} 👋
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-64 transition-all"
              />
            </div>

            {/* Period Selector */}
            <div className="flex bg-slate-900/80 border border-slate-800 rounded-xl p-1">
              {(["week", "month", "year"] as const).map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPeriod === period
                      ? "bg-indigo-500 text-white shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {period === "week"
                    ? "Semaine"
                    : period === "month"
                      ? "Mois"
                      : "Année"}
                </button>
              ))}
            </div>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-3 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-slate-700 transition-all"
              >
                <Bell className="w-5 h-5 text-slate-400" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-4 border-b border-slate-800">
                      <h3 className="font-semibold text-white">
                        Notifications
                      </h3>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className="p-4 border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors cursor-pointer"
                        >
                          <p className="text-sm text-slate-300">
                            {notif.message}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {notif.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
                />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 bg-gradient-to-br ${stat.gradient} rounded-xl shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${
                        stat.trend === "up"
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      {Math.abs(stat.change)}
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="xl:col-span-2 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                  Performance de recrutement
                </h2>
                <p className="text-slate-500 text-sm">
                  Évolution des candidatures et recrutements
                </p>
              </div>
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <MoreHorizontal className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Chart */}
            <div className="h-64 flex items-end gap-3">
              {performanceData.map((data, index) => (
                <div
                  key={data.month}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div className="w-full flex flex-col items-center gap-1 h-48 justify-end">
                    {/* Candidatures Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{
                        height: `${(data.candidatures / maxCandidatures) * 100}%`,
                      }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg relative group cursor-pointer"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.candidatures} candidatures
                      </div>
                    </motion.div>
                  </div>
                  <span className="text-xs text-slate-500">{data.month}</span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded" />
                <span className="text-sm text-slate-400">Candidatures</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded" />
                <span className="text-sm text-slate-400">Recrutements</span>
              </div>
            </div>
          </motion.div>

          {/* Entretiens du jour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                Entretiens aujourd'hui
              </h2>
              <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium">
                {entretiensAujourdhui.length}
              </span>
            </div>

            <div className="space-y-4">
              {entretiensAujourdhui.map((entretien, index) => {
                const TypeIcon = getEntretienTypeIcon(entretien.type);
                return (
                  <motion.div
                    key={entretien.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group relative bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 text-center">
                        <p className="text-xl font-bold text-white">
                          {entretien.heure}
                        </p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white truncate">
                          {entretien.candidat.prenom} {entretien.candidat.nom}
                        </p>
                        <p className="text-sm text-slate-400 truncate">
                          {entretien.offre}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-slate-700/50 rounded-lg">
                          <TypeIcon className="w-4 h-4 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button className="w-full mt-4 py-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
              Voir tous les entretiens
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Candidatures récentes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                Candidatures récentes
              </h2>
              <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors">
                Voir tout
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {recentCandidatures.map((candidature, index) => {
                const statusConfig = getStatusConfig(candidature.statut);
                return (
                  <motion.div
                    key={candidature.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + index * 0.05 }}
                    className="group flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/60 rounded-xl transition-all cursor-pointer"
                  >
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-semibold">
                        {candidature.candidat.prenom[0]}
                        {candidature.candidat.nom[0]}
                      </div>
                      {/* Score Badge */}
                      <div
                        className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          candidature.score >= 90
                            ? "bg-emerald-500 text-white"
                            : candidature.score >= 75
                              ? "bg-amber-500 text-white"
                              : "bg-slate-600 text-slate-300"
                        }`}
                      >
                        {candidature.score}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate">
                        {candidature.candidat.prenom} {candidature.candidat.nom}
                      </p>
                      <p className="text-sm text-slate-400 truncate">
                        {candidature.offre}
                      </p>
                    </div>

                    {/* Status */}
                    <div
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.border} border ${statusConfig.color}`}
                    >
                      {statusConfig.label}
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Offres actives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-violet-400" />
                Offres actives
              </h2>
              <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors">
                Gérer
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {offresActives.map((offre, index) => (
                <motion.div
                  key={offre.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="group flex items-center gap-4 p-4 bg-slate-800/30 hover:bg-slate-800/60 rounded-xl transition-all cursor-pointer"
                >
                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    {offre.urgent && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full flex items-center justify-center">
                        <Zap className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-white truncate">
                        {offre.titre}
                      </p>
                      <span className="px-2 py-0.5 bg-slate-700 rounded text-xs text-slate-300">
                        {offre.typeContrat}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {offre.localisation}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-white">
                        {offre.candidatures}
                      </p>
                      <p className="text-xs text-slate-500">Candidats</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-slate-400">
                        {offre.vues}
                      </p>
                      <p className="text-xs text-slate-500">Vues</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </motion.div>
              ))}
            </div>

            {/* Quick Add */}
            <button className="w-full mt-4 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25">
              <Sparkles className="w-4 h-4" />
              Publier une nouvelle offre
            </button>
          </motion.div>
        </div>

        {/* Quick Actions Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            {
              icon: FileText,
              label: "Créer offre",
              gradient: "from-indigo-500 to-violet-500",
            },
            {
              icon: UserCheck,
              label: "Évaluer candidats",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              icon: Calendar,
              label: "Planifier entretien",
              gradient: "from-amber-500 to-orange-500",
            },
            {
              icon: Mail,
              label: "Messages",
              gradient: "from-rose-500 to-pink-500",
            },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + index * 0.05 }}
                className="group relative p-4 bg-slate-900/80 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}
                />
                <div className="relative flex flex-col items-center gap-3">
                  <div
                    className={`p-3 bg-gradient-to-br ${action.gradient} rounded-xl shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {action.label}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RecruteurDashboardPage;
