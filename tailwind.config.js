module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      fontSize: {
        14: '14px'
      },
      backgroundColor: {
        'main-bg': '#F8F9FA',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        primary: '#FF4D00',
        gray1: '#333333',
        gray5: '#E0E0E0',
        gray3: '#828282'
      },
      color: {
        gray1: '#333333',
        primary: '#FF4D00',
        gray5: '#E0E0E0',
        gray3: '#828282'
      },
      borderWidth: {
        1: '1px'
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px'
      },
      height: {
        80: '80px'
      },
      minHeight: {
        590: '590px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/data/welcome-bg.svg')"
      }
    }
  },
  plugins: []
};
