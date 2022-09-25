import Arrow from '../../icons/Arrow';
import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({
  children,
  label = '',
  icon = <Arrow size="xxs" />,
  secondary,
}: ButtonProps) => {
  return (
    <S.Button secondary={secondary}>
      <S.ButtonContent>
        <S.Label>{label}</S.Label>
        {icon && icon}
        {children}
      </S.ButtonContent>
    </S.Button>
  );
};

export default Button;
