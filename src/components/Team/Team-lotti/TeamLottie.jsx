import React from "react";
import "./TeamLotti.scss";
import animationData from "../../../assets/lottie/TeamLottie.json";

import Lottie from "react-lottie";
function TeamLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div key="avatar_animation" className="animation">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        key="avatar_animation_data"
      />
    </div>
  );
}

export default TeamLottie;
