import NavLink from '@uicomponents/NavLink';
import Stack from '@uicomponents/Stack';

import * as S from './Navbar.styles';
import { NavbarProps } from './Navbar.types';

const Navbar = ({ children, ...rest }: NavbarProps) => {
  return (
    <S.Navbar display="flex" justifyContent="space-between" {...rest}>
      <S.NavLogo />
      {children}
      <Stack display="flex" gridGap="48px">
        <NavLink text="Releases" />
        <NavLink text="Podcasts" />
        <NavLink text="Artists" />
        <NavLink text="Demos" />
      </Stack>
    </S.Navbar>
  );
};

export default Navbar;
