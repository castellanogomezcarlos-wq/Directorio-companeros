import Link from "next/link";
import type { Coworker } from "../lib/data";

interface MemberCardProps {
  companero: Coworker;
}

export function MemberCard({ companero }: MemberCardProps) {
  return (
    <Link href={`/companeros/${companero.id}`}>
      <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-200 cursor-pointer">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {companero.nombre}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          {companero.rol}
        </p>
      </div>
    </Link>
  );
}