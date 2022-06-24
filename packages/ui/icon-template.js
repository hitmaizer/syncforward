/* eslint-disable @typescript-eslint/no-shadow */
function template({ template }, opts, { componentName, jsx }) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  const name = `${componentName.name.replace('Svg', '')}`;
  const displayName = `Ps${name}`;

  return typeScriptTpl.ast`
    import { SVGProps, forwardRef } from 'react';
    import styled from 'styled-components';
    import {
      compose,
      space,
      color
    } from 'styled-system';
    import { IconProps } from './types'
    import { size } from './sizeVariant'

    const SvgComponent = forwardRef<
      SVGSVGElement,
      SVGProps<SVGSVGElement>>((props, svgRef) => {

        return (
          ${jsx}
        )
      }
    );

    const ${name} = styled(SvgComponent)<IconProps>({
        flex: 'none',
        verticalAlign: 'middle',
      },
      compose(space, color, size)
    );

    ${name}.defaultProps = {
      size: 'md',
    }

    ${name}.displayName = '${displayName}';

    export default ${name};
  `;
}

module.exports = template;
