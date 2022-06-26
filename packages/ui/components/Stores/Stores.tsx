import * as S from './Stores.styles';
import { StoresProps } from './Stores.types';

const Stores = ({ children, ...rest }: StoresProps) => {
  return (
    <S.Stores display="flex" {...rest}>
      <a
        href="https://syncforward.bandcamp.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <S.BandcampLogo />
      </a>
      <a
        href="https://open.spotify.com/playlist/3OdzGZH6odwnQ47S7aHLZC?si=xh_emCWLT7aTdQ5N_7xyxQ&utm_source=copy-link"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <S.SpotifyLogo />
      </a>
      <a
        href="https://www.beatport.com/label/sync-forward/32440"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <S.BeatportLogo />
      </a>
      <a
        href="https://music.apple.com/us/album/backlash-single/1603469909"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <S.ApplemusicLogo />
      </a>
      <a
        href="https://soundcloud.com/syncforward"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <S.SoundcloudLogo />
      </a>
      <a
        href="https://www.youtube.com/c/SyncForward"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <S.YoutubeLogo />
      </a>
      {children}
    </S.Stores>
  );
};

export default Stores;
