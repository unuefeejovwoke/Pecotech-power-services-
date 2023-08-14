/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
sm: '480px',
md: '768px',
lg: '1045px',
xl: '1300px'
    },
    extend: {
      colors: {
        primary: '#FBCC34',
        white: '#FFFFFF',
        black: '#000000',
        grey: '#758173',
      },
backgroundImage: {
        'breadcrum': "url('/assets/img/breadcrum.png')",
        
      }
    },
  },
  plugins: [],
}

