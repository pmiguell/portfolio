import ProjectCard from "../ProjectCard/ProjectCard";
import style from "./Projects.module.css";
import ThreatLensImage from "../../../assets/projects-img/ThreatLens.png"
import TaskManagementImage from "../../../assets/projects-img/TaskManagement.png"
import MovieCatalogImage from "../../../assets/projects-img/MovieCatalog.png"

const projects = [
  {
    title: "ThreatLens Dashboard",
    description:
      "Full-Stack Dashboard System for a Cyber Threat Detection System that uses data mining from the Dark Web, Surface Web, and Social Networks, aimed at facilitating risk analysis and threat monitoring.",
    techs: [
      "Java (Spring Boot)",
      "JavaScript (React)",
      "PostgreSQL",
      "CSS3",
      "Git/GitHub",
    ],
    image: ThreatLensImage,
    linkedinLink: "https://www.linkedin.com/posts/pmiguell_english-below-ol%C3%A1-pessoal-gostaria-activity-7267346802465546241-EKu0?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "TaskManagement",
    description:
      "A web application developed to optimize task organization and increase productivity. Authenticated users can view, create, edit, and delete tasks, as well as manage them efficiently with features such as status tracking, deadline management, and categorization. The application's security is ensured through JWT-based authentication.",
    techs: [
      "Java (Spring Boot)",
      "JavaScript (React)",
      "PostgreSQL",
      "CSS3",
      "Git/GitHub",
    ],
    image: TaskManagementImage,
    linkedinLink: "https://www.linkedin.com/posts/pmiguell_english-below-ol%C3%A1-pessoal-recentemente-activity-7290830590172368898-HwL1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2f9fQBQCiCASiqnT_glyx31zNAxbu8RZs",
  },
  {
    title: "MovieCatalog",
    description:
      "A platform that allows users to explore and access information about various movies and TV shows. It features search and filtering functionalities, provides detailed descriptions, and has an intuitive interface. Developed with a responsive design to ensure accessibility across different devices.",
    techs: ["JavaScript (React)", "CSS3", "Git/GitHub"],
    image: MovieCatalogImage,
    linkedinLink: "https://www.linkedin.com/posts/pmiguell_english-below-ol%C3%A1-pessoal-estou-activity-7216528138485301248-Pbk7?utm_source=share&utm_medium=member_desktop",
  },
];

export default function Projects() {
  return (
    <section className={style.projects} id="projects">
      <h2>Projects</h2>
      <div className={style.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
