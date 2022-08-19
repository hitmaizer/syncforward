import { SVGProps, forwardRef } from 'react';
import styled from 'styled-components';
import { compose, space, color } from 'styled-system';
import { IconProps } from './types';
import { size } from './sizeVariant';
const SvgComponent = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, svgRef) => {
  return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={svgRef} {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12 2.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S17.3 2.4 12 2.4zm1.866 12.62H6.862l3.271-6.038h7.005l-3.272 6.037z" fill="currentColor" /></svg>;
});
const BandcampSq = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, size));
BandcampSq.defaultProps = {
  size: 'md'
};
BandcampSq.displayName = "PsBandcampSq";
export default BandcampSq;