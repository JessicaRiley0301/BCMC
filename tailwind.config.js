
// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin : "'Josefin Sans', sans-serif",
        josefinslab: "'Josefin Slab', serif",
        playfair: "'Playfair Display SC', serif",
        cardo: "'Cardo', serif",
        mulish: "'Mulish', sans-serif"
        
      },
      backgroundImage: {
        'bamboo': "url('../public/bamboo.jpg')",
        'clinic': "url('../public/clinic.jpeg')",
        'solarterm': "url('../public/solarterm.jpeg')",

      }
    },
  },
  plugins: [],
}
