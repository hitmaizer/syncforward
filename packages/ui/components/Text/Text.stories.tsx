import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '@uicomponents';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    as: 'p',
    size: 'md',
    textTransform: 'none',
    color: 'string',
    fontWeight: 'semibold',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Breach',
};
