/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        startScreenScroll: {
          from: {
            'background-position-x': '0px'
          },
          to: {
            'background-position-x': '-114%'
          }
        }
      },
      animation: {
        startScreenScroll: 'startScreenScroll 10s steps(1000) infinite',
      }
    },
  },
  plugins: [],
}

