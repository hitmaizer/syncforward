import styled from 'styled-components';
import { grid, layout, flexbox, space } from 'styled-system';

import { StyledGridProps } from './types';

export const Grid = styled.div<StyledGridProps>`
  ${grid}
  ${layout}
  ${flexbox}
  ${space}
`;
