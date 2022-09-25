import { ComponentStory, ComponentMeta } from '@storybook/react';

import MusicCard from './MusicCard';

export default {
  title: 'Cards/Music Card',
  component: MusicCard,
  args: {
    imgSrc: '/assets/imgs/placeholder.jpg',
    soundcloudLink:
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1209898735&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    iconSrc: 'assets/imgs/bx-play-circle.svg',
  },
} as ComponentMeta<typeof MusicCard>;

const Template: ComponentStory<typeof MusicCard> = (args) => (
  <MusicCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
