import { motion } from "framer-motion";
import { MapPin, Building2, Clock, Euro, ArrowRight, Briefcase } from "lucide-react";
import { offreService } from "../../services/offreEmploi.service";
import type { OffreEmploiResponse } from "../../services/offreEmploi.service";
import { Link } from "react-router-dom";

interface JobCardProps {
    offre: OffreEmploiResponse;
}

export default function JobCard({ offre }: JobCardProps) {
    const isExpired = offreService.isExpired(offre);
    const statusColor = offreService.getStatutColor(offre.statut);
    const statusLabel = offreService.getStatutLabel(offre.statut);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
        >
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                            <Building2 className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                                {offre.titre}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">{offre.entrepriseNom}</p>
                        </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColor}`}>
                        {statusLabel}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="truncate">{offre.localisation || "Non spécifié"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        <span className="truncate">{offre.typeContrat}</span>
                    </div>
                    {offre.salaire && (
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Euro className="w-4 h-4 text-gray-400" />
                            <span className="truncate whitespace-nowrap">{offreService.formatSalary(offre.salaire)}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="truncate">
                            Publié le {new Date(offre.datePublication).toLocaleDateString()}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    {isExpired ? (
                        <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                            Offre expirée
                        </span>
                    ) : (
                        <div className="text-sm text-gray-500">
                            {/* Placeholder for "days remaining" or similar if needed */}
                        </div>
                    )}

                    <Link
                        to={`/offres/${offre.id}`}
                        className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                    >
                        Voir l'offre
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
