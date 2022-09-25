import Stack from '@uicomponents/Stack';
import styled, { css } from 'styled-components';

import { mediaQueries } from '@styles';

import { HamburgerProps } from './Hamburger.types';

export const Container = styled(Stack).attrs({
  position: 'relative',
  p: 10,
})`
  cursor: pointer;

  ${mediaQueries.lg} {
    display: none;
  }
`;

export const Hamburger = styled.span.attrs({
  right: 0,
})<Pick<HamburgerProps, 'open'>>`
  display: block;
  width: 2em;
  height: 0.1em;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: calc(50%);

  &::before,
  &::after {
    content: '';
    width: 2em;
    height: 0.1em;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    display: block;
    transition: all 300ms ease;
  }
  &::before {
    top: -8px;
    left: 0%;
    transform-origin: center;
    transform: rotateZ(0deg);
  }
  &::after {
    bottom: -8px;
    left: 0%;
    transform-origin: center;
    transform: rotateZ(0deg);
  }

  ${({ open }) =>
    open &&
    css`
      background-color: transparent;
      &::before,
      &::after {
        background-color: ${({ theme }) => theme.colors.white};
      }
      &::before {
        transform: rotate(40deg);
        top: 1px;
      }
      &::after {
        transform: rotate(-40deg);
        bottom: 0px;
      }
    `}
`;

export const HamburgerContent = styled(Stack).attrs({
  position: 'absolute',
  left: 0,
  alignItems: 'flex-start',
  width: '100vw',
})<Omit<HamburgerProps, 'children' | 'onClick'>>`
  transform: translateY(-110%);
  height: calc(${({ height }) => height}px - 15vh);
  left: 0;
  background-color: ${({ theme }) => theme.colors.bg};
  transition: transform 600ms ease;
  z-index: 1;
  padding: 32px;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ open }) =>
    open === true &&
    css`
      overflow-y: hidden;
      transform: translateY(57.5%);
    `}

  ${({ web }) =>
    web &&
    css`
      background-color: ${({ theme }) => theme.colors.gray900};
    `}
`;
