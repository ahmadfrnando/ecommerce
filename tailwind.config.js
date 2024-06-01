/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#B3B3FE",
        secondary: "#8282FF",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}

