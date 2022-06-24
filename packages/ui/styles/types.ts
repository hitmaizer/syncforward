import 'styled-components';

import theme from './theme';

export type ColorMode = 'light' | 'dark' | 'system';

export type ColorScheme =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'contrast';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextElement =
  | 'abbr'
  | 'blockquote'
  | 'br'
  | 'code'
  | 'em'
  | 'li'
  | 'span'
  | 'strong'
  | 'p'
  | 'pre';

export type WrapperElement =
  | 'section'
  | 'article'
  | 'main'
  | 'header'
  | 'footer'
  | 'nav'
  | 'aside'
  | 'div';

export type ThemeType = typeof theme;

declare module 'styled-components' {}
