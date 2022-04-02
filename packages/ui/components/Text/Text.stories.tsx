import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '@components';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    as: 'p',
    size: 'md',
    textTransform: 'none',
    color: 'string',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Story = Template.bind({});
Story.args = {
  children: 'Lorem hipsum',
};
