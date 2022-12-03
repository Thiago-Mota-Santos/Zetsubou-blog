import { GetStaticProps } from "next";
import { Container } from "../../styles/styles";
import {
  PageDocument,
  PostsDocument,
  usePageQuery,
  usePostsQuery,
} from "../../generated/graphql";
import { client, ssrCache } from "../../graphql/api";
import Card from "../../components/Card";
import Content from "../../components/Content";

export default function Blog() {
  const [
    {
      data: { posts },
    },
  ] = usePostsQuery();

  return (
    <Container>
      <Content>
        {posts.map((post) => (
          <Card
            key={post.slug}
            img_url={post.coverImage.url}
            title={post.title}
            subtitle={"subtitle"}
            description={post.excerpt}
            href={`/blog/${post.slug}`}
          />
        ))}
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
