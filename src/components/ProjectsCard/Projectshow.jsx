import "./Projectsshow.scss";
import { useParams } from "react-router-dom";
import TempAPI from "./tempAPI.json";
import { useState } from "react";

const ProjectsShow = () => {
  const { projectID } = useParams();
  const [cardInfo] = useState(
    TempAPI.msg.filter((e) => {
      return e.id == projectID;
    })
  );
  return (
    <>
      <div className="projectshow-container">
        <div className="projectsshow-project-title">
          <div className="project-name">
            <h3>{cardInfo[0].name}</h3>
            <div
              className="project-status"
              style={{
                backgroundColor: cardInfo.status === "COMPLETED" ? "#4a90e2" : "#3CBA54",
              }}
            >
              {cardInfo[0].status}
            </div>
          </div>
          <div className="project-image">
            <img src={cardInfo[0].logoImageUrl} alt="logo" />
          </div>
        </div>
        <div className="projectshow-project-description">
          <h3>Description</h3>
          <p>{cardInfo[0].description}</p>
        </div>
        <div className="projectshow-techstack">
          <h4>Tech Stack</h4>
          <div className="projects-stacks">
            {cardInfo[0].technologies.map((tech) => {
              return (
                <div key={tech.id}>
                  <img src={tech.iconUrl} alt="" />
                  <p>{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="projects-show-bottom">
          <div className="mentors">
            <h4>Mentors</h4>
            <div className="mentor-list">
              {cardInfo[0].mentors.map((ment) => {
                return <ul key={ment.id}>{ment.name}</ul>;
              })}
            </div>
          </div>
          <div className="contributors">
            <h4>Contributors</h4>
            <div className="contributor-list">
              {cardInfo[0].contributors.map((cont) => {
                return <ul key={cont.id}>{cont.name}</ul>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsShow;
