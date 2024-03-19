/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        grasieshBlue: "hsl(217, 19%, 24%)",
        darkBlue : " hsl(218, 23%, 16%)"
        
      },
      colors : {
        neon: "hsl(150, 100%, 66%)",
      } ,
      fontFamily : {
        monrope : [ 'Manrope', 'sans-serif'] ,
      }
    },
  },
  plugins: [],
};
