import React from 'react';

import useFavicon from 'src/hooks/useFavicon';

import { Accordion, Navbar } from '@uicomponents';

const index = () => {
  useFavicon();
  return (
    <>
      <Navbar />
      <Accordion />
    </>
  );
};

export default index;
