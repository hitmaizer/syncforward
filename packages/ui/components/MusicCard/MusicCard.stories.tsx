import { ComponentStory, ComponentMeta } from '@storybook/react';

import MusicCard from './MusicCard';

export default {
  title: 'Cards/Music Card',
  component: MusicCard,
  args: {},
} as ComponentMeta<typeof MusicCard>;

const Template: ComponentStory<typeof MusicCard> = (args) => (
  <MusicCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
