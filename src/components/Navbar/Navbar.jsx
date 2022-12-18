import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';


function Navbar() {

  const [winWidth, setWinWidth] = useState(window.innerWidth)
  const [hamburg, setHamburg] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWinWidth(window.innerWidth)
      console.log(hamburg);
    })
  }, [])

  return (
    <nav className="navbar">
      <img className="nav-img" src="" alt="" />
      <div className="backdrop" style={{ zIndex: `${hamburg===true?200:0}`,background: `${hamburg === false ? 'transparent' : 'rgba(0, 0, 0, 0.492)'}` }}></div>
      {winWidth > 900 ? <ul className="nav-list">
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
      </ul> : <>
        <div className="hamburger" style={{fontSize: `${hamburg===false?'40px':'30px'}`,margin: `${hamburg===false?'auto':''}`, marginRight: `${hamburg===false?'2rem':''}`,transform: `${hamburg===true?'translateY(-50%)':''}`, position: `${hamburg===true?'fixed':''}`, right: `${hamburg===true?'30px':''}`}} onClick={() => { hamburg === false ? setHamburg(true) : hamburg === true ? setHamburg(false) : '' }}>
          {hamburg === false ? <GiHamburgerMenu /> : <ImCross />}
        </div>
        <div className="hamburg-sidebar" style={{ transform: `${hamburg === true ? 'translateX(0%)' : ''}` }}>

          <ul className="hamlist">

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

        </div>
      </>
      }
    </nav>
  );
}

export default Navbar;
