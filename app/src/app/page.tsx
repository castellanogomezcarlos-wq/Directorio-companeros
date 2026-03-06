import Image from "next/image";
import Link from "next/link";

export default function PantallaInicio() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Nombre de la aplicación */}
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
          Directorio de Compañeros
        </h1>

        {/* Mensaje de bienvenida */}
        <p className="text-xl text-zinc-700 dark:text-zinc-400 mb-12 leading-relaxed">
          Conoce a los miembros en prácticas de Interamplify. Explora sus perfiles, investiga 
          sobre sus roles y descubre las tecnologías con las que trabajan.
        </p>

        {/* Enlace a los compañeros */} 
        <Link
          href="/src/app/companeros"
          className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-400 text-white dark:text-zinc-950 font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors duration-200"
        >
          Ver compañeros
        </Link>
      </div>
    </main>
  );
}
