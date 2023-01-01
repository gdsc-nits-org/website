import "@lottiefiles/lottie-player";
import React from "react";
// import { useEffect } from 'react';
import { useRef } from "react";
import "./Page404.scss";
// import Lottie from 'react-lottie';
// import { useState } from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
// import { Controls } from '@lottiefiles/react-lottie-player'

const Page404 = () => {
  const player = useRef();

  return (
    <div id="error404">
      <div className="error-enclosure">
        <Player
          ref={player} // set the ref to your class instance
          autoplay={true}
          loop={true}
          controls={true}
          // src="https://assets3.lottiefiles.com/packages/lf20_XZ3pkn.json"
          src="/404.json"
          style={{ height: "100%", width: "100%" }}
        ></Player>
        <h2 className="heading-404">Page not Found</h2>
      </div>
    </div>
  );
};

export default Page404;
