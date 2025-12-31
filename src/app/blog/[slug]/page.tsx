import { getArticleBySlug, getAllArticles } from '../../../utils/mdx'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { FaUserCircle, FaClock, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export const dynamic = 'force-static'
export const revalidate = 3600

export const generateStaticParams = async () => {
  const result = getAllArticles()
  if (!result.success) {
    return []
  }
  return result.data.map((article) => ({
    slug: article.slug,
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const result = await getArticleBySlug({ slug })
  if (!result.success) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    }
  }
  const article = result.data
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://zetsubou-blog.vercel.app'
  const imageUrl = article.imageUrl.startsWith('http')
    ? article.imageUrl
    : `${baseUrl}${article.imageUrl}`
  const articleUrl = `${baseUrl}/blog/${slug}`
  return {
    metadataBase: new URL(baseUrl),
    title: `${article.title} | Zetsubou Blog`,
    description: article.description,
    authors: [{ name: article.author || 'Zetsubou' }],
    openGraph: {
      title: article.title,
      description: article.description,
      url: articleUrl,
      siteName: 'Zetsubou Blog',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: articleUrl,
    },
  }
}

const BlockQuote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className="flex relative my-7 mx-7 justify-center text-2xl text-center break-words">
      <p>
        <FaQuoteLeft className="absolute left-[-10px] -translate-y-1/2 flex mb-2.5 ml-[-16px] fill-[rgb(200,197,191)] h-6 w-6" />
        {children}
        <FaQuoteRight className="absolute right-[-10px] -translate-y-1/2 flex ml-[692px] fill-[rgb(200,197,191)] h-6 w-6" />
      </p>
    </blockquote>
  )
}

const Link = ({ children, ...props }: any) => {
  return (
    <a target="_blank" {...props}>
      {children}
    </a>
  )
}

const components = {
  blockquote: BlockQuote,
  a: Link,
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const result = await getArticleBySlug({ slug })
  if (!result.success) {
    notFound()
  }
  const article = result.data
  const formattedDate = new Date(article.date + 'T00:00:00').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Sao_Paulo'
  })
  return (
    <div className="max-w-[850px] mx-auto relative py-[15px] bg-[var(--header-dark)] overflow-hidden">
      <div className="max-w-full ml-[53px] border-[2.5px] border-[var(--border-post)] px-[10px] py-0 pr-[0.7rem]">
        <div className="leading-7 mx-auto">
          <h1 className="text-[26px] cursor-pointer mt-2 block text-white text-center font-extrabold hover:text-[var(--title-post)] transition-colors duration-200">
            {article.title}
          </h1>
          <ul className="flex justify-center mr-[5px]">
            <li className="flex items-center ml-2.5">
              <FaUserCircle className="w-3 h-3 fill-[var(--description-dark)] flex-shrink-0" />
              <span className="ml-0.5 font-[Oswald,Arial,Helvetica,sans-serif] text-xs text-[var(--description-dark)] uppercase max-[330px]:text-[7.5px]">
                {article.author || 'Th'}
              </span>
            </li>
            <li className="flex items-center ml-2.5">
              <FaClock className="w-3 h-3 fill-[var(--description-dark)] flex-shrink-0" />
              <span className="ml-0.5 font-[Oswald,Arial,Helvetica,sans-serif] text-xs text-[var(--description-dark)] uppercase max-[330px]:text-[7.5px]">
                {formattedDate}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            src={article.imageUrl}
            width={1400}
            height={600}
            alt={article.title}
            className="max-w-full h-auto object-cover"
            priority
          />
        </div>
        <div className="relative mt-6 w-full text-[17px] text-[#beb9b0] ml-0 post-content">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}


