import { GetServerSideProps } from "next";
import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Content from "../components/Content";
import { Page } from "../components/pageSEO";
import {
  usePageQuery,
  PageDocument,
  PostsDocument,
  usePostsQuery,
} from "../generated/graphql";
import { client, ssrCache } from "../graphql/api";

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: "page",
    },
  });

  const [
    {
      data: { posts },
    },
  ] = usePostsQuery();

  return (
    <>
      <Banner title={data?.page?.title} description={data?.page?.subtitle} />
      <Content>
        {posts.map((post) => (
          <Card
            key={post.slug}
            img_url={post.coverImage.url.toString()}
            title={post.title}
            subtitle={"subtitle"}
            description={post.excerpt}
            href={`/blog/${post.slug}`}
          />
        ))}
      </Content>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await Promise.all([
    client.query(PostsDocument).toPromise(),
    client.query(PageDocument, { slug: "blog" }).toPromise(),
  ]);

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
