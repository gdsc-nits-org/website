import React, { useState } from "react";
import "./ProjectsCard.scss";
import Picture from "../../assets/images/projectsPlaceholder.png";
import TempAPI from "./tempAPI.json";
import { Link } from "react-router-dom";
import cardInfo from '/public/projects.json'

function ProjectCard() {
  // const [cardInfo] = useState(TempAPI.msg); //Linking the API

  return (
    <>
      {cardInfo.map((cardInfo,index) => {
        return (
          <div className="project-card-container" key={index} id={index===0?'1':index===1?'2':''} >
            <div className="project-card-header">
              <div className="project-card-project-status-container">
                <h2 className="project-card-project-name">{cardInfo.title}</h2>
                <span
                  className="project-card-project-status"
                  style={{
                    backgroundColor:
                      cardInfo.Status === "Live" ? "#4a90e2" : "#3CBA54",
                  }}
                >
                  {cardInfo.Status}
                </span>
              </div>
              <div className="project-card-project-img-container">
                <img className="project-card-project-img" src={cardInfo.logo} alt="" />
              </div>
            </div>
            <p className="project-card-content">{cardInfo.description}</p>
            <div className="project-card-footer">
              <Link to={`/projects/${index}`}>
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
