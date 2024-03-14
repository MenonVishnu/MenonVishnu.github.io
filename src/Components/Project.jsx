import "./Project.css";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div className="project-container">
      <div className="heading">
        <h1>Projects</h1>
        <div className="cards">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
