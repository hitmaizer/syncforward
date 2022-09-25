import * as S from './ReleaseCard.styles';
import { ReleaseCardProps } from './ReleaseCard.types';

const ReleaseCard = ({
  children,
  data,
  changeBanner,
  ...rest
}: ReleaseCardProps) => {
  const { thumbnail } = data;

  return (
    <S.ReleaseCard onClick={() => changeBanner(data)} {...rest}>
      <S.Content>
        <S.ImageWrapper>
          <S.Image src={thumbnail} />
        </S.ImageWrapper>
        <S.Info>
          <S.CardText>{data?.artists}</S.CardText>
          <S.CardText>{data?.title}</S.CardText>
        </S.Info>
        {children}
      </S.Content>
    </S.ReleaseCard>
  );
};

export default ReleaseCard;
