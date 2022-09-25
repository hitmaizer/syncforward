import Box from '@uicomponents/Box';
import Stack from '@uicomponents/Stack';
import Text from '@uicomponents/Text';
import NextImage from 'next/image';
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

export const Content = styled(Stack).attrs({
  position: 'relative',
  justifyContent: 'flex-start',
  gridGap: 8,
  width: '100%',
  height: '100%',
})``;

export const ImageWrapper = styled(Box).attrs({
  position: 'relative',
  width: '100px',
  height: '100px',
})``;

export const Image = styled(NextImage).attrs({
  layout: 'fill',
  objectFit: 'cover',
})``;

export const Info = styled(Stack).attrs({
  vertical: true,
  height: '100%',
  alignItems: 'flex-start',
  justifyContent: 'center',
  m: 'auto 0',
})``;

export const CardText = styled(Text).attrs({})`
  color: ${({ theme }) => theme.colors.gray75};
  opacity: 0.5;
  transition: opacity 300ms ease;
`;
