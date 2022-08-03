import { ReactNode } from 'react';

import { LayoutProps } from 'framer-motion';
import { FlexboxProps, GridGapProps, SpaceProps } from 'styled-system';

export interface HeroProps
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    GridGapProps {
  children?: ReactNode;
  height?: number;
}
