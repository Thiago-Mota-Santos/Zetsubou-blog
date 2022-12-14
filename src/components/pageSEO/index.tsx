import { ArticleJsonLd } from "next-seo";

export function Page({ children, path, title, imageUrl, description }) {
  const url = `https://zetsubou-blog.vercel.app/blog/${path}`;
  return (
    <div>
      <ArticleJsonLd
        type="BlogPosting"
        url={url}
        title={title}
        images={imageUrl}
        authorName=""
        publisherName=""
        publisherLogo={imageUrl}
        description={description}
        isAccessibleForFree={true}
        datePublished={""}
      />
      {children}
    </div>
  );
}
