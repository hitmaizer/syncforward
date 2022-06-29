import * as S from './NavLink.styles';
import { NavLinkProps } from './NavLink.types';

const NavLink = ({ children, text, ...rest }: NavLinkProps) => {
  return (
    <S.NavLink href={text.toLowerCase()} {...rest}>
      <S.LinkText>{text}</S.LinkText>
      {children}
    </S.NavLink>
  );
};

export default NavLink;
