import "./Projectsshow.scss";
// import { useParams } from "react-router-dom";
// import TempAPI from "./tempAPI.json";
// import { useState } from "react";

const ProjectsShow = () => {
  // const [cardInfo] = useState(TempAPI.msg);
  // const projectID = useParams();
  // const thisProject = cardInfo.find((proj) => proj.id === projectID);
  // const project = useState(thisProject);
  return (
    <>
      <div className="projectshow-container">
        <div className="projectsshow-project-title">
          <div className="project-name">
            <h3>Mess Management</h3>
            <div className="project-status">ONGOING</div>
          </div>
          <div className="project-image">
            <img src="src/assets/images/projectsPlaceholder.png" alt="logo" />
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
            id molestiae. Perferendis deleniti exercitat Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Libero expedita enim, aliquid necessitatibus
            pariatur dignissimos odit eveniet eaque a perspiciatis explicabo in
            praesentium voluptate odio neque tempore maxime dicta? Praesentium tempora
            suscipit iure deleniti reiciendis illo reprehenderit autem deserunt rem dicta
            facere expedita, velit maiores quibusdam ab quos voluptates soluta ullam
            tenetur! Non magnam repellat eius ratione expedita impedit, labore eaque
            consequatur dolor harum modi quaerat illum repudiandae aliquid, eligendi,
            corporis eveniet quas recusandae dignissimos sunt voluptatibus. Eius debitis
            nam, natus voluptate, quas expedita et quo fugiat omnis, labore asperiores
            numquam quasi sit dolores tempore? Minima, suscipit in! Ipsam, quidem? ionem
            labore? m dolor sit, amet consectetur adipisicing elit. Incidunt amet
            voluptatum autem facilis nobis quas aspernatur soluta doloremque, voluptatem
            tenetur excepturi sint beatae qui ex possimus dignissimos harum adipisci
            accusantium., consectetur adipisicing elit. Minus aliquam tempore accusamus
            tenetur iste veritatis quia molestiae ullam corrupti a, tempora blanditiis
            voluptatibus libero atque quisquam obcaecati, perferendis iusto eos.
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
            <div className="mentor-list">
              <ul>Username</ul>
              <ul>Username</ul>
              <ul>Username</ul>
            </div>
          </div>
          <div className="contributors">
            <h4>Contributors</h4>
            <div className="contributor-list">
              <ul>Username</ul>
              <ul>Username</ul>
              <ul>Username</ul>
            </div>
          </div>
        </div>
      </div>
      {/* })} */}
    </>
  );
};

export default ProjectsShow;
