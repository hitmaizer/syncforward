import { FacebookSm, InstagramSm, TwitterSm, YoutubeSm } from 'logos/Logos';

import * as S from './Socials.styles';
import { SocialsProps } from './Socials.types';

const Socials = ({ children, ...rest }: SocialsProps) => {
  return (
    <S.Socials
      display="flex"
      alignItems="center"
      justifyContent="center"
      gridGap="32px"
      width="100%"
      mb="75px"
      {...rest}
    >
      <a
        href="https://www.facebook.com/SyncForward/"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <FacebookSm />
      </a>
      <a
        href="https://twitter.com/sync_forward"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <TwitterSm />
      </a>
      <a
        href="https://www.instagram.com/syncforward/"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <InstagramSm />
      </a>
      <a
        href="https://www.youtube.com/user/syncforward"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        <YoutubeSm />
      </a>
      {children}
    </S.Socials>
  );
};

export default Socials;
