import { ReactNode } from 'react';

import { Release } from '@uicomponents/Accordion/Accordion.types';

export interface ReleaseCardProps {
  children?: ReactNode;
  data?: Release;
}
