import { ReactNode } from 'react';

import { Release } from '@uicomponents/Accordion/Accordion.types';
import {
  FlexboxProps,
  GridGapProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

export interface BannerProps
  extends FlexboxProps,
    SpaceProps,
    GridGapProps,
    LayoutProps {
  children?: ReactNode;
  data?: Release;
  bg?: string;
}
