import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import {
  AppleMusic,
  Bandcamp,
  Beatport,
  Soundcloud,
  Spotify,
  Youtube,
} from '../../logos/Logos';
import { StoresProps } from './Stores.types';

export const Stores = styled.div<StoresProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}
  align-items: center;
  justify-content: center;
  gap: 32px;

  ${({ vertical }) =>
    vertical &&
    css`
      flex-wrap: wrap;
    `};

  ${({ noMob }) =>
    noMob &&
    css`
      display: none;
      ${mediaQueries.lg} {
        display: flex;
      }
    `};

  ${mediaQueries.lg} {
    flex-direction: row;
    gap: 64px;
  }
`;

export const BandcampLogo = styled(Bandcamp)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 100px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  ${mediaQueries.lg} {
    width: 200px;
  }
`;

export const SpotifyLogo = styled(Spotify)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 100px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  ${mediaQueries.lg} {
    width: 150px;
  }
`;

export const BeatportLogo = styled(Beatport)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 100px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  ${mediaQueries.lg} {
    width: 150px;
  }
`;

export const ApplemusicLogo = styled(AppleMusic)`
  transition: color 100ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 100px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  ${mediaQueries.lg} {
    width: 150px;
  }
`;

export const SoundcloudLogo = styled(Soundcloud)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 75px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  ${mediaQueries.lg} {
    width: 100px;
  }
`;

export const YoutubeLogo = styled(Youtube)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 100px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  ${mediaQueries.lg} {
    width: 150px;
  }
`;
