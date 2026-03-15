import Link from 'next/link'

export default function Home() {
  const posts = [
    {
      slug: 'fitness-video-summaries-get-the-workout-plan-faster',
      title: 'Fitness Video Summaries: Get the Workout Plan Faster',
      description: 'Learn how to quickly summarize fitness training videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-15'
    },

    {
      slug: 'productivity-hacks-summarize-youtube-videos-fast',
      title: 'Productivity Hacks: Summarize YouTube Videos Fast',
      description: 'Learn how to quickly summarize productivity tips videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-15'
    },

    {
      slug: 'digital-marketing-video-summary-tips',
      title: 'Digital Marketing Video Summary Tips',
      description: 'Learn how to quickly summarize digital marketing videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-15'
    },

    {
      slug: 'crypto-explained-video-summaries-made-simple',
      title: 'Crypto Explained: Video Summaries Made Simple',
      description: 'Learn how to quickly summarize cryptocurrency videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-12'
    },

    {
      slug: 'data-science-video-summary-guide',
      title: 'Data Science Video Summary Guide',
      description: 'Learn how to quickly summarize data science videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-12'
    },

    {
      slug: 'web-development-video-summaries-skip-to-what-matters',
      title: 'Web Development Video Summaries: Skip to What Matters',
      description: 'Learn how to quickly summarize web development videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-12'
    },

    {
      slug: 'python-tutorial-video-summary-learn-faster',
      title: 'Python Tutorial Video Summary: Learn Faster',
      description: 'Learn how to quickly summarize python programming videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-12'
    },

    {
      slug: 'how-to-summarize-machine-learning-videos-with-ai',
      title: 'How to Summarize Machine Learning Videos with AI',
      description: 'Learn how to quickly summarize machine learning videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-12'
    },

    {
      slug: 'how-to-summarize-youtube-videos',
      title: 'How to Summarize YouTube Videos with AI',
      description: 'Save time and extract key insights from any YouTube video in seconds.',
      date: '2026-03-12'
    }
  ]

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ff0055' }}>
          YT Summarizer Blog
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#666' }}>
          Tips, guides, and insights on YouTube video summarization
        </p>
      </header>

      <main>
        {posts.map((post) => (
          <article key={post.slug} style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px' }}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#333' }}>
                {post.title}
              </h2>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '0.75rem' }}>
                {post.description}
              </p>
              <time style={{ fontSize: '0.875rem', color: '#999' }}>
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </Link>
          </article>
        ))}
      </main>

      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>
          Want to try YT Summarizer?{' '}
          <a href="https://ytsummarizer.app" style={{ color: '#ff0055', fontWeight: 600 }}>
            Start summarizing videos →
          </a>
        </p>
      </footer>
    </div>
  )
}
