import { NextSeo } from "next-seo";
import Head from "next/head";

export function Page({ title, description, openGraph, path, children }) {
  const url = `https://zetsubou-blog.vercel.app/${path}`;

  return (
    <div>
      <Head>
        <link
          rel="shortcut icon"
          href="https://media.graphassets.com/xU10WhwGTTyjI7tlTwfr"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          images: [openGraph],
        }}
      />
      {children}
    </div>
  );
}
