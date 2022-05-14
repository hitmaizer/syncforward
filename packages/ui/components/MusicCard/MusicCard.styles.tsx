import styled from 'styled-components';
import { layout } from 'styled-system';

import { MusicCardProps } from './MusicCard.types';

export const Card = styled.div<MusicCardProps>`
  ${layout}
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  transition: 0.1s all ease-in-out;
  position: relative;
  transform-style: preserve-3d;
`;

export const OpenSoundCloud = styled.div`
  transition: 0.2s all ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:hover {
    opacity: 0.9;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  z-index: 1;
  width: 60px;
  height: auto;
`;

export const SoundCloudContainer = styled.div<MusicCardProps>`
  display: ${({ showPlay }) => (showPlay ? 'none' : 'block')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  max-width: 500px;
  z-index: 3;
`;
