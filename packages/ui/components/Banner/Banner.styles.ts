import styled from 'styled-components';
import { flexbox, gridGap, layout, space } from 'styled-system';

import { BannerProps } from './Banner.types';

export const Banner = styled.div<BannerProps>`
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 70vw;
`;

export const Content = styled.div<BannerProps>`
  ${layout}
  ${space}
  ${gridGap}
  ${flexbox}

  width: 100%;
  padding: 64px;
  height: 75vh;

  svg {
    max-width: 100px;
  }
`;
