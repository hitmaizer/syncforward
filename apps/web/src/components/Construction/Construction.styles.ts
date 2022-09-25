import UIHeading from '@uicomponents/Heading';
import styled from 'styled-components';

import { mediaQueries } from '@styles';
import { Box, Stack, Text } from '@uicomponents';

export const Content = styled(Stack).attrs({
  vertical: true,
  gridGap: 10,
  width: '100%',
  alignItems: 'center',
})`
  z-index: 2;
  position: absolute;
  max-height: 100vh;

  ${mediaQueries.lg} {
    gap: 16px;
  }
`;

export const MobileHeading = styled(UIHeading).attrs({
  color: 'gray50',
  size: 'h1',
  textAlign: 'center',
  mt: '60vh',
  mobOnly: true,
})``;

export const FooterTextMob = styled(Text).attrs({
  color: 'whiteOpacity',
  textAlign: 'center',
  fontWeight: 'regular',
  mobOnly: true,
})``;

export const Link = styled.a``;

export const FooterText = styled(Text).attrs({
  color: 'whiteOpacity',
  textAlign: 'center',
  fontWeight: 'regular',
  noMob: true,
  mt: '70px',
})``;

export const Construction = styled(Box).attrs({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  p: 0,
})`
  background-color: ${({ theme }) => theme.colors.bg};

  ${mediaQueries.lg} {
    padding: 0;
  }
`;

export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  object-fit: cover;
`;
