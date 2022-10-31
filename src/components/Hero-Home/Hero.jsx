import React from "react";
import "./Hero.scss";
import scroll from "../../assets/images/Scroll-Down.png";

const Hero = () => {
  return (
    <div className="home-hero">
      <img src={scroll} alt="" className="scroll-gif" />
    </div>
  );
};

export default Hero;
