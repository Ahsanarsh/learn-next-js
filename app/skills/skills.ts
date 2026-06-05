type skills = {
  id: number;
  name: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export const skills: skills[] = [
  {
    id: 1,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    category: "Frontend",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "NextJs",
    description: "A React framework for building server-side rendered applications.",
    category: "Frontend",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,  
    name: "TypeScript",
    description: "A typed superset of JavaScript that compiles to plain JavaScript.",
    category: "Frontend",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Tailwind",
    description: "A utility-first CSS framework for rapidly building custom user interfaces.",
    category: "Frontend",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];