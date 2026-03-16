import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ytsummarizer-blog.vercel.app'

  const posts = [
    'how-to-summarize-youtube-videos',
    'how-to-summarize-machine-learning-videos-with-ai',
    'python-tutorial-video-summary-learn-faster',
    'web-development-video-summaries-skip-to-what-matters',
    'data-science-video-summary-guide',
    'crypto-explained-video-summaries-made-simple',
    'digital-marketing-video-summary-tips',
    'productivity-hacks-summarize-youtube-videos-fast',
    'fitness-video-summaries-get-the-workout-plan-faster',
    'youtube-summarizer-for-students',
    'free-ai-tool-to-summarize-youtube-videos',
    'best-free-youtube-summarizer-tool',
    'youtube-summarizer-for-content-creators',
    'youtube-summarizer-for-lectures',
    'youtube-summarizer-with-timestamps',
    'youtube-summarizer-for-business-webinars',
    'youtube-summarizer-for-podcast-transcripts',
    'generate-blog-posts-from-youtube-summary',
    'convert-youtube-video-to-blog-post-summary',
    'youtube-summarizer-for-newsletter-content',
    'chrome-extension-to-summarize-youtube-videos',
    'ios-app-to-summarize-youtube-videos',
    'android-app-to-summarize-youtube-videos',
    'youtube-summarizer-mobile-app',
    'youtube-summarizer-with-bullet-points',
    'online-youtube-video-summary-generator',
    'free-youtube-video-summary-generator',
    'free-youtube-transcript-summary-tool',
    'youtube-transcript-summarizer-for-research',
    'summarize-youtube-tutorials-for-study',
    'youtube-summarizer-with-multi-language-support',
    'translate-and-summarize-youtube-videos',
    'summarize-youtube-videos-in-chinese-language',
    'youtube-summarizer-for-spanish-videos',
    'youtube-summarizer-for-french-videos',
    'youtube-summarizer-with-qa',
    'top-5-free-ai-tools',
    'ai-tool-to-summarize-academic-youtube-videos',
    'youtube-summarizer-for-script-writing',
    'youtube-summarizer-with-chapter-breakdown',
    'summarize-government-hearings-on-youtube',
    'youtube-summarizer-for-meeting-recordings',
    'summarize-youtube-interviews-for-market-research',
    'youtube-video-summarizer-for-training-videos',
    'youtube-summarizer-for-investor-videos',
    'summarize-corporate-presentations-on-youtube',
    'youtube-summarizer-for-legal-depositions',
    'youtube-summarizer-for-academic-research-papers',
    'students-youtube-summaries',
    'online-free-youtube-summarizer-with-translation',
    'youtube-summarizer-with-mind-map-output',
  ]

  const blogPosts = posts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-03-16'),
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
