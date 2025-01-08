/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script' : ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'extra-dark': '10px 10px 20px rgba(0, 0, 0, 0.5)', // 진한 그림자
      },
    },
  },
  plugins: [],
}

