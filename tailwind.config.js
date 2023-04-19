/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // enable dark mode via class strategy
  darkMode: 'class',
  theme: {
    content: [
      // ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
      "node_modules/tw-elements/dist/js/**/*.js"
  ],
    extend: {
      fontFamily:{
        lily: "'Lily Script One', cursive",
        poppins:['Poppins'],
        rubik:"Rubik",
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

        'msm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'mmd': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'mlg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'mxl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      'm2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
      },
      colors: {
        fontColor:'#142D65',
        orngColor:'#F98A1E',
        babyPink:'#F02769',
        purplebg: "#f9f7ff"
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
  plugins: [require('flowbite/plugin'), require("tw-elements/dist/plugin.cjs")],
}