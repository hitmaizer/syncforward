import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/globalStyles';
import { theme } from '@styles/theme/';
import '../styles/fonts';

import * as NextImage from 'next/image';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    typeof props.src === 'string' && (
      <OriginalNextImage {...props} unoptimized />
    ),
});

Object.defineProperty(NextImage, '__esModule', {
  configurable: true,
  value: true,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
