import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import { Sync } from '../../logos/Logos';
import { NavbarProps } from './Navbar.types';

export const Navbar = styled.nav<NavbarProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${gridGap}
  background-color: ${({ theme }) => theme.colors.gray900};
  width: 100%;
  padding: 48px;
`;

export const Links = styled.div<NavbarProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${gridGap}
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
`;
