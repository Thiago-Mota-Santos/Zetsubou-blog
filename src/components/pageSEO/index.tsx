import { NextSeo } from "next-seo";
import Head from "next/head";

export function Page({ title, description, openGraph, path, children }) {
  const url = `https://zetsubou-blog.vercel.app/${path}`;

  const image = "https://media.graphassets.com/IGKyrXYSJeNXKi7q1q35";

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
          images: [
            {
              url: image,
              width: 751,
              height: 416,
              alt: "banner seo",
              type: "image/jpeg",
            },
          ],
        }}
      />
      {children}
    </div>
  );
}
