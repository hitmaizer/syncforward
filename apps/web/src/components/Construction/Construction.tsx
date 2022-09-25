import { useEffect, useState } from 'react';

import Spinner from '@uicomponents/Spinner';
import Stores from '@uicomponents/Stores';

import * as S from './Construction.styles';
import { ConstructionProps } from './Construction.types';
import Navbar from './Navigation/Navbar';

const Construction = ({
  children,
  text,
  videoSrc,
  ...rest
}: ConstructionProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <S.Construction {...rest}>
        <S.VideoBg loop muted autoPlay>
          <source src={videoSrc} type="video/mp4" />
        </S.VideoBg>
        <S.Content>
          <Navbar text={text} />
          <S.MobileHeading>{text}</S.MobileHeading>
          <S.FooterTextMob>Sync Forward Records — Est. 2009</S.FooterTextMob>
          <Stores mt="50vh" noMob />
          <S.Link href="/">
            <S.FooterText>Sync Forward Records — Est. 2009</S.FooterText>
          </S.Link>
          {children}
        </S.Content>
      </S.Construction>
    </>
  );
};

Construction.defaultProps = {};

export default Construction;
