import { ReactNode } from 'react';

export interface HamburgerProps {
  children?: ReactNode;
  open?: boolean;
  onClick?: () => void;
  web?: boolean;
}
