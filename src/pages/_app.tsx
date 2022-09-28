import type { AppProps } from "next/app";
import Content from "../components/Content";
import Header from "../components/Header";

import { GlobalStyle } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content
        img_url={"https://avatars.githubusercontent.com/u/75326612?v=4"}
        title={"lorem lorem lorem lorem"}
        subtitle={"sublorem sublorem sublorem"}
        description={
          "If you are a regular reader of our website, you have probably noticed our interest, or one could call a borderline obsession, surrounding a particular animator group known for their striking designs and contributions to many Toei Animation series, and whose origins..."
        }
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
