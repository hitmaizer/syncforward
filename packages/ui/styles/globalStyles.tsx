import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { ThemeType } from './types';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${reset}

    
    body {
      font-family: ${({ theme }) => theme.fonts.body};
      background-color: ${({ theme }) => theme.colors.gray900};
      // overflow: hidden;
      position: relative;
    }

    html {
    height: 100%;

    /* Adjust font size */
    font-size: 100%;
    -webkit-text-size-adjust: 100%;

    /* Smoothing */
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-feature-settings: 'kern' on, 'liga' on, 'calt' on, 'zero' on,
      contextual common-ligatures, 'kern', contextual common-ligatures, 'kern';
    -webkit-font-feature-settings: 'kern' on, 'liga' on, 'calt' on, 'zero' on;
    font-variant-ligatures: contextual common-ligatures;
    -webkit-font-kerning: normal;
    font-kerning: normal;
  }

  * {
    box-sizing: border-box;
  }

  a,
  button {
      cursor: pointer;
      border: none;
  }

  a {
      text-decoration: none;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

`;

export default GlobalStyle;
