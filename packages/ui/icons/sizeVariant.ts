import { variant } from 'styled-system';

export const size = variant({
  prop: 'size',
  variants: {
    xxs: { width: 3, height: 3 },
    xs: { width: 4, height: 4 },
    sm: { width: 5, height: 5 },
    md: { width: 6, height: 6 },
    lg: { width: 8, height: 8 },
    xl: { width: 10, height: 10 },
  },
});
