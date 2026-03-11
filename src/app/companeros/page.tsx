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
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Botón de retroceso a inicio */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          🔙 INICIO
        </Link>

        {/* Encabezado */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
            Equipo
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
            Conoce a todos los miembros de nuestro equipo
          </p>

          {/* Búsqueda */}
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full max-w-md px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-900 dark:text-zinc-50 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
          />
        </div>

        {/* Tarjeta Individual */}
        {coworkersFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coworkersFiltrados.map((coworker) => (
              <MemberCard key={coworker.id} companero={coworker} />
            ))}
          </div>
        ) : (
          <p className="text-center text-zinc-600 dark:text-zinc-400 py-12">
            No se encontraron compañeros con ese nombre.
          </p>
        )}
      </div>
    </main>
  );
}