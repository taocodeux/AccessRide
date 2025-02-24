/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mp4}"
  ],
  theme: {
    extend: {
      colors:{
        primary: "#027FFF",
        secondary: "#9CA3AF",
        accent: "#ff9900",
      },
      height:{
        smh: "2px"
      },
      fontSize:{
        smfs: ["14px", "1"],
        xsfs:["9px", "0.5"],
      },
      screens:{
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px"
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

