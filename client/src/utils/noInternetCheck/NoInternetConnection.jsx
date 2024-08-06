import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import noInternet from "../../assets/Animation/noInternet.json";

const NoInternetConnection = (props) => {
  const [isOnline, setOnline] = useState(true);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: noInternet,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);

  // event listeners to update the state
  window.addEventListener("online", () => {
    setOnline(true);
  });

  window.addEventListener("offline", () => {
    setOnline(false);
  });

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return props.children;
  } else {
    return (
      <div className="flex flex-col w-full mx-auto bg-white dark:bg-gray-600 min-h-screen justify-center items-center">
        <Lottie options={defaultOptions} height={200} width={200} />
        <h2 className="text-2xl font-bold lg:text-6xl text-black">Oops!</h2>
        <h2 className="text-gray-500 dark:text-white text-xs sm:text-sm my-4 text-center">
          It seems there is something wrong with your internet connection.
          <br />
          Please connect to the internet & start again.
        </h2>
      </div>
    );
  }
};

export default NoInternetConnection;
