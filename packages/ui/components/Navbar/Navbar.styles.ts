import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import {
  FacebookSm,
  InstagramSm,
  Sync,
  TwitterSm,
  YoutubeSm,
} from '../../logos/Logos';
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

export const Facebook = styled(FacebookSm)`
  width: 100%;
  max-width: 32px;
  color: ${({ theme }) => theme.colors.gray75};
`;

export const Twitter = styled(TwitterSm)`
  width: 100%;
  max-width: 32px;
  color: ${({ theme }) => theme.colors.gray75};
`;

export const Instagram = styled(InstagramSm)`
  width: 100%;
  max-width: 32px;
  color: ${({ theme }) => theme.colors.gray75};
`;
export const Youtube = styled(YoutubeSm)`
  width: 100%;
  max-width: 32px;
  color: ${({ theme }) => theme.colors.gray75};
`;
