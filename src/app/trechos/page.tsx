import { Card } from '../../components/Card'
import { Content } from '../../components/Content'
import { getAllTrechos } from '../../utils/mdx'

export const dynamic = 'force-static'
export const revalidate = 3600

export default function TrechosPage() {
  const result = getAllTrechos()
  const trechos = result.success ? result.data : []
  return (
    <div className="bg-[var(--text-main)]">
      <Content>
        {trechos.map((trecho) => (
          <Card
            key={trecho.slug}
            imgUrl={trecho.imageUrl}
            title={trecho.title}
            description={trecho.description}
            href={`/trechos/${trecho.slug}`}
          />
        ))}
      </Content>
    </div>
  )
}
