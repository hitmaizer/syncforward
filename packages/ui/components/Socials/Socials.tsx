import { socialsLinks } from '../../constants';
import {
  BandcampSq,
  FacebookSm,
  InstagramSm,
  SoundcloudSq,
  TwitterSm,
  YoutubeSm,
} from '../../logos/Logos';
import * as S from './Socials.styles';
import { SocialsProps } from './Socials.types';

const Socials = ({ children, page }: SocialsProps) => {
  return (
    <S.Socials page={page}>
      <S.Link href={socialsLinks.facebook}>
        <S.Anchor>
          <FacebookSm />
        </S.Anchor>
      </S.Link>
      <S.Link href={socialsLinks.twitter}>
        <S.Anchor>
          <TwitterSm />
        </S.Anchor>
      </S.Link>
      <S.Link href={socialsLinks.instagram}>
        <S.Anchor>
          <InstagramSm />
        </S.Anchor>
      </S.Link>
      <S.Link href={socialsLinks.youtube}>
        <S.Anchor>
          <YoutubeSm />
        </S.Anchor>
      </S.Link>

      {page && (
        <>
          <S.Link href={socialsLinks.bandcamp}>
            <S.Anchor>
              <BandcampSq />
            </S.Anchor>
          </S.Link>
          <S.Link href={socialsLinks.soundcloud}>
            <S.Anchor>
              <SoundcloudSq />
            </S.Anchor>
          </S.Link>
        </>
      )}
      {children}
    </S.Socials>
  );
};

export default Socials;
