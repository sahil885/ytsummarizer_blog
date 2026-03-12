import type { Metadata } from 'next'
import { GoogleSiteVerification } from './google-site-verification'

export const metadata: Metadata = {
  title: 'YT Summarizer Blog | YouTube Summarization Tips & Guides',
  description: 'Learn how to get more from YouTube videos with AI-powered summarization. Tips, guides, and insights for students, professionals, and content creators.',
  metadataBase: new URL('https://ytsummarizer-blog.vercel.app'),
  openGraph: {
    title: 'YT Summarizer Blog | YouTube Summarization Tips & Guides',
    description: 'Learn how to get more from YouTube videos with AI-powered summarization.',
    url: 'https://ytsummarizer-blog.vercel.app',
    siteName: 'YT Summarizer Blog',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YT Summarizer Blog',
    description: 'Learn how to get more from YouTube videos with AI-powered summarization.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleSiteVerification />
      </head>
      <body>{children}</body>
    </html>
  )
}
