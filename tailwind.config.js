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
        light: 'rotate180 .15s forwards',
        dark: 'rotate180 .15s reverse',
        wiggle: 'wiggle 2s forwards infinite',
        grow: 'scale .25s forwards',
        shrink: 'scale .25s reverse forwards'
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: .8 },
        },
        navbar: {
          from: {transform: 'translateY(-2.5rem)'},
          to: {transform: 'translateY(5rem)'}
        },
        rotate180: {
          from: {transform: 'rotate(0deg)'},
          to: {transform: 'rotate(180deg)'}
        },
        wiggle: {
          '0%': {transform: 'rotate(0deg)'},
          '5%': {transform: 'rotate(-7deg)'},
          '13%': {transform: 'rotate(1deg)'},
          '20%': {transform: 'rotate(-4deg)'},
          '30%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(0deg)'},
        },
        scale: {
          from: {transform: 'scale(1)'},
          to: {transform: 'scale(1.1)'}
        }


      },
    },
  },
  plugins: [],
}
