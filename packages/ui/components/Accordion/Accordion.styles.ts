import Text from '@uicomponents/Text';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';
import { SwiperSlide } from 'swiper/react';

import { AccordionProps } from './Accordion.types';

export const Accordion = styled.div<AccordionProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${gridGap}
  background-color: ${({ theme }) => theme.colors.gray900};
  width: 100%;
`;

export const StyledImage = styled(Image)`
  top: 0;
  object-fit: cover;
`;

export const AccordionContent = styled.div<AccordionProps>`
  ${flexbox}
  ${layout}
  ${space}
  ${gridGap}

  width: 100%;
  z-index: 2;
  position: relative;
  min-height: 75vh;
  height: 100%;
  max-width: 90%;
`;

export const Slider = styled.div<AccordionProps>`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 8px;
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

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const OpenContent = styled.div<AccordionProps>`
  ${space}
  ${flexbox}
  ${layout}
  ${gridGap}
  
  place-self: baseline;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 75vh;
`;

export const Bio = styled(Text)`
  max-width: 600px;
`;
