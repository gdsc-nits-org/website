import "./Projectsshow.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Projects from '/public/projects.json'

const ProjectsShow = () => {
  const { projectID } = useParams();
  const [cardInfo] = useState(
    Projects.filter((e,i) => {
      return i === parseInt(projectID);
    })
  );
  return (
    <>
      <div className="projectshow-container">
        <div className="projectsshow-project-title">
          <div className="project-name">
            <h3>{cardInfo[0].title}</h3>
            <div
              className="project-status"
              style={{
                backgroundColor: cardInfo.Status === "Live" ? "#4a90e2" : "#3CBA54",
              }}
            >
              {cardInfo[0].Status}
            </div>
          </div>
          <div className="project-image">
            <img src={cardInfo[0].logo} alt="logo" />
          </div>
        </div>
        <div className="projectshow-project-description">
          <h3>Description</h3>
          <p>{cardInfo[0].description}</p>
        </div>
        <div className="projectshow-techstack">
          <h4>Tech Stack</h4>
          <div className="projects-stacks">
            {cardInfo[0].techStack.map((tech, i) => {
              return (
                <div key={i}>
                  <img src={tech.iconUrl} alt="" />
                  <p>{tech}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="projects-show-bottom">
          <div className="mentors">
            <h4>Mentors</h4>
            <div className="mentor-list">
              {cardInfo[0].mentors.map((ment,i) => {
                return <ul key={i}>{ment}</ul>;
              })}
            </div>
          </div>
          <div className="contributors">
            <h4>Contributors</h4>
            <div className="contributor-list">
              {cardInfo[0].contributors.map((cont,i) => {
                return <ul key={i}>{cont}</ul>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsShow;
