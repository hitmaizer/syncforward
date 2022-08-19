import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { SocialsProps } from './Socials.types';

export const Socials = styled.div<SocialsProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${gridGap}

  width: 100%;

  svg {
    width: 100%;
    max-width: 32px;
    color: ${({ theme }) => theme.colors.gray75};
  }

  ${({ page }) =>
    page &&
    css`
      height: 100%;
      min-height: 10vh;
      margin-bottom: 0px;
      svg {
        opacity: 0.5;
        transition: all 300ms ease;
        &:hover {
          opacity: 1;
          scale: 1.1;
        }
      }
    `}
`;
