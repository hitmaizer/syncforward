import Box from '@uicomponents/Box';
import styled from 'styled-components';
import { gridGap } from 'styled-system';

import { StackProps } from './Stack.types';

export const Stack = styled(Box)<StackProps>`
  place-content: ${({ placeContent }) => placeContent};
  place-items: ${({ placeItems }) => placeItems};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  ${gridGap}
`;
