import { variant } from 'styled-system';

export const size = variant({
  prop: 'size',
  variants: {
    xxs: { width: 8, height: 8 },
    xs: { width: 16, height: 16 },
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 64, height: 64 },
    xl: { width: 80, height: 80 },
  },
});
