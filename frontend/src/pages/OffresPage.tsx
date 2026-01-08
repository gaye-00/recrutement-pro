import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Frown } from "lucide-react";
import { offreService } from "../services/offreEmploi.service";
import type { OffreEmploiResponse } from "../services/offreEmploi.service";
import JobCard from "../components/offresPage/JobCard";
import JobFilters from "../components/offresPage/JobFilters";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function OffresPage() {
  const [offres, setOffres] = useState<OffreEmploiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  useEffect(() => {
    fetchOffres(query);
  }, [query]);

  const fetchOffres = async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    try {
      let response;
      if (searchQuery) {
        response = await offreService.search(searchQuery);
      } else {
        response = await offreService.getActives();
      }
      setOffres(response);
    } catch (err) {
      console.error("Erreur lors du chargement des offres:", err);
      setError("Impossible de charger les offres. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pb-20">
      {/* Hero Section */}
      <div className="relative bg-white pt-20 pb-24 overflow-hidden">
        <div className="absolute top-0 inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mask-gradient-to-b" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
              <Sparkles className="w-4 h-4" />
              <span>Votre carrière commence ici</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Trouvez le job de <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                vos rêves
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Explorez nos meilleures opportunités et rejoignez des entreprises innovantes qui façonnent l'avenir.
            </p>
          </motion.div>

          <JobFilters
            searchTerm={query}
            onSearchChange={handleSearch}
            isLoading={loading}
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        {error ? (
          <div className="text-center py-12">
            <div className="bg-red-50 text-red-600 px-6 py-4 rounded-xl inline-block">
              {error}
            </div>
          </div>
        ) : loading ? (
          <div className="flex justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {offres.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {offres.map((offre, index) => (
                  <motion.div
                    key={offre.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <JobCard offre={offre} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Frown className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Aucune offre trouvée</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Désolé, nous n'avons trouvé aucune offre correspondant à votre recherche. Essayez d'autres mots-clés.
                </p>
                <button
                  onClick={() => handleSearch("")}
                  className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  Voir toutes les offres
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
