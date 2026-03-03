export interface Coworker {
    id: string;
    nombre: string;
    rol: string;
    bio: string;
    tecnologias: string[];
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
];
