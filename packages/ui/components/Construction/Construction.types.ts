import { ReactNode } from 'react';

import {
  FlexBasisProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface ConstructionProps
  extends FlexBasisProps,
    SpaceProps,
    LayoutProps,
    GridGapProps {
  children?: ReactNode;
  text?: string;
}
