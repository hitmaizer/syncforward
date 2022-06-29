import Heading from '@uicomponents/Heading';
import styled from 'styled-components';

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.gray50};
`;

export const LinkText = styled(Heading)`
  opacity: 0.5;
  font-size: 16px;
  transition: opacity 300ms ease;
  &:hover {
    opacity: 1;
  }
`;
