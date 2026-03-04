import Link from "next/link";
import { coworkers } from "../../lib/data";
import { MemberCard } from "../../components/membercard";

export default function CompanerosPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Botón de retroceso a inicio */}
        <Link
          href="/src/app"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← Volver al inicio
        </Link>

        {/* Encabezado */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
            Equipo
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Conoce a todos los miembros de nuestro equipo
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coworkers.map((coworker) => (
            
            <MemberCard key={coworker.id} companero={coworker} />
          ))}
        </div>
      </div>
    </main>
  );
}