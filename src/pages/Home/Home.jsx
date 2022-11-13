import React from "react";
import "./Home.scss";

import Hero from "../../components/Hero-Home/Hero";

import IntroHome from "../../components/Intro-Home/IntroHome";
import InfoGraphic from "../../components/InfoGraphic/InfoGraphic";
import Timeline from "../../components/Timeline/Timeline";
import HomeVideos from "../../components/HomeVideos/HomeVideos";
import Faqs from "../../components/Faq/Faq";

function Home() {
  return (
    <>
      <Hero />
      <IntroHome />
      <InfoGraphic />
      <Timeline />
      <HomeVideos />
      <Faqs />
    </>
  );
}

export default Home;
