import Stack from '@uicomponents/Stack';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';

import { mediaQueries } from '@styles';

import { Sync } from '../../logos/Logos';
import { NavbarProps } from './Navbar.types';

export const Navbar = styled(Stack).attrs({
  width: '100vw',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
})`
  background-color: ${({ theme }) => theme.colors.gray900};
  padding: ${({ theme }) => theme.space[0]}px ${({ theme }) => theme.space[8]}px;
  min-height: 15vh;
  z-index: 2;
`;

export const Link = styled(NextLink).attrs({ passHref: true })``;

export const Links = styled(Stack)<Pick<NavbarProps, 'noMob'>>`
  display: none;

  ${({ noMob }) =>
    noMob &&
    css`
      ${mediaQueries.lg} {
        display: flex;
      }
    `}
`;

export const NavLogo = styled(Sync)`
  width: 100%;
  max-width: 150px;
  color: ${({ theme }) => theme.colors.gray50};
  cursor: pointer;
`;

export const NavLinksContainer = styled(Stack).attrs({
  vertical: true,
  width: '100%',
  height: '100%',
})``;
