export default function Example() {
  return (
    <div className="min-h-screen pattern-dots bg-primary-50/30 p-8">
      {/* Card avec border animation */}
      <div className="max-w-md mx-auto mb-8 border-beam bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Border Beam</h2>
        <p className="text-primary-600">Animation de bordure fluide</p>
      </div>

      {/* Card avec border gradient */}
      <div className="max-w-md mx-auto mb-8 border-gradient p-8">
        <h2 className="text-2xl font-bold mb-4">Border Gradient</h2>
        <p className="text-primary-600">Bordure dégradée animée</p>
      </div>

      {/* Glass card sur pattern */}
      <div className="max-w-md mx-auto mb-8 glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Glass Morphism</h2>
        <p className="text-primary-600">Effet verre moderne</p>
      </div>

      {/* Card avec pattern différent */}
      <div className="max-w-md mx-auto pattern-hexagon bg-white p-8 rounded-xl border border-primary-200">
        <h2 className="text-2xl font-bold mb-4">Hexagon Pattern</h2>
        <button className="btn-primary mt-4">Action</button>
      </div>
    </div>
  );
}
