import { TextProps } from './types';

import * as S from './styles';
import { forwardRef, ForwardRefRenderFunction } from 'react';

type TextWithRefType = ForwardRefRenderFunction<HTMLElement, TextProps>;

const TextElement: TextWithRefType = (props, ref) => {
  const { children, ...rest } = props;

  return (
    <S.Text ref={ref} {...rest}>
      {children}
    </S.Text>
  );
};

const Text = forwardRef(TextElement);

Text.defaultProps = {
  textTransform: 'none',
  size: 'md',
  as: 'p',
  textAlign: 'inherit',
};

export default Text;
