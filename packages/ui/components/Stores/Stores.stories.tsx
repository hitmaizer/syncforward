import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stores from './Stores';

export default {
  title: 'Components/Stores',
  component: Stores,
  args: {},
} as ComponentMeta<typeof Stores>;

const Template: ComponentStory<typeof Stores> = (args) => <Stores {...args} />;

export const Default = Template.bind({});
Default.args = {};
