import Link from "next/link";
import { coworkers } from "../../../lib/data";
import { MemberCard } from "../../../components/membercard";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ tech: string }>;
}

export default async function TecnologiaDetallePage({ params }: PageProps) {
  const { tech } = await params;
  const tecnologia = decodeURIComponent(tech);

  // Filtrar compañeros que usan esta tecnología
  const companerosConTech = coworkers.filter((coworker) =>
    coworker.tecnologias.includes(tecnologia)
  );

  // Si no hay compañeros con esta tecnología, mostrar 404
  if (companerosConTech.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Botón de retroceso */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/tecnologias"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            ← Volver a tecnologías
          </Link>
        </div>
      </div>

      {/* Encabezado */}
      <section className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            {tecnologia}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-4xl leading-relaxed">
            Conoce a los miembros del equipo que trabajan con {tecnologia}.
          </p>
        </div>
      </section>

      {/* Sección de compañeros */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              Especialistas en {tecnologia}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {companerosConTech.length} miembro{companerosConTech.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid de compañeros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companerosConTech.map((coworker) => (
              <MemberCard key={coworker.id} companero={coworker} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}