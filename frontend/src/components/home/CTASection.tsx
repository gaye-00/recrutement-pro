import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background avec pattern */}
      <div className="absolute inset-0 bg-ink-950"></div>
      <div className="absolute inset-0 pattern-hexagon opacity-10"></div>

      {/* Gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-900 to-ink-950 opacity-50"></div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">
              Rejoignez des milliers de talents
            </span>
          </div>

          {/* Titre */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Prêt à décrocher
            <br />
            <span className="bg-gradient-to-r from-white via-ink-200 to-white bg-clip-text text-transparent">
              votre emploi de rêve ?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            Créez votre compte gratuitement et accédez à des centaines
            d'opportunités dès aujourd'hui
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/inscription"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-ink-950 rounded-xl font-medium hover:bg-ink-100 transition-all shadow-strong hover:scale-105"
            >
              Créer mon compte candidat
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/recruteur/inscription"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-xl font-medium hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
            >
              Espace recruteurs
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex items-center justify-center gap-8 text-ink-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Gratuit et sans engagement</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Inscription en 2 minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Border animation en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
}
