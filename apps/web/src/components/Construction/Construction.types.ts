import { ReactNode } from 'react';

export interface ConstructionProps {
  children?: ReactNode;
  text: string;
  videoSrc: string;
  open?: boolean;
}
