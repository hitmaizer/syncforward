import { ReactNode } from 'react';

import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface StoresProps
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    GridGapProps {
  children?: ReactNode;
  vertical?: boolean;
  noMob?: boolean;
}
