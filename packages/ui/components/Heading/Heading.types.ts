import { ReactNode } from 'react';

import {
  LayoutProps,
  SpaceProps,
  ResponsiveValue,
  ColorProps,
} from 'styled-system';

import { HeadingElement, TextElement } from '@styles';

export interface HeadingProps extends LayoutProps, SpaceProps, ColorProps {
  as?: TextElement | HeadingElement;
  size?: ResponsiveValue<'lg' | 'xl' | '2xl' | '3xl' | '4xl'>;
  color?: string;
  children: ReactNode;
}
