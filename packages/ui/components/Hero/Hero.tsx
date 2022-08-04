import { useHeight } from '../../hooks/useHeight';
import * as S from './Hero.styles';
import { HeroProps } from './Hero.types';

const Hero = ({ children, ...rest }: HeroProps) => {
  const currentHeight = useHeight();
  return (
    <S.Hero {...rest} height={currentHeight}>
      {children}
    </S.Hero>
  );
};

export default Hero;
