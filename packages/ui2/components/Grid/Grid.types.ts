import { ReactNode, HTMLAttributes } from 'react';

import {
  GridProps as BaseGridProps,
  LayoutProps,
  FlexboxProps,
  SpaceProps,
} from 'styled-system';

export interface StyledGridProps
  extends LayoutProps,
    BaseGridProps,
    FlexboxProps,
    SpaceProps {}

export interface GridProps
  extends StyledGridProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
