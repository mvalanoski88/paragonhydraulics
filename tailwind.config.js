/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['~/**/*.vue'],
  safelist: [
    'text-left',
    'text-center',
    'text-right',
    'lg:text-left',
    'lg:text-center',
    'lg:text-right',
    { pattern: /^bg-.*/ },
    { pattern: /^text-.*/ },
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '758px',
      lg: '1280px',
      xl: '1920px',
      'xxl': '2500px'
    },
    extend: {
      fontFamily: {
        'Bebas': 'Bebas',
        'RobotoFlex': 'RobotoFlex',
      },
      colors: {
        'paragon-red': 'var(--color-paragon-red)',
        'paragon-blue': 'var(--color-paragon-blue)',
        'paragon-gray': 'var(--color-paragon-gray)',
        'paragon-white': 'var(--color-paragon-white)',
        'paragon-white-faded': 'var(--color-paragon-white-faded)',
      },
      dropShadow: {
        'dark-shadow-small': '1px 2px 1px var(--off-black)',
        'dark-shadow': '1px 1px 3px var(--off-black)',
      },
      backgroundColor: {
        'paragon-gray': 'var(--color-paragon-gray)',
        'paragon-blue': 'var(--color-paragon-blue)',
        'paragon-red': 'var(--color-paragon-red)',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
      },
    },
  },
  plugins: [],
}
