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
  max-width: 100px;
  width: 100%;

  &:hover {
    opacity: 1;
  }

  ${mediaQueries.lg} {
    max-width: 200px;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      max-width: 150px;
    `};
`;

export const SpotifyLogo = styled(Spotify)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  max-width: 100px;
  width: 100%;

  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      max-width: 100px;
    `};

  ${mediaQueries.lg} {
    max-width: 150px;
  }
`;

export const BeatportLogo = styled(Beatport)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  max-width: 100px;
  width: 100%;

  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      max-width: 125px;
    `};

  ${mediaQueries.lg} {
    max-width: 150px;
  }
`;

export const ApplemusicLogo = styled(AppleMusic)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  max-width: 100px;
  width: 100%;

  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      max-width: 125px;
    `};

  ${mediaQueries.lg} {
    max-width: 150px;
  }
`;

export const SoundcloudLogo = styled(Soundcloud)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  max-width: 75px;
  width: 100%;

  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      max-width: 75px;
    `};

  ${mediaQueries.lg} {
    max-width: 100px;
  }
`;

export const YoutubeLogo = styled(Youtube)<StoresProps>`
  transition: opacity 300ms ease;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
  max-width: 100px;
  width: 100%;

  &:hover {
    opacity: 1;
  }

  ${({ vertical }) =>
    vertical &&
    css`
      max-width: 100px;
    `};

  ${mediaQueries.lg} {
    max-width: 150px;
  }
`;
