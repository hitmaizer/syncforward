import { breakpoints, mediaQueries } from './mediaQueries';
import zIndices from './zIndices';

const theme = {
  //  default Breakpoints
  breakpoints,
  mediaQueries,

  // zIndices
  zIndices,

  fonts: {
    body: '"Barlow", system-ui, -apple-system, "Segoe UI", "Roboto", "Helvetica Neue", "Noto Sans", "Liberation Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    heading:
      '"IntegralCF", system-ui, -apple-system, "Segoe UI", "Roboto", "Helvetica Neue", "NotoSans", "Liberation Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },

  // default fontSizes
  fontSizes: [13, 15, 18, 22, 26, 32, 44, 64],

  // default LineHeights
  lineHeights: {
    body: 1.6,
    heading: 1.2,
  },

  // default fontWeights
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // default space for margin and padding
  space: [
    0, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 56, 64, 80, 96, 112,
    128, 160, 192, 256, 320,
  ],

  sizes: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    32: 128,
    48: 192,
    64: 256,
    80: 320,
    128: 512,

    container: {
      lg: 1280,
      sm: 750,
    },
  },

  radii: {
    0: 0,
    1: 3,
    2: 4,
    3: 8,
    4: 16,
    round: '50%',
    pill: '9999',
  },

  borders: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
};

export * from './mediaQueries';

export default theme;
