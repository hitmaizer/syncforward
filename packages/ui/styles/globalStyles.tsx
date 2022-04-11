import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    [data-color-scheme="dark"], .theme--dark {
      color-scheme: dark;
    }

    [data-color-scheme="light"], .theme--light {
      color-scheme: light;
    }

    body {
      font-family: ${({ theme }) => theme.fonts.body};
      overflow: hidden;
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
`;

export default GlobalStyle;
