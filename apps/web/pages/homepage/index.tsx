import React from 'react';

import { theme } from '@styles/theme';
import useFavicon from 'src/hooks/useFavicon';

import { Accordion, Box, Heading, Hero, Navbar, Text } from '@uicomponents';

const index = () => {
  useFavicon();
  return (
    <>
      <Navbar />
      <Hero>
        <Heading
          size="3xl"
          color={theme.colors.white}
          textAlign="right"
          mr="40px"
        >
          This is the Homepage! <br />
          Something something
        </Heading>
        <Text color={theme.colors.gray50} ml="40px" size="sm">
          Sync Forward Records is a House & Techno record label based in Porto,{' '}
          <br />
          Portugal established in 2009. <br />
          It&apos;s an expression of our vision of the future <br />
          through music, art and design.
        </Text>
      </Hero>
      <Box height="60vh" display="flex">
        <Accordion />
      </Box>
    </>
  );
};

export default index;
