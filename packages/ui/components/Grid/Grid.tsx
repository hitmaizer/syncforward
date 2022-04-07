import * as S from './Grid.styles';
import { GridProps } from './types';

const Grid = (props: GridProps) => {
  const { children } = props;

  return (
    <S.Grid display="grid" {...props}>
      {children}
    </S.Grid>
  );
};

export default Grid;
