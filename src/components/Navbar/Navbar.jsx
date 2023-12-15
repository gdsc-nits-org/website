import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  // const [winHeight, setWinHeight] = useState(window.innerHeight); probable fix
  const [hamburg, setHamburg] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth);
      // setWinHeight(window.innerHeight);
    });

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className={`navbar ${hamburg ? "hamburg" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="backdrop"></div>
      {winWidth < 900 ? (
        <div
          className="hamburg-icon"
          onClick={() => {
            setHamburg(hamburg ? false : true);
          }}
        >
          {!hamburg ? <GiHamburgerMenu /> : <ImCross />}
        </div>
      ) : (
        ""
      )}
      {/* <img className="nav-img" src="" alt="" />
      <div
        className="backdrop"
        // style={{
        //   zIndex: `${hamburg === true && winWidth < 900 ? 200 : -6000}`,
        //   background: `${
        //     hamburg === false || winWidth > 900 ? "transparent" : "rgba(0, 0, 0, 0.492)"
        //   }`,
        //   display: `${hamburg === false || winWidth > 900 ? "none" : "block"}`,
        // }}
      ></div>
      <div
        className="nav-list"
        style={{
          transform: `translateX(${hamburg === false && winWidth < 900 ? "25" : "0"}rem)`,
        }}
      > */}
      <div className="nav-ul-enclose">
        <ul className="nav-ul">
          <li className="nav-button projects">
            <Link
              to="/projects"
              className="nav-link"
              onClick={() => {
                setHamburg(false);
              }}
            >
              Projects
            </Link>
          </li>
          <li className="nav-button events">
            <Link
              to="/events"
              className="nav-link"
              onClick={() => {
                setHamburg(false);
              }}
            >
              Events
            </Link>
          </li>
          <li className="nav-button team">
            <Link
              to="/team"
              className="nav-link"
              onClick={() => {
                setHamburg(false);
              }}
            >
              Team
            </Link>
          </li>
          <li className="nav-button blog">
            {/* <a
              href="https://gdscnits.hashnode.dev"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
              onClick={() => {
                setHamburg(false);
              }}
            >
              Blog
            </a> */}
            <Link to="/blog" target="_blank">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      {/* 
      {winWidth < 900 && window.innerHeight/window.innerWidth > 1 ? (
        <div
          className="hamburger"
          style={{
            fontSize: `${hamburg === false ? "40px" : "30px"}`,
            margin: `${hamburg === false ? "auto" : ""}`,
            marginRight: `${hamburg === false ? "2rem" : ""}`,
            transform: `${hamburg === true ? "translateY(-50%)" : ""}`,
            position: `${hamburg === true ? "fixed" : ""}`,
            right: `${hamburg === true ? "30px" : ""}`,
          }}
          onClick={() => {
            hamburg === false
              ? setHamburg(true)
              : hamburg === true
              ? setHamburg(false)
              : "";
          }}
        >
          {hamburg === false ? <GiHamburgerMenu /> : <ImCross />}
        </div>
      ) : (
        ""
      )} */}
    </nav>
  );
}

export default Navbar;
