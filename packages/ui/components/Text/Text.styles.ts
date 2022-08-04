import styled, { css } from 'styled-components';
import { color, fontWeight, space, style, typography } from 'styled-system';

import { mediaQueries } from '@styles';

import { TextProps } from './Text.types';
import { size } from './Text.variants';

const textTransform = style({
  key: 'textTransform',
  cssProperty: 'textTransform',
  prop: 'textTransform',
});

export const Text = styled.p<TextProps>`
  ${size}
  ${color}
  ${typography}
  ${space}
  ${textTransform}
  ${fontWeight}

  line-height: 1.5;
  ${({ noMob }) =>
    noMob &&
    css`
      display: none;
      ${mediaQueries.lg} {
        display: block;
      }
    `}
  ${({ mobOnly }) =>
    mobOnly &&
    css`
      display: block;
      ${mediaQueries.lg} {
        display: none;
      }
    `}
`;
