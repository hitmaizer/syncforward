import UIHeading from '@uicomponents/Heading';
import styled, { css } from 'styled-components';
import { Sync } from 'ui/logos/Logos';

import { mediaQueries } from '@styles';
import { Stack } from '@uicomponents';

import { NavbarProps } from './Navbar.types';

export const Header = styled(Stack).attrs({
  width: '100%',
  p: 10,
  justifyContent: 'space-between',
  zIndex: 10,
  background: 'transparent',
  minHeight: '100px',
})<Pick<NavbarProps, 'open'>>`
  ${mediaQueries.lg} {
    padding: 48px;
  }

  ${({ open }) =>
    open &&
    css`
      background-color: ${({ theme }) => theme.colors.bg};
    `}
`;

export const Link = styled.a``;

export const SyncLogo = styled(Sync)`
  color: ${({ theme }) => theme.colors.white};
  width: 150px;
`;

export const HeadingContainer = styled.div`
  display: none;

  ${mediaQueries.lg} {
    display: block;
  }
`;

export const DesktopHeading = styled(UIHeading).attrs({
  color: 'gray50',
  size: 'h3',
  textAlign: 'right',
})``;
