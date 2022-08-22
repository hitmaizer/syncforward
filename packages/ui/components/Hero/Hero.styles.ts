import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { HeroProps } from './Hero.types';

export const Hero = styled.div<HeroProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${gridGap}
  
  height: 75vh;
`;
