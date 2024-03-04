/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        "hero-pattern-2": "url('https://images.pexels.com/photos/2931286/pexels-photo-2931286.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }
    },
  },
  plugins: [],
}