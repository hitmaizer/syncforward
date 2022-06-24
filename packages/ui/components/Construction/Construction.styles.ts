import styled from 'styled-components';

import {
  SfAppleMusic,
  SfBeatport,
  SfSoundcloud,
  SfBandcamp,
  SfSpotify,
} from '@icons';

export const Construction = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const BandcampIcon = styled(SfBandcamp)`
  transition: color 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SpotifyIcon = styled(SfSpotify)`
  transition: color 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const BeatportIcon = styled(SfBeatport)`
  transition: color 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ApplemusicIcon = styled(SfAppleMusic)`
  transition: color 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const SoundcloudIcon = styled(SfSoundcloud)`
  transition: color 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
