/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "bounce-short": "bounce 1s ease-in-out .5",
      },
    },
  },
  plugins: [],
};
