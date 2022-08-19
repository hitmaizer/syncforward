import { SpaceProps, ColorProps } from 'styled-system';

import SfYoutube from './Youtube';
import SfAppleMusic from './AppleMusic';
import SfArrow from './Arrow';
import SfBandcampSq from './BandcampSq';
import SfBandcamp from './Bandcamp';
import SfBeatport from './Beatport';
import SfSoundcloudSq from './SoundcloudSq';
import SfSoundcloud from './Soundcloud';
import SfSpotify from './Spotify';
import SfSync from './Sync';

interface BaseProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
}

export type IconProps = BaseProps & SpaceProps & ColorProps;

export {
  SfYoutube,
  SfAppleMusic,
  SfArrow,
  SfBandcampSq,
  SfBandcamp,
  SfBeatport,
  SfSoundcloudSq,
  SfSoundcloud,
  SfSpotify,
  SfSync,
};
