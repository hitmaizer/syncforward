import UIHeading from '@uicomponents/Heading';
import styled, { css } from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';
import { Sync } from 'ui/logos/Logos';

import { mediaQueries } from '@styles';
import { Stack, Text } from '@uicomponents';

import { ConstructionProps } from './Construction.types';

export const Content = styled(Stack).attrs({
  vertical: true,
  gridGap: 10,
  width: '100%',
  alignItems: 'center',
})`
  z-index: 2;
  position: absolute;

  ${mediaQueries.lg} {
    gap: 16px;
  }
`;

export const Link = styled.a``;

export const DesktopHeading = styled(UIHeading).attrs({
  color: 'gray50',
  size: '2xl',
  textAlign: 'right',
})``;

export const MobileHeading = styled(UIHeading).attrs({
  color: 'gray50',
  size: '4xl',
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

export const FooterText = styled(Text).attrs({
  color: 'whiteOpacity',
  textAlign: 'center',
  fontWeight: 'regular',
  noMob: true,
  mt: '70px',
})``;

export const Construction = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0;
  ${mediaQueries.lg} {
    padding: 0;
  }
`;

export const Stores = styled.div<ConstructionProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  top: 70vh;
  left: calc(50% - 30%);
  ${mediaQueries.lg} {
    flex-direction: row;
    gap: 64px;
  }
`;

export const SyncLogo = styled(Sync)`
  color: ${({ theme }) => theme.colors.white};
  width: 150px;
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

export const Header = styled(Stack)<ConstructionProps>`
  width: 100%;
  padding: 32px;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  background-color: transparent;
  min-height: 100px;
  ${mediaQueries.lg} {
    padding: 48px;
  }

  ${({ open }) =>
    open &&
    css`
      background-color: ${({ theme }) => theme.colors.bg};
    `}
`;

export const HeadingContainer = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: block;
  }
`;
