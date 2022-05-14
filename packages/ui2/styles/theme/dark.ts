import { mix, transparentize } from 'polished';

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  default: '#98AAC0',
  primary: '#5868E9',
  secondary: '#21BCC9',
  positive: '#40C990',
  negative: '#C95959',
  warning: '#FFCD57',
  contrast: '#FFFFFF',

  text: ['#FFFFFF', '#A1ABB9', '#828997'],

  inverse: '#000000',
};

export default {
  default: {
    main: colors.default,
    text: mix(0.2, colors.white, colors.default),
    bg: transparentize(0.84, colors.default),
    alpha: transparentize(0.2, colors.default),
  },

  primary: {
    main: colors.primary,
    text: mix(0.2, colors.white, colors.primary),
    bg: transparentize(0.84, colors.primary),
    alpha: transparentize(0.2, colors.primary),
  },

  secondary: {
    main: colors.secondary,
    text: mix(0.2, colors.white, colors.secondary),
    bg: transparentize(0.84, colors.secondary),
    alpha: transparentize(0.2, colors.secondary),
  },

  positive: {
    main: colors.positive,
    text: mix(0.2, colors.white, colors.positive),
    bg: transparentize(0.84, colors.positive),
    alpha: transparentize(0.2, colors.positive),
  },

  negative: {
    main: colors.negative,
    text: mix(0.2, colors.white, colors.negative),
    bg: transparentize(0.84, colors.negative),
    alpha: transparentize(0.2, colors.negative),
  },

  warning: {
    main: colors.warning,
    text: mix(0.2, colors.white, colors.warning),
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
    main: '#0A0C0F',
    secondary: '#0E1116',
    gradient:
      'linear-gradient(166.81deg, #0A1321 0%, #0A0C0F 54.69%, #0A101A 100%)',
  },

  appGradient: {
    left: 'radial-gradient(50% 50% at 50% 50%, rgba(74, 39, 74, 0.74) 0%, rgba(76, 38, 73, 0) 100%)',
    right:
      'radial-gradient(50% 50% at 50% 50%, rgba(40, 94, 176, 0.41) 0%, rgba(6, 19, 31, 0) 100%)',
  },

  surface: {
    main: '#1B202C',
    secondary: '#252B37',
    gradient: 'linear-gradient(180deg, #1B202C 0%, #13171E 100%);',
  },

  border: '#1F2733',

  text: {
    primary: colors.text[0],
    secondary: colors.text[1],
    muted: colors.text[2],
    transparent: transparentize(0.5, colors.text[0]),
  },

  inverse: colors.inverse,

  glow: {
    text: {
      primary: `0px 0px 12px ${transparentize(0.7, colors.primary)}`,
      contrast: `0px 0px 12px ${transparentize(0.7, colors.contrast)}`,
    },
    card: {
      warning: `0px 4px 50px ${transparentize(0.87, colors.warning)}`,
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
