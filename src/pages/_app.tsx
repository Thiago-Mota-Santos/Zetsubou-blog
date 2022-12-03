import React from "react";
import { Provider } from "urql";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

import { client, ssrCache } from "../graphql/api";
import { GlobalStyle } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <div>
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
