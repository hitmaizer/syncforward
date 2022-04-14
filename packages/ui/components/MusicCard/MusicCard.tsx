import { useState } from 'react';

import SoundCloudPlayer from 'react-player/soundcloud';

import * as S from './MusicCard.styles';
import { MusicCardProps } from './MusicCard.types';

const MusicCard = ({ children, imgSrc }: MusicCardProps) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <S.SoundCloudContainer>
        <SoundCloudPlayer
          allow="autoplay"
          width="500px"
          height="500px"
          url="https://soundcloud.com/syncforward/remotion-multiverse-original-mix?in=syncforward/sets/sequence-four-va&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        />
      </S.SoundCloudContainer>
      <S.Card onClick={() => setIsClicked(!isClicked)} isClicked={isClicked}>
        <img src={imgSrc} alt="card-img" />
        {children}
      </S.Card>
    </>
  );
};

export default MusicCard;

MusicCard.defaultProps = {
  imgSrc: 'assets/imgs/placeholder.jpg',
};
