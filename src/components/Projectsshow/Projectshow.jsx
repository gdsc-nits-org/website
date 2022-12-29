import "./Projectsshow.scss";
// import React, { useState } from "react";
// import { Link,useParams } from "react-router-dom";
// import TempAPI from "../../components/ProjectsCard/tempAPI.json";
// import Picture from "../../assets/images/projectsPlaceholder.png";
// import Picture from "../../assets/images/projectsPlaceholder.png";

const ProjectsShow = () => {
  // const [cardInfo] = useState(TempAPI.msg);
  return (
    <>
      <div className="projectshow-container">
        <div className="projectshow-banner">
          <img src="src/assets/images/bannerplaceolder.png" alt="banner" />
        </div>
        <div className="projectsshow-project-title">
          <div className="project-name">
            <h3>ATTENDO APP</h3>
            <span className="project-status">ONGOING</span>
          </div>
          <div className="project-image">
            <img src="src/assets/images/animnav.png" alt="logo" />
          </div>
        </div>
        <div className="projectshow-project-description">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit ametlore Lorem ipsu Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Obcaecati voluptates animi nobis qui! Blanditiis
            odit dolorem illum, ad officiis numquam. Fugit, alias provident aut maiores
            fugiat sed assumenda necessitatibus nisi similique. Inventore in voluptas
            temporibus, harum nostrum incidunt blanditiis neque ad ex, dignissimos
            asperiores, distinctio officia nemo quasi. Culpa quia voluptate, dignissimos
            laborum mollitia in. Odit dolorem ullam autem nemo veniam amet quisquam enim
            natus possimus repudiandae, quam ad doloribus earum consectetur officiis,
            tempore qui debitis perspiciatis! In, a sed! Quos quis vero eum voluptas
            laboriosam, rerum minima, blanditiis provident ex, aperiam sapiente explicabo
            id molestiae. Perferendis deleniti exercitationem labore? m dolor sit, amet
            consectetur adipisicing elit. Incidunt amet voluptatum autem facilis nobis
            quas aspernatur soluta doloremque, voluptatem tenetur excepturi sint beatae
            qui ex possimus dignissimos harum adipisci accusantium., consectetur
            adipisicing elit. Minus aliquam tempore accusamus tenetur iste veritatis quia
            molestiae ullam corrupti a, tempora blanditiis voluptatibus libero atque
            quisquam obcaecati, perferendis iusto eos.
          </p>
        </div>
        <div className="projectshow-techstack">
          <h4>Tech Stack</h4>
          <div className="projects-stacks">
            <div>
              <img src="src/assets/images/flutter-circle.png" alt="" />
              <p>HTML</p>
            </div>
            <div>
              <img src="src/assets/images/flutter-circle.png" alt="" />
              <p>CSS</p>
            </div>
            <div>
              <img src="src/assets/images/flutter-circle.png" alt="" />
              <p>Figma</p>
            </div>
            <div>
              <img src="src/assets/images/flutter-circle.png" alt="" />
              <p>NodeJS</p>
            </div>
          </div>
        </div>
        <div className="projects-show-bottom">
          <div className="mentors">
            <h4>Mentors</h4>
            <ul>Username</ul>
            <ul>Username</ul>
            <ul>Username</ul>
          </div>
          <div className="contributors">
            <h4>Contributors</h4>
            <ul>Username</ul>
            <ul>Username</ul>
            <ul>Username</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsShow;
