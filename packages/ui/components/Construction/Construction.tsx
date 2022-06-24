import Box from '@uicomponents/Box';
import Image from 'next/image';

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
        gridGap="16px"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Box width="225px" height="100px" position="relative">
          <a href="/">
            <Image src="/sync.svg" layout="fill" />
          </a>
        </Box>
        <Heading color="white" size="4xl">
          {text}
        </Heading>
        <Stack
          display="flex"
          alignItems="center"
          justifyContent="center"
          gridGap="60px"
        >
          <a
            href="https://syncforward.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <S.BandcampIcon size="md" color="gray" />
          </a>
          <a
            href="https://open.spotify.com/playlist/3OdzGZH6odwnQ47S7aHLZC?si=xh_emCWLT7aTdQ5N_7xyxQ&utm_source=copy-link"
            target="_blank"
            rel="noreferrer"
          >
            <S.SpotifyIcon size="md" color="gray" />
          </a>
          <a
            href="https://www.beatport.com/label/sync-forward/32440"
            target="_blank"
            rel="noreferrer"
          >
            <S.BeatportIcon size="md" color="gray" />
          </a>
          <a
            href="https://music.apple.com/us/album/backlash-single/1603469909"
            target="_blank"
            rel="noreferrer"
          >
            <S.ApplemusicIcon size="md" color="gray" />
          </a>
          <a
            href="https://soundcloud.com/syncforward"
            target="_blank"
            rel="noreferrer"
          >
            <S.SoundcloudIcon size="xs" color="gray" />
          </a>
          <a
            href="https://soundcloud.com/syncforward"
            target="_blank"
            rel="noreferrer"
          >
            <S.YoutubeIcon size="xs" color="gray" />
          </a>
        </Stack>
        {children}
      </Stack>
    </S.Construction>
  );
};

export default Construction;
