/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables manual toggling via 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}


