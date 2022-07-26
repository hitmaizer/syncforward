import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.532 2.028c.26-.26.682-.26.943 0l3.5 3.5a.666.666 0 010 .944l-3.5 3.5a.667.667 0 11-.943-.943l2.362-2.362H1.503a.667.667 0 010-1.334h7.39L6.533 2.971a.667.667 0 010-.943z" fill="currentColor" /></svg>;
});
const Arrow = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
Arrow.defaultProps = {
  size: 'md'
};
Arrow.displayName = "PsArrow";
export default Arrow;