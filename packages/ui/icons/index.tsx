import { SpaceProps, ColorProps } from 'styled-system';

 import SfAppleMusic from './AppleMusic';
import SfBandcamp from './Bandcamp';
import SfBeatport from './Beatport';
import SfSoundcloud from './Soundcloud';
import SfSpotify from './Spotify';
import SfSync from './Sync';
import SfYoutube from './Youtube';

  interface BaseProps {
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  }

  export type IconProps = BaseProps & SpaceProps & ColorProps;

 export {
  SfAppleMusic,
  SfBandcamp,
  SfBeatport,
  SfSoundcloud,
  SfSpotify,
  SfSync,
  SfYoutube
 };