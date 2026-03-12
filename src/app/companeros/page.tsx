"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { coworkers } from "../../lib/data";
import { MemberCard } from "../../components/membercard";

export default function CompanerosPage() {
  const [busqueda, setBusqueda] = useState("");

  const coworkersFiltrados = useMemo(() => {
    return coworkers.filter((coworker) =>
      coworker.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [busqueda]);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Botón de retroceso */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            🔙  INICIO
          </Link>
        </div>
      </div>

      {/* Encabezado About Us */}
      <section className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Nuestro equipo
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-4xl leading-relaxed">
            Conoce a los talentosos profesionales que forman parte de la empresa. 
            Cada miembro aporta su experiencia y pasión por la tecnología para 
            crear soluciones innovadoras.
          </p>
        </div>
      </section>

      {/* Sección de búsqueda y filtrado */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Explorar equipo
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {coworkersFiltrados.length} miembro{coworkersFiltrados.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Búsqueda */}
            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Buscar por nombre..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full sm:max-w-sm px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-50 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
              />
            </div>
          </div>

          {/* Grid de compañeros */}
          {coworkersFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coworkersFiltrados.map((coworker) => (
                <MemberCard key={coworker.id} companero={coworker} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                No se encontraron compañeros con ese nombre.
              </p>
              <button
                onClick={() => setBusqueda("")}
                className="px-6 py-2 bg-blue-600 dark:bg-blue-400 text-white dark:text-zinc-950 font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}