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
            <NavLink text="Releases" mobOnly />
            <NavLink text="Podcasts" mobOnly />
            <NavLink text="Artists" mobOnly />
            <NavLink text="Demos" mobOnly />
          </Stack>
          <Stack
            display="flex"
            alignItems="center"
            justifyContent="center"
            gridGap="16px"
            width="100%"
            mb="75px"
          >
            <a
              href="https://www.facebook.com/SyncForward/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <S.Facebook />
            </a>
            <a
              href="https://twitter.com/sync_forward"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <S.Twitter />
            </a>
            <a
              href="https://www.instagram.com/syncforward/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <S.Instagram />
            </a>
            <a
              href="https://www.youtube.com/user/syncforward"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <S.Youtube />
            </a>
          </Stack>
        </Stack>
      </Hamburger>
    </S.Navbar>
  );
};

export default Navbar;
