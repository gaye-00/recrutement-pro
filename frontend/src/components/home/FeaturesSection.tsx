import {
  Search,
  FileText,
  Calendar,
  CheckCircle,
  Bell,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Recherche intelligente",
    description:
      "Trouvez des opportunités qui correspondent parfaitement à votre profil et vos compétences.",
  },
  {
    icon: FileText,
    title: "Candidature simplifiée",
    description:
      "Postulez en un clic avec votre CV et lettre de motivation pré-enregistrés.",
  },
  {
    icon: Calendar,
    title: "Suivi des entretiens",
    description:
      "Gérez tous vos entretiens et rendez-vous depuis votre tableau de bord.",
  },
  {
    icon: CheckCircle,
    title: "Statut en temps réel",
    description:
      "Suivez l'évolution de vos candidatures à chaque étape du processus.",
  },
  {
    icon: Bell,
    title: "Notifications instantanées",
    description:
      "Recevez des alertes pour chaque mise à jour de vos candidatures.",
  },
  {
    icon: Shield,
    title: "Données sécurisées",
    description:
      "Vos informations personnelles sont protégées et confidentielles.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Pattern de fond subtil */}
      <div className="absolute inset-0 pattern-grid opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ink-50 border border-ink-200 rounded-full">
            <span className="text-sm font-medium text-ink-700">
              Fonctionnalités
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-ink-950">
            Tout ce dont vous avez besoin
          </h2>

          <p className="text-xl text-ink-600">
            Une plateforme complète pour gérer votre recherche d'emploi de A à Z
          </p>
        </div>

        {/* Grid de fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-ink-200 rounded-2xl hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icône */}
              <div className="w-14 h-14 bg-ink-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-ink-950 transition-colors">
                <feature.icon className="w-7 h-7 text-ink-950 group-hover:text-white transition-colors" />
              </div>

              {/* Contenu */}
              <h3 className="text-xl font-semibold text-ink-950 mb-3">
                {feature.title}
              </h3>

              <p className="text-ink-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Border animation au hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity border-2 border-ink-950 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
