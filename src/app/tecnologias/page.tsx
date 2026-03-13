import Link from "next/link";
import { obtenerTecnologiasUnicas } from "../../lib/data";

export default function TecnologiasPage() {
  const tecnologias = obtenerTecnologiasUnicas();

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Botón de retroceso */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            🔙 INICIO
          </Link>
        </div>
      </div>

      {/* Encabezado */}
      <section className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Nuestro stack tecnológico
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-4xl leading-relaxed">
            Explora todas las tecnologías que utilizamos en nuestro equipo. 
            Cada tarjeta muestra cuántos miembros trabajan con cada tecnología.
          </p>
        </div>
      </section>

      {/* Sección de tecnologías */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Tecnologías en uso
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {tecnologias.length} tecnología{tecnologias.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid de tecnologías */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {tecnologias.map((item) => (
    <div
      key={item.tech}
      className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-200 h-full flex flex-col items-center justify-center text-center min-h-60"
    >
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
        {item.tech}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Utilizada por
      </p>
      <div className="flex items-center justify-center">
        <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full font-semibold text-lg">
          {item.count}
        </span>
      </div>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-4">
        miembro{item.count !== 1 ? 's' : ''}
      </p>

      {/* Botón de acceso */}
      <Link
        href={`/tecnologias/${encodeURIComponent(item.tech)}`}
        className="mt-6 w-full px-4 py-2 bg-blue-600 dark:bg-blue-400 text-white dark:text-zinc-950 font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors duration-200 text-center"
      >
        Acceder tecnología
      </Link>
    </div>
  ))}
</div>
        </div>
      </section>
    </main>
  );
}