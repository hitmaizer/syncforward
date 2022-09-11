import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  secondary?: boolean;
  label: string;
  icon?: JSX.Element;
}
