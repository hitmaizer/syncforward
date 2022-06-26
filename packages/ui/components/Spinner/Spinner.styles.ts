import { ChevronRight } from '@styled-icons/boxicons-regular';
import styled, { keyframes } from 'styled-components';

export const bounceAlpha = keyframes`
  0% {opacity: 1; transform: translateX(0px) scale(1);}
  25%{opacity: 0; transform:translateX(10px) scale(0.9);}
  26%{opacity: 0; transform:translateX(-10px) scale(0.9);}
  55% {opacity: 1; transform: translateX(0px) scale(1);}
`;

export const Spinner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Square = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.white};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const SquareInner = styled.div`
  position: absolute;
  top: calc(50% - 30%);
  left: calc(50% - 45%);
`;

export const Arrow = styled(ChevronRight)`
  color: ${({ theme }) => theme.colors.white};
  animation: ${bounceAlpha};
  animation-duration: 1.4s;
  animation-delay: 0.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  margin-left: 8px;
`;

export const Arrow2 = styled(ChevronRight)`
  color: ${({ theme }) => theme.colors.white};
  animation-name: ${bounceAlpha};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
`;
