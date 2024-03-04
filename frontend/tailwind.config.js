/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow-1': "0 0 10px rgba(50, 154, 166, 0.7), 0 0 20px rgba(50, 154, 166, 0.6),0 0 30px rgba(50, 154, 166, 0.5);"
      },
      textColor: {
        'special': "rgb(50, 154, 166)"
      }
    },
  },
  plugins: [],
}