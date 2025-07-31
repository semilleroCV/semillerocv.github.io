export interface Project {
  id: string;
  members: string[];
  description: string;
  image: string;
  photo1: string;
  photo2: string;
  photo3?: string;
  photo4?: string;
  slidesUrl?: string;
  repoUrl?: string;
  winnerImage?: string;
}

export const projects: Project[] = [
  {
    id: "equipo1",
    members: ["Johan Sebastian", "Mateo Delgado", "Nicolas Rivera"],
    description: "/image/final-projects/names/10.png",
    image: "/image/finals/team4.png",
    photo1:
      "/image/final-projects/people/project1/Johan Sebastian Diaz Meza.jpg",
    photo2:
      "/image/final-projects/people/project1/Mateo Andrés Delgado Fonseca.jpg",
    photo3: "/image/final-projects/people/project1/Nicolás Rivera Leon.jpg",
    slidesUrl: "https://www.canva.com/design/DAGphIv-K18/lAg5nCA3sduwpfN-f8YiEg/view?utm_content=DAGphIv-K18&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb9bd890a87",
    repoUrl: "https://github.com/pauzca/create_geospatial_dataset",
  },
  {
    id: "equipo2",
    members: [
      "Alejandro Moreno",
      "Christian Orduz",
      "Miguel Ayala",
      "Roger Hernandez",
    ],
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
    repoUrl: "https://github.com/chrisatin/NLP---Project",
  },
  {
    id: "equipo3",
    members: ["Juan F. Serrano", "Juan Jose Ardila", "Maria L. Rodriguez"],
    description: "/image/final-projects/names/11.png",
    image: "/image/finals/team5.png",
    photo1: "/image/final-projects/people/project3/Juan Felipe Serrano.jpg",
    photo2: "/image/final-projects/people/project3/Juan José Ardila Aragón.jpg",
    photo3:
      "/image/final-projects/people/project3/María Lucia Rodríguez Olarte.png",
    slidesUrl: "/image/final-projects/slides/Proyecto_3.pdf",
    repoUrl: "https://github.com/Jleon13/Remote-gas-detection-with-hyperspectral-satellite-imagery-in-Colombia",
    winnerImage: "/image/final-projects/winners/third.png"
  },
  {
    id: "equipo4",
    members: ["Andres Conde", "Marian Becerra", "Jahir Marquilla"],
    description: "/image/final-projects/names/13.png",
    image: "/image/finals/team7.png",
    photo1: "/image/final-projects/people/project4/Andrés Conde Álvarez.jpg",
    photo2:
      "/image/final-projects/people/project4/Marian Stefanie Becerra Becerra.jpg",
    photo3:
      "/image/final-projects/people/project4/Otniel Jahir Marquina Mogollón.jpg",
    slidesUrl: "https://www.canva.com/design/DAGpoaVnvKs/-NSUd__ta44ZcJ7WEHQXKw/view?utm_content=DAGpoaVnvKs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3b852bbc90",
    repoUrl: "https://github.com/andrescondea/NLOS_project",
    winnerImage: "/image/final-projects/winners/first.png"

  },
  {
    id: "equipo5",
    members: ["David Anaya", "Juan Vanegas", "Oscar Carreño"],
    description: "/image/final-projects/names/15.png",
    image: "/image/finals/team9.png",
    photo1:
      "/image/final-projects/people/project5/David Steven Anaya González.png",
    photo2: "/image/final-projects/people/project5/Juan David Vanegas.jpg",
    photo3: "/image/final-projects/people/project5/Oscar Carreño Serpa.jpg",
    slidesUrl: "https://www.canva.com/design/DAGpoUL_9Ts/dWpwfxmF1HpRARy0TsQsjw/view?utlId=h7abfbd8a12",
    repoUrl: "https://github.com/Gilberter/Hands-on-Computer-Vision/tree/main/sesiones/Proyecto",
    
  },
  {
    id: "equipo6",
    members: ["Diego Rodriguez", "Jeison Guarguati"],
    description: "/image/final-projects/names/12.png",
    image: "/image/finals/team6.png",
    photo1: "/image/final-projects/people/project6/Diego Rodriguez.jpeg",
    photo2: "/image/final-projects/people/project6/Jeison Guarguati.jpg",
    slidesUrl: "https://www.canva.com/design/DAGpryJJC88/Io8eaNXfWvCq49_xhsLXLg/view?utm_content=DAGpryJJC88&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf0b1786b79",
    repoUrl: "https://github.com/JeiGeek/ThermalMineDetector",
  },
  {
    id: "equipo7",
    members: ["Jeferson Acevedo", "Oscar Ortega", "Samuel Traslaviña"],
    description: "/image/final-projects/names/16.png",
    image: "/image/finals/team10.png",
    photo1:
      "/image/final-projects/people/project7/Jeferson Jair Acevedo Sarmiento.jpg",
    photo2:
      "/image/final-projects/people/project7/Oscar Miguel Ortega Lozano.jpg",
    photo3:
      "/image/final-projects/people/project7/Samuel David Traslaviña Mateus.jpg",
    slidesUrl: "https://www.canva.com/design/DAGpf_4pmaQ/zu2mik-nduItsY2WniQuEw/view?utm_content=DAGpf_4pmaQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h768f4b5cd3",
    repoUrl: "https://github.com/Nightcrawler9x/Proyecto_10",
  },
  {
    id: "equipo8",
    members: ["Juan Arias Sarabia", "Samuel Benilla", "Williangel Ollevedo"],
    description: "/image/final-projects/names/14.png",
    image: "/image/finals/team8.png",
    photo1:
      "/image/final-projects/people/project8/Juan Camilo Arias Sarabia.webp",
    photo2:
      "/image/final-projects/people/project8/Samuel David Penilla Ramirez.webp",
    photo3:
      "/image/final-projects/people/project8/Williangel Armando Quevedo Villamizar.webp",
    slidesUrl: "https://www.canva.com/design/DAGprxUO8mI/7tU1TVXnUuEWwE7lNmDPfg/view?utm_content=DAGprxUO8mI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he6441b761c",
    repoUrl: "https://github.com/ramiro999/NovaLidar.git",
  },
  {
    id: "equipo9",
    members: ["Cristian Tristancho", "Juan Jaimes", "Santiago Camargo"],
    description: "/image/final-projects/names/9.png",
    image: "/image/finals/team3.png",
    photo1: "/image/final-projects/people/project9/Cristian Tristancho.webp",
    photo2: "/image/final-projects/people/project9/Juan Jaimes.webp",
    photo3:
      "/image/final-projects/people/project9/Santiago Camargo Ardila.webp",
    slidesUrl: "https://prezi.com/view/XYWcNpWh2U8ihpf80DiR/",
    repoUrl: "https://github.com/scamargo27/Segmentacion-de-objetos-3D-SAM-NeRF",
    winnerImage: "/image/final-projects/winners/second.png"
  },
];
