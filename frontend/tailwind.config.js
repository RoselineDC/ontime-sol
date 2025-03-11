/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
         
        },
        fontFamily: {
          'primary':[ "Montserrat", 'sans-serif'],
          'secondary': ["Nunito", 'sans-serif'],
        },
      },
    },
    plugins: [],
  }