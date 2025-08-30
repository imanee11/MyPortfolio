/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(15deg, #8f56cc 0%, #5d4ec4 80%)',
        'gradient-dark': 'linear-gradient(15deg, #E1BAC5, #CEC4EF)',
      }
    },
  },
  plugins: [],
}

