import { HeadingElement, TextElement } from '@styles';
import { ReactNode } from 'react';
import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export interface TextProps extends TypographyProps, SpaceProps, LayoutProps {
  as?: HeadingElement | TextElement | 'div';
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  color?: string;
}
