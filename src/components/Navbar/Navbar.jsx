import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-img" src="" alt="" />
      <ul className="nav-list">
        <li className="nav-button home">
          <a href="http://localhost:3000/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-button projects">
          <a href="http://localhost:3000/projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-button team">
          <a href="http://localhost:3000/team" className="nav-link">
            Team
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
