import { useRouter } from 'next/router';
import { usePostQuery } from "../../generated/graphql";
import Blog from "../../components/Post";
import RightContent from "../../components/RightContent";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Container, Wrapper } from "../../styles/slugstyle";
import { Page } from "../../components/pageSEO";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  const [{ data, fetching, error }] = usePostQuery({
    variables: { slug: slug as string },
    pause: !slug, // Pause query if slug is not available yet
  });

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data?.post) return <div>Post not found</div>;

  const { post } = data;
  const date = new Date(post.date);
  const availableDateFormatted = format(date, "' 'dd' 'MMMM', 'yyyy'", {
    locale: ptBR,
  });

  return (
    <Page
      path={slug as string}
      title={post?.seo?.title}
      imageUrl={post?.seo?.image.url}
      description={post?.seo?.description}
    >
      <Container>
        <Wrapper>
          <Blog
            title={post.title}
            name={"Th"}
            date={availableDateFormatted}
            image={post.coverImage.url}
            previewContent={null}
            textContent={post.content.markdown}
          />
          <RightContent />
        </Wrapper>
      </Container>
    </Page>
  );
}
