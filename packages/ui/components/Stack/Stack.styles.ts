import styled from 'styled-components';
import { gridGap } from 'styled-system';

import { Box } from '..';
import { StackProps } from './Stack.types';

export const Stack = styled(Box)<StackProps>`
  place-content: ${({ placeContent }) => placeContent};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  ${gridGap}
`;
