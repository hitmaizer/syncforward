import React from 'react';

import useFavicon from 'src/hooks/useFavicon';

import { Hero, Navbar, Socials } from '@uicomponents';

const index = () => {
  useFavicon();
  return (
    <>
      <Navbar />
      <Hero />
      <Socials page />
    </>
  );
};

export default index;
