import { useState } from 'react';

import * as S from './MusicCard.styles';
import { MusicCardProps } from './MusicCard.types';

const MusicCard = ({
  imgSrc = '',
  soundcloudLink,
  title,
  iconSrc,
}: MusicCardProps) => {
  const [showPlay, setShowPlay] = useState(true);

  const handlePlay = () => {
    setShowPlay((state) => !state);
  };

  return (
    <>
      <S.Card onClick={() => handlePlay()}>
        {!showPlay && (
          <S.SoundCloudContainer showPlay={showPlay}>
            <S.IFrame title={title} src={soundcloudLink} />
          </S.SoundCloudContainer>
        )}
        <S.ImageContainer>
          <S.Image src={imgSrc} />
        </S.ImageContainer>
        <S.OpenSoundCloud>
          <S.Icon src={iconSrc} alt="" />
        </S.OpenSoundCloud>
      </S.Card>
    </>
  );
};

export default MusicCard;

MusicCard.defaultProps = {};
