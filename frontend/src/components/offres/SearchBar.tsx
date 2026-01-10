import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="relative group animate-fadeIn">
      {/* Effet de lueur derrière */}
      <div className="absolute -inset-2 bg-gradient-aurora opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>

      {/* Card principale */}
      <form
        onSubmit={handleSubmit}
        className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-glow-aurora group-hover:shadow-glow-cyan-lg transition-all"
      >
        <div className="flex flex-col md:flex-row gap-4 p-6">
          {/* Search input */}
          <div className="flex-1 flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-aurora rounded-2xl flex items-center justify-center shadow-glow-cyan flex-shrink-0">
              <Search className="w-6 h-6 text-white" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Poste, compétences, mots-clés..."
              className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
            />
          </div>

          {/* Bouton recherche */}
          <button
            type="submit"
            className="group/btn relative px-8 py-4 rounded-2xl font-semibold overflow-hidden transition-all hover:scale-105"
          >
            {/* Gradient de fond animé */}
            <div className="absolute inset-0 bg-gradient-aurora animate-aurora-wave bg-[length:200%_100%]"></div>

            {/* Effet de lueur au hover */}
            <div className="absolute inset-0 bg-gradient-aurora opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity"></div>

            {/* Texte */}
            <span className="relative flex items-center gap-2 text-white">
              <Sparkles className="w-5 h-5" />
              Rechercher
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
