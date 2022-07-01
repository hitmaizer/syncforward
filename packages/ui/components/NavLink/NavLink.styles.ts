import Heading from '@uicomponents/Heading';
import styled, { css } from 'styled-components';

import { NavLinkProps } from './NavLink.types';

export const NavLink = styled.a<NavLinkProps>`
  color: ${({ theme }) => theme.colors.gray75};
  width: 100%;
  ${({ href, pathName }) =>
    href === pathName &&
    css`
      h2 {
        text-shadow: rgb(255 255 255 / 50%) 0 0 15px;
        opacity: 1;
        color: ${({ theme }) => theme.colors.gray50};
      }
    `};
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
