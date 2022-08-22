import Banner from '@uicomponents/Banner';
import ReleaseList from '@uicomponents/ReleaseList';
import Stack from '@uicomponents/Stack';

// placeholder data
import data from '../../../../apps/web/src/mockData';
import { useHeight } from '../../hooks/useHeight';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, ...rest }: HeroProps) => {
  const currentHeight = useHeight();
  return (
    <S.Hero {...rest} height={currentHeight}>
      <Stack display="flex">
        <Banner data={data[0]} />
        <Stack display="flex" vertical>
          <ReleaseList data={data} />
        </Stack>
        {children}
      </Stack>
    </S.Hero>
  );
};

export default Hero;
