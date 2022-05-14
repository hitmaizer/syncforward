import { mix, transparentize } from 'polished';

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  default: '#626E7F',
  primary: '#5868E9',
  secondary: '#06838E',
  positive: '#178758',
  negative: '#C64E4E',
  warning: '#E9AE49',
  contrast: '#000000',
  text: ['#272F3F', '#4E5665', '#8C96A6'],
  inverse: '#FFFFFF',
};

export default {
  default: {
    main: colors.default,
    text: mix(0.2, colors.black, colors.default),
    bg: transparentize(0.84, colors.default),
    alpha: transparentize(0.2, colors.default),
  },

  primary: {
    main: colors.primary,
    text: mix(0.2, colors.black, colors.primary),
    bg: transparentize(0.3, colors.primary),
    alpha: transparentize(0.2, colors.primary),
  },

  secondary: {
    main: colors.secondary,
    text: mix(0.2, colors.black, colors.secondary),
    bg: transparentize(0.84, colors.secondary),
    alpha: transparentize(0.2, colors.secondary),
  },

  positive: {
    main: colors.positive,
    text: mix(0.2, colors.black, colors.positive),
    bg: transparentize(0.84, colors.positive),
    alpha: transparentize(0.2, colors.positive),
  },

  negative: {
    main: colors.negative,
    text: mix(0.2, colors.black, colors.negative),
    bg: transparentize(0.84, colors.negative),
    alpha: transparentize(0.2, colors.negative),
  },

  warning: {
    main: colors.warning,
    text: mix(0.05, colors.black, colors.warning),
    bg: transparentize(0.84, colors.warning),
    alpha: transparentize(0.2, colors.warning),
  },

  contrast: {
    main: colors.contrast,
    text: colors.contrast,
    bg: transparentize(0.84, colors.contrast),
    alpha: transparentize(0.2, colors.contrast),
  },

  background: {
    main: '#FBFBFE',
    secondary: '#F3F4FC',
    gradient: 'linear-gradient(166.81deg, #fff 0%, #fff 54.69%, #fff 100%)',
  },

  appGradient: {
    left: 'radial-gradient(50% 50% at 50% 50%, rgba(74, 39, 74, 0.24) 0%, rgba(76, 38, 73, 0) 100%)',
    right:
      'radial-gradient(50% 50% at 50% 50%, rgba(40, 94, 176, 0.11) 0%, rgba(6, 19, 31, 0) 100%)',
  },

  surface: {
    main: '#FFFFFF',
    secondary: '#F1F5F9',
    gradient: 'linear-gradient(166.81deg, #fff 0%, #fff 54.69%, #fff 100%)',
  },

  border: '#E1E3EA',

  text: {
    primary: colors.text[0],
    secondary: colors.text[1],
    muted: colors.text[2],
    transparent: transparentize(0.5, colors.text[0]),
  },

  inverse: colors.inverse,

  glow: {
    text: {
      primary: `0px 0px 12px ${transparentize(0.98, colors.primary)}`,
      contrast: `0px 0px 12px ${transparentize(0.98, colors.contrast)}`,
    },
    card: {
      warning: `0px 4px 50px ${transparentize(0.95, colors.warning)}`,
    },
  },

  shadow: {
    normal: `0 1px 1px rgba(0,0,0,0.02), 
    0 2px 2px rgba(0,0,0,0.02), 
    0 4px 4px rgba(0,0,0,0.02), 
    0 6px 8px rgba(0,0,0,0.02),
    0 8px 16px rgba(0,0,0,0.02);`,

    raised: `0 2px 1px rgba(0,0,0,0.05), 
    0 4px 2px rgba(0,0,0,0.05), 
    0 8px 4px rgba(0,0,0,0.05), 
    0 16px 8px rgba(0,0,0,0.05),
    0 32px 16px rgba(0,0,0,0.05);`,
  },
};
