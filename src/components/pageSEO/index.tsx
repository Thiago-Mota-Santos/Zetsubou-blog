import { ArticleJsonLd } from "next-seo";
import Head from "next/head";

export function Page({ title, description, path, imageUrl }) {
  const url = `https://zetsubou-blog.vercel.app/${path}`;
  return (
    <div>
      <Head>
        <link
          rel="shortcut icon"
          href="https://media.graphassets.com/xU10WhwGTTyjI7tlTwfr"
        />
      </Head>
      <ArticleJsonLd
        url={url}
        title={title}
        images={[imageUrl]}
        authorName={[
          {
            name: "",
            url: "",
          },
          {
            name: "",
            url: "",
          },
        ]}
        publisherName=""
        publisherLogo={imageUrl}
        description={description}
        isAccessibleForFree={true}
        datePublished={""}
      />
    </div>
  );
}
