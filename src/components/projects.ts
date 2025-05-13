// data/projects.ts

export interface Project {
    id: string;
    title: string;
    members: string[];
    description: string;
    area: string;
    // these you can replace with your actual thumbnails & big-bg images
    image: string;     
    background: string;
    demoUrl?: string;
    repoUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: "equipo1",
      title: "Equipo 1",
      members: [
        "Miguel Ayala",
        "Daniel Naranjo",
        "Miguel Jaimes",
      ],
      description:
        "Finetuning de CLIP con descripciones de imágenes para tarea de clasificación",
      area: "NLP",
      image: "/projects/equipo1-thumb.jpg",
      background: "/projects/equipo1-bg.jpg",
    },
    {
      id: "equipo2",
      title: "Equipo 2",
      members: [
        "Roger Hernandez",
        "Alejandro Moreno",
        "Christian Orduz",
      ],
      description:
        "Análisis de sentimientos y toxicidad en las redes sociales de la comunidad universitaria",
      area: "NLP",
      image: "/projects/equipo2-thumb.jpg",
      background: "/projects/equipo2-bg.jpg",
    },
    {
      id: "equipo3",
      title: "Equipo 3",
      members: [
        "Juan Jaimes",
        "Santiago Camargo",
        "Cristian Tristancho",
      ],
      description:
        "Segment local object in 3D with Neural Radiance Fields",
      area: "Segmentation",
      image: "/projects/equipo3-thumb.jpg",
      background: "/projects/equipo3-bg.jpg",
    },
    {
      id: "equipo4",
      title: "Equipo 4",
      members: [
        "Johan Sebastian",
        "Nicolas Rivera",
        "Mateo Delgado",
      ],
      description:
        "Detección y comparación de áreas verdes urbanas en ciudades colombianas mediante segmentación semántica de imágenes satelitales",
      area: "Segmentation",
      image: "/projects/equipo4-thumb.jpg",
      background: "/projects/equipo4-bg.jpg",
    },
    {
      id: "equipo5",
      title: "Equipo 5",
      members: [
        "Maria L. Rodriguez",
        "Juan F. Serrano",
        "Juan Jose Ardila",
      ],
      description: "Detección de fugas de gas con imágenes infrarrojas",
      area: "Thermal",
      image: "/projects/equipo5-thumb.jpg",
      background: "/projects/equipo5-bg.jpg",
    },
    {
      id: "equipo6",
      title: "Equipo 6",
      members: [
        "Jeison Guarguati",
        "Diego Rodriguez",
        "Jose Quintero",
      ],
      description:
        "Detección de minas antipersona en el Valle del Cauca",
      area: "Thermal",
      image: "/projects/equipo6-thumb.jpg",
      background: "/projects/equipo6-bg.jpg",
    },
    {
      id: "equipo7",
      title: "Equipo 7",
      members: [
        "Marian Becerra",
        "Andres Conde",
        "Jair Marquilla",
      ],
      description:
        "Generación de dataset NLoS usando técnicas de renderizado transitorio",
      area: "NLoS",
      image: "/projects/equipo7-thumb.jpg",
      background: "/projects/equipo7-bg.jpg",
    },
    {
      id: "equipo8",
      title: "Equipo 8",
      members: [
        "Juan Arias Sarabia",
        "Samuel Benilla",
        "Willianngel Ollevedo",
      ],
      description:
        "Análisis, georreferenciación y visualización de nubes de puntos LiDAR mediante técnicas de SLAM",
      area: "NLoS",
      image: "/projects/equipo8-thumb.jpg",
      background: "/projects/equipo8-bg.jpg",
    },
    {
      id: "equipo9",
      title: "Equipo 9",
      members: [
        "Oscar Carreño",
        "David Anaya",
        "Juan Vanegas",
      ],
      description:
        "Algoritmo no supervisado para la estimación de profundidad en videos de endoscopia",
      area: "Depth",
      image: "/projects/equipo9-thumb.jpg",
      background: "/projects/equipo9-bg.jpg",
    },
    {
      id: "equipo10",
      title: "Equipo 10",
      members: [
        "Oscar Ortega",
        "Samuel Traslaviña",
        "Jefferson Acevedo",
      ],
      description:
        "Sharpening de imagen utilizando información de depth maps",
      area: "Depth",
      image: "/projects/equipo10-thumb.jpg",
      background: "/projects/equipo10-bg.jpg",
    },
  ];
  