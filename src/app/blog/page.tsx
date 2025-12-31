import { Card } from '../../components/Card'
import { Content } from '../../components/Content'
import { getAllArticles } from '../../utils/mdx'

export const dynamic = 'force-static'
export const revalidate = 3600

export default function BlogPage() {
  const result = getAllArticles()
  const articles = result.success ? result.data : []
  return (
    <div className="bg-[var(--text-main)]">
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
    </div>
  )
}


