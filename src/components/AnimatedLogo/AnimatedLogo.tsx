import * as React from "react";
import Lottie from "react-lottie";
const animationData = require("../../assets/img/Noro-Logo.json");

export const AnimatedLogo = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={40} width={40} />;
};
