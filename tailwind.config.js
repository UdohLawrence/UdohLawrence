/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/build/images/home-bg.jpg')",
        
      }
    },
  },
  plugins: [],
}

