import React from "react";
import { create } from "@lottiefiles/lottie-interactivity";
import "@lottiefiles/lottie-player";
import { useEffect } from "react";
import { useRef } from "react";
import "./Static_scroll.scss";
import { Player } from "@lottiefiles/react-lottie-player";

const Static_scroll = () => {
  const myRef = useRef(null);
  const myRef2 = useRef(null);

  useEffect(() => {
    myRef.current.addEventListener("load", () => {
      document
        .querySelector("#firstLottie")
        .shadowRoot.querySelector("#animation > svg")
        .setAttribute("style", "top: 30%; position: sticky; height: 400px");
      create({
        mode: "scroll",
        player: "#firstLottie",
        container: "static_scroll",
        actions: [
          {
            visibility: [0, 0.143],
            type: "stop",
            frames: [1],
          },
          {
            visibility: [0.143, 0.286],
            type: "stop",
            frames: [1],
          },
          {
            visibility: [0.286, 0.428],
            type: "seek",
            frames: [1, 96],
          },
          {
            visibility: [0.428, 0.571],
            type: "seek",
            frames: [96, 192],
          },
          {
            visibility: [0.571, 0.714],
            type: "seek",
            frames: [192, 288],
          },
          {
            visibility: [0.714, 0.857],
            type: "seek",
            frames: [288, 384],
          },
        ],
      });
    });
  }, []);

  // Second Option as an alternative

  // const [scrolled,setScrolled] = useState(0)
  // useEffect(()=>{
  //     window.addEventListener('scroll',()=>{
  //         setScrolled(document.documentElement.scrollTop)
  //         console.log(scrolled);
  //     })
  // })

  return (
    <div id="static_scroll" style={{ height: "100%", position: "relative" }}>
      <lottie-player
        ref={myRef} // 2. set the reference for the player
        id="firstLottie"
        className="lotties"
        mode="normal"
        //   src="https://assets5.lottiefiles.com/packages/lf20_D3Jkbk4bHd.json"
        src="/static_scroll-BG.json"
        style={{ width: "500px", position: "sticky" }}
      ></lottie-player>
      <Player
        ref={myRef2} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        // src="https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"
        src="/static_scroll-FG.json"
        style={{ height: "100%", width: "500px" }}
      ></Player>
      <div className="shadow-enclosure">
        <div className="shadow"></div>
      </div>
      {/* <lottie-player
        ref={myRef} // 2. set the reference for the player
        id="secondLottie"
        // className="lotties"
        mode="normal"
        //   src="https://assets5.lottiefiles.com/packages/lf20_D3Jkbk4bHd.json"
        src="/static_scroll-BG.json"
        style={{ width: "500px" }}
      ></lottie-player> */}

      {/* HTML for alternative */}

      {/* <div id="progress">
        {parseInt(scrolled/700)===0?'GDSC':parseInt(scrolled/700)===1?'WEB':parseInt(scrolled/700)===2?'UI/UX':parseInt(scrolled/700)===3?'android':parseInt(scrolled/700)===4?'flutter':parseInt(scrolled/700)===5?'CLOUD':''}
        </div>
        <div className="line" style={{left:parseInt(scrolled/700)*200}}>

        </div> */}
    </div>
  );
};

export default Static_scroll;
