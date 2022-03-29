module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      animation: {
        fadeIn: 'fadeIn .15s forwards',
        fadeOut: 'fadeOut .15s forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },


      },
    },
  },
  plugins: [],
}
