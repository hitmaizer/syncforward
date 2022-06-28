import { SpaceProps, ColorProps } from 'styled-system';

interface BaseProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export type IconProps = BaseProps & SpaceProps & ColorProps;
