import { useState } from 'react';

import * as S from './MusicCard.styles';
import { MusicCardProps } from './MusicCard.types';

const MusicCard = ({
  imgSrc,
  soundcloudLink,
  title,
  iconSrc,
}: MusicCardProps) => {
  const [showPlay, setShowPlay] = useState(true);

  const handlePlay = () => {
    setShowPlay(!showPlay);
  };

  return (
    <>
      <S.Card onClick={() => handlePlay()} showPlay={showPlay}>
        {!showPlay && (
          <S.SoundCloudContainer showPlay={showPlay}>
            <iframe
              title={title}
              width="500px"
              height="500px"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={soundcloudLink}
            />
          </S.SoundCloudContainer>
        )}

        <img src={imgSrc} alt="card-img" />
        <S.OpenSoundCloud>
          <S.Icon src={iconSrc} alt="" />
        </S.OpenSoundCloud>
      </S.Card>
    </>
  );
};

export default MusicCard;

MusicCard.defaultProps = {
  imgSrc: 'assets/imgs/placeholder.jpg',
  soundcloudLink:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1209898735&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  iconSrc: 'assets/imgs/bx-play-circle.svg',
};
