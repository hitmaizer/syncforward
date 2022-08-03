import React from 'react';

import { theme } from '@styles/theme';
import useFavicon from 'src/hooks/useFavicon';

import { Accordion, Heading, Hero, Navbar, Text } from '@uicomponents';

const index = () => {
  useFavicon();
  return (
    <>
      <Navbar />
      <Hero>
        <Heading
          size="4xl"
          color={theme.colors.white}
          textAlign="right"
          mr="40px"
        >
          This is the Homepage! <br />
          Something something
        </Heading>
        <Text color={theme.colors.gray50} ml="40px">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Consectetur maxime numquam ratione velit non in molestiae quibusdam
          fugiat nesciunt. <br />
          Sint reprehenderit ipsam eum voluptates, <br />
          ut minima sit ex error fuga necessitatibus autem atque voluptatum
          quisquam laborum? <br />
          Quidem rerum molestiae voluptates modi sit reprehenderit earum commodi
          at pariatur nemo.
        </Text>
        <Accordion />
      </Hero>
    </>
  );
};

export default index;
