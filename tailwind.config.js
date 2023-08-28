/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1045px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: "#FBCC34",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#758173",
      },
      backgroundImage: {
        breadcrum: "url('/assets/img/breadcrum.png')",
        electbg: "url('/assets/img/electricalbg.png')",
        homeautobg: "url('/assets/img/homeautobg.png')",
        solarbg: "url('/assets/img/solarinstbg.png')",
        cctvbg: "url('/assets/img/cctvinstbg.png')",
        mapbg: "url('/assets/img/mapbg.png')",
        herobg: "url('/assets/img/herobg.png')",
      },
    },
  },
  plugins: [],
};
