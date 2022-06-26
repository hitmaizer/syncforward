import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import {
  AppleMusic,
  Bandcamp,
  Beatport,
  Soundcloud,
  Spotify,
  Sync,
  Youtube,
} from '../../logos/Logos';
import { ConstructionProps } from './Construction.types';

export const Content = styled.div<ConstructionProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}
  flex-direction: column;
  gap: 32px;
  z-index: 2;
  position: absolute;
  width: 100%;

  ${mediaQueries.lg} {
    gap: 16px;
  }
`;

export const Construction = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0;
  ${mediaQueries.lg} {
    padding: 0;
  }
`;

export const Stores = styled.div<ConstructionProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  top: 70vh;
  left: calc(50% - 30%);
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

export const SyncLogo = styled(Sync)`
  color: ${({ theme }) => theme.colors.white};
  width: 150px;
`;

export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
`;

export const Header = styled.div<ConstructionProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}
  width: 100%;
  padding: 48px;
  justify-content: space-between;
`;
