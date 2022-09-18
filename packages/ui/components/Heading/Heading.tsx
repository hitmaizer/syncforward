import * as S from './Heading.styles';
import { HeadingProps } from './Heading.types';

const Heading = (props: HeadingProps) => {
  const { children, ...rest } = props;

  return <S.Heading {...rest}>{children}</S.Heading>;
};

Heading.defaultProps = {
  fontFamily: 'heading',
  color: 'text.primary',
  size: 'h4',
  as: 'h2',
};

export default Heading;
