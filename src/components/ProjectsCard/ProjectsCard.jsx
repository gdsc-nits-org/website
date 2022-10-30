import React, { useState } from "react";
import "./ProjectsCard.scss";
import Picture from "../../assets/images/projectsPlaceholder.png";
import IconInfo from "../../assets/icons/IconInfo.svg";
import IconLink from "../../assets/icons/IconLink.svg";
import IconMembers from "../../assets/icons/IconMembers.svg";
import IconTech from "../../assets/icons/IconTech.svg";
import TempAPI from "./tempAPI.json";

function ProjectCard() {
  const [cardInfo] = useState(TempAPI.msg); //Linking the API
  const [tabsState, modTabsState] = useState();

  return (
    <>
      {cardInfo.map((cardInfo) => {
        return (
          <div className="project-card-container">
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
            {/* <p className="project-card-content">{cardInfo.mentors}</p>
            <p className="project-card-content">{cardInfo.technologies}</p> */}
            <ul className="project-card-footer">
              <li className="project-card-footer-button project-card-info-button">
                <img src={IconInfo} alt="" />
              </li>
              <li className="project-card-footer-button project-card-members-button">
                <img src={IconMembers} alt="" />
              </li>
              <li className="project-card-footer-button project-card-tech-button">
                <img src={IconTech} alt="" />
              </li>
              {cardInfo.status === "COMPLETED" && (
                <li className="project-card-footer-button project-card-link-button">
                  <img src={IconLink} alt="" />
                </li>
              )}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;
