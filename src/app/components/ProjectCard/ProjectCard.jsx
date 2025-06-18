import style from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, techs, image, linkedinLink }) {
  return (
    <a
      href={linkedinLink}
      target="_blank"
      rel="noopener noreferrer"
      className={style.projectLink}
    >
      <div className={style.project}>
        <img src={image} alt={title} />
        <div className={style.projectCardContent}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={style.techsUsedInProject}>
            {techs.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
