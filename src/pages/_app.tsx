import React from "react";
import { Provider } from "urql";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import { client, ssrCache } from "../graphql/api";
import { GlobalStyle } from "../styles/GlobalStyles";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <div>
      <Head>
        <link
          rel="shortcut icon"
          href="https://media.graphassets.com/xU10WhwGTTyjI7tlTwfr"
        />
      </Head>
      <div className="container">
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
      </div>
      <Provider value={client}>
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </div>
  );
}

export default MyApp;
