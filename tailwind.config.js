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
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
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