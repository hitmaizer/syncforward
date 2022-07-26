import {
  Bandcamp,
  Spotify,
  Youtube,
  Soundcloud,
  Beatport,
  AppleMusic,
} from '../../logos/Logos';
import * as S from './Stores.styles';
import { StoresProps } from './Stores.types';

const Stores = ({ children, vertical, accordion, ...rest }: StoresProps) => {
  return (
    <S.Stores
      display="flex"
      vertical={vertical}
      alignItems="center"
      justifyContent="center"
      accordion={accordion}
      {...rest}
    >
      <a
        href="https://syncforward.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Bandcamp />
      </a>
      <a
        href="https://www.beatport.com/label/sync-forward/32440"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Beatport />
      </a>
      <a
        href="https://soundcloud.com/syncforward"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Soundcloud />
      </a>
      <a
        href="https://www.youtube.com/c/SyncForward"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Youtube />
      </a>
      <a
        href="https://open.spotify.com/playlist/3OdzGZH6odwnQ47S7aHLZC?si=xh_emCWLT7aTdQ5N_7xyxQ&utm_source=copy-link"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Spotify />
      </a>
      <a
        href="https://music.apple.com/us/album/backlash-single/1603469909"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <AppleMusic />
      </a>
      {children}
    </S.Stores>
  );
};

export default Stores;
