import * as S from './Spinner.styles';
import { SpinnerProps } from './Spinner.types';

const Spinner = ({ children, ...rest }: SpinnerProps) => {
  return (
    <S.Spinner {...rest}>
      <S.Square>
        <S.SquareInner>
          <S.Arrow size="24px" />
          <S.Arrow2 size="24px" />
        </S.SquareInner>
        {children}
      </S.Square>
    </S.Spinner>
  );
};

export default Spinner;
