import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './NavLink.styles';
import { NavLinkProps } from './NavLink.types';

const NavLink = ({
  children,
  text,
  mobOnly,
  noMob,
  pathName,
  outsideLink,
  link,
  ...rest
}: NavLinkProps) => {
  const router = useRouter();
  return (
    <Link href={outsideLink ? link! : `/${pathName}`} passHref>
      <S.NavLink
        pathName={router.pathname}
        {...rest}
        mobOnly={mobOnly}
        noMob={noMob}
      >
        <S.LinkText mobOnly={mobOnly} noMob={noMob}>
          {text}
        </S.LinkText>
        {children}
      </S.NavLink>
    </Link>
  );
};

export default NavLink;
