import { FC, useState, useEffect } from 'react';

import 'src/font-face.css';
import Head from '@components/Head';
import SEO from '@config/next-seo';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'ui/styles';
import '@config/fontsource';
import { theme } from 'ui/styles/theme';

import '../src/config/swiper';

import * as ga from '../lib/ga';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);

  const { asPath } = useRouter();
  const router = useRouter();

  const page = asPath === '/' ? '' : asPath;
  const [canonicalUrl] = `https://sync-forward.com${page}`.split('?');

  useEffect(() => {
    setMounted(true);

    const handleRouteChange = (url) => {
      ga.pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
      </Script>
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
        <Head>
          <GlobalStyle />
          {mounted && <Component {...pageProps} />}
        </Head>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
