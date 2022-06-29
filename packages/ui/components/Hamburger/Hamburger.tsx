import * as S from './Hamburger.styles';
import { HamburgerProps } from './Hamburger.types';

const Hamburger = ({ children, open, web, ...rest }: HamburgerProps) => {
  return (
    <>
      <S.Container {...rest}>
        <S.Hamburger open={open} {...rest} />
        <S.HamburgerContent open={open} web={web}>
          {children}
        </S.HamburgerContent>
      </S.Container>
    </>
  );
};

export default Hamburger;
