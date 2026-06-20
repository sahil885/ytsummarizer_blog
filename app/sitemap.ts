import { MetadataRoute } from 'next'
import { indexablePosts } from './lib/posts-list'

export const dynamic = 'force-static'

// Built from indexablePosts (app/lib/posts-list.ts) so new posts are included automatically
// and noindexed/consolidated slugs are excluded. lastModified uses each post's date.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blog.ytsummarizer.app'

  const blogPosts = indexablePosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...blogPosts,
  ]
}
