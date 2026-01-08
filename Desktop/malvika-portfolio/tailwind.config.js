/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        olive: '#708238',
        viridian: '#425A3B', // updated to requested hex
        gold: '#E0AF11' // updated to requested hex
      },
      fontFamily: {
        heading: ['"Trebuchet MS"', 'Trebuchet', 'Arial', 'sans-serif'],
        body: ['Montserrat', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'focus': '0 0 0 3px rgba(64, 130, 109, 0.5)'
      }
    },
  },
  plugins: [],
};
