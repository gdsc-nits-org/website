import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import "./IntroHome.scss";
import web from "../../assets/images/web-circle.png";
import ui from "../../assets/images/ux-circle.png";
import flutter from "../../assets/images/flutter-circle.png";
import kotlin from "../../assets/images/kotlin-circle.png";
import cloud from "../../assets/images/cloud-circle.png";

import Static_scroll from "../Static_Scroll/Static_scroll";
const IntroHome = () => {
  const gdscLogoRef = useRef();

  useLayoutEffect(() => {
    gdscLogoRef.current.addEventListener("load", () => {
      create({
        player: "#gdscLogo",
        mode: "chain",
        actions: [
          {
            state: "autoplay",
            transition: "onComplete",
            frames: [0, 216],
            // reset: true,
          },
          {
            state: "autoplay",
            transition: "onComplete",
            frames: [216, 0],
            reset: true,
          },
        ],
      });
    });
  }, []);

  return (
    <div className="intro-home" id="introHome">
      <div className="contents">
        <div className="scroll">
          <div className="gdsc intro-margins" id="gdsc">
            <div className="title">
              <div id="gdscLogoContainer">
                <lottie-player
                  ref={gdscLogoRef}
                  id="gdscLogo"
                  mode="chain"
                  src="/gdsc-logo.json"
                ></lottie-player>
                <div className="circle"></div>
              </div>
              <div className="heading">
                Google Developer Student Clubs <br /> NIT SILCHAR
              </div>
            </div>
            <p className="text">
              Google Developer Student Club, NIT Silchar is one of the thousands of clubs
              under Google Developer Student Clubs. Our GDSC focuses on solving real-life
              problems in and around our society by developing meaningful products.
              Solving such problems brings opportunities for the budding developer
              communities to showcase their talents and, improve and gain new skillsets.
              GDSC NITS is not bounded to NITS itself. Our main aim is to empower
              developers around North-East India and also to have a national and
              international presence. There are Web Developers, Android Developers, and
              Designers who make up our GDSC. We organize workshops and competitions to
              further spread the developer environment in general to the aspiring
              developers around us. So let&apos;s DESIGN, DEVELOP and DEPLOY the best
              ideas for the betterment of our society.
            </p>
          </div>

          <div id="ui-ux" className="ui-ux intro-margins">
            <div className="title">
              <div className="logo">
                <img src={ui} alt="" />
              </div>
              <div className="heading">UI/UX Domain</div>
            </div>
            <p className="text">
              Today&apos;s user&apos;s query is if they like the interface of the product
              or not. Is it smooth enough? Does it have a good and user friendly
              interface? UI/UX designers are responsible to answer the queries who are
              committed to improving the user experience. While UI focuses on the visual
              components, interaction elements, colour schemes, typography, photographs,
              and other aspects that come together to provide an appealing visual
              description. To promote user-friendliness and ease of use.UX design, on the
              other hand, concentrates on the emotions of the user as they engage with the
              components, starting from landing till the end action of the user. The GDSC
              Nit Silchar looks forward to exposing new aspirants to the UI/UX area and
              training them to develop revolutionary innovation and creativity to satisfy
              the expectations of the expanding design-centric business. Prototype Planary
              Workshops are yearly held by GDSC NITS to get people started on UI/UX
              designing and construct projects for practical learning.
            </p>
          </div>

          <div className="flutter intro-margins">
            <div className="title">
              <div className="logo">
                <img src={flutter} alt="" />
              </div>
              <div className="heading">Flutter Domain</div>
            </div>
            <p className="text">
              The Flutter Domain of GDSC NIT Silchar caters to all Flutter enthusiasts.
              Flutter is an open-source UI software development kit created by Google.
            </p>
            <p className="text">
              The Flutter domain has actively produced mobile applications(both Android
              and IOS) using Flutter. It has released &apos;Efficacy,&apos; a club event
              management app to help users manage and schedule their timetables. The
              Flutter team has already started working on &apos;Efficacy 2.0&apos;.
            </p>
            <p className="text">
              To help acquaint future developers with Flutter, the team has organized the
              &apos;Flutter Festival, a week-long event having workshops for each
              participant.
            </p>
          </div>

          <div className="cloud intro-margins">
            <div className="title">
              <div className="logo">
                <img src={cloud} alt="" />
              </div>
              <div className="heading">Cloud Domain</div>
            </div>
            <p className="text">
              Cloud mainly focuses on the training and of developers to grow accustomed to
              the ever increasing dominance and benefits that the advent of cloud
              technology has brought to the table and ensure applications reach their
              users by managing their deployment on platforms that power the products of
              companies like Google, Amazon, Microsoft, Oracle, etc.
            </p>
            <p className="text">
              DevOps on the other hand makes your life simpler as a team member. It allows
              you to write code alongside your teammates, as well as be confident that the
              application remains safe, reliable and scalable according to demand and thus
              the developers can churn out features one after the another with incredible
              velocity without worrying about the conventional problems that arise in
              teams of a considerable size. DevOps is something that no software
              development team of more than 1 member can live without.
            </p>
          </div>

          <div className="web intro-margins">
            <div className="title">
              <div className="logo">
                <img src={web} alt="" />
              </div>
              <div className="heading">Web Domain</div>
            </div>
            <p className="text">
              The Web Domain of GDSC NIT Silchar aims to solve real-life problems with an
              enriched web experience with the help of our Web Community. Not only do we
              introduce unique and innovative projects, but we also conduct rigorous
              hands-on workshops and sessions to enhance the level of the dev community.
            </p>
            <p className="text">
              The main advantage the Web brings is the accessibility of the content across
              gadgets of different specifications and screen sizes. Web Dev consists of
              two parts namely Frontend and Backend that enhance both, the creative and
              the logical thinking within the developer. Being a part of the Web Domain at
              GDSC NIT Silchar will open additional paths for you to contribute towards
              the website for annual events.
            </p>
          </div>
          <div className="android intro-margins">
            <div className="title">
              <div className="logo">
                <img src={kotlin} alt="" />
              </div>
              <div className="heading">Android Domain</div>
            </div>
            <p className="text">
              The Android domain of GDSC NIT Silchar is tasked with upskilling the android
              developers&apos; community. We conduct workshops, boot camps and many more
              along with innovative solutions and projects for catering to the needs of
              solving everyday problems society faces.
            </p>
            <p className="text">
              As mobile and handheld devices make up a considerable percentage of the
              gadgets most people use, it is essential for most ideas and solutions to be
              compatible and accessible through mobiles and handheld devices which are
              taken care of while executing our project ideas in GDSC NIT Silchar.
            </p>
          </div>
        </div>
      </div>
      <div className="animated-navbar" id="animated-navbar">
        <Static_scroll />
      </div>
    </div>
  );
};

export default IntroHome;
