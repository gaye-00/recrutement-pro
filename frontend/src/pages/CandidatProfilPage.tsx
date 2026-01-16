import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Edit3,
  Upload,
  Check,
  X,
  Camera,
  Download,
  ExternalLink,
  Sparkles,
  Shield,
  Eye,
  EyeOff,
  ChevronRight,
  Star,
  Code,
  Palette,
  Database,
  Globe,
  Linkedin,
  Github,
  Twitter,
  Plus,
  Trash2,
  Save,
  AlertCircle,
} from "lucide-react";
import type { AuthResponse } from "../services/authService";

interface Props {
  user: AuthResponse;
}

// ===== DONNÉES STATIQUES DE TEST =====
const candidatData = {
  id: 1,
  email: "ckheikh.ba@email.com",
  nom: "Ba",
  prenom: "Cheikh",
  telephone: "+221 77 123 45 67",
  adresse: "Dakar, Sénégal - Plateau",
  dateNaissance: "1995-03-15",
  photo: null,
  competences: [
    { nom: "React.js", niveau: 90 },
    { nom: "TypeScript", niveau: 85 },
    { nom: "Node.js", niveau: 80 },
    { nom: "Python", niveau: 75 },
    { nom: "PostgreSQL", niveau: 70 },
    { nom: "Docker", niveau: 65 },
    { nom: "AWS", niveau: 60 },
    { nom: "Figma", niveau: 55 },
  ],
  experience: [
    {
      id: 1,
      poste: "Développeuse Full Stack",
      entreprise: "TechCorp Sénégal",
      debut: "2022-01",
      fin: null,
      actuel: true,
      description:
        "Développement d'applications web avec React et Node.js. Lead technique sur 3 projets majeurs.",
    },
    {
      id: 2,
      poste: "Développeuse Frontend",
      entreprise: "StartupFlow",
      debut: "2020-06",
      fin: "2021-12",
      actuel: false,
      description:
        "Création d'interfaces utilisateur modernes et responsive. Mise en place du design system.",
    },
    {
      id: 3,
      poste: "Stage Développement Web",
      entreprise: "Digital Agency",
      debut: "2019-06",
      fin: "2019-12",
      actuel: false,
      description:
        "Développement de sites web pour des clients variés. Initiation aux méthodologies Agile.",
    },
  ],
  formation: [
    {
      id: 1,
      diplome: "Master en Informatique",
      etablissement: "Université Cheikh Anta Diop",
      annee: "2020",
      mention: "Très Bien",
    },
    {
      id: 2,
      diplome: "Licence en Informatique",
      etablissement: "Université Cheikh Anta Diop",
      annee: "2018",
      mention: "Bien",
    },
  ],
  certifications: [
    {
      id: 1,
      nom: "AWS Certified Developer",
      organisme: "Amazon",
      annee: "2023",
    },
    {
      id: 2,
      nom: "React Advanced Patterns",
      organisme: "Frontend Masters",
      annee: "2022",
    },
  ],
  langues: [
    { nom: "Français", niveau: "Natif" },
    { nom: "Anglais", niveau: "Courant" },
    { nom: "Wolof", niveau: "Natif" },
  ],
  reseaux: {
    linkedin: "linkedin.com/in/aminata-diallo",
    github: "github.com/aminatadiallo",
    twitter: null,
    portfolio: "aminatadiallo.dev",
  },
  cvUrl: "/uploads/cv_aminata_diallo.pdf",
  dateCreation: "2024-06-15",
  completionProfil: 85,
};

const statsCandidat = {
  candidatures: 12,
  entretiens: 4,
  vuesProfil: 156,
  tauxReponse: 67,
};

// ===== COMPOSANT PRINCIPAL =====
const CandidatProfilPage = ({ user }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showCVPreview, setShowCVPreview] = useState(false);
  const [formData, setFormData] = useState(candidatData);

  const calculateAge = (dateNaissance: string) => {
    const today = new Date();
    const birthDate = new Date(dateNaissance);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("fr-FR", {
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));
  };

  const getCompletionColor = (percentage: number) => {
    if (percentage >= 80) return "from-emerald-500 to-teal-500";
    if (percentage >= 50) return "from-amber-500 to-orange-500";
    return "from-rose-500 to-red-500";
  };

  const getSkillColor = (niveau: number) => {
    if (niveau >= 80) return "from-emerald-500 to-teal-500";
    if (niveau >= 60) return "from-blue-500 to-cyan-500";
    if (niveau >= 40) return "from-amber-500 to-orange-500";
    return "from-slate-500 to-slate-600";
  };

  const getSkillIcon = (skillName: string) => {
    const icons: Record<string, typeof Code> = {
      "React.js": Code,
      TypeScript: Code,
      "Node.js": Database,
      Python: Code,
      PostgreSQL: Database,
      Docker: Globe,
      AWS: Globe,
      Figma: Palette,
    };
    return icons[skillName] || Code;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header avec Photo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-8"
        >
          {/* Cover gradient */}
          <div className="h-48 sm:h-56 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          </div>

          {/* Profile Card */}
          <div className="relative -mt-24 sm:-mt-20 mx-4 sm:mx-8">
            <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                <div className="relative mx-auto sm:mx-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-1">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                      {formData.photo ? (
                        <img
                          src={formData.photo}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-5xl font-bold bg-gradient-to-br from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                          {formData.prenom[0]}
                          {formData.nom[0]}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-2.5 bg-indigo-500 hover:bg-indigo-600 rounded-xl shadow-lg transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {formData.prenom} {formData.nom}
                      </h1>
                      <p className="text-indigo-400 font-medium mb-3">
                        Développeuse Full Stack
                      </p>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {formData.adresse}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {calculateAge(formData.dateNaissance)} ans
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 justify-center sm:justify-end">
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                          isEditing
                            ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                            : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                        }`}
                      >
                        {isEditing ? (
                          <>
                            <Save className="w-4 h-4" />
                            Enregistrer
                          </>
                        ) : (
                          <>
                            <Edit3 className="w-4 h-4" />
                            Modifier
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Completion Bar */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-400">
                        Profil complété
                      </span>
                      <span
                        className={`text-sm font-semibold bg-gradient-to-r ${getCompletionColor(formData.completionProfil)} bg-clip-text text-transparent`}
                      >
                        {formData.completionProfil}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${formData.completionProfil}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${getCompletionColor(formData.completionProfil)} rounded-full`}
                      />
                    </div>
                    {formData.completionProfil < 100 && (
                      <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Ajoutez vos certifications pour atteindre 100%
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              label: "Candidatures",
              value: statsCandidat.candidatures,
              icon: Briefcase,
              gradient: "from-indigo-500 to-violet-500",
            },
            {
              label: "Entretiens",
              value: statsCandidat.entretiens,
              icon: Calendar,
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              label: "Vues profil",
              value: statsCandidat.vuesProfil,
              icon: Eye,
              gradient: "from-amber-500 to-orange-500",
            },
            {
              label: "Taux réponse",
              value: `${statsCandidat.tauxReponse}%`,
              icon: Star,
              gradient: "from-rose-500 to-pink-500",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + index * 0.05 }}
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-6">
            {/* Compétences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-indigo-400" />
                  Compétences
                </h2>
                {isEditing && (
                  <button className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formData.competences.map((skill, index) => {
                  const SkillIcon = getSkillIcon(skill.nom);
                  return (
                    <motion.div
                      key={skill.nom}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.05 }}
                      className="group relative bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 bg-gradient-to-br ${getSkillColor(skill.niveau)} rounded-lg`}
                          >
                            <SkillIcon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-white">
                            {skill.nom}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-semibold bg-gradient-to-r ${getSkillColor(skill.niveau)} bg-clip-text text-transparent`}
                        >
                          {skill.niveau}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.niveau}%` }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + index * 0.05,
                          }}
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.niveau)} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Expérience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-400" />
                  Expérience professionnelle
                </h2>
                {isEditing && (
                  <button className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                )}
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-slate-700 to-slate-800" />

                <div className="space-y-6">
                  {formData.experience.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.1 }}
                      className="relative pl-16"
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-4 top-1 w-5 h-5 rounded-full border-4 border-slate-900 ${
                          exp.actuel ? "bg-emerald-500" : "bg-slate-600"
                        }`}
                      />

                      <div className="bg-slate-800/50 rounded-xl p-5 hover:bg-slate-800/80 transition-all group">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                              {exp.poste}
                            </h3>
                            <p className="text-indigo-400 font-medium">
                              {exp.entreprise}
                            </p>
                          </div>
                          {exp.actuel && (
                            <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-medium">
                              En poste
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500 mb-3">
                          {formatDate(exp.debut)} —{" "}
                          {exp.actuel ? "Présent" : formatDate(exp.fin!)}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        {isEditing && (
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-700">
                            <button className="text-slate-500 hover:text-white transition-colors">
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button className="text-slate-500 hover:text-rose-400 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-violet-400" />
                  Formation
                </h2>
                {isEditing && (
                  <button className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {formData.formation.map((form, index) => (
                  <motion.div
                    key={form.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.05 }}
                    className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800/80 transition-all group"
                  >
                    <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-violet-400 transition-colors">
                        {form.diplome}
                      </h3>
                      <p className="text-slate-400">{form.etablissement}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm text-slate-500">
                          {form.annee}
                        </span>
                        {form.mention && (
                          <span className="px-2.5 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-medium">
                            {form.mention}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                <User className="w-5 h-5 text-indigo-400" />
                Coordonnées
              </h2>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: formData.email },
                  {
                    icon: Phone,
                    label: "Téléphone",
                    value: formData.telephone,
                  },
                  { icon: MapPin, label: "Adresse", value: formData.adresse },
                  {
                    icon: Calendar,
                    label: "Date de naissance",
                    value: new Intl.DateTimeFormat("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(formData.dateNaissance)),
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + index * 0.05 }}
                      className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-xl"
                    >
                      <div className="p-2.5 bg-slate-700/50 rounded-lg">
                        <Icon className="w-4 h-4 text-slate-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-white font-medium truncate">
                          {item.value}
                        </p>
                      </div>
                      {isEditing && (
                        <button className="text-slate-500 hover:text-white transition-colors">
                          <Edit3 className="w-4 h-4" />
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-rose-400" />
                Curriculum Vitae
              </h2>

              {formData.cvUrl ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-xl">
                    <div className="p-3 bg-rose-500/20 rounded-xl">
                      <FileText className="w-6 h-6 text-rose-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate">
                        CV_{formData.prenom}_{formData.nom}.pdf
                      </p>
                      <p className="text-sm text-slate-500">
                        Mis à jour récemment
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowCVPreview(true)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 font-medium transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Aperçu
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white font-medium transition-colors">
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                  </div>

                  {isEditing && (
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-slate-700 hover:border-indigo-500 rounded-xl text-slate-400 hover:text-indigo-400 transition-colors">
                      <Upload className="w-4 h-4" />
                      Remplacer le CV
                    </button>
                  )}
                </div>
              ) : (
                <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center">
                  <Upload className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-400 mb-2">Aucun CV uploadé</p>
                  <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-medium transition-colors">
                    Uploader un CV
                  </button>
                </div>
              )}
            </motion.div>

            {/* Langues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                <Globe className="w-5 h-5 text-cyan-400" />
                Langues
              </h2>

              <div className="space-y-3">
                {formData.langues.map((langue, index) => (
                  <motion.div
                    key={langue.nom}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl"
                  >
                    <span className="font-medium text-white">{langue.nom}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        langue.niveau === "Natif"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {langue.niveau}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-amber-400" />
                Certifications
              </h2>

              <div className="space-y-3">
                {formData.certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-slate-800/50 rounded-xl group hover:bg-slate-800/80 transition-all"
                  >
                    <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white group-hover:text-amber-400 transition-colors">
                        {cert.nom}
                      </p>
                      <p className="text-sm text-slate-500">
                        {cert.organisme} • {cert.annee}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isEditing && (
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-dashed border-slate-700 hover:border-amber-500 rounded-xl text-slate-400 hover:text-amber-400 transition-colors">
                    <Plus className="w-4 h-4" />
                    Ajouter une certification
                  </button>
                )}
              </div>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6"
            >
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-pink-400" />
                Présence en ligne
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: formData.reseaux.linkedin,
                    color:
                      "hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: formData.reseaux.github,
                    color:
                      "hover:bg-slate-500/20 hover:border-slate-500/50 hover:text-white",
                  },
                  {
                    icon: Globe,
                    label: "Portfolio",
                    value: formData.reseaux.portfolio,
                    color:
                      "hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:text-emerald-400",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    value: formData.reseaux.twitter,
                    color:
                      "hover:bg-sky-500/20 hover:border-sky-500/50 hover:text-sky-400",
                  },
                ].map((network) => {
                  const Icon = network.icon;
                  return (
                    <button
                      key={network.label}
                      className={`flex items-center gap-3 p-4 bg-slate-800/50 border border-slate-700 rounded-xl transition-all ${
                        network.value
                          ? network.color
                          : "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={!network.value}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {network.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CV Preview Modal */}
      <AnimatePresence>
        {showCVPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCVPreview(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-800">
                <h3 className="font-semibold text-white">Aperçu du CV</h3>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    Télécharger
                  </button>
                  <button
                    onClick={() => setShowCVPreview(false)}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="bg-white rounded-xl p-8 text-slate-900">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">
                      {formData.prenom} {formData.nom}
                    </h1>
                    <p className="text-indigo-600 font-medium">
                      Développeuse Full Stack
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                      {formData.email} • {formData.telephone} •{" "}
                      {formData.adresse}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-bold border-b-2 border-indigo-500 pb-2 mb-4">
                      EXPÉRIENCE
                    </h2>
                    {formData.experience.map((exp) => (
                      <div key={exp.id} className="mb-4">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{exp.poste}</h3>
                          <span className="text-slate-500 text-sm">
                            {formatDate(exp.debut)} -{" "}
                            {exp.actuel ? "Présent" : formatDate(exp.fin!)}
                          </span>
                        </div>
                        <p className="text-indigo-600">{exp.entreprise}</p>
                        <p className="text-slate-600 text-sm mt-1">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h2 className="text-lg font-bold border-b-2 border-indigo-500 pb-2 mb-4">
                      FORMATION
                    </h2>
                    {formData.formation.map((form) => (
                      <div key={form.id} className="mb-3">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{form.diplome}</h3>
                          <span className="text-slate-500 text-sm">
                            {form.annee}
                          </span>
                        </div>
                        <p className="text-slate-600">{form.etablissement}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-lg font-bold border-b-2 border-indigo-500 pb-2 mb-4">
                      COMPÉTENCES
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {formData.competences.map((skill) => (
                        <span
                          key={skill.nom}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                        >
                          {skill.nom}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CandidatProfilPage;
