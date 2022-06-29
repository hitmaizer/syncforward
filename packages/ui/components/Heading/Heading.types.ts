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
  size?: ResponsiveValue<'lg' | 'xl' | '2xl' | '3xl' | '4xl'>;
  color?: string;
  children: ReactNode;
  mobOnly?: boolean;
}
