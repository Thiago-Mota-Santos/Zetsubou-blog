import { GetStaticPaths, GetStaticProps } from "next";
import { PostDocument, usePostQuery } from "../../generated/graphql";
import Blog from "../../components/Post";
import RightContent from "../../components/RightContent";

import { Container, Wrapper } from "../../styles/slugstyle";
import { client, ssrCache } from "../../graphql/api";
import { Page } from "../../components/pageSEO";
import ImageSeo from "../../components/imgSeo";

export default function Post({ slug }) {
  const [
    {
      data: { post },
    },
  ] = usePostQuery({
    variables: {
      slug,
    },
  });

  return (
    <ImageSeo imgSEO={post.seo.image.url.toString()}>
      <Page
        title={post.title}
        description={post.seo.description}
        path={`blog/${slug}`}
        openGraph={{
          images: [
            {
              url: `${post.seo.image.url.toString()}`,
            },
          ],
        }}
      >
        <Container>
          <Wrapper>
            <Blog
              title={post.title}
              name={"Th"}
              // date={post.date}
              date={"03 Out, 2022"}
              image={post.coverImage.url}
              previewContent={null}
              textContent={post.content.markdown}
            />
            <RightContent />
          </Wrapper>
        </Container>
      </Page>
    </ImageSeo>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await client.query(PostDocument, { slug: params.slug }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params.slug,
    },
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
