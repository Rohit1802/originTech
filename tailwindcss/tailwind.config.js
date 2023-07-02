/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      variants: {
        backgroundColor: ['responsive', 'hover', 'focus'],
        textColor: ['responsive', 'hover', 'focus'],
      },

     

    fontFamily: {
      work: ["work sans", "sans-serif"],
      mont :[ 'Montserrat', "sans-serif"]
    },
    colors: {
      richBlack: "#000c14" ,
    russianViolet: "#2b1f47",
    rebeccaPurple: "#5d4298",
    dodgerBlue: "#027bce ",
    honoluluBlue: "#027bce ",
    amethyst: "#af65c6 ",
    plum: "#e3aee1 ",
      
    },},
  },
  plugins: [],
}
