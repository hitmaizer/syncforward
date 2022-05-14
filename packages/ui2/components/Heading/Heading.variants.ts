import { variant } from 'styled-system';

export const size = variant({
  prop: 'size',
  variants: {
    lg: {
      fontSize: [2, 3],
      letterSpacing: '-0.01em',
    },
    xl: {
      fontSize: [3, 4],
      letterSpacing: '-0.019em',
    },
    '2xl': {
      fontSize: [4, 5],
      letterSpacing: '-0.021em',
    },
    '3xl': {
      fontSize: [5, 6],
      letterSpacing: '-0.022em',
    },
    '4xl': {
      fontSize: [6, 7],
      letterSpacing: '-0.022em',
    },
  },
});
