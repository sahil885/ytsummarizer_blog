import Link from 'next/link'
import type { Metadata } from 'next'
import {
  indexablePosts,
  categoryOf,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  productUrl,
  categoryBadge,
  formatDate,
} from '../lib/posts-list'

const PAGE_URL = 'https://blog.ytsummarizer.app/blog'

export const metadata: Metadata = {
  title: 'All YouTube Summarizer Guides & Comparisons | YT Summarizer Blog',
  description:
    'Browse every YT Summarizer guide in one place — tool comparisons, best-of roundups, profession-specific use cases, and step-by-step how-tos for AI YouTube summarization.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'All YouTube Summarizer Guides & Comparisons',
    description:
      'Every YT Summarizer guide in one place — comparisons, roundups, use cases, and how-tos for AI YouTube summarization.',
    url: PAGE_URL,
    siteName: 'YT Summarizer Blog',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function BlogIndex() {
  const grouped = CATEGORY_ORDER.map((key) => ({
    key,
    label: CATEGORY_LABELS[key],
    posts: indexablePosts
      .filter((p) => categoryOf(p.slug) === key)
      .sort((a, b) => (a.date < b.date ? 1 : -1)),
  })).filter((g) => g.posts.length > 0)

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'All YouTube Summarizer Guides',
    url: PAGE_URL,
    isPartOf: { '@type': 'WebSite', name: 'YT Summarizer Blog', url: 'https://blog.ytsummarizer.app' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: indexablePosts.length,
      itemListElement: indexablePosts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://blog.ytsummarizer.app/blog/${p.slug}`,
        name: p.title,
      })),
    },
  }

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <section className="hero">
        <nav aria-label="Breadcrumb" className="crumbs">
          <a href={productUrl('blog_archive_breadcrumb')}>Home</a>
          <span>&rsaquo;</span>
          <Link href="/">Blog</Link>
          <span>&rsaquo;</span>
          All guides
        </nav>
        <h1>All YouTube Summarizer Guides</h1>
        <p>
          Every guide we&rsquo;ve published on AI-powered YouTube summarization &mdash;{' '}
          {indexablePosts.length} in total, organized by type.
        </p>
      </section>

      {grouped.map((g) => (
        <section key={g.key} className="section">
          <div className="section-head">
            <h2>{g.label}</h2>
            <p>{g.posts.length} guides</p>
          </div>
          <div className="card-grid">
            {g.posts.map((p) => (
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
        </section>
      ))}

      <section className="cta-block">
        <h2>Ready to try YT Summarizer?</h2>
        <p>Summarize any YouTube video in about a minute &mdash; 5 free, no subscription.</p>
        <a className="btn-pill" href={productUrl('blog_archive_cta')}>
          Start Summarizing &rarr;
        </a>
      </section>
    </div>
  )
}
