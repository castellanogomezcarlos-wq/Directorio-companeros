import Link from "next/link";

export default function PantallaInicio() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animar-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .tarjeta-1 { animation-delay: 0.1s; }
        .tarjeta-2 { animation-delay: 0.2s; }
        .tarjeta-3 { animation-delay: 0.3s; }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Titular principal */}
          <h1 className="text-6xl sm:text-7xl font-bold mb-13 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-50 dark:to-zinc-300 bg-clip-text text-transparent">
            Directorio de Compañeros
          </h1>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-13 leading-relaxed max-w-3xl mx-auto">
            Descubre este directorio de compañeros tech. Explora sus perfiles, accede a sus roles y observa las 
            tecnologías con las que trabajan.
          </p>

          {/* Call-to-action / Enlaces */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/companeros"
              className="px-8 py-4 bg-blue-600 dark:bg-blue-400 text-white dark:text-zinc-950 font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Ver equipo completo
            </Link>
            <Link
              href="/tecnologias"
              className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-900 transition-all duration-200"
            >
              Explorar tecnologías
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="bg-white dark:bg-zinc-900 py-20 px-4 h-140">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            ¿Qué encontrarás aquí?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="animar-fade-in-up tarjeta-1 p-8 max-h-80 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-xl font-semibold mb-3">Perfiles detallados</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Accede a información completa sobre cada miembro del equipo: su rol, 
                biografía y especialidades técnicas.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="animar-fade-in-up tarjeta-2 p-8 max-h-50 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-xl font-semibold mb-3">Búsqueda inteligente</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Filtra y busca compañeros por nombre en tiempo real. Una forma rápida 
                de encontrar exactamente quién buscas.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="animar-fade-in-up tarjeta-3 p-8 max-h-50 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-xl font-semibold mb-3">Stack tecnológico</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Descubre las tecnologías que usamos. Explora por tech stack y conoce 
                quién trabaja con cada una.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 dark:border-zinc-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300">
          <p>© 2026 Interamplify. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/companeros" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Equipo
            </Link>
            <Link href="/tecnologias" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Tecnologías
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}