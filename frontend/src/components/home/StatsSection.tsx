import { Briefcase, Users, Building2, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { icon: Briefcase, label: "Offres d'emploi", value: 500, suffix: "+" },
  { icon: Users, label: "Candidats inscrits", value: 10000, suffix: "+" },
  {
    icon: Building2,
    label: "Entreprises partenaires",
    value: 150,
    suffix: "+",
  },
  { icon: TrendingUp, label: "Taux de placement", value: 85, suffix: "%" },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-ink-950 overflow-hidden">
      {/* Pattern de fond */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/50 to-transparent"></div>

      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            RecrutePro en chiffres
          </h2>
          <p className="text-xl text-ink-300">
            La plateforme de référence pour l'emploi au Sénégal
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  suffix,
  delay,
}: {
  icon: any;
  label: string;
  value: number;
  suffix: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value, label, hasAnimated]);

  return (
    <div
      id={`stat-${label}`}
      className="relative group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card avec border gradient */}
      <div className="relative p-8 bg-ink-900 rounded-2xl border border-ink-800 hover:border-ink-700 transition-all">
        {/* Icône */}
        <div className="w-12 h-12 bg-ink-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all">
          <Icon className="w-6 h-6 text-white group-hover:text-ink-950 transition-colors" />
        </div>

        {/* Nombre animé */}
        <div className="text-5xl font-bold text-white mb-2">
          {count.toLocaleString("fr-FR")}
          <span className="text-ink-400">{suffix}</span>
        </div>

        {/* Label */}
        <p className="text-ink-400 font-medium">{label}</p>

        {/* Effet de brillance */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>
  );
}
