import React, { useState } from 'react';

import { Hamburger, Stores } from '@uicomponents';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ text }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Header open={isOpen}>
      <S.Link href="/">
        <S.SyncLogo />
      </S.Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)} open={isOpen}>
        <Stores vertical />
      </Hamburger>
      <S.HeadingContainer>
        <S.DesktopHeading>{text}</S.DesktopHeading>
      </S.HeadingContainer>
    </S.Header>
  );
};

export default Navbar;
