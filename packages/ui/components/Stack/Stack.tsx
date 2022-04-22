import { forwardRef, ForwardRefRenderFunction } from 'react';

import * as S from './Stack.styles';
import { StackProps } from './Stack.types';

const StackElement: ForwardRefRenderFunction<HTMLDivElement, StackProps> = (
  props,
  ref
) => {
  const { children, placeContent, ...rest } = props;

  return (
    <S.Stack
      ref={ref}
      display="flex"
      alignItems="flex-start"
      placeContent={placeContent}
      {...rest}
    >
      {children}
    </S.Stack>
  );
};
const Stack = forwardRef(StackElement);

Stack.defaultProps = {
  vertical: false,
};

export default Stack;
