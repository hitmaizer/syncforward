import { useEffect, useState } from 'react';

import Construction from '@components/Construction';
import useFavicon from 'src/hooks/useFavicon';
import { phrases } from 'src/uConstruction';

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
