import { useState } from "react";
import {
  Building2,
  MapPin,
  Briefcase,
  DollarSign,
  X,
  Filter,
} from "lucide-react";
import type { OffreEmploiResponse } from "../../services/offreEmploi.service";

interface FilterSidebarProps {
  offres: OffreEmploiResponse[];
  onFilterChange: (filters: any) => void;
  selectedFilters: any;
}

export default function FilterSidebar({
  offres,
  onFilterChange,
  selectedFilters,
}: FilterSidebarProps) {
  // Extraire les valeurs uniques
  const entreprises = [...new Set(offres.map((o) => o.entrepriseNom))];
  const typesContrat = [...new Set(offres.map((o) => o.typeContrat))];
  const localisations = [
    ...new Set(offres.map((o) => o.localisation?.split(",")[0].trim())),
  ].filter(Boolean);

  const handleCheckbox = (category: string, value: string) => {
    const current = selectedFilters[category] || [];
    const updated = current.includes(value)
      ? current.filter((v: string) => v !== value)
      : [...current, value];

    onFilterChange({ ...selectedFilters, [category]: updated });
  };

  const handleSalaire = (value: number) => {
    onFilterChange({ ...selectedFilters, salaireMin: value });
  };

  const clearFilters = () => {
    onFilterChange({
      entreprises: [],
      typeContrat: [],
      localisation: [],
      salaireMin: 0,
    });
  };

  const hasActiveFilters =
    selectedFilters.entreprises.length > 0 ||
    selectedFilters.typeContrat.length > 0 ||
    selectedFilters.localisation.length > 0 ||
    selectedFilters.salaireMin > 0;

  return (
    <div className="relative group animate-fadeIn">
      {/* Effet de lueur */}
      <div className="absolute -inset-1 bg-gradient-aurora opacity-10 blur-2xl group-hover:opacity-20 transition-opacity rounded-3xl"></div>

      {/* Card principale */}
      <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-glow-aurora">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-aurora rounded-xl flex items-center justify-center shadow-glow-cyan">
              <Filter className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Filtres</h3>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Réinitialiser
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="space-y-6">
          {/* Entreprises */}
          <FilterSection
            icon={Building2}
            title="Entreprises"
            gradient="from-primary-500 to-cyan-500"
          >
            {entreprises.map((entreprise) => (
              <FilterCheckbox
                key={entreprise}
                label={entreprise}
                checked={selectedFilters.entreprises.includes(entreprise)}
                onChange={() => handleCheckbox("entreprises", entreprise)}
              />
            ))}
          </FilterSection>

          {/* Type de contrat */}
          <FilterSection
            icon={Briefcase}
            title="Type de contrat"
            gradient="from-secondary-500 to-violet-500"
          >
            {typesContrat.map((type) => (
              <FilterCheckbox
                key={type}
                label={type}
                checked={selectedFilters.typeContrat.includes(type)}
                onChange={() => handleCheckbox("typeContrat", type)}
              />
            ))}
          </FilterSection>

          {/* Localisation */}
          <FilterSection
            icon={MapPin}
            title="Localisation"
            gradient="from-accent-500 to-pink-500"
          >
            {localisations.map((loc) => (
              <FilterCheckbox
                key={loc}
                label={loc}
                checked={selectedFilters.localisation.includes(loc)}
                onChange={() => handleCheckbox("localisation", loc)}
              />
            ))}
          </FilterSection>

          {/* Salaire */}
          <FilterSection
            icon={DollarSign}
            title="Salaire minimum"
            gradient="from-cyan-500 to-primary-500"
          >
            <div className="space-y-3">
              {[0, 300000, 500000, 700000, 1000000].map((salaire) => (
                <FilterCheckbox
                  key={salaire}
                  label={
                    salaire === 0
                      ? "Tous"
                      : `${(salaire / 1000).toFixed(0)}k XOF+`
                  }
                  checked={selectedFilters.salaireMin === salaire}
                  onChange={() => handleSalaire(salaire)}
                  type="radio"
                />
              ))}
            </div>
          </FilterSection>
        </div>
      </div>
    </div>
  );
}

// Composant FilterSection
function FilterSection({ icon: Icon, title, gradient, children }: any) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between group/section"
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center opacity-80 group-hover/section:opacity-100 transition-opacity`}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-white">{title}</span>
        </div>
        <span
          className={`text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && <div className="space-y-2 pl-2">{children}</div>}
    </div>
  );
}

// Composant FilterCheckbox
function FilterCheckbox({ label, checked, onChange, type = "checkbox" }: any) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group/checkbox">
      <input
        type={type}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer"
      />
      <span className="text-sm text-gray-400 group-hover/checkbox:text-gray-300 transition-colors">
        {label}
      </span>
    </label>
  );
}
