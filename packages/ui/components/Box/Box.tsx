import { forwardRef, ForwardRefRenderFunction } from 'react';

import styled from 'styled-components';
import { layout, flexbox, space, color, position } from 'styled-system';

import { BoxProps } from './types';

const StyledBox = styled.div`
  ${layout}
  ${flexbox}
  ${space}
  ${color}
  ${position}
`;

const BoxElement: ForwardRefRenderFunction<HTMLDivElement, BoxProps> = (
  props,
  ref
) => {
  const { children, ...rest } = props;

  return (
    <StyledBox ref={ref} {...rest}>
      {children}
    </StyledBox>
  );
};

const Box = forwardRef(BoxElement);

export default Box;
