/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';

import Head from 'next/head';

export default function Layout() {
  const [isDark, setIsDark] = useState<boolean>();

  const getDeviceScheme = useCallback(() => {
    // Prevents SSR issues
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }, []);

  if (typeof window !== 'undefined') {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        setIsDark(event.matches);
      });
  }

  const changeFavicon = (value: string) => {
    const faviconTag = document.getElementById('faviconTag') as HTMLLinkElement;
    faviconTag?.setAttribute('href', `/favicon-${value}.ico`);
  };

  useEffect(() => {
    const value = getDeviceScheme();
    changeFavicon(value);
    if (value === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [isDark]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/sync-forward/image/upload/v1656534796/seo-thumbnail_ibxzkz.png"
        />
        <meta
          property="og:description"
          content="Electronic dance music record label based in Porto, Portugal."
          key="ogdesc"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon-light.ico"
          id="faviconTag"
        />
      </Head>
    </>
  );
}
