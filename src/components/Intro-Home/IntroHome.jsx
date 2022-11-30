import React from "react";
import "./IntroHome.scss";
import animnav from "../../assets/images/animnav.png";
import logo from "../../assets/images/logo.png";
import web from "../../assets/images/web-circle.png";
import ui from "../../assets/images/ux-circle.png";
import flutter from "../../assets/images/flutter-circle.png";
import kotlin from "../../assets/images/kotlin-circle.png";
import cloud from "../../assets/images/cloud-circle.png";
import { create } from '@lottiefiles/lottie-interactivity'
import { useEffect } from "react";
import { useRef } from "react";
import './IntroHome.css'

const IntroHome = () => {

  const myRef = useRef(null)

    useEffect(()=>{

      document.querySelector('#firstLottie').addEventListener('load', (e) => {
        document.querySelector('#firstLottie').shadowRoot.querySelector('#animation > svg').setAttribute('style', 'top: 30%; position: sticky; height: 400px');
      })
  

        myRef.current.addEventListener('load', function (e) {
            // 4. configure the interactivity library
            create({
              mode: 'scroll',
              player: '#firstLottie',
              actions: [
                {
                  visibility: [0, 1],
                  type: 'seek',
                  frames: [0, 100],
                },
              ],
            });
          });
    })

  return (
    <div className="intro-home">
      <div className="contents">
        <div className="scroll">
          <div className="gdsc intro-margins" id="gdsc">
            <div className="title">
              <div className="logo">
                <img src={logo} alt="" />
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

        {/* <lottie-player
          ref={lottiee} // 2. set the reference for the player
          id="firstLottie"
          // controls
          mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_g7dnFTvMeQ.json"
          style={{ width: "320px", height: "20px" }}
          //     ref={lottiee}
      // mode="normal"
      // id="pattern"
      // src="https://assets1.lottiefiles.com/packages/lf20_WfrFg5.json"
      // background="transparent"
      // speed="0.4"
      // loop
      // autoplay
    ></lottie-player> */}
        <lottie-player
          ref={myRef} // 2. set the reference for the player
          id="firstLottie"
          //   controls
          mode="normal"
          // src="https://assets2.lottiefiles.com/packages/lf20_g7dnFTvMeQ.json"
          src="/static_scroll.json"
          style={{ width: '320px' }}
        ></lottie-player>
      </div>
    </div>
  );
}

export default IntroHome;