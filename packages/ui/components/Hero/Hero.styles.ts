import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { HeroProps } from './Hero.types';

export const Hero = styled.div<HeroProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${gridGap}
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.gray900};
  //min-height: ${({ height }) => height}px;
`;
