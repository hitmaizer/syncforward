import styled from 'styled-components';
import { color, space, style, typography } from 'styled-system';

import { TextProps } from './types';
import { size } from './variants';

const textTransform = style({
  key: 'textTransform',
  cssProperty: 'textTransform',
  prop: 'textTransform',
});

export const Text = styled.p<TextProps>`
  ${size}
  ${color}
  ${typography}
  ${space}
  ${textTransform}
`;
