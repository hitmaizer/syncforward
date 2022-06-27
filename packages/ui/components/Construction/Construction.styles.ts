import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { mediaQueries } from '@styles';

import { Sync } from '../../logos/Logos';
import { ConstructionProps } from './Construction.types';

export const Content = styled.div<ConstructionProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}
  flex-direction: column;
  gap: 32px;
  z-index: 2;
  position: absolute;
  width: 100%;

  ${mediaQueries.lg} {
    gap: 16px;
  }
`;

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

export const Header = styled.div<ConstructionProps>`
  ${layout}
  ${flexbox}
  ${space}
  ${gridGap}
  width: 100%;
  padding: 32px;
  justify-content: space-between;
  position: absolute;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.bg};
  backdrop-filter: saturate(130%) blur(5px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  min-height: 100px;
  ${mediaQueries.lg} {
    background-color: transparent;
    border: none;
    backdrop-filter: none;
    padding: 48px;
    border-bottom: none;
  }
`;

export const HeadingContainer = styled.div`
  display: none;
  ${mediaQueries.lg} {
    display: block;
  }
`;
