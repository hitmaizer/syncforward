/* eslint-disable react/style-prop-object */
import * as S from './MusicCard.styles';
import { MusicCardProps } from './MusicCard.types';

const MusicCard = ({ children, imgSrc }: MusicCardProps) => {
  return (
    <S.Card>
      <img src={imgSrc} alt="card-img" />
      {children}
    </S.Card>
  );
};

export default MusicCard;

MusicCard.defaultProps = {
  imgSrc: 'assets/imgs/placeholder.jpg',
};
