import { useState } from 'react';

import { Release } from '@uicomponents/Accordion/Accordion.types';
import Banner from '@uicomponents/Banner';
import ReleaseList from '@uicomponents/ReleaseList';
import Stack from '@uicomponents/Stack';

// placeholder data
import data from '../../../../apps/web/src/mockData';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, ...rest }: HeroProps) => {
  const [selectedRelease, setSelectedRelease] = useState<Release>(data[0]);

  const handleRelease = (release) => {
    setSelectedRelease(release);
  };

  return (
    <S.Hero {...rest}>
      <Stack display="flex">
        <Banner data={selectedRelease} />
        <Stack display="flex" vertical>
          <ReleaseList data={data} changeBanner={handleRelease} />
        </Stack>
        {children}
      </Stack>
    </S.Hero>
  );
};

export default Hero;
