import { useEffect, useState } from 'react';

import useFavicon from 'src/hooks/useFavicon';
import { phrases } from 'src/uConstruction';

import { Construction } from '@uicomponents';

export default function Home() {
  const [sentence, setSentence] = useState<string>('');
  useEffect(() => {
    setSentence(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  useFavicon();

  return (
    <>
      <Construction text={sentence} videoSrc="/neon-30.mp4" />
    </>
  );
}
