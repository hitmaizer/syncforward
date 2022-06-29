import Stores from '@uicomponents/Stores';

import * as S from './Hamburger.styles';
import { HamburgerProps } from './Hamburger.types';

const Hamburger = ({ children, open, ...rest }: HamburgerProps) => {
  return (
    <>
      <S.Container {...rest}>
        <S.Hamburger open={open} {...rest} />
        <S.HamburgerContent open={open}>
          <Stores vertical />
        </S.HamburgerContent>
        {children}
      </S.Container>
    </>
  );
};

export default Hamburger;
