import { forwardRef, ForwardRefRenderFunction } from 'react';

import styled from 'styled-components';
import { gridGap } from 'styled-system';

import { Box } from '..';
import { StackProps } from './types';

const StyledStack = styled(Box)<StackProps>`
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  ${gridGap}
`;

const StackElement: ForwardRefRenderFunction<HTMLDivElement, StackProps> = (
  props,
  ref
) => {
  const { children, ...rest } = props;

  return (
    <StyledStack ref={ref} display="flex" alignItems="flex-start" {...rest}>
      {children}
    </StyledStack>
  );
};
const Stack = forwardRef(StackElement);

Stack.defaultProps = {
  vertical: false,
};

export default Stack;
