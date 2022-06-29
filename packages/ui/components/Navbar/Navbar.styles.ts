import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

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

export const NavLogo = styled(Sync)`
  width: 100%;
  max-width: 150px;
  color: ${({ theme }) => theme.colors.gray50};
`;
