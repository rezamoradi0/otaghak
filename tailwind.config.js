/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        // Simple 12 row grid
        '12': 'repeat(12, minmax(0, 1fr))',
      },
   
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      keyframes:{
        dally:{
          '0%':{bottom:'0rem'},
          '100%':{top:'1rem'}
        }
      },
      animation:{
        dally:'dally 0s  ease-in-out forwards '
      }
    },
  },
  plugins: [],
}

