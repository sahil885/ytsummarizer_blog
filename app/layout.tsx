import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YT Summarizer Blog | YouTube Summarization Tips & Guides',
  description: 'Learn how to get more from YouTube videos with AI-powered summarization. Tips, guides, and insights for students, professionals, and content creators.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
