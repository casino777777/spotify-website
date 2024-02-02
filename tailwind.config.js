/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': '500px',
      'md': '700px',
      'lg': '900px',
      'xl': '1100px',
      '2xl': '1300px',
      '3xl': '1500px',
      '4xl': '1700px',
      '5xl': '1900px',
    },
    extend: {
      gridTemplateColumns: {
        'main': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    }

    
  },
  plugins: [],
}

