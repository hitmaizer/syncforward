import { ReactNode } from 'react';

import {
  LayoutProps,
  SpaceProps,
  ResponsiveValue,
  ColorProps,
  TextAlignProps,
} from 'styled-system';

import { HeadingElement, TextElement } from '@styles';

export interface HeadingProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    TextAlignProps {
  as?: TextElement | HeadingElement;
  size?: ResponsiveValue<'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'>;
  color?: string;
  children: ReactNode;
  mobOnly?: boolean;
  noMob?: boolean;
}
