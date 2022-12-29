import React, { useState } from "react";
import "./ProjectsCard.scss";
import Picture from "../../assets/images/projectsPlaceholder.png";
import TempAPI from "./tempAPI.json";

function ProjectCard() {
  const [cardInfo] = useState(TempAPI.msg); //Linking the API

  return (
    <>
      {cardInfo.map((cardInfo) => {
        return (
          <div className="project-card-container" key={cardInfo.id}>
            <div className="project-card-header">
              <div className="project-card-project-status-container">
                <h2 className="project-card-project-name">{cardInfo.name}</h2>
                <span
                  className="project-card-project-status"
                  style={{
                    backgroundColor:
                      cardInfo.status === "COMPLETED" ? "#4a90e2" : "#3CBA54",
                  }}
                >
                  {cardInfo.status}
                </span>
              </div>
              <div className="project-card-project-img-container">
                <img className="project-card-project-img" src={Picture} alt="" />
              </div>
            </div>
            <p className="project-card-content">{cardInfo.description}</p>
            <div className="project-card-footer">
              <div className="project-card-details">View Details</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;
