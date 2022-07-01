import { ComponentStory, ComponentMeta } from '@storybook/react';

import Socials from './Socials';

export default {
  title: 'Components/Socials',
  component: Socials,
  args: {},
} as ComponentMeta<typeof Socials>;

const Template: ComponentStory<typeof Socials> = (args) => (
  <Socials {...args} />
);

export const Default = Template.bind({});
Default.args = {};
