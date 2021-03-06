import Heading from '@uicomponents/Heading';
import styled, { css } from 'styled-components';

import { NavLinkProps } from './NavLink.types';

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.gray75};
  width: 100%;
`;

export const LinkText = styled(Heading)<NavLinkProps>`
  opacity: 0.5;
  font-size: 16px;
  transition: opacity 300ms ease;
  text-align: center;

  &:hover {
    opacity: 1;
  }

  ${({ mobOnly }) =>
    mobOnly &&
    css`
      font-size: 32px;
      opacity: 1;
    `}
`;
