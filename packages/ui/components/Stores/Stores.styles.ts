import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import { StoresProps } from './Stores.types';

export const Stores = styled.div<StoresProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 32px;

  svg {
    width: 100%;
    margin: 0 auto;
    max-width: 140px;
    max-height: 35px;
    transition: opacity 300ms ease;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    ${mediaQueries.lg} {
      max-width: 155px;
      max-height: 32px;
    }
  }

  ${({ vertical }) =>
    vertical &&
    css`
      flex-direction: column;
      gap: 56px;

      svg {
        max-width: 150px;
        max-height: 40px;
      }
    `};

  ${({ noMob }) =>
    noMob &&
    css`
      display: none;
      ${mediaQueries.lg} {
        display: flex;
      }
    `};

  ${mediaQueries.lg} {
    flex-direction: row;
    gap: 64px;
  }

  ${({ accordion }) =>
    accordion &&
    css`
      max-width: 860px;
      margin-left: auto;
      gap: 40px;
      padding: 0;
      margin-top: 40px;

      svg {
        width: 100%;
        max-width: 150px;
        max-height: 20px;
        transition: opacity 300ms ease;
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }

        ${mediaQueries.lg} {
          max-width: 155px;
          max-height: 32px;
        }
      }
    `}
`;
