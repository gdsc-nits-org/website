import "./Projectsshow.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Projects from "/public/projects.json";
import { FaHtml5, FaNodeJs, FaReact, FaTools } from "react-icons/fa";
import {
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiPnpm,
  SiPrisma,
  SiSass,
  SiSqlite,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { ImCss3 } from "react-icons/im";
import { DiGit, DiJava, DiJavascript1 } from "react-icons/di";

const ProjectsShow = () => {
  const { projectID } = useParams();
  const [cardInfo] = useState(
    Projects.filter((e, i) => {
      return i === parseInt(projectID);
    })
  );

  const logos = {
    NodeJS: <FaNodeJs />,
    MongoDB: <SiMongodb />,
    ExpressJS: <FaNodeJs />,
    ExpressJs: <FaNodeJs />,
    JS: <DiJavascript1 />,
    HTML: <FaHtml5 />,
    CSS: <ImCss3 />,
    Java: <DiJava />,
    Firebase: <SiFirebase />,
    SQLite: <SiSqlite />,
    Retrofit: <FaTools />,
    ReactJS: <FaReact />,
    TypeScript: <SiTypescript />,
    git: <DiGit />,
    Git: <DiGit />,
    pnpm: <SiPnpm />,
    Vite: <SiVite />,
    SCSS: <SiSass />,
    Flutter: <SiFlutter />,
    Prisma: <SiPrisma />,
  };

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
            {cardInfo[0].techStack.map((tech) => {
              return (
                <div className="tech" key={tech}>
                  {/* <img src={} alt="" /> */}
                  {/* <div dangerouslySetInnerHTML={{__html:logos[tech]}}></div> */}
                  <div className="techlogo">{logos[tech]}</div>
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
              {cardInfo[0].mentors.map((ment) => {
                return <ul key={ment}>{ment}</ul>;
              })}
            </div>
          </div>
          <div className="contributors">
            <h4>Contributors</h4>
            <div className="contributor-list">
              {cardInfo[0].contributors.map((cont) => {
                return <ul key={cont}>{cont}</ul>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsShow;
