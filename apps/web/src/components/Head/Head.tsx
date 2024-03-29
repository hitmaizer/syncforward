/* eslint-disable @typescript-eslint/no-explicit-any */

import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/sync-forward/image/upload/v1659534421/Mask_group-2_vkf2pf.png"
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
      <section>
        <main>{children}</main>
      </section>
    </>
  );
}
