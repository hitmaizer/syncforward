import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.gray75};
  color: ${({ theme }) => theme.colors.gray900};
  transition: all 300ms ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray75};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray75};
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray75};
        color: ${({ theme }) => theme.colors.gray900};
      }
    `}
`;
