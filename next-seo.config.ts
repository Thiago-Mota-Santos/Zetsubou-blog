import { GetServerSideProps } from "next";
import { PageDocument, PostsDocument, usePageQuery, usePostsQuery } from "./src/generated/graphql";
import { client, ssrCache } from "./src/graphql/api";


const [{ data }] = usePageQuery({
    variables: {
      slug: "home",
    },
  });

  const [
    {
      data: { posts },
    },
  ] = usePostsQuery();


const title = 'Zetsubou Blog'
const description = "Postagens sobre assuntos aleatórios (as vezes)"
const url = data?.page?.seo.image.url;


const SEO = {
    title,
    canonical: 'https://zetsubou-blog.vercel.app/',
    openGraph:{
        type: 'website',
        locale: 'pt_BR',
        url: 'https://zetsubou-blog.vercel.app/',
        siteName: 'Zetsubou Blog',
        title,
        description,
        images: [
            {
                url,
                alt: title,
                width: 1280,
                height: 720
            }
        ]
    },
    twitter: {
        handle: '@ThiagoMota014',
        site: '@site',
        cardType: 'summary_large_image'
    }
}

export default SEO;

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