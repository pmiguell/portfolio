import style from "./About.module.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  { icon: <FiGithub size={20} />, link: "https://github.com/pmiguell" },
  { icon: <FiLinkedin size={20} />, link: "https://linkedin.com/in/pmiguell" },
  { icon: <FiMail size={20} />, link: "mailto:p_miguel2004@hotmail.com" },
];

export default function About() {
  return (
    <section className={style.about} id="aboutme">
      <h2>About me</h2>
      <p>
        I'm an Information Systems student at the Federal University of
        Uberlândia (UFU), with a strong interest in Back-end development. I have
        experience in building RESTful APIs using Java and Spring Boot, as well
        as proficiency in creating dynamic, responsive, and modern interfaces
        with React.js.
      </p>
      <p>
        Currently, I am part of a Scientific Initiation project, where I develop
        an interactive dashboard and RESTful APIs that provide data for the
        analysis and monitoring of cybersecurity threats, enabling proactive
        decision-making by professionals in the field. In this project, I work
        with technologies such as Java, Spring Boot, PostgreSQL, JavaScript, and
        React. Additionally, as an active member of PET-SI, I contribute to
        academic initiatives in teaching, research, and community outreach,
        organizing and leading workshops, tutoring sessions, tech events,
        lectures, and preparatory courses for high-dropout subjects.
      </p>
      <div className={style.socialMediaContainer}>
        {socialLinks.map(({ icon, link }) => (
          <a href={link} key={link} target="_blank">
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
}
