import Link from 'next/link'
import type { Metadata } from 'next'
import {
  indexablePosts,
  POSTS_PER_PAGE,
  totalPages,
  productUrl,
  FEATURED_SLUGS,
  categoryBadge,
  formatDate,
} from './lib/posts-list'

export const metadata: Metadata = {
  alternates: { canonical: 'https://blog.ytsummarizer.app' },
}

export default function Home() {
  const featured = FEATURED_SLUGS.map((s) => indexablePosts.find((p) => p.slug === s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  )
  const featuredSet = new Set(featured.map((p) => p.slug))
  const latest = indexablePosts.filter((p) => !featuredSet.has(p.slug)).slice(0, POSTS_PER_PAGE)
  const hasNext = totalPages > 1

  return (
    <>
      <div className="wrap">
        <section className="hero">
          <h1>YouTube Summarizer Guides</h1>
          <p>
            Honest guides on summarizing YouTube videos with AI &mdash; tool comparisons, free
            options, and the workflows that actually save time.
          </p>
          <a className="btn-pill" href={productUrl('home_hero')}>
            Try YT Summarizer Free &rarr;
          </a>
          <p className="hero-note">5 free summaries &middot; One-time pricing from $19 &middot; No subscription</p>
        </section>

        {featured.length > 0 && (
          <section className="section">
            <div className="section-head">
              <h2>Start Here</h2>
              <p>The complete guides to AI YouTube summarization &mdash; begin with these.</p>
            </div>
            <div className="card-grid">
              {featured.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-featured">
                  <span className="badge">Complete Guide</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="section">
          <div className="section-head">
            <h2>Latest Guides</h2>
            <p>
              Newest comparisons, how-tos and tool reviews.{' '}
              <Link href="/blog">Browse all {indexablePosts.length} guides &rarr;</Link>
            </p>
          </div>
          <div className="card-grid">
            {latest.map((p) => (
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

          {hasNext && (
            <nav aria-label="Pagination" className="pager">
              <span>Page 1 of {totalPages}</span>
              <Link href="/page/2">Older guides &rarr;</Link>
            </nav>
          )}
        </section>

        <section className="crosspromo">
          <div>
            <h2>Need the transcript, not the summary?</h2>
            <p>
              YT Transcript pulls the full text of any YouTube video free &mdash; copy it, download
              it as TXT or PDF, or feed it to your own prompt. No signup.
            </p>
          </div>
          <a className="btn-pill" href="https://yttranscript.app">
            Get a Transcript &rarr;
          </a>
        </section>
      </div>
    </>
  )
}
