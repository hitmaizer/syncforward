import { variant } from 'styled-system';

export const size = variant({
  prop: 'size',
  variants: {
    h6: {
      fontSize: [1, 2],
      letterSpacing: '-0.01em',
    },
    h5: {
      fontSize: [2, 3],
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: [3, 4],
      letterSpacing: '-0.019em',
    },
    h3: {
      fontSize: [4, 5],
      letterSpacing: '-0.021em',
    },
    h2: {
      fontSize: [5, 6],
      letterSpacing: '-0.022em',
    },
    h1: {
      fontSize: [6, 7],
      letterSpacing: '-0.022em',
    },
  },
});
