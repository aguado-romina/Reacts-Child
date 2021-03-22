module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "lightblue": '#2A9d8f',
        "darkblue": '#264653',
        "yellowlight":  '#E9C46A',
        "orangelight": '#F4A261',
        "orangedark":  '#E76F51',
        
      },
    },
    fontFamily:{
      fonts: ['Roboto'],
    }
    },
 
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}