import React from "react";
import "./Hero.scss";
import scroll from "../../assets/images/Scroll-Down.png";

const Hero = () => {
  return (
    <div className="home-hero">
      <div className="scroll-gif">
        <img src={scroll} alt="" className="scroll-img" />
        <div className="circle"></div>
      </div>
      <div className="text">
        <div className="title gdsc">GDSC</div>
        <div className="title nits">NIT Silchar</div>
        <div className="twl">
          <div className="tw">Together we</div>
          <div className="learn">Learn</div>
        </div>
      </div>
      <div className="hero-img"></div>
    </div>
  );
};

export default Hero;
