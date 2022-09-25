import { useEffect, useState } from 'react';

import * as S from './Hamburger.styles';
import { HamburgerProps } from './Hamburger.types';

const Hamburger = ({ children, web }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <S.Container onClick={() => setIsOpen((state) => !state)}>
        <S.Hamburger open={isOpen} />
      </S.Container>
      <S.HamburgerContent open={isOpen} web={web} height={height}>
        {children}
      </S.HamburgerContent>
    </>
  );
};

Hamburger.defaultProps = {};

export default Hamburger;
