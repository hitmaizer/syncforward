const path = require('path');
const camelcase = require('camelcase');

function indexTemplate(files) {
  const compoundExportEntries = [];

  const importEntries = files.map((file) => {
    const basename = path.basename(file, path.extname(file));
    const componentName = camelcase(basename, { pascalCase: true });

    compoundExportEntries.push(`Sf${componentName}`);

    return `import Sf${componentName} from './${basename}';`;
  });

  return `import { SpaceProps, ColorProps } from 'styled-system';

 ${importEntries.join('\n')}

  interface BaseProps {
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  }

  export type IconProps = BaseProps & SpaceProps & ColorProps;

 export {
  ${compoundExportEntries.join(',\n  ')}
 };`;
}

module.exports = indexTemplate;
