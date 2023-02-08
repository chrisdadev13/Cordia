/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "bounce-short": "bounce 1s ease-in-out .5",
      },
      borderWidth: {
        "border-r-8": "border-right-width: 8px",
      },
    },
  },
  plugins: [],
};
