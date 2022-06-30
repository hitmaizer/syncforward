import { useEffect, useState } from 'react';

import Stores from '@uicomponents/Stores';

import * as S from './Hamburger.styles';
import { HamburgerProps } from './Hamburger.types';

const Hamburger = ({ children, open, ...rest }: HamburgerProps) => {
  const [height, setHeight] = useState(0);

  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <>
      <S.Container {...rest}>
        <S.Hamburger open={open} {...rest} />
        <S.HamburgerContent open={open} height={height}>
          <Stores vertical />
        </S.HamburgerContent>
        {children}
      </S.Container>
    </>
  );
};

export default Hamburger;
