import { useState } from 'react';

import * as S from './MusicCard.styles';
import { MusicCardProps } from './MusicCard.types';

const MusicCard = ({ children, imgSrc }: MusicCardProps) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <S.SoundCloudContainer>
        {isClicked && (
          <iframe
            title="sc-player"
            width="500px"
            height="500px"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1209898735&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
        )}
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
