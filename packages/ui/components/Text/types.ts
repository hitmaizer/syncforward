import { HeadingElement, TextElement } from '@styles';
import { ReactNode } from 'react';

export interface TextProps {
  as?: HeadingElement | TextElement | 'div';
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  color?: string;
}
