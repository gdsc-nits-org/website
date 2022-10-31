import React from "react";
import "./IntroHome.scss";
import animnav from "../../assets/images/animnav.png";

const IntroHome = () => {
  return (
    <div className="intro-home">
      <div className="contents">
        <div className="scroll">
          <div className="gdsc">
            <div className="title">
              <div className="logo"></div>
              <div className="heading">
                Google Developer Student Clubs <br /> NIT SILCHAR
              </div>
            </div>
            <p className="text">
              GDSC NIT Silchar is under Google Developer Students Club, which is a
              worldwide developers community initiated by Google. Our GDSC prioritizes
              solving real life problems that we as part of a society face in our daily
              lives. Solving such problems brings opportunities for the budding developer
              communities to showcase their talents and, imporve and gain new skillsets.
              GDSC NIT Silchar is under Google Developer Students Club, which is a
              worldwide developers community initiated by Google. Our GDSC prioritizes
              solving real life problems that we as part of a society face in our daily
              lives. Solving such problems brings opportunities for the budding developer
              communities to showcase their talents and, imporve and gain new skillsets
            </p>
          </div>
        </div>
      </div>
      <div className="animated-navbar">
        <img src={animnav} className="animnav" alt="" />
      </div>
    </div>
  );
};

export default IntroHome;
