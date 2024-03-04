/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      mygreen:"#39DB4A",
      mydark:"#000000",
      myorange:"#FF6868",
      mylightgreen:"#C1F1C6",
      mylight:'#fff',
      mygrey:"#555555",
      mydarkgreen:"#90BD95"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}