import { ReactNode } from 'react';

export interface NavLinkProps {
  children?: ReactNode;
  text?: string;
  mobOnly?: boolean;
  noMob?: boolean;
  pathName?: string;
}
