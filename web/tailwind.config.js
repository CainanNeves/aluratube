/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },

      transitionDuration: {
        3000: "3000ms",
      },
      width: {
        videos: "calc(100vw - 16px * 4)",
      },
      gridAutoColumns: {
        custom: "minmax(200px,1fr)",
      },
      gridTemplateColumns: {
        custom: "repeat(auto-fill,minmax(200px,1fr))",
      },
      
      backgroundImage: {
        fantasy: "url('/banner.jpg')",
      },
      colors: {
        backgroundBase: "var(--background-base)",
        backgroundLevel1: "var(--background-1)",
        backgroundLevel2: "var(--background-2)",
        borderBase: "var(--border-base)",
        textColorBase: "var(--textcolor-base)",
      },
    },
  },
  plugins: [],
};
