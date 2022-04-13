import styled from 'styled-components';
import { layout } from 'styled-system';

export const Card = styled.div`
  ${layout}
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  transition: 0.1s all ease-in-out;
  position: relative;
  transform-style: preserve-3d;

  &:hover {
    &::before {
      display: block;
    }
    img {
      -webkit-filter: brightness(50%);
    }
  }

  &::before {
    content: ' ';
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 25px;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
    background-image: url('assets/imgs/bx-play-circle.svg');
    background-position: 50%;
    background-size: 100px 100px;
    height: 500px;
    width: 500px;
    transform: translateZ(+1px);
    display: none;
  }
`;
