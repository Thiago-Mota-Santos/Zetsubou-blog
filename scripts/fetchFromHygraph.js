const fs = require('fs')
const path = require('path')

const HYGRAPH_URL = "https://api-sa-east-1.hygraph.com/v2/cl6dul0jl0vek01tab7g97tr5/master"

const POSTS_QUERY = `
  query Posts {
    posts(orderBy: publishedAt_DESC) {
      title
      slug
      excerpt
      publishedAt
      content {
        markdown
      }
      coverImage {
        url
      }
      author {
        name
      }
      seo {
        title
        description
        keywords
      }
    }
  }
`

const fetchPosts = async () => {
  try {
    console.log('🔄 Fetching posts from Hygraph...')
    
    const response = await fetch(HYGRAPH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: POSTS_QUERY,
      }),
    })

    const { data, errors } = await response.json()

    if (errors) {
      console.error('❌ GraphQL Errors:', errors)
      return
    }

    if (!data || !data.posts) {
      console.error('❌ No posts found')
      return
    }

    console.log(`✅ Found ${data.posts.length} posts`)

    const articlesDir = path.join(__dirname, '../src/content/articles')
    
    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true })
    }

    for (const post of data.posts) {
      const slug = post.slug
      const title = post.title || 'Sem título'
      const description = post.seo?.description || post.excerpt || ''
      const date = post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : '2025-01-01'
      const author = post.author?.name || 'Zetsubou'
      const imageUrl = post.coverImage?.url || '/image/bannerblog.png'
      const content = post.content?.markdown || ''
      const keywords = post.seo?.keywords || []

      const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
date: "${date}"
imageUrl: "${imageUrl}"
author: "${author}"
keywords: ${JSON.stringify(keywords)}
---

${content}
`

      const filePath = path.join(articlesDir, `${slug}.mdx`)
      fs.writeFileSync(filePath, frontmatter, 'utf8')
      console.log(`✅ Created: ${slug}.mdx`)
    }

    console.log('\n🎉 All posts migrated successfully!')
    
  } catch (error) {
    console.error('❌ Error fetching posts:', error)
  }
}

fetchPosts()

