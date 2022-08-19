import Text from '@uicomponents/Text';
import styled, { css } from 'styled-components';

import { NavLinkProps } from './NavLink.types';

export const NavLink = styled.a<NavLinkProps>`
  color: ${({ theme }) => theme.colors.gray75};
  width: 100%;
  position: relative;

  ${({ href, pathName }) =>
    href === pathName &&
    css`
      p {
        text-shadow: rgb(255 255 255 / 50%) 0 0 15px;
        opacity: 1;
        color: ${({ theme }) => theme.colors.gray50};
      }
    `};

  &:after {
    content: '';
    height: 20%; //You can change this if you want smaller/bigger borders
    width: 2px;
    position: absolute;
    right: 0;
    top: 40%; // If you want to set a smaller height and center it, change this value
    background-color: ${({ theme }) =>
      theme.colors.gray50}; // The color of your border
    opacity: 0.5;
  }

  &:last-child:after {
    content: none;
  }
`;

export const LinkText = styled(Text)<NavLinkProps>`
  opacity: 0.5;
  font-size: 16px;
  transition: opacity 300ms ease;
  text-align: center;
  text-transform: uppercase;
  padding: 50px 64px;

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
