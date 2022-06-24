import { useEffect, useState } from 'react';

import { phrases } from 'src/uConstruction';

import { Construction } from '@uicomponents';

export default function Home() {
  const [sentance, setSentance] = useState<string>('');
  useEffect(() => {
    setSentance(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  return (
    <>
      <Construction text={sentance} />
    </>
  );
}
