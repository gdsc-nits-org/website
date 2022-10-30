import React from "react";

import ProjectCard from "../../components/ProjectsCard/ProjectsCard";
import "./Projects.scss";

function Projects() {
  return (
    <div>
      <header className="projects-header">
        <h1 className="projects-title">Our</h1>
        <h1 className="projects-title">Projects</h1>
      </header>
      <main className="projects-main">
        <ProjectCard />
        <ProjectCard />
      </main>
    </div>
  );
}

export default Projects;
