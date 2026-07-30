import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader, SiteFooter } from './site-chrome'
import { GoogleSiteVerification } from './google-site-verification'
import { OG_IMAGE } from './lib/posts-list'

export const metadata: Metadata = {
  title: 'YouTube Summarizer Blog — Tools, Guides & Comparisons 2026',
  description: 'Compare the best YouTube summarizer tools, get step-by-step guides, and find free AI options with no subscription. Covers Eightify alternatives, student use cases, and more.',
  metadataBase: new URL('https://blog.ytsummarizer.app'),
  openGraph: {
    title: 'YouTube Summarizer Blog — Tools, Guides & Comparisons 2026',
    description: 'Compare the best YouTube summarizer tools, get step-by-step guides, and find free AI options with no subscription.',
    url: 'https://blog.ytsummarizer.app',
    siteName: 'YT Summarizer Blog',
    locale: 'en_US',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'YT Summarizer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Summarizer Blog — Tools, Guides & Comparisons 2026',
    description: 'Compare the best YouTube summarizer tools, get step-by-step guides, and find free AI options with no subscription.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YT Summarizer',
  url: 'https://ytsummarizer.app',
  logo: OG_IMAGE,
  sameAs: [
    'https://www.tiktok.com/@ytsummarizer.app',
    'https://www.instagram.com/ytsummarizerapp/',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'YT Summarizer Blog',
  url: 'https://blog.ytsummarizer.app',
  publisher: {
    '@type': 'Organization',
    name: 'YT Summarizer',
    url: 'https://ytsummarizer.app',
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'YT Summarizer Blog',
  url: 'https://blog.ytsummarizer.app',
  description: 'Guides, comparisons, and tips for AI-powered YouTube video summarization.',
  publisher: {
    '@type': 'Organization',
    name: 'YT Summarizer',
    url: 'https://ytsummarizer.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleSiteVerification />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KJ67B5SBJJ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KJ67B5SBJJ');
            `,
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
