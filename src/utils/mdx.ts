import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'src/content/articles')
const trechosDirectory = path.join(process.cwd(), 'src/content/trechos')

export type ArticleMeta = {
  slug: string
  title: string
  description: string
  date: string
  imageUrl: string
  author?: string
  tags?: string[]
}

export type Article = {
  content: string
} & ArticleMeta

export type TrechoMeta = {
  slug: string
  title: string
  description: string
  date: string
  imageUrl: string
  author?: string
}

export type Trecho = {
  content: string
} & TrechoMeta

export const getArticleBySlug = async ({ slug }: { slug: string }): Promise<{ success: true; data: Article } | { success: false; error: string }> => {
  try {
    const filePath = path.join(articlesDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContents)
    return {
      success: true,
      data: {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        imageUrl: data.imageUrl,
        author: data.author,
        tags: data.tags || [],
        content: content,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: `Error getting article for slug ${slug}: ${error}`,
    }
  }
}

export const getAllArticles = (): { success: true; data: ArticleMeta[] } | { success: false; error: string } => {
  try {
    if (!fs.existsSync(articlesDirectory)) {
      return { success: true, data: [] }
    }
    const fileNames = fs.readdirSync(articlesDirectory)
    const allArticles = fileNames
      .filter((fileName) => path.extname(fileName) === '.mdx')
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          imageUrl: data.imageUrl,
          author: data.author,
          tags: data.tags || [],
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return { success: true, data: allArticles }
  } catch (error) {
    return {
      success: false,
      error: `Error getting all articles: ${error}`,
    }
  }
}

export const getTrechoBySlug = async ({ slug }: { slug: string }): Promise<{ success: true; data: Trecho } | { success: false; error: string }> => {
  try {
    const filePath = path.join(trechosDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContents)
    return {
      success: true,
      data: {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        imageUrl: data.imageUrl,
        author: data.author,
        content: content,
      },
    }
  } catch (error) {
    return {
      success: false,
      error: `Error getting trecho for slug ${slug}: ${error}`,
    }
  }
}

export const getAllTrechos = (): { success: true; data: TrechoMeta[] } | { success: false; error: string } => {
  try {
    if (!fs.existsSync(trechosDirectory)) {
      return { success: true, data: [] }
    }
    const fileNames = fs.readdirSync(trechosDirectory)
    const allTrechos = fileNames
      .filter((fileName) => path.extname(fileName) === '.mdx')
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(trechosDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          imageUrl: data.imageUrl,
          author: data.author,
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    return { success: true, data: allTrechos }
  } catch (error) {
    return {
      success: false,
      error: `Error getting all trechos: ${error}`,
    }
  }
}

export const getArticlesByTag = ({ tag }: { tag: string }): { success: true; data: ArticleMeta[] } | { success: false; error: string } => {
  const result = getAllArticles()
  if (!result.success) {
    return result
  }
  const filtered = result.data.filter((article) => article.tags?.includes(tag))
  return { success: true, data: filtered }
}
