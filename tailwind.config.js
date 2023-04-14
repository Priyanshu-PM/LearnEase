/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lily: "'Lily Script One', cursive",
        poppins:['Poppins'],
        rubik:"'Rubik', sans-serif",
        righteous:"'Righteous', cursive;"
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        fontColor:'#142D65',
        orngColor:'#F98A1E',
        babyPink:'#F02769'
      },
      dropShadow: {
        '3xl': '0 0 8px rgb(249, 138, 30)',
        glow: [
          "0 0px 20px rgba(0, 234, 66, 0.35)",
          "0 0px 65px rgba(0, 234, 66, 0.2)",
        ],
    
      }
    },
  },
  plugins: [],
}