import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

import { size } from './Heading.variants';

export const Heading = styled.h1`
  line-height: ${({ theme }) => theme.lineHeights.heading};

  ${typography}
  ${space}
  ${size}
  ${color}
`;
