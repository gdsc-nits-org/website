import React from "react";
import "./Home.scss";

import Hero from "../../components/Hero-Home/Hero";

import IntroHome from "../../components/Intro-Home/IntroHome";
import InfoGraphic from "../../components/InfoGraphic/InfoGraphic";
import HomeVideos from "../../components/HomeVideos/HomeVideos";

function Home() {
  return (
    <>
      <Hero />
      <IntroHome />
      <InfoGraphic />
      <HomeVideos />
    </>
  );
}

export default Home;
