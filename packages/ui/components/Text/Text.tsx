import { TextProps } from './types';

import * as S from './styles';

const Text = (props: TextProps) => {
  const { children, ...rest } = props;

  return <S.Text>{children}</S.Text>;
};

Text.defaultProps = {
  textTransform: 'none',
  size: 'md',
  as: 'p',
  textAlign: 'inherit',
};

export default Text;
