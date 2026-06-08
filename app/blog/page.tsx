import Link from 'next/link'
import type { Metadata } from 'next'
import {
  indexablePosts,
  categoryOf,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  productUrl,
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
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <nav aria-label="Breadcrumb" style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
        <a href={productUrl('blog_archive_breadcrumb')} style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600 }}>Home</a>
        <span style={{ margin: '0 0.5rem', color: '#999' }}>/</span>
        <Link href="/" style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600 }}>Blog</Link>
        <span style={{ margin: '0 0.5rem', color: '#999' }}>/</span>
        <span style={{ color: '#333' }}>All guides</span>
      </nav>

      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ff0055' }}>
          All YouTube Summarizer Guides
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#444', lineHeight: 1.7 }}>
          Every guide we&rsquo;ve published on AI-powered YouTube summarization &mdash; {indexablePosts.length} in
          total, organized by type. Tool comparisons, honest best-of roundups, profession-specific
          workflows, and step-by-step how-tos. Looking for the basics?{' '}
          <Link href="/blog/what-is-a-youtube-summarizer" style={{ color: '#ff0055' }}>
            Start with what a YouTube summarizer is
          </Link>
          .
        </p>
      </header>

      <main>
        {grouped.map((g) => (
          <section key={g.key} style={{ marginBottom: '2.75rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid #ff0055' }}>
              {g.label}{' '}
              <span style={{ fontSize: '1rem', color: '#999', fontWeight: 400 }}>({g.posts.length})</span>
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {g.posts.map((p) => (
                <li key={p.slug} style={{ marginBottom: '1rem' }}>
                  <Link href={`/blog/${p.slug}`} style={{ color: '#ff0055', textDecoration: 'none', fontWeight: 600, fontSize: '1.05rem' }}>
                    {p.title}
                  </Link>
                  <p style={{ fontSize: '0.95rem', color: '#666', margin: '0.25rem 0 0' }}>{p.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <div style={{ marginTop: '2rem', padding: '2rem', background: 'linear-gradient(135deg, #ff0055 0%, #ff6b35 100%)', borderRadius: '12px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to Try YT Summarizer?</h2>
        <p style={{ color: '#fff', marginBottom: '1.5rem', opacity: 0.95 }}>Summarize any YouTube video in seconds with AI</p>
        <a href={productUrl('blog_archive_cta')} style={{ display: 'inline-block', padding: '0.75rem 2rem', background: '#fff', color: '#ff0055', textDecoration: 'none', borderRadius: '8px', fontWeight: 700 }}>
          Start Summarizing &rarr;
        </a>
      </div>
    </div>
  )
}
