/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#5A639C",
        secondaryColor: "9B86BD"
      }
    },
  },
  plugins: [],
}

