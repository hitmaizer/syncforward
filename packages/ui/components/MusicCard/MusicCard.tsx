import { useState } from 'react';

import * as S from './MusicCard.styles';
import { MusicCardProps } from './MusicCard.types';

const MusicCard = ({
  children,
  imgSrc,
  soundcloudLink,
  title,
}: MusicCardProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handlePlay = () => {
    setIsClicked(!isClicked);
    document.querySelectorAll('iframe').forEach((elem: any) => {
      return elem.parentNode.removeChild(elem);
    });
  };

  return (
    <>
      <S.SoundCloudContainer>
        {isClicked && (
          <iframe
            title={title}
            width="500px"
            height="500px"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={soundcloudLink}
          />
        )}
      </S.SoundCloudContainer>
      <S.Card onClick={handlePlay} isClicked={isClicked}>
        <img src={imgSrc} alt="card-img" />
        {children}
      </S.Card>
    </>
  );
};

export default MusicCard;

MusicCard.defaultProps = {
  imgSrc: 'assets/imgs/placeholder.jpg',
  soundcloudLink:
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1209898735&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
};
