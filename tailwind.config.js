import {nextui} from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
        'cairo' : ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        "primary-gradient" : "linear-gradient(90deg, #0B150C -50.62%, rgba(59, 214, 84, 0.87) 92.05%)",
        "disconnected-gradient" : "linear-gradient(90deg, #E7EBE8 -147.49%, rgba(74, 84, 75, 0.87) 91.85%)"
      },
      colors: {
        "primary": "#50D766",
        "secondary-light": "#42464B",
        "secondary" : "#5555555c",
        "success" : "#3ABD4C",
        "error" : "#FF1F64",
        "disconnected" : "#DFEBE1",
        "subtext" : "#A5A5A5",
        "text-black" : "#122333"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      light: {
        colors: {
          "primary" : {
            foreground: "#FFFFFF",
            background: "#50D766",
          }
        }
      },
      dark:{
        colors: {
          "primary" : "#3ABD4C"
        }
      }
    }
  })]
}