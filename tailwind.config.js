/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./index.html"],
  theme: {
    extend: {
      colors :{
        orange: "#DC710E",
        light_orange: "#dc720e50",
        gray: "#A4A499",
        black: "#131415",
        background: "#D4C7BB"
      }
    },
  },

  fontFamily: {
    'Montserrat': ("Montserrat","sans-serif"),
  },
  plugins: [],
}
