import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex flex-col w-full mx-auto bg-white dark:bg-gray-600 min-h-screen justify-center items-center">
      <h1 className="mb-4 text-8xl font-extrabold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        404
      </h1>
      <h2 className="text-2xl font-bold lg:text-3xl text-black">
        Oops! Page not found
      </h2>
      <h2 className="text-gray-500 dark:text-white text-xs sm:text-sm my-4 text-center">
        Sorry, the page you're looking for might have been removed
        <br />
        had its name changed or is temporarily unavailable.
      </h2>
      <Button gradientDuoTone={"purpleToPink"}>
        <Link to="/">GO TO HOMEPAGE</Link>
      </Button>
    </div>
  );
}
