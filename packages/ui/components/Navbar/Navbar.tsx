import Hamburger from '@uicomponents/Hamburger';
import NavLink from '@uicomponents/NavLink';
import Socials from '@uicomponents/Socials';
import Stack from '@uicomponents/Stack';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children }: NavbarProps) => {
  return (
    <S.Navbar>
      <S.Link href="/">
        <S.NavLogo />
      </S.Link>
      {children}
      <S.Links noMob>
        <NavLink text="Releases" pathName="releases" />
        <NavLink
          text="Podcasts"
          link="https://soundcloud.com/syncforward/sets/sf-podcasts"
          outsideLink
        />
        <NavLink text="Artists" pathName="artists" />
        <NavLink text="Demos" pathName="demos" />
      </S.Links>
      <Hamburger web>
        <S.NavLinksContainer>
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
        </S.NavLinksContainer>
      </Hamburger>
    </S.Navbar>
  );
};

export default Navbar;
