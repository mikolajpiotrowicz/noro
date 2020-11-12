import * as React from "react";
import Lottie from "react-lottie";
const animationData = require("../../assets/img/Noro-Logo.json");

interface Props {
  isBig?: boolean;
}


export const AnimatedLogo: React.FC<Props> = ({ isBig}) => {
  const size = isBig ? 300 : 40;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={size} width={size} />;
};
