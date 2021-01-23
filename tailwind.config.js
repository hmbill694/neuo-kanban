module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '11/12': '91.66667%'
      },
      gridTemplateColumns: {
        'home-layout-horizontal': 'max-content minmax(0, 6fr)'
      },
      animation: {
        'to-white-inset': 'to-white-inset 1s ease-in forwards',
       },
       keyframes: {
        'to-white-inset': {
          '50%': { boxShadow: 'none' },
          '65%': { boxShadow: 'inset 0.4em 0.4em calc(0.4em * 2) #BFBFBF, inset calc(0.4em * -1) calc(0.4em * -1) calc(0.4em * 2) #FFFFFF' },
        }
       }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus']
    },
  },
  plugins: [require('tailwindcss-neumorphism')]
}
