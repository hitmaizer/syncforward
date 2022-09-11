import { useEffect, useState } from 'react';

import Hamburger from '@uicomponents/Hamburger';
import Spinner from '@uicomponents/Spinner';
import Stores from '@uicomponents/Stores';

import * as S from './Construction.styles';
import { ConstructionProps } from './Construction.types';

const Construction = ({
  children,
  text,
  videoSrc,
  ...rest
}: ConstructionProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          <S.Header open={isOpen}>
            <S.Link href="/">
              <S.SyncLogo />
            </S.Link>
            <Hamburger onClick={() => setIsOpen(!isOpen)} open={isOpen}>
              <Stores vertical />
            </Hamburger>
            <S.HeadingContainer>
              <S.DesktopHeading>{text}</S.DesktopHeading>
            </S.HeadingContainer>
          </S.Header>
          <S.MobileHeading>{text}</S.MobileHeading>
          <S.FooterTextMob>Sync Forward Records — Est. 2009</S.FooterTextMob>
          <Stores mt="70vh" noMob />
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
