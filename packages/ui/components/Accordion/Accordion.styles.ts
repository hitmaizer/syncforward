import UIButton from '@uicomponents/Button';
import Heading from '@uicomponents/Heading';
import Stack from '@uicomponents/Stack';
import Text from '@uicomponents/Text';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';

import { AccordionProps } from './Accordion.types';

export const Accordion = styled(Stack).attrs({
  width: '100%',
})`
  background-color: ${({ theme }) => theme.colors.gray900};
`;

export const StyledImage = styled(Image).attrs({
  layout: 'fill',
  objectFit: 'cover',
})`
  top: 0;
  object-fit: cover;
`;

export const AccordionContent = styled(Stack).attrs({
  ml: 10,
  vertical: true,
  justifyContent: 'space-between',
  height: '75vh',
})`
  width: 100%;
  z-index: 2;
  position: relative;
  max-width: 90%;
`;

export const Slide = styled(SwiperSlide)<AccordionProps>`
  width: 100%;
  // transition: width 300ms ease;
  cursor: pointer;
  height: 100%;
  position: relative;
  // no select
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
  supported by Chrome, Edge, Opera and Firefox */

  ${({ index, active }) =>
    index === active &&
    css`
      width: 1200px;
      height: 75vh;
    `}
`;

export const OpenContent = styled(Stack).attrs({
  vertical: true,
  gridGap: 6,
  alignItems: 'flex-start',
  width: '100%',
})`
  place-self: baseline;
  min-height: 75vh;
`;

export const Subtitle = styled(Text).attrs({
  textTransform: 'uppercase',
  color: 'gray75',
  size: 'xs',
})``;

export const Title = styled(Heading).attrs({
  size: 'h1',
  color: 'gray75',
})``;

export const Info = styled(Stack).attrs({
  vertical: true,
  justifyContent: 'flex-start',
  gridGap: 10,
})``;

export const Bio = styled(Text)`
  max-width: 600px;
`;

export const Soundcloud = styled.iframe.attrs({
  width: '1000px',
  height: '160px',
  scrolling: 'no',
  frameBorder: 'no',
  allow: 'autoplay',
})``;

export const Buttons = styled(Stack).attrs({
  gridGap: 6,
})``;

export const Button = styled(UIButton).attrs({})``;
