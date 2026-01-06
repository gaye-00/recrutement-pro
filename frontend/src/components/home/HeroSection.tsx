import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Pattern de fond animé */}
      <div className="absolute inset-0 pattern-dots opacity-40"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ink-950 rounded-full opacity-5 blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-ink-900 rounded-full opacity-5 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu gauche */}
          <div className="space-y-8 animate-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ink-50 border border-ink-200 rounded-full">
              <span className="w-2 h-2 bg-ink-950 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-ink-700">
                Plateforme #1 au Sénégal
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ink-950 leading-tight">
              Trouvez votre
              <span className="block mt-2 gradient-text">
                prochaine opportunité
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-ink-600 leading-relaxed max-w-xl">
              Connectez-vous aux meilleures entreprises du Sénégal. Plus de 500
              offres d'emploi et des milliers de talents qualifiés.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/offres"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink-950 text-white rounded-xl font-medium hover:bg-ink-800 transition-all shadow-medium hover:shadow-strong hover:scale-105"
              >
                Voir les offres
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/inscription"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ink-950 border-2 border-ink-200 rounded-xl font-medium hover:border-ink-950 transition-all"
              >
                Créer un compte
              </Link>
            </div>

            {/* Stats rapides */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-ink-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-ink-950" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-950">500+</p>
                  <p className="text-sm text-ink-600">Offres actives</p>
                </div>
              </div>

              <div className="w-px h-12 bg-ink-200"></div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-ink-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-ink-950" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-ink-950">10k+</p>
                  <p className="text-sm text-ink-600">Candidats</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu droite - Card avec animation */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Card principale avec border animation */}
              <div className="relative border-beam bg-white rounded-3xl p-8 shadow-strong">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-ink-950 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-ink-950">
                          Offre du jour
                        </p>
                        <p className="text-sm text-ink-500">
                          Développeur Full Stack
                        </p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                      Active
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-3 p-4 bg-ink-50 rounded-xl">
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-soft">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <p className="font-medium text-ink-950">SONATEL</p>
                      <p className="text-sm text-ink-600">Dakar, Sénégal</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-ink-50 rounded-xl">
                      <p className="text-sm text-ink-600 mb-1">Salaire</p>
                      <p className="font-semibold text-ink-950">800k XOF</p>
                    </div>
                    <div className="p-4 bg-ink-50 rounded-xl">
                      <p className="text-sm text-ink-600 mb-1">Type</p>
                      <p className="font-semibold text-ink-950">CDI</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 bg-ink-950 text-white rounded-xl font-medium hover:bg-ink-800 transition-all">
                    Postuler maintenant
                  </button>
                </div>
              </div>

              {/* Cards flottantes décoratives */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-white rounded-2xl shadow-medium p-4 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-green-700" />
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 w-28 h-28 bg-white rounded-2xl shadow-medium p-4 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
