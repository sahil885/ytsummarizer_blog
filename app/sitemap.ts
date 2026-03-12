import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ytsummarizer-blog.vercel.app'

  // Blog post slugs
  const posts = [
    'how-to-summarize-youtube-videos',
    'how-to-summarize-machine-learning-videos-with-ai',
    'python-tutorial-video-summary-learn-faster',
    'web-development-video-summaries-skip-to-what-matters',
    'data-science-video-summary-guide',
    'crypto-explained-video-summaries-made-simple',
  ]

  const blogPosts = posts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-03-12'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...blogPosts,
  ]
}
