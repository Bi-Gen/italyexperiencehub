/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ispirato al tricolore italiano
        primary: {
          50: '#f0f7f4',   // Verde chiaro
          100: '#dcf0e4',  // Verde molto chiaro  
          200: '#bbdcc8',  // Verde chiaro
          300: '#8bc5a4',  // Verde medio
          400: '#5da882',  // Verde
          500: '#2d8659',  // Verde Italia principale
          600: '#236b47',  // Verde scuro
          700: '#1d5538',  // Verde molto scuro
          800: '#19452e',  // Verde intenso
          900: '#163a27',  // Verde profondo
        },
        accent: {
          // Rosso Italia per accenti
          50: '#fef2f2',   // Rosso molto chiaro
          100: '#fee2e2',  // Rosso chiaro
          200: '#fecaca',  // Rosso tenue
          300: '#fca5a5',  // Rosso medio chiaro
          400: '#f87171',  // Rosso medio
          500: '#dc2626',  // Rosso Italia principale
          600: '#b91c1c',  // Rosso scuro
          700: '#991b1b',  // Rosso intenso
          800: '#7f1d1d',  // Rosso molto scuro
          900: '#7c2d12',  // Rosso profondo
        },
        // Oro/Giallo per elementi premium
        gold: {
          50: '#fffbeb',   // Oro molto chiaro
          100: '#fef3c7',  // Oro chiaro
          200: '#fde68a',  // Oro tenue
          300: '#fcd34d',  // Oro medio
          400: '#fbbf24',  // Oro
          500: '#f59e0b',  // Oro principale
          600: '#d97706',  // Oro scuro
          700: '#b45309',  // Oro intenso
          800: '#92400e',  // Oro molto scuro
          900: '#78350f',  // Oro profondo
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}