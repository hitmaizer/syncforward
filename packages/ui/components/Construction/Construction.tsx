import { useEffect, useState } from 'react';

import Spinner from '@uicomponents/Spinner';

import Heading from '../Heading';
import * as S from './Construction.styles';
import { ConstructionProps } from './Construction.types';

const Construction = ({ children, text, ...rest }: ConstructionProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <S.Construction {...rest}>
        <S.VideoBg loop muted autoPlay>
          <source src="/neon-30.mp4" type="video/mp4" />
        </S.VideoBg>
        <S.Content display="flex" gridGap="32px" height="100%">
          <S.Header display="flex" width="100%">
            <a href="/">
              <S.SyncLogo />
            </a>
            <Heading color="white" size="2xl" textAlign="right">
              {text}
            </Heading>
          </S.Header>

          <S.Stores display="flex">
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
        </S.Content>
      </S.Construction>
    </>
  );
};

export default Construction;
