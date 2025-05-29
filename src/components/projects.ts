// data/projects.ts

export interface Project {
  id: string;
  title: string;
  members: string[];
  description: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "equipo1",
    title: "Equipo 1",
    members: ["Miguel Ayala", "Daniel Naranjo", "Miguel Jaimes"],
    description: "/image/names/7.png",
    image: "/image/finals/team1.png",
  },
  {
    id: "equipo2",
    title: "Equipo 2",
    members: ["Roger Hernandez", "Alejandro Moreno", "Christian Orduz"],
    description: "/image/names/8.png",
    image: "/image/finals/team2.png",
  },
  {
    id: "equipo3",
    title: "Equipo 3",
    members: ["Juan Jaimes", "Santiago Camargo", "Cristian Tristancho"],
    description: "/image/names/9.png",
    image: "/image/finals/team3.png",
  },
  {
    id: "equipo4",
    title: "Equipo 4",
    members: ["Johan Sebastian", "Nicolas Rivera", "Mateo Delgado"],
    description: "/image/names/10.png",
    image: "/image/finals/team4.png",
  },
  {
    id: "equipo5",
    title: "Equipo 5",
    members: ["Maria L. Rodriguez", "Juan F. Serrano", "Juan Jose Ardila"],
    description: "/image/names/11.png",
    image: "/image/finals/team5.png",
  },
  {
    id: "equipo6",
    title: "Equipo 6",
    members: ["Jeison Guarguati", "Diego Rodriguez", "Jose Quintero"],
    description: "/image/names/12.png",
    image: "/image/finals/team6.png",
  },
  {
    id: "equipo7",
    title: "Equipo 7",
    members: ["Marian Becerra", "Andres Conde", "Jair Marquilla"],
    description: "/image/names/13.png",
    image: "/image/finals/team7.png",
  },
  {
    id: "equipo8",
    title: "Equipo 8",
    members: ["Juan Arias Sarabia", "Samuel Benilla", "Willianngel Ollevedo"],
    description: "/image/names/14.png",
    image: "/image/finals/team8.png",
  },
  {
    id: "equipo9",
    title: "Equipo 9",
    members: ["Oscar Carreño", "David Anaya", "Juan Vanegas"],
    description: "/image/names/15.png",
    image: "/image/finals/team9.png",
  },
  {
    id: "equipo10",
    title: "Equipo 10",
    members: ["Oscar Ortega", "Samuel Traslaviña", "Jefferson Acevedo"],
    description: "/image/names/16.png",
    image: "/image/finals/team10.png",
  },
];

