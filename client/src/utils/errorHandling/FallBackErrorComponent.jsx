import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation/comingSoonOne.json";

const FallBackErrorComponent = (props) => {
  const { errorProps } = props;
  const [isLoading, setIsLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col w-full mx-auto bg-white min-h-screen justify-center items-center">
      <Lottie options={defaultOptions} height={350} width={350} />
      <h2 className="text-2xl font-bold lg:text-6xl">Oops!</h2>
      <h2 className="text-gray-500 text-xs sm:text-sm my-4">
        Something went wrong please refresh the app or try again later.
      </h2>
      <h2 className="text-red-500 text-xs sm:text-sm">
        {errorProps !== undefined && errorProps !== null
          ? `Error Info: ${errorProps?.message}`
          : ""}
      </h2>
    </div>
  );
};

export default FallBackErrorComponent;
