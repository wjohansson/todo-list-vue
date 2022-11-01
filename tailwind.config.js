/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"']
    },
    extend: {
      boxShadow: {
        'custom': '0 1rem 4rem -1rem rgba(0, 0, 0, 0.1)'
      },
      colors: {
        lightgreen: '#94ffc2',
      }
    },
  },
  plugins: [],
}
