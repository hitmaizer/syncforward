import styled from 'styled-components';

import {
  AppleMusic,
  Bandcamp,
  Beatport,
  Soundcloud,
  Spotify,
  Sync,
  Youtube,
} from '../../logos/Logos';

export const Construction = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const BandcampLogo = styled(Bandcamp)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 200px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SpotifyLogo = styled(Spotify)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 150px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const BeatportLogo = styled(Beatport)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 170px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ApplemusicLogo = styled(AppleMusic)`
  transition: color 100ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 150px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SoundcloudLogo = styled(Soundcloud)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 100px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const YoutubeLogo = styled(Youtube)`
  transition: color 300ms ease;
  color: ${({ theme }) => theme.colors.gray};
  width: 150px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SyncLogo = styled(Sync)`
  color: ${({ theme }) => theme.colors.white};
  width: 225px;
`;
