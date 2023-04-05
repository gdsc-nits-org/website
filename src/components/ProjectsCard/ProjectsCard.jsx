import React, { useState } from "react";
import "./ProjectsCard.scss";
import Picture from "../../assets/images/projectsPlaceholder.png";
import TempAPI from "./tempAPI.json";
import { Link } from "react-router-dom";

function ProjectCard() {
  const [cardInfo] = useState(TempAPI.msg); //Linking the API

  return (
    <>
      {cardInfo.map((cardInfo,index) => {
        return (
          <div className="project-card-container" key={cardInfo.id} id={index===0?'1':index===1?'2':''} >
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
              <Link to={`/projects/${cardInfo.id}`}>
                <div className="project-card-details">View Details</div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;
