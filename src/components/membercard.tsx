import Link from "next/link";
import type { Coworker } from "../lib/data";

interface MemberCardProps {
  companero: Coworker;
}

export function MemberCard({ companero }: MemberCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-200 flex flex-col h-full min-h-60">
      {/* Nombre y rol */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
          {companero.nombre}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {companero.rol}
        </p>

        {/* Tecnologías como badges */}
        <div className="flex flex-wrap gap-2">
          {companero.tecnologias.map((tech: string) => (
            <span
              key={tech}
              className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded-full border border-blue-200 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Botón de acceso al perfil */}
      <Link
        href={`/companeros/${companero.id}`}
        className="mt-6 w-full px-4 py-2 bg-blue-600 dark:bg-blue-400 text-white dark:text-zinc-950 font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors duration-200 text-center"
      >
        Acceder perfil
      </Link>
    </div>
  );
}