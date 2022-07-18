import { useEffect, useState } from 'react';

import { theme } from '@styles/theme';
import Hamburger from '@uicomponents/Hamburger';
import Spinner from '@uicomponents/Spinner';
import Stores from '@uicomponents/Stores';
import Text from '@uicomponents/Text';

import Heading from '../Heading';
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
        <S.Content display="flex" gridGap="32px" height="100%">
          <S.Header display="flex" width="100%" open={isOpen}>
            <a href="/">
              <S.SyncLogo />
            </a>
            <Hamburger onClick={() => setIsOpen(!isOpen)} open={isOpen}>
              <Stores vertical />
            </Hamburger>
            <S.HeadingContainer>
              <Heading color="white" size="2xl" textAlign="right">
                {text}
              </Heading>
            </S.HeadingContainer>
          </S.Header>
          <Heading
            color="white"
            size="4xl"
            textAlign="center"
            mt="60vh"
            mobOnly
          >
            {text}
          </Heading>
          <Text
            color={theme.colors.whiteOpacity}
            textAlign="center"
            fontWeight="400"
            mobOnly
          >
            Sync Forward Records — Est. 2009
          </Text>
          <Stores mt="70vh" noMob />
          <a href="/">
            <Text
              color={theme.colors.whiteOpacity}
              textAlign="center"
              fontWeight="400"
              mt="70px"
              noMob
            >
              Sync Forward Records — Est. 2009
            </Text>
          </a>
          {children}
        </S.Content>
      </S.Construction>
    </>
  );
};

export default Construction;

Construction.defaultProps = {
  text: 'Text renders here',
  videoSrc: '/assets/videos/neon-30.mp4',
};
