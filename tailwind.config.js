/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
  colors: {
    brand: {
      50:  '#EBF2FF',
      100: '#D6E4FF',
      200: '#ADC8FF',
      300: '#84A9FF',
      400: '#5B8DEF',
      500: '#3D79FF', // Lucent Blue
      600: '#295FDD',
      700: '#1C47B8',
      800: '#13338C',
      900: '#0D235F',
    },
    slate: {
      950: '#0F172A', // Midnight Slate
    },
    emerald: {
      500: '#10B981', // ROI Green Accent
    }
  },
  fontFamily: {
    sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
  }
}
  },
  darkMode: 'class',
  plugins: [],
}
