import { NextSeo } from "next-seo";

export function Page({ children, path, title, imageUrl, description }) {
  const url = `https://zetsubou-blog.vercel.app/blog/${path}`;

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          images: [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: "Og image Alt",
            },
          ],
        }}
      />
      {children}
    </div>
  );
}
