import React from "react";
import "./HeroLottie.scss";

import TeamLottie from "../Team/Team-lotti/TeamLottie";
import ProjectLottie from "../ProjectsCard/ProjectLottie/ProjectLottie";

function HeroLottie({ page }) {
  return (
    <div className="compHome">
      <div className="textContent">
        <div className="title our">OUR</div>
        <div className="title Team">{page === "team" ? "MEMBERS" : "PROJECTS"}</div>
      </div>
      <div className="lottie">{page === "team" ? <TeamLottie /> : <ProjectLottie />}</div>
    </div>
  );
}

export default HeroLottie;
