import { ReactNode } from 'react';

import { Release } from '@uicomponents/Accordion/Accordion.types';

export interface BannerProps {
  children?: ReactNode;
  data?: Release;
  bg?: string;
}
