import Link from 'next/link'
import { productUrl } from './lib/posts-list'

function YouTubeMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand">
          <YouTubeMark />
          YT Summarizer Blog
        </Link>
        <nav className="site-nav">
          <Link href="/blog">Articles</Link>
          <a className="nav-hide-sm" href="https://yttranscript.app">
            Transcripts
          </a>
          <a className="btn-pill" href={productUrl('nav_cta')}>
            Try Free &rarr;
          </a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>&copy; {new Date().getFullYear()} YT Summarizer. AI YouTube video summaries.</p>
        <div className="site-footer-links">
          <Link href="/blog">All guides</Link>
          <a href={productUrl('footer_tool')}>Summarizer</a>
          <a href={productUrl('footer_pricing', '/Pricing')}>Pricing</a>
          <a href="https://yttranscript.app">Transcripts</a>
        </div>
      </div>
    </footer>
  )
}
