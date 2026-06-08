import Link from 'next/link'
import type { Metadata } from 'next'
import { indexablePosts, POSTS_PER_PAGE, totalPages, productUrl } from './lib/posts-list'

export const metadata: Metadata = {
  alternates: { canonical: 'https://blog.ytsummarizer.app' },
}

export default function Home() {
  const posts = indexablePosts.slice(0, POSTS_PER_PAGE)
  const hasNext = totalPages > 1

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ff0055' }}>
          YouTube Summarizer Tips, Guides &amp; Comparisons
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#444', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '680px' }}>
          Your guide to AI-powered YouTube video summarization. We cover the best free and paid tools,
          compare top options like Eightify and NoteGPT, and show you how students, professionals,
          and content creators use AI to extract key insights from YouTube — without watching every minute.
          Whether you need a{' '}
          <a href="/blog/best-free-youtube-summarizer-tool" style={{ color: '#ff0055' }}>free summarizer</a>,
          a{' '}
          <a href="/blog/youtube-summarizer-for-students" style={{ color: '#ff0055' }}>tool for studying</a>,
          or a{' '}
          <a href="/blog/best-free-youtube-summarizers-no-subscription-2026" style={{ color: '#ff0055' }}>no-subscription option</a>,
          you'll find honest, up-to-date guidance here.
        </p>
        <p style={{ fontSize: '1rem', margin: 0 }}>
          <Link href="/blog" style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600 }}>
            Browse all {indexablePosts.length} guides &rarr;
          </Link>
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

      {hasNext && (
        <nav aria-label="Pagination" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
          <span style={{ fontSize: '0.875rem', color: '#999' }}>
            Page 1 of {totalPages}
          </span>
          <Link
            href="/page/2"
            style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600 }}
          >
            Older posts →
          </Link>
        </nav>
      )}

      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>
          Want to try YT Summarizer?{' '}
          <a href={productUrl('home_footer')} style={{ color: '#ff0055', fontWeight: 600 }}>
            Start summarizing videos →
          </a>
        </p>
      </footer>
    </div>
  )
}
