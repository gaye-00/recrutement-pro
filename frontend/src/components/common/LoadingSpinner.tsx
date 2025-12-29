export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative">
        {/* Cercles animés */}
        <div className="w-20 h-20 border-4 border-primary-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-primary-950 rounded-full border-t-transparent animate-spin"></div>

        {/* Pattern de fond */}
        <div className="absolute -inset-10 pattern-dots opacity-20 -z-10"></div>

        {/* Texte */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-sm font-medium text-primary-600 animate-pulse">
            Chargement...
          </p>
        </div>
      </div>
    </div>
  );
}
