import { useEffect, useState } from 'react';

import { phrases } from 'src/uConstruction';

import { Construction } from '@uicomponents';

export default function Home() {
  const [sentence, setSentence] = useState<string>('');
  useEffect(() => {
    setSentence(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  return (
    <>
      <Construction text={sentence} />
    </>
  );
}
