import Link from "next/link";
import { coworkers, Coworker } from "../../../lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return coworkers.map((coworker) => ({
    id: coworker.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const companero = coworkers.find((c) => c.id === id);

  if (!companero) {
    return {
      title: "Compañero no encontrado",
      description: "Este compañero no existe",
    };
  }

  return {
    title: `${companero.nombre} - Directorio de Compañeros`,
    description: `${companero.rol} - ${companero.bio}`,
  };
}

export default async function CompaneroDetallePage({ params }: PageProps) {
  const { id } = await params;
  const companero = coworkers.find((c) => c.id === id);

  if (!companero) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Botón de retroceso */}
        <Link
          href="/src/app/companeros"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          ← Volver al listado
        </Link>

        {/* Tarjeta de perfil */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
          {/* Nombre y rol */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              {companero.nombre}
            </h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
              {companero.rol}
            </p>
          </div>

          {/* Bio */}
          <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-3">
              Sobre mí
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {companero.bio}
            </p>
          </div>

          {/* Tecnologías */}
          <div>
            <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-4">
              Tecnologías
            </h2>
            <div className="flex flex-wrap gap-2">
              {companero.tecnologias.map((tech: string) => (
                <span
                  key={tech}
                  className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-sm font-medium px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}