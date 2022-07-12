import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
