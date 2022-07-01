import * as S from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

const Accordion = ({ children, ...rest }: AccordionProps) => {
  return (
    <S.Accordion {...rest}>
      <h1>hello mate</h1>
      {children}
    </S.Accordion>
  );
};

export default Accordion;
