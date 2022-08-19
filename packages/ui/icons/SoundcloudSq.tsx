import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><g clipPath="url(#soundcloud-sq_svg__clip0_757_732)"><path d="M14.5 6c-1.898 0-3.5.906-4.5 2.406V17h10.5c1.898 0 3.5-1.602 3.5-3.5S22.398 10 20.5 10c-.2 0-.488-.008-.688.094C19.212 7.695 17 6 14.5 6zM8 8v9h1V8.094C8.7 7.992 8.3 8 8 8zm-1 .094c-.398.101-.7.304-1 .406V17h1V8.094zM5 9.406c-.5.5-.805 1.082-.906 1.781H4V17h1V9.406zM3 11c-.398 0-.7.086-1 .188v5.624c.3.102.602.188 1 .188v-6zm-2 .813c-.602.5-1 1.289-1 2.187 0 .898.398 1.688 1 2.188v-4.375z" fill="currentColor" /></g><defs><clipPath id="soundcloud-sq_svg__clip0_757_732"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>;
});
const SoundcloudSq = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
SoundcloudSq.defaultProps = {
  size: 'md'
};
SoundcloudSq.displayName = "PsSoundcloudSq";
export default SoundcloudSq;