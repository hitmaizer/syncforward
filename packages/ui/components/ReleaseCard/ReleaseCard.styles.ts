import Text from '@uicomponents/Text';
import styled from 'styled-components';

export const ReleaseCard = styled.div`
  width: 100%;
  padding: 32px;
  outline: 1px solid rgba(255, 255, 255, 0.1);
  outline-offset: -1px;
  cursor: pointer;

  &:hover {
    p {
      opacity: 1;
    }
  }
`;

export const CardText = styled(Text)`
  opacity: 0.5;
  transition: opacity 300ms ease;
`;
