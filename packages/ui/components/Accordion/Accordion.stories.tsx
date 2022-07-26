import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordion from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {};
