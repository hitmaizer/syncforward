import { useState } from 'react';

import Hamburger from '@uicomponents/Hamburger';
import NavLink from '@uicomponents/NavLink';
import Stack from '@uicomponents/Stack';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Navbar display="flex" justifyContent="space-between" {...rest}>
      <S.NavLogo />
      {children}
      <S.Links gridGap="48px" noMob>
        <NavLink text="Releases" />
        <NavLink text="Podcasts" />
        <NavLink text="Artists" />
        <NavLink text="Demos" />
      </S.Links>
      <Hamburger open={isOpen} onClick={() => setIsOpen(!isOpen)} web>
        <Stack
          display="flex"
          vertical
          alignItems="center"
          justifyContent="center"
          width="100%"
          gridGap="32px"
        >
          <NavLink text="Releases" mobOnly />
          <NavLink text="Podcasts" mobOnly />
          <NavLink text="Artists" mobOnly />
          <NavLink text="Demos" mobOnly />
        </Stack>
      </Hamburger>
    </S.Navbar>
  );
};

export default Navbar;
