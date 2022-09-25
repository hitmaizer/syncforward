import Box from '@uicomponents/Box';
import Stack from '@uicomponents/Stack';
import NextImage from 'next/image';
import styled from 'styled-components';

import { MusicCardProps } from './MusicCard.types';

export const Card = styled(Stack).attrs({
  justifyContent: 'flex-start',
  vertical: true,
  position: 'relative',
})`
  max-width: 500px;
  gap: 16px;
  transition: 0.1s all ease-in-out;
  transform-style: preserve-3d;
`;

export const ImageContainer = styled(Box).attrs({
  position: 'relative',
  width: '500px',
  height: '500px',
})``;

export const Image = styled(NextImage).attrs({
  height: '100%',
  width: '100%',
  layout: 'responsive',
})``;

export const OpenSoundCloud = styled(Stack).attrs({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  justifyContent: 'center',
  alignItems: 'center',
})`
  transition: 0.2s all ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);

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

export const SoundCloudContainer = styled(Box).attrs({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})<Pick<MusicCardProps, 'showPlay'>>`
  display: ${({ showPlay }) => (showPlay ? 'none' : 'block')};

  max-width: 500px;
  z-index: 3;
`;

export const IFrame = styled.iframe.attrs({
  width: '100%',
  height: '100%',
  scrolling: 'no',
  frameBorder: 'no',
  allow: 'autoplay',
})``;
