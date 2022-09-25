import { useState } from 'react';

import { Release } from '@uicomponents/Accordion/Accordion.types';
import Banner from '@uicomponents/Banner';
import ReleaseList from '@uicomponents/ReleaseList';

// placeholder data
import data from '../../../../apps/web/src/mockData';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, releases = data }: HeroProps) => {
  const [selectedRelease, setSelectedRelease] = useState<Release>(releases[0]);

  const handleRelease = (release) => {
    setSelectedRelease(release);
  };

  return (
    <S.Hero>
      <S.HeroContent>
        <Banner data={selectedRelease} />
        <S.ReleaseListContainer>
          <ReleaseList data={data} changeBanner={handleRelease} />
        </S.ReleaseListContainer>
        {children}
      </S.HeroContent>
    </S.Hero>
  );
};

export default Hero;
