import React from 'react';

import useFavicon from 'src/hooks/useFavicon';

import { Hero, Navbar, Socials } from '@uicomponents';

import releases from '../../src/mockData';

const index = () => {
  useFavicon();
  return (
    <>
      <Navbar />
      <Hero releases={releases} />
      <Socials page />
    </>
  );
};

export default index;
