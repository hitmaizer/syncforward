import { FC, useState, useEffect } from 'react';

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
  const { asPath } = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://sync-forward.com${page}`.split('?');

  useEffect(() => {
    setMounted(true);
    const faviconTag = document.getElementById('faviconTag') as HTMLLinkElement;
    const isDark = window.matchMedia('(prefers-color-scheme: dark)');

    const changeFavicon = () => {
      if (isDark.matches) {
        faviconTag.href = '/favicon-dark.ico';
      } else {
        faviconTag.href = '/favicon-light.ico';
      }
    };

    changeFavicon();
    setInterval(changeFavicon, 500);
  }, []);

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
