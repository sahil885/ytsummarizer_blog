import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  indexablePosts,
  POSTS_PER_PAGE,
  totalPages,
  productUrl,
  categoryBadge,
  formatDate,
} from '../../lib/posts-list'

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
    alternates: { canonical: `https://blog.ytsummarizer.app/page/${pageNum}` },
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
  const posts = indexablePosts.slice(start, start + POSTS_PER_PAGE)

  const prevHref = pageNum === 2 ? '/' : `/page/${pageNum - 1}`
  const nextHref = pageNum < totalPages ? `/page/${pageNum + 1}` : null

  return (
    <div className="wrap">
      <section className="hero">
        <nav aria-label="Breadcrumb" className="crumbs">
          <a href={productUrl('pagination_breadcrumb')}>Home</a>
          <span>&rsaquo;</span>
          <Link href="/">Blog</Link>
          <span>&rsaquo;</span>
          Page {pageNum}
        </nav>
        <h1>More Summarizer Guides</h1>
        <p>Page {pageNum} of {totalPages} &mdash; comparisons, how-tos and use-case walkthroughs.</p>
      </section>

      <section className="section">
        <div className="card-grid">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
              <div className="card-meta">
                <span className="badge">{categoryBadge(p.slug)}</span>
                <span className="read">{formatDate(p.date)}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </Link>
          ))}
        </div>

        <nav aria-label="Pagination" className="pager">
          <Link href={prevHref}>&larr; Newer guides</Link>
          <span>Page {pageNum} of {totalPages}</span>
          {nextHref ? <Link href={nextHref}>Older guides &rarr;</Link> : <span>End</span>}
        </nav>
      </section>
    </div>
  )
}
