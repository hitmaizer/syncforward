import styled, { css } from 'styled-components';
import { color, space, textAlign, typography } from 'styled-system';

import { mediaQueries } from '@styles';

import { HeadingProps } from './Heading.types';
import { size } from './Heading.variants';

export const Heading = styled.h1<HeadingProps>`
  line-height: ${({ theme }) => theme.lineHeights.heading};
  ${textAlign}
  ${typography}
  ${space}
  ${size}
  ${color}

  ${({ mobOnly }) =>
    mobOnly &&
    css`
      display: block;
      ${mediaQueries.lg} {
        display: none;
      }
    `}
`;
