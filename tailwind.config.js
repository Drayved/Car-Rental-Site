/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form': "url('/images/form-bg.png')",
      },
      screens: {
        xxs: "360px", 
        xs:"400px",
        xsmall:"450px",
        small:"520px",
        medium:"580px"
      },
    },
  },
  plugins: [],
}

