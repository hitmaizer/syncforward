import Heading from '@uicomponents/Heading';
import Stack from '@uicomponents/Stack';
import Text from '@uicomponents/Text';
import styled from 'styled-components';

import { BannerProps } from './Banner.types';

export const Banner = styled.div<BannerProps>`
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 70vw;
`;

export const Content = styled(Stack).attrs({
  vertical: true,
  gridGap: 4,
  justifyContent: 'flex-start',
  width: '100%',
  padding: 12,
  height: '75vh',
})`
  svg {
    max-width: 100px;
  }
`;

export const SubTitle = styled(Text).attrs({
  textTransform: 'uppercase',
  size: 'xs',
  color: 'gray75',
})``;

export const Title = styled(Heading).attrs({
  size: 'h1',
  color: 'gray75',
})``;

export const Info = styled(Stack).attrs({
  vertical: true,
  gridGap: 8,
})``;

export const Bio = styled(Text).attrs({
  size: 'sm',
  color: 'gray100',
})`
  max-width: 600px;
`;

export const Soundcloud = styled.iframe.attrs({
  width: '1000px',
  height: '160px',
  scrolling: 'no',
  frameBorder: 'no',
  allow: 'autoplay',
})``;
