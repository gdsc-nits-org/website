import React from "react";
import ProjectCard from "../../components/ProjectsCard/ProjectsCard";
import "./Projects.scss";
// import { useRef } from "react";
// import "@lottiefiles/lottie-player";
// import { create } from "@lottiefiles/lottie-interactivity";
// import { useLayoutEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottiefiles/roadmap.json";

function Projects() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div>
      <header className="projects-header">
        <div className="projects-header-left">
          <h1 className="projects-title">Our</h1>
          <h1 className="projects-title">Projects</h1>
        </div>
        <div className="projects-header-right">
          <Lottie options={defaultOptions} />
        </div>
      </header>
      <main className="projects-main">
        <ProjectCard />
      </main>
    </div>
  );
}

export default Projects;
