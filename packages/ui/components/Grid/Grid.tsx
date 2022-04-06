import StyledGrid from './StyledGrid';
import { GridProps } from './types';

const Grid = (props: GridProps) => {
  const { children } = props;

  return (
    <StyledGrid display="grid" {...props}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
