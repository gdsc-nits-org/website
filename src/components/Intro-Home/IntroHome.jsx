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
    <div className="intro-home">
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

          <div className="web intro-margins">
            <div className="title">
              <div className="logo">
                <img src={web} alt="" />
              </div>
              <div className="heading">Web Domain</div>
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

          <div className="ui-ux intro-margins">
            <div className="title">
              <div className="logo">
                <img src={ui} alt="" />
              </div>
              <div className="heading">UI/UX Domain</div>
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

          <div className="android intro-margins">
            <div className="title">
              <div className="logo">
                <img src={kotlin} alt="" />
              </div>
              <div className="heading">Android Domain</div>
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

          <div className="flutter intro-margins">
            <div className="title">
              <div className="logo">
                <img src={flutter} alt="" />
              </div>
              <div className="heading">Flutter Domain</div>
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

          <div className="cloud intro-margins">
            <div className="title">
              <div className="logo">
                <img src={cloud} alt="" />
              </div>
              <div className="heading">Cloud Domain</div>
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
      <div className="animated-navbar" id="animated-navbar">
        <Static_scroll />
      </div>
    </div>
  );
};

export default IntroHome;
