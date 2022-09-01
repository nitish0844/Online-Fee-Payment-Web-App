import React from "react";
import Lottie from "react-lottie";
import GeneratePDF from "./GeneratePDF";
import animationData from "./success.json";

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div>
        <GeneratePDF />
      </div>
    </div>
  );
};

export default Success;
