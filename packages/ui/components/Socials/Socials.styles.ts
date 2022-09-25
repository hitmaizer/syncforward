import Stack from '@uicomponents/Stack';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';

import { SocialsProps } from './Socials.types';

export const Socials = styled(Stack).attrs({
  gridGap: 10,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})<Pick<SocialsProps, 'page'>>`
  margin-bottom: 75px;

  svg {
    width: 100%;
    max-width: 32px;
    color: ${({ theme }) => theme.colors.gray75};
  }

  ${({ page }) =>
    page &&
    css`
      height: 100%;
      min-height: 10vh;
      margin-bottom: 0px;
      svg {
        opacity: 0.5;
        transition: all 300ms ease;
        &:hover {
          opacity: 1;
          scale: 1.1;
        }
      }
    `}
`;

export const Link = styled(NextLink).attrs({
  passHref: true,
})``;

export const Anchor = styled.a.attrs({
  rel: 'noopener noreferrer nofollow',
  target: '_blank',
})``;
