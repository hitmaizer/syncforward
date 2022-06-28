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
  width: 100%;

  ${({ vertical }) =>
    vertical &&
    css`
      flex-direction: column;
      gap: 40px;
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

export const BandcampLogo = styled(Bandcamp)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  width: 100px;
  &:hover {
    opacity: 1;
  }
  ${mediaQueries.lg} {
    width: 200px;
  }
  ${({ vertical }) =>
    vertical &&
    css`
      width: 150px;
    `};
`;

export const SpotifyLogo = styled(Spotify)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  width: 100px;
  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      width: 100px;
    `};

  ${mediaQueries.lg} {
    width: 150px;
  }
`;

export const BeatportLogo = styled(Beatport)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  width: 100px;
  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      width: 125px;
    `};

  ${mediaQueries.lg} {
    width: 150px;
  }
`;

export const ApplemusicLogo = styled(AppleMusic)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  width: 100px;

  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      width: 125px;
    `};

  ${mediaQueries.lg} {
    width: 150px;
  }
`;

export const SoundcloudLogo = styled(Soundcloud)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  width: 75px;

  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      width: 75px;
    `};

  ${mediaQueries.lg} {
    width: 100px;
  }
`;

export const YoutubeLogo = styled(Youtube)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  width: 100px;
  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      width: 100px;
    `};

  ${mediaQueries.lg} {
    width: 150px;
  }
`;
