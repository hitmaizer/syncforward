import { SpaceProps, ColorProps } from 'styled-system';

import SfSync from './Sync';

interface BaseProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export type IconProps = BaseProps & SpaceProps & ColorProps;

export { SfSync };
