module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['Montserrat']
      },
      animation: {
        fadeIn: 'fade .15s forwards',
        fadeOut: 'fade .15s reverse forwards',
        openNav: 'navbar .25s forwards',
        closeNav: 'navbar .25s reverse forwards ',
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: .8 },
        },
        navbar: {
          from: {transform: 'translateY(-2.5rem)'},
          to: {transform: 'translateY(5rem)'}
        }


      },
    },
  },
  plugins: [],
}
