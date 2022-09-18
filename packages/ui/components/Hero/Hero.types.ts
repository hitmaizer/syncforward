import { ReactNode } from 'react';

import { Release } from '@uicomponents/Accordion/Accordion.types';

export interface HeroProps {
  children?: ReactNode;
  height?: number;
  releases: Release[];
}
