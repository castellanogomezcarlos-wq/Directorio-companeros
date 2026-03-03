export default function PruebaIdPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const ejemplos: Record<string, { title: string; desc: string }> = {
    '1': { title: 'Usuario Uno', desc: 'Contenido específico para el id 1.' },
    '123': { title: 'Ejemplo 123', desc: 'Página de ejemplo para el id 123.' },
    'abc': { title: 'Entrada ABC', desc: 'Datos asociados al identificador abc.' },
  };

  const item = ejemplos[id];

  return (
    <main style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif' }}>
      {item ? (
        <>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <p>
            Ruta dinámica: <strong>/prueba/{id}</strong>
          </p>
        </>
      ) : (
        <>
          <h1>No encontrado</h1>
          <p>No hay contenido predefinido para <strong>{id}</strong>.</p>
          <p>Puedes añadirlo en el mapa `ejemplos` dentro de <code>app/prueba/[id]/page.tsx</code>.</p>
        </>
      )}
    </main>
  );
}
