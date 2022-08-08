module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      background: "#CAA8F5",
      customPrimaryColor: "#230C33",
      customSecondaryColor: "#592E83",

      
    },
    extend: {
      backgroundImage: {
        'infiniteStars': "url('/images/endless-constellation.svg')",
      }
    },
  },
  plugins: [],
}
