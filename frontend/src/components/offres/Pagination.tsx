import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = [];
  const maxVisible = 5;

  // Calculer les pages à afficher
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 animate-fadeIn">
      {/* Bouton Précédent */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="group relative w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 hover:border-white/20 transition-all"
      >
        <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mx-auto" />
      </button>

      {/* Première page si pas visible */}
      {startPage > 1 && (
        <>
          <PageButton
            page={1}
            currentPage={currentPage}
            onClick={onPageChange}
          />
          {startPage > 2 && <span className="text-gray-500 px-2">...</span>}
        </>
      )}

      {/* Pages */}
      {pages.map((page) => (
        <PageButton
          key={page}
          page={page}
          currentPage={currentPage}
          onClick={onPageChange}
        />
      ))}

      {/* Dernière page si pas visible */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="text-gray-500 px-2">...</span>
          )}
          <PageButton
            page={totalPages}
            currentPage={currentPage}
            onClick={onPageChange}
          />
        </>
      )}

      {/* Bouton Suivant */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="group relative w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 hover:border-white/20 transition-all"
      >
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors mx-auto" />
      </button>
    </div>
  );
}

// Composant PageButton
function PageButton({
  page,
  currentPage,
  onClick,
}: {
  page: number;
  currentPage: number;
  onClick: (page: number) => void;
}) {
  const isActive = page === currentPage;

  return (
    <button
      onClick={() => onClick(page)}
      className={`relative w-10 h-10 backdrop-blur-xl rounded-xl font-medium transition-all ${
        isActive
          ? "text-white"
          : "text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
      }`}
    >
      {/* Gradient actif */}
      {isActive && (
        <>
          <div className="absolute inset-0 bg-gradient-aurora rounded-xl"></div>
          <div className="absolute inset-0 bg-gradient-aurora blur-xl opacity-50"></div>
        </>
      )}

      <span className="relative">{page}</span>
    </button>
  );
}
