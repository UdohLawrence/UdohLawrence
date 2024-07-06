/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2'},
        'tallscreen': {'raw': '(min-aspect-ratio: 13/20'},
      },
      keyframes: {
        'open-menu': {
          '0%': { transform:'scaleY(0)' },
          '70%': { transform:'scaleY(1.3)' },
          '100%': { transform:'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}