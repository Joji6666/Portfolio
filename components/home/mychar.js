import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/mychar.json";

export default function Mychar() {
  return <Lottie loop animationData={lottieJson} play />;
}
