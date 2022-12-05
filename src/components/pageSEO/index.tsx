import { NextSeo } from "next-seo";

export function Page({ title, description, path, children }) {
  const url = `https://zetsubou-blog.vercel.app/${path}`;

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </div>
  );
}
