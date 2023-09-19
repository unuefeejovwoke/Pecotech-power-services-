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
        primary: "#dbb407",
        white: "#FFFFFF",
        black: "#000000",
        grey: "#758173",
      },
      backgroundImage: {
        breadcrum: "url('/assets/img/breadcrum.webp')",
        electbg: "url('/assets/img/electricalbg.webp')",
        homeautobg: "url('/assets/img/homeautobg.webp')",
        solarbg: "url('/assets/img/solarinstbg.webp')",
        cctvbg: "url('/assets/img/cctvinstbg.webp')",
        mapbg: "url('/assets/img/mapbg.webp')",
        herobg: "url('/assets/img/herobg.webp')",
        maintenancebg: "url('/assets/img/maintenance.webp')",
      },
    },
  },
  plugins: [],
};
