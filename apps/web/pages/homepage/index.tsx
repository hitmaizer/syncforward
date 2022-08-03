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
          The fifth chapter of our signature VA - Sequence - has arrived. <br />
          A mix of various electronic music styles compiled together in a strong
          5-track EP <br />
          featuring music by five different artists. <br />
        </Text>
        <Box height="52%" display="flex">
          <Accordion />
        </Box>
      </Hero>
    </>
  );
};

export default index;
