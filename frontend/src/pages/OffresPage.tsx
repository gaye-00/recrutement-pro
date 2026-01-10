import { useState, useEffect } from "react";
import { Search, Filter, Briefcase, Sparkles } from "lucide-react";
import {
  offreService,
  type OffreEmploiResponse,
} from "../services/offreEmploi.service";
import SearchBar from "../components/offres/SearchBar";
import FilterSidebar from "../components/offres/FilterSidebar";
import LoadingSpinner from "../components/common/LoadingSpinner";
import OffreCard from "../components/offres/OffreCard";
import Pagination from "../components/offres/Pagination";

export default function OffresPage() {
  const [offres, setOffres] = useState<OffreEmploiResponse[]>([]);
  const [filteredOffres, setFilteredOffres] = useState<OffreEmploiResponse[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    entreprises: [],
    typeContrat: [],
    localisation: [],
    salaireMin: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 12;

  useEffect(() => {
    loadOffres();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedFilters, offres]);

  const loadOffres = async () => {
    try {
      setLoading(true);
      const data = await offreService.getActives();
      setOffres(data);
      setFilteredOffres(data);
    } catch (error) {
      console.error("Erreur chargement offres :", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...offres];

    if (searchQuery) {
      filtered = filtered.filter(
        (o) =>
          o.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          o.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          o.competencesRequises
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFilters.entreprises.length) {
      filtered = filtered.filter((o) =>
        selectedFilters.entreprises.includes(o.entrepriseNom)
      );
    }

    if (selectedFilters.typeContrat.length) {
      filtered = filtered.filter((o) =>
        selectedFilters.typeContrat.includes(o.typeContrat)
      );
    }

    if (selectedFilters.localisation.length) {
      filtered = filtered.filter((o) =>
        selectedFilters.localisation.some((loc: string) =>
          o.localisation?.includes(loc)
        )
      );
    }

    if (selectedFilters.salaireMin > 0) {
      filtered = filtered.filter(
        (o) => o.salaire && o.salaire >= selectedFilters.salaireMin
      );
    }

    setFilteredOffres(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredOffres.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOffres = filteredOffres.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-dark animate-fadeInUp">
      {/* HERO */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-950 to-dark" />

        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-gray-300">
              {filteredOffres.length} offres disponibles
            </span>
          </div>

          <h1 className="text-5xl font-bold">
            <span className="text-white">Découvrez les</span>
            <br />
            <span className="bg-gradient-aurora bg-clip-text text-transparent">
              meilleures opportunités
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Trouvez l’offre qui correspond à votre profil professionnel
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <section className="-mt-8 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 flex gap-8">
          {/* SIDEBAR */}
          <aside className="hidden lg:block w-80">
            <FilterSidebar
              offres={offres}
              selectedFilters={selectedFilters}
              onFilterChange={setSelectedFilters}
            />
          </aside>

          {/* MAIN */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition"
              >
                <Filter className="w-4 h-4 inline mr-2" />
                Filtres
              </button>

              <div className="flex items-center gap-2 text-gray-400">
                <Briefcase className="w-4 h-4" />
                <span>
                  <strong className="text-white">
                    {filteredOffres.length}
                  </strong>{" "}
                  offres
                </span>
              </div>
            </div>

            {showFilters && (
              <div className="lg:hidden mb-6 animate-fadeInUp">
                <FilterSidebar
                  offres={offres}
                  selectedFilters={selectedFilters}
                  onFilterChange={setSelectedFilters}
                />
              </div>
            )}

            {loading ? (
              <LoadingSpinner />
            ) : filteredOffres.length === 0 ? (
              <div className="text-center py-16 animate-fadeInUp">
                <Search className="w-12 h-12 mx-auto text-gray-500 mb-4" />
                <h3 className="text-xl font-bold text-white">
                  Aucune offre trouvée
                </h3>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {currentOffres.map((offre, index) => (
                    <div
                      key={offre.id}
                      className="animate-fadeInUp"
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      {/* <OffreCard offre={offre} /> */}
                      {/* <OffreCard key={offre.id} offre={offre} index={index} /> */}
                      <OffreCard offre={offre} index={index} />
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
