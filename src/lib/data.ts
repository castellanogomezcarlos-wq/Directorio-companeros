export interface Coworker {
    id: string;
    nombre: string;
    rol: string;
    bio: string;
    tecnologias: string[];
}
    // Función para obtener tecnologías únicas y su conteo
export function obtenerTecnologiasUnicas(): { tech: string; count: number }[] {
  const tecnologiasMap = new Map<string, number>();

  coworkers.forEach((coworker) => {
    coworker.tecnologias.forEach((tech) => {
      // Busca el contador actual de la tecnología o lo inicializa a 0 y luego lo incrementa en 1
      tecnologiasMap.set(tech, (tecnologiasMap.get(tech) || 0) + 1);
    });
  });
      // Tranformación del mapa en array de objetos con la tecnología y su contador, luego ordenado alfabéticamente por tecnología
  return Array.from(tecnologiasMap, ([tech, count]) => ({ tech, count })).sort(
    (a, b) => a.tech.localeCompare(b.tech)
  );
}

export const coworkers: Coworker[] = [
  {
    id: "1",
    nombre: "Fernando Martínez",
    rol: "Frontend Developer",
    bio: "Especialista en React y Next.js con 5 años de experiencia. Apasionado por crear interfaces intuitivas y accesibles.",
    tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    nombre: "Paula Buendía",
    rol: "Full Stack Developer",
    bio: "Desarrolladora versátil que disfruta tanto del frontend como del backend. Experta en arquitectura de bases de datos.",
    tecnologias: ["Node.js", "React", "PostgreSQL", "Docker"],
  },
  {
    id: "3",
    nombre: "Noel Núñez",
    rol: "Backend Developer",
    bio: "Especialista en APIs REST y microservicios. Apasionado por la seguridad y performance.",
    tecnologias: ["Node.js", "Express", "MongoDB", "AWS"],
  },
  {
    id: "4",
    nombre: "Ana Rodríguez",
    rol: "DevOps Engineer",
    bio: "Especialista en infraestructura y automatización. Trabaja para que todo funcione como un reloj.",
    tecnologias: ["Docker", "Kubernetes", "AWS", "Vue"],
  },
  {
    id: "5",
    nombre: "Álvaro Alarcón",
    rol: "QA Engineer",
    bio: "Apasionado por garantizar la calidad del software. Experto en testing automatizado.",
    tecnologias: ["Selenium", "Jest", "Cypress", "LoadTesting"],
  },
  {
    id: "6",
    nombre: "Laura Fernández",
    rol: "UX/UI Designer",
    bio: "Diseñadora apasionada por la experiencia del usuario. Experta en diseño responsive y accesibilidad.",
    tecnologias: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    id: "7",
    nombre: "Carlos Gómez",
    rol: "Mobile Developer",
    bio: "Desarrollador especializado en aplicaciones móviles nativas y cross-platform. Experto en optimización de rendimiento.",
    tecnologias: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: "8",
    nombre: "Sofía Martín",
    rol: "Data Scientist",
    bio: "Apasionada por convertir datos en insights. Especialista en machine learning y análisis predictivo.",
    tecnologias: ["Python", "TensorFlow", "Pandas", "SQL"],
  },
  {
    id: "9",
    nombre: "Roberto López",
    rol: "Security Engineer",
    bio: "Especialista en ciberseguridad y auditoría de sistemas. Comprometido con proteger nuestras aplicaciones.",
    tecnologias: ["Penetration Testing", "Cryptography", "Linux", "OWASP"],
  },
  {
    id: "10",
    nombre: "Marta González",
    rol: "Tech Lead",
    bio: "Líder técnico con experiencia en arquitectura de software. Especialista en escalabilidad y buenas prácticas.",
    tecnologias: ["System Design", "Node.js", "React", "AWS"],
  },
  {
    id: "11",
    nombre: "David Sánchez",
    rol: "DevOps Engineer",
    bio: "Especialista en CI/CD y orquestación de contenedores. Apasionado por la automatización y monitoreo.",
    tecnologias: ["Kubernetes", "Docker", "Jenkins", "Prometheus"],
  },
  {
    id: "12",
    nombre: "Cristina Ruiz",
    rol: "Frontend Developer",
    bio: "Desarrolladora frontend con foco en performance y accesibilidad. Experta en Vue.js y testing.",
    tecnologias: ["Vue.js", "TypeScript", "Adobe XD", "CSS Grid"],
  },
  {
    id: "13",
    nombre: "Miguel Ángel Torres",
    rol: "Backend Developer",
    bio: "Ingeniero backend apasionado por arquitecturas limpias. Especialista en sistemas distribuidos.",
    tecnologias: ["Python", "Django", "PostgreSQL", "Redis"],
  },
  {
    id: "14",
    nombre: "Elena Díaz",
    rol: "Product Manager",
    bio: "Gestora de producto con visión estratégica. Especialista en roadmaps y priorización.",
    tecnologias: ["Product Strategy", "User Analytics", "Figma", "Agile"],
  },
  {
    id: "15",
    nombre: "Jorge Ruiz",
    rol: "Cloud Architect",
    bio: "Arquitecto de soluciones cloud con expertise en infraestructura escalable. Especialista en AWS y GCP.",
    tecnologias: ["AWS", "GCP", "Terraform", "Microservices"],
  },
];