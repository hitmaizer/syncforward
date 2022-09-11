import Stack from '@uicomponents/Stack';
import Text from '@uicomponents/Text';
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

export const Button = styled.button<Pick<ButtonProps, 'secondary'>>`
  width: 100%;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.gray75};
  color: ${({ theme }) => theme.colors.gray900};
  transition: all 300ms ease;
  border: 1px solid ${({ theme }) => theme.colors.gray75};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray75};
      width: 120%;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray75};
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray75};
        color: ${({ theme }) => theme.colors.gray900};
      }
    `}
`;

export const ButtonContent = styled(Stack).attrs({
  gridGap: 4,
  alignItems: 'center',
})``;

export const Label = styled(Text).attrs({})``;
