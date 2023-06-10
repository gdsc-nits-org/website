import React from "react";

import ProjectCard from "../../components/ProjectsCard/ProjectsCard";
import "./Projects.scss";
import HeroLottie from "../../components/Hero-lottie/HeroLottie";

function Projects() {
  return (
    <div>
      <HeroLottie page="projects" />
      <main className="projects-main">
        <ProjectCard />
      </main>
    </div>
  );
}

export default Projects;
