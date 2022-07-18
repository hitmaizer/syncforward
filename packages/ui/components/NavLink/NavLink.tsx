import * as S from './NavLink.styles';
import { NavLinkProps } from './NavLink.types';

const NavLink = ({ children, text, mobOnly, noMob, ...rest }: NavLinkProps) => {
  return (
    <S.NavLink href={text?.toLowerCase()} {...rest}>
      <S.LinkText mobOnly={mobOnly} noMob={noMob}>
        {text}
      </S.LinkText>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
