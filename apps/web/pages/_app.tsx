import { FC, useState, useEffect, useCallback } from 'react';

import 'src/font-face.css';
import Head from '@components/Head';
import SEO from '@config/next-seo';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'ui/styles';
import '@config/fontsource';
import { theme } from 'ui/styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState<boolean>();
  const { asPath } = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://sync-forward.com${page}`.split('?');

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
    setMounted(true);
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
      <ThemeProvider theme={theme}>
        <DefaultSeo
          canonical={canonicalUrl}
          openGraph={{
            url: canonicalUrl,
            type: 'website',
            site_name: 'Sync Forward',
          }}
          dangerouslySetAllPagesToNoIndex
          {...SEO}
        />
        <GlobalStyle />
        <Head />
        {mounted && <Component {...pageProps} />}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
