import { ComponentStory, ComponentMeta } from '@storybook/react';

import Construction from './Construction';

export default {
  title: 'Components/Construction',
  component: Construction,
  args: {},
} as ComponentMeta<typeof Construction>;

const Template: ComponentStory<typeof Construction> = (args) => (
  <Construction {...args} />
);

export const Default = Template.bind({});
Default.args = {};
