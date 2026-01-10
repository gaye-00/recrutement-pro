import { Search, Filter, X } from "lucide-react";
import { motion } from "framer-motion";

interface JobFiltersProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    isLoading?: boolean;
}

export default function JobFilters({ searchTerm, onSearchChange, isLoading }: JobFiltersProps) {
    return (
        <div className="w-full max-w-4xl mx-auto mb-12">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2"
            >
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Rechercher un poste, une entreprise ou un mot-clé..."
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent outline-none text-gray-900 placeholder-gray-400 focus:bg-gray-50 transition-colors"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => onSearchChange("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Placeholder for future advanced filters button */}
                <button className="hidden sm:flex items-center gap-2 px-6 py-4 bg-gray-50 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                    <Filter className="w-5 h-5" />
                    <span>Filtres</span>
                </button>

                <button
                    className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                    disabled={isLoading}
                >
                    {isLoading ? "Recherche..." : "Rechercher"}
                </button>
            </motion.div>
        </div>
    );
}
