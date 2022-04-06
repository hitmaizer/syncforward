import styled from 'styled-components';
import { grid, layout, flexbox, space } from 'styled-system';

import { StyledGridProps } from './types';

const StyledGrid = styled.div<StyledGridProps>`
  ${grid}
  ${layout}
  ${flexbox}
  ${space}
`;

export default StyledGrid;
