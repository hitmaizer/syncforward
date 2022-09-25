import Button from '@uicomponents/Button';
import Stores from '@uicomponents/Stores';

import Arrow from '../../icons/Arrow';
import * as S from './Banner.styles';
import { BannerProps } from './Banner.types';

const Banner = ({ children, data, ...rest }: BannerProps) => {
  return (
    <S.Banner {...rest} bg={data?.img}>
      <S.Content>
        <S.SubTitle>{data?.artists}</S.SubTitle>
        <S.Title>{data?.title}</S.Title>
        <S.Info>
          <S.Bio>{data?.description}</S.Bio>
          <S.Soundcloud title={data?.title} src={data?.trackLink} />
          <Button label="Stream/Download" icon={<Arrow size="xxs" />} />
          <Stores banner />
        </S.Info>
        {children}
      </S.Content>
    </S.Banner>
  );
};

export default Banner;
