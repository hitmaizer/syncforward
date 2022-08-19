import { useState } from 'react';

import Hamburger from '@uicomponents/Hamburger';
import NavLink from '@uicomponents/NavLink';
import Socials from '@uicomponents/Socials';
import Stack from '@uicomponents/Stack';
import Link from 'next/link';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Navbar display="flex" justifyContent="space-between" {...rest}>
      <Link href="/">
        <S.NavLogo />
      </Link>
      {children}
      <S.Links noMob>
        <NavLink text="Releases" pathName="releases" />
        <NavLink text="Podcasts" pathName="podcasts" />
        <NavLink text="Artists" pathName="artists" />
        <NavLink text="Demos" pathName="demos" />
      </S.Links>
      <Hamburger open={isOpen} onClick={() => setIsOpen(!isOpen)} web>
        <Stack
          display="flex"
          vertical
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Stack
            display="flex"
            vertical
            alignItems="center"
            justifyContent="center"
            width="100%"
            gridGap="32px"
            flex={1}
          >
            <NavLink text="Releases" pathName="releases" mobOnly />
            <NavLink text="Podcasts" pathName="podcasts" mobOnly />
            <NavLink text="Artists" pathName="artists" mobOnly />
            <NavLink text="Demos" pathName="demos" mobOnly />
          </Stack>
          <Socials />
        </Stack>
      </Hamburger>
    </S.Navbar>
  );
};

export default Navbar;
