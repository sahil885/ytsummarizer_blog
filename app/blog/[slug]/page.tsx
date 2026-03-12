import Link from 'next/link'
import { notFound } from 'next/navigation'

const posts: Record<string, { title: string; content: string; date: string; metaDescription: string }> = {
  'how-to-summarize-youtube-videos': {
    title: 'How to Summarize YouTube Videos with AI',
    metaDescription: 'Learn how to save time and extract key insights from any YouTube video in seconds using AI-powered summarization.',
    date: '2026-03-12',
    content: `
      <p>Watching long YouTube videos can be time-consuming, especially when you're looking for specific information. AI-powered video summarization solves this problem by extracting key insights in seconds.</p>

      <h2>Why Summarize YouTube Videos?</h2>
      <p>Whether you're a student researching topics, a professional staying updated, or a content creator analyzing competitors, video summarization helps you:</p>
      <ul>
        <li>Save hours of watch time every week</li>
        <li>Quickly evaluate if a video contains the information you need</li>
        <li>Extract actionable insights without watching the entire video</li>
        <li>Create searchable notes from video content</li>
      </ul>

      <h2>How AI Summarization Works</h2>
      <p>Modern AI tools analyze video transcripts, identify key points, and generate concise summaries. The best tools can:</p>
      <ul>
        <li>Capture main ideas and supporting details</li>
        <li>Preserve context and nuance</li>
        <li>Format summaries for easy scanning</li>
        <li>Highlight timestamps for important moments</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Ready to save time on YouTube? Try <a href="https://ytsummarizer.app" style="color: #ff0055; font-weight: 600;">YT Summarizer</a> to instantly summarize any YouTube video with AI.</p>

      <p>Simply paste a YouTube URL and get a comprehensive summary in seconds. Perfect for students, professionals, and anyone who wants to get more from YouTube in less time.</p>
    `
  }
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) return {}

  return {
    title: `${post.title} | YT Summarizer Blog`,
    description: post.metaDescription,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <Link href="/" style={{ color: '#ff0055', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 600 }}>
        ← Back to Blog
      </Link>

      <article style={{ marginTop: '2rem' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#333', lineHeight: 1.2 }}>
            {post.title}
          </h1>
          <time style={{ fontSize: '0.875rem', color: '#999' }}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </header>

        <div
          style={{ fontSize: '1.125rem', lineHeight: 1.7, color: '#333' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #ff0055 0%, #ff6b35 100%)',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Ready to Try YT Summarizer?
          </h3>
          <p style={{ color: '#fff', marginBottom: '1.5rem', opacity: 0.95 }}>
            Summarize any YouTube video in seconds with AI
          </p>
          <a
            href="https://ytsummarizer.app"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              background: '#fff',
              color: '#ff0055',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '1rem'
            }}
          >
            Start Summarizing →
          </a>
        </div>
      </article>
    </div>
  )
}
