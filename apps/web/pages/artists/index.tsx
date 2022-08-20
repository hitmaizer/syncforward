import useFavicon from 'src/hooks/useFavicon';

import { Accordion, Navbar, Socials } from '@uicomponents';

const Artists = () => {
  useFavicon();
  return (
    <>
      <Navbar />
      <Accordion />
      <Socials page />
    </>
  );
};

export default Artists;
