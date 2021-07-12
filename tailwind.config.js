const colorMap = {
  primary: 'rgb(93,72,223)',
  newPrimary: '#6B4FBB',
  lightPrimary: '#C7B3FF',
  desc: '#666666',
  white: '#ffffff',
  cyan: '#333333',
  E1DEFB: 'rgb(225,222,251)',
  '2F3C5F': 'rgb(47,60,95)',
  '0D0C22': 'rgb(13,12,34)',
  '283C5F': 'rgb(40,60,95)',
  F5F7FE: 'rgb(245,247,254)',
};
module.exports = {
  purge: ['./src/**/*.tsx'],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colorMap,
      spacing: {
        p130: '130px',
        p430: '430px',
        p720: '720px',
        p260: '260px',
        p580: '580px',
      },
      fontSize: {
        '14-28': ['14px', '28px'],
        '16-28': ['16px', '28px'],
        '16-32': ['16px', '32px'],
        '18-24': ['18px', '24px'],
        '20-28': ['20px', '28px'],
        '20-32': ['20px', '32px'],
        '24-32': ['24px', '32px'],
        '28-36': ['28px', '36px'],
        '30-38': ['30px', '38px'],
        '32-44': ['32px', '44px'],
        '40-48': ['40px', '48px'],
        '44-60': ['44px', '60px'],
        100: '100px',
      },
      inset: {
        18: '72px',
      },
      screens: {
        md: { max: '768px' },
      },
      margin: {
        'img-col': '',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        dot: '#45cfbe',
      }),
      backgroundImage: (theme) => ({
        'gradient-more': 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, #FFFFFF 46%, #FFFFFF 100%)',
      }),
      boxShadow: {
        card08: '0 4px 16px 2px rgba(92, 77, 237, 0.08)',
        card2: '0 4px 16px 2px rgba(92, 77, 237, 0.2)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
