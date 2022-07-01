import { ReactNode } from 'react';

import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface SocialsProps
  extends FlexboxProps,
    SpaceProps,
    LayoutProps,
    GridGapProps {
  children?: ReactNode;
}
