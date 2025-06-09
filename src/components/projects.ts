export interface Project {
  id: string;
  title: string;
  members: string[];
  abstract: string;
  description: string;
  image: string;
  photo1: string;
  photo2: string;
  photo3?: string;
  photo4?: string;
  slidesUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "equipo1",
    title: "Equipo 1",
    members: ["Johan Sebastian", "Mateo Delgado", "Nicolas Rivera"],
    abstract:
      "Este proyecto analiza y compara la cobertura vegetal en Bucaramanga y sus municipios principales mediante segmentación de imágenes. Utilizamos los modelos Grounding DINO y Segment Anything (SAM) para identificar y delimitar áreas de vegetación en entornos urbanos, con el fin de apoyar estudios sobre sostenibilidad y planificación verdes.",
    description: "/image/final-projects/names/10.png",
    image: "/image/finals/team4.png",
    photo1:
      "/image/final-projects/people/project1/Johan Sebastian Diaz Meza.jpg",
    photo2:
      "/image/final-projects/people/project1/Mateo Andrés Delgado Fonseca.jpg",
    photo3: "/image/final-projects/people/project1/Nicolás Rivera Leon.jpg",
    slidesUrl: "https://www.canva.com/design/DAGphIv-K18/lAg5nCA3sduwpfN-f8YiEg/view?utm_content=DAGphIv-K18&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb9bd890a87",
    repoUrl: "/",
  },
  {
    id: "equipo2",
    title: "Equipo 2",
    members: [
      "Alejandro Moreno",
      "Christian Orduz",
      "Miguel Ayala",
      "Roger Hernandez",
    ],
    abstract:
      "Este proyecto tiene como objetivo aplicar técnicas de procesamiento de lenguaje natural (NLP) y modelos de inteligencia artificial para analizar contenido de publicaciones de grupos de la universidad en Facebook. Mediante web scraping, se recolectan publicaciones públicas del grupo y se procesan para descubrir patrones, emociones, comportamientos frecuentes, entre otros",
    description: "/image/final-projects/names/8.png",
    image: "/image/finals/team2.png",
    photo1: "/image/final-projects/people/project2/Alejandro Moreno Cortes.jpg",
    photo2:
      "/image/final-projects/people/project2/Christian Isnardo Orduz Picon.jpg",
    photo3:
      "/image/final-projects/people/project2/Miguel Angel Ayala Fuentes.jpg",
    photo4:
      "/image/final-projects/people/project2/Roger Sergio Hernández Sierra.jpg",
    slidesUrl: "https://www.canva.com/design/DAGp0hCPVt8/E3s8s7GXF7iRjU7IDQ-YDQ/view?utm_content=DAGp0hCPVt8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h25cf44d3f9",
    repoUrl: "https://github.com/tu-org/equipo2",
  },
  {
    id: "equipo3",
    title: "Equipo 3",
    members: ["Juan F. Serrano", "Juan Jose Ardila", "Maria L. Rodriguez"],
    abstract:
      "Según el más reciente Informe Anual sobre la Calidad del Aire en el Mundo de IQAir, ninguna ciudad colombiana cumple con los estándares de la Organización Mundial de la Salud (OMS), lo que evidencia una crisis ambiental impulsada por emisiones industriales, agropecuarias y de residuos. Frente a este panorama, desarrollamos un sistema de detección remota de metano mediante un filtro lineal espectral aplicado a imágenes hiperespectrales del satélite EnMAP. Nuestra metodología integra preprocesamiento espectral, alineación precisa de firmas de absorción y análisis de covarianza para generar mapas de segmentación que identifican posibles focos de emisión. Los resultados fueron consistentes con reportes locales de emisiones, demostrando el potencial del enfoque para la identificación geoespacial de gases. Este trabajo confirma la viabilidad del uso de imágenes satelitales para el monitoreo ambiental y abre el camino a mejoras mediante inteligencia artificial, con miras a sistemas más precisos, automatizados y escalables para el control de emisiones.",
    description: "/image/final-projects/names/11.png",
    image: "/image/finals/team5.png",
    photo1: "/image/final-projects/people/project3/Juan Felipe Serrano.jpg",
    photo2: "/image/final-projects/people/project3/Juan José Ardila Aragón.jpg",
    photo3:
      "/image/final-projects/people/project3/María Lucia Rodríguez Olarte.png",
    slidesUrl: "/image/final-projects/slides/Proyecto_3.pdf",
    repoUrl: "/",
  },
  {
    id: "equipo4",
    title: "Equipo 4",
    members: ["Andres Conde", "Marian Becerra", "Jahir Marquilla"],
    abstract:
      "Este proyecto tuvo como objetivo la creación de un conjunto de datos sintético para escenarios Non-Line-of-Sight (NLoS), compuesto por pares de imágenes transitorias (volúmenes espacio-tiempo) y mapas de profundidad, generados mediante el motor de renderizado Mitsuba 3. Para ello, se utilizaron geometrías 3D en formato OBJ, que fueron preprocesadas y configuradas cuidadosamente para su correcta integración en el entorno de simulación. Además, se implementaron técnicas de aumento de datos con el fin de enriquecer la variabilidad del conjunto generado. Como resultado, se obtuvo un dataset completo y estructurado, útil para tareas de investigación y entrenamiento de modelos relacionados con la visión por computadora.",
    description: "/image/final-projects/names/13.png",
    image: "/image/finals/team7.png",
    photo1: "/image/final-projects/people/project4/Andrés Conde Álvarez.jpg",
    photo2:
      "/image/final-projects/people/project4/Marian Stefanie Becerra Becerra.jpg",
    photo3:
      "/image/final-projects/people/project4/Otniel Jahir Marquina Mogollón.jpg",
    slidesUrl: "https://www.canva.com/design/DAGpoaVnvKs/-NSUd__ta44ZcJ7WEHQXKw/view?utm_content=DAGpoaVnvKs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3b852bbc90",
    repoUrl: "/",
  },
  {
    id: "equipo5",
    title: "Equipo 5",
    members: ["David Anaya", "Juan Vanegas", "Oscar Carreño"],
    abstract:
      "Este proyecto propone un algoritmo no supervisado para la estimación de profundidad en videos de endoscopia, utilizando aprendizaje profundo. Se aplica una técnica de adaptación mediante Low-Rank Adaptation (LoRA) a un modelo de estimación de disparidad, permitiendo su especialización en el dominio médico sin necesidad de datos anotados. El entrenamiento se realiza sobre un conjunto de imágenes de endoscopia, con el objetivo de obtener mapas de profundidad precisos que puedan asistir en tareas clínicas y quirúrgicas.",
    description: "/image/final-projects/names/15.png",
    image: "/image/finals/team9.png",
    photo1:
      "/image/final-projects/people/project5/David Steven Anaya González.png",
    photo2: "/image/final-projects/people/project5/Juan David Vanegas.jpg",
    photo3: "/image/final-projects/people/project5/Oscar Carreño Serpa.jpg",
    slidesUrl: "https://www.canva.com/design/DAGpoUL_9Ts/dWpwfxmF1HpRARy0TsQsjw/view?utlId=h7abfbd8a12",
    repoUrl: "/",
  },
  {
    id: "equipo6",
    title: "Equipo 6",
    members: ["Diego Rodriguez", "Jeison Guarguati"],
    abstract:
      "Desarrollamos un sistema de detección de minas antipersonales basado en aprendizaje profundo utilizando imágenes térmicas aéreas del dataset público 'Dataset of Thermographic Images for the Detection of Buried Landmines'. Nuestra metodología combina técnicas de preprocesamiento de imágenes y ajuste fino de arquitecturas de vanguardia como ResNet, ConvNeXt, Vision Transformer (ViT) y Swin Transformer para la tarea de clasificación binaria (mina / no mina), alcanzando una exactitud del 99.23%, precisión del 100%, sensibilidad del 94.87% y especificidad del 100%, superando el estado del arte. Adicionalmente, realizamos un proceso de anotación manual de 360 imágenes para la tarea de detección y entrenamos YOLOv11, obteniendo una precisión del 99.4%, sensibilidad del 97.8% y un mAP@50 de 99.3%, estableciendo un baseline sólido para tareas de localización. Este trabajo destaca el potencial del aprendizaje profundo junto con las imágenes térmicas en tareas críticas de seguridad humanitaria, abriendo camino hacia soluciones automatizadas y robustas en la remoción de minas antipersonales.",
    description: "/image/final-projects/names/12.png",
    image: "/image/finals/team6.png",
    photo1: "/image/final-projects/people/project6/Diego Rodriguez.jpeg",
    photo2: "/image/final-projects/people/project6/Jeison Guarguati.jpg",
    slidesUrl: "https://www.canva.com/design/DAGpryJJC88/Io8eaNXfWvCq49_xhsLXLg/view?utm_content=DAGpryJJC88&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf0b1786b79",
    repoUrl: "/",
  },
  {
    id: "equipo7",
    title: "Equipo 7",
    members: ["Jeferson Acevedo", "Oscar Ortega", "Samuel Traslaviña"],
    abstract:
      "El proyecto propone desarrollar un modelo de deblurring (restauración de imágenes desenfocadas) que utilice mapas de profundidad como guía estructural y priorización de regiones, mejorando los métodos actuales basados únicamente en imágenes RGB. La investigación incluye el estudio del desenfoque por profundidad (DoF), la creación de un dataset sintético con imágenes RGB, mapas de profundidad y versiones borrosas, y el diseño de una arquitectura de red neuronal que integre esta información geométrica para recuperar detalles con mayor precisión en áreas críticas, seguido de su entrenamiento y evaluación.",
    description: "/image/final-projects/names/16.png",
    image: "/image/finals/team10.png",
    photo1:
      "/image/final-projects/people/project7/Jeferson Jair Acevedo Sarmiento.jpg",
    photo2:
      "/image/final-projects/people/project7/Oscar Miguel Ortega Lozano.jpg",
    photo3:
      "/image/final-projects/people/project7/Samuel David Traslaviña Mateus.jpg",
    slidesUrl: "https://www.canva.com/design/DAGpf_4pmaQ/zu2mik-nduItsY2WniQuEw/view?utm_content=DAGpf_4pmaQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h768f4b5cd3",
    repoUrl: "/",
  },
  {
    id: "equipo8",
    title: "Equipo 8",
    members: ["Juan Arias Sarabia", "Samuel Benilla", "Williangel Ollevedo"],
    abstract:
      "Este proyecto tiene como objetivo el análisis, georreferenciación y visualización de nubes de puntos obtenidas mediante tecnología LiDAR (Light Detection and Ranging). A través del procesamiento de datos espaciales tridimensionales, se busca extraer información relevante del entorno físico, facilitando la interpretación estructural y geoespacial del terreno. El flujo de trabajo incluye la lectura y limpieza de datos en formato .bag, la corrección y transformación de coordenadas para una adecuada georreferenciación, y la visualización interactiva de la nube de puntos. Este proyecto es aplicable a múltiples áreas, como cartografía, ingeniería civil, arqueología, medio ambiente y planificación urbana.",
    description: "/image/final-projects/names/14.png",
    image: "/image/finals/team8.png",
    photo1:
      "/image/final-projects/people/project8/Juan Camilo Arias Sarabia.webp",
    photo2:
      "/image/final-projects/people/project8/Samuel David Penilla Ramirez.webp",
    photo3:
      "/image/final-projects/people/project8/Williangel Armando Quevedo Villamizar.webp",
    slidesUrl: "https://www.canva.com/design/DAGprxUO8mI/7tU1TVXnUuEWwE7lNmDPfg/view?utm_content=DAGprxUO8mI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he6441b761c",
    repoUrl: "/",
  },
  {
    id: "equipo9",
    title: "Equipo 9",
    members: ["Cristian Tristancho", "Juan Jaimes", "Santiago Camargo"],
    abstract:
      "En este trabajo proponemos una metodología para la segmentación precisa de objetos en representaciones tridimensionales obtenidas mediante redes de campos radiantes neuronales (NeRF). La segmentación de objetos específicos en escenas NeRF presenta desafíos debido a la necesidad de mantener consistencia y precisión en múltiples vistas 3D. Para abordar este problema, integramos eficazmente el modelo Segment Anything Model (SAM), permitiendo realizar segmentaciones mediante indicaciones textuales o puntos interactivos directamente sobre las imágenes. Nuestra propuesta fue evaluada con dos escenas adicionales de la Universidad Industrial de Santander, cada una compuesta por 200 imágenes, mostrando resultados robustos y coherentes en múltiples perspectivas. Además, incorporamos la plataforma nerfstudio, facilitando la interacción del usuario y mejorando significativamente la experiencia en visualización y segmentación tridimensional.",
    description: "/image/final-projects/names/9.png",
    image: "/image/finals/team3.png",
    photo1: "/image/final-projects/people/project9/Cristian Tristancho.webp",
    photo2: "/image/final-projects/people/project9/Juan Jaimes.webp",
    photo3:
      "/image/final-projects/people/project9/Santiago Camargo Ardila.webp",
    slidesUrl: "https://prezi.com/view/XYWcNpWh2U8ihpf80DiR/",
    repoUrl: "/",
  },
];
