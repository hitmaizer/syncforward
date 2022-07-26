import { ReactNode } from 'react';

import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface Release {
  artists: string;
  title: string;
  catalogue: string;
  description: string;
  trackLink: string;
  link: string;
  img: string;
}
export interface AccordionProps
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    GridGapProps {
  children?: ReactNode;
  data?: Release[];
  index?: number;
  active?: number;
}
