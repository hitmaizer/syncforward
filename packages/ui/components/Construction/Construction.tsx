import Heading from '../Heading';
import Stack from '../Stack';
import * as S from './Construction.styles';
import { ConstructionProps } from './Construction.types';

const Construction = ({ children, text, ...rest }: ConstructionProps) => {
  return (
    <S.Construction {...rest}>
      <Stack
        display="flex"
        vertical
        gridGap="32px"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <a href="/">
          <S.SyncLogo />
        </a>

        <Heading color="white" size="4xl" textAlign="center">
          {text}
        </Heading>
        <S.Stores display="flex" mt="16px">
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
        </S.Stores>
        {children}
      </Stack>
    </S.Construction>
  );
};

export default Construction;
