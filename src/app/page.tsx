import { Banner } from '../components/Banner'
import { Card } from '../components/Card'
import { Content } from '../components/Content'
import { getAllArticles } from '../utils/mdx'

export const dynamic = 'force-static'
export const revalidate = 3600

export default function Home() {
  const result = getAllArticles()
  const articles = result.success ? result.data : []
  return (
    <>
      <Banner />
      <Content>
        {articles.map((article) => (
          <Card
            key={article.slug}
            imgUrl={article.imageUrl}
            title={article.title}
            description={article.description}
            href={`/blog/${article.slug}`}
          />
        ))}
      </Content>
    </>
  )
}
