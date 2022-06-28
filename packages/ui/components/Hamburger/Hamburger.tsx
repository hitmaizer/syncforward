import { useState } from 'react';

import Stores from '@uicomponents/Stores';

import * as S from './Hamburger.styles';
import { HamburgerProps } from './Hamburger.types';

const Hamburger = ({ children, ...rest }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <S.Container onClick={() => setIsOpen(!isOpen)} {...rest}>
        <S.Hamburger open={isOpen} {...rest} />
        <S.HamburgerContent open={isOpen}>
          <Stores vertical />
        </S.HamburgerContent>
        {children}
      </S.Container>
    </>
  );
};

export default Hamburger;
