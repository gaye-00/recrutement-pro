import { UserPlus, Search, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Créez votre profil",
    description:
      "Inscrivez-vous en quelques minutes et complétez votre profil professionnel.",
    number: "01",
  },
  {
    icon: Search,
    title: "Explorez les offres",
    description:
      "Parcourez des centaines d'offres adaptées à vos compétences et aspirations.",
    number: "02",
  },
  {
    icon: Send,
    title: "Postulez facilement",
    description:
      "Envoyez vos candidatures en un clic avec votre CV et lettre de motivation.",
    number: "03",
  },
  {
    icon: CheckCircle,
    title: "Décrochez le poste",
    description:
      "Suivez vos candidatures et préparez-vous pour vos entretiens.",
    number: "04",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Pattern diagonal en arrière-plan */}
      <div className="absolute inset-0 pattern-diagonal opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ink-50 border border-ink-200 rounded-full">
            <span className="text-sm font-medium text-ink-700">
              Comment ça marche
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-ink-950">
            Trouvez votre emploi en 4 étapes
          </h2>

          <p className="text-xl text-ink-600">
            Un processus simple et rapide pour vous connecter aux meilleures
            opportunités
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Ligne de connexion (desktop uniquement) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-ink-200 via-ink-300 to-ink-200"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative p-8 bg-white border-2 border-ink-200 rounded-2xl hover:border-ink-950 hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                {/* Numéro de l'étape */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-ink-950 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-medium group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icône */}
                <div className="w-16 h-16 bg-ink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ink-950 transition-colors">
                  <step.icon
                    className="w-8 h-8 text-ink-950 group-hover:text-white transition-colors"
                    strokeWidth={2}
                  />
                </div>

                {/* Contenu */}
                <h3 className="text-xl font-semibold text-ink-950 mb-3">
                  {step.title}
                </h3>

                <p className="text-ink-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          href="/inscription" className="inline-flex items-center gap-2 px-8
          py-4 bg-ink-950 text-white rounded-xl font-medium hover:bg-ink-800
          transition-all shadow-medium hover:shadow-strong hover:scale-105"
          <a>
            Commencer maintenant
            <CheckCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
