import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { allPosts, POSTS_PER_PAGE, totalPages } from '../../lib/posts-list'

export function generateStaticParams() {
  // Pages 2..N (page 1 is the home route)
  return Array.from({ length: totalPages - 1 }, (_, i) => ({ num: String(i + 2) }))
}

export async function generateMetadata({ params }: { params: Promise<{ num: string }> }): Promise<Metadata> {
  const { num } = await params
  const pageNum = parseInt(num, 10)
  return {
    title: `Blog · Page ${pageNum} | YT Summarizer`,
    description: `Browse more YouTube summarizer guides, comparisons, and tutorials — page ${pageNum} of ${totalPages}.`,
    robots: { index: false, follow: true },
  }
}

export default async function ArchivePage({ params }: { params: Promise<{ num: string }> }) {
  const { num } = await params
  const pageNum = parseInt(num, 10)

  if (!Number.isFinite(pageNum) || pageNum < 2 || pageNum > totalPages) {
    notFound()
  }

  const start = (pageNum - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE
  const posts = allPosts.slice(start, end)

  const prevHref = pageNum === 2 ? '/' : `/page/${pageNum - 1}`
  const nextHref = pageNum < totalPages ? `/page/${pageNum + 1}` : null

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
        <a href="https://ytsummarizer.app" style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600 }}>Home</a>
        <span style={{ margin: '0 0.5rem', color: '#999' }}>/</span>
        <Link href="/" style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600 }}>Blog</Link>
        <span style={{ margin: '0 0.5rem', color: '#999' }}>/</span>
        <span style={{ color: '#333' }}>Page {pageNum}</span>
      </nav>

      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.75rem', color: '#ff0055' }}>
          YouTube Summarizer Blog — Page {pageNum}
        </h1>
        <p style={{ fontSize: '1rem', color: '#666' }}>
          More guides, comparisons, and use-case walkthroughs for AI YouTube summarization.
        </p>
      </header>

      <main>
        {posts.map((post) => (
          <article key={post.slug} style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px' }}>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>
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

      <nav aria-label="Pagination" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
        <Link href={prevHref} style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600 }}>
          ← Newer posts
        </Link>
        <span style={{ fontSize: '0.875rem', color: '#999' }}>
          Page {pageNum} of {totalPages}
        </span>
        {nextHref ? (
          <Link href={nextHref} style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600 }}>
            Older posts →
          </Link>
        ) : (
          <span style={{ fontSize: '0.875rem', color: '#ccc' }}>End</span>
        )}
      </nav>

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
