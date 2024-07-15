const flowBite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowBite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowBite.plugin(), require("tailwind-scrollbar")],
};
