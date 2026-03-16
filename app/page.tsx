import Link from 'next/link'

export default function Home() {
  const posts = [
    { slug: 'youtube-summarizer-for-students', title: 'YouTube Summarizer for Students: Study Smarter, Not Harder', description: 'Discover how students can use AI YouTube summarizers to study more efficiently, extract key points from lectures, and save hours of study time.', date: '2026-03-16' },
    { slug: 'free-ai-tool-to-summarize-youtube-videos', title: 'Free AI Tool to Summarize YouTube Videos', description: 'Looking for a free AI tool to summarize YouTube videos? Discover the best options available and how to get instant video summaries without paying.', date: '2026-03-16' },
    { slug: 'best-free-youtube-summarizer-tool', title: 'Best Free YouTube Summarizer Tool in 2026', description: 'Compare the best free YouTube summarizer tools available in 2026. Find the right AI tool to save time and extract key insights from any YouTube video.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-content-creators', title: 'YouTube Summarizer for Content Creators', description: 'How content creators can use AI YouTube summarization to research faster, repurpose videos, analyze competitors, and create more content in less time.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-lectures', title: 'YouTube Summarizer for Lectures: Extract Knowledge Fast', description: 'Use AI to summarize YouTube lecture videos. Perfect for students and professionals who want to extract key knowledge from educational content quickly.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-with-timestamps', title: 'YouTube Summarizer with Timestamps: Jump to What Matters', description: 'Get AI summaries of YouTube videos with timestamps so you can jump directly to the most important parts. Save time and navigate long videos efficiently.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-business-webinars', title: 'YouTube Summarizer for Business Webinars', description: 'Summarize business webinars on YouTube with AI. Extract key insights, action items, and decisions from long webinar recordings in seconds.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-podcast-transcripts', title: 'YouTube Summarizer for Podcast Transcripts', description: 'Use AI to summarize YouTube podcast episodes. Extract key insights, guest quotes, and actionable points from long podcast recordings without listening to everything.', date: '2026-03-16' },
    { slug: 'generate-blog-posts-from-youtube-summary', title: 'Generate Blog Posts from YouTube Video Summaries', description: 'Learn how to turn YouTube video summaries into high-quality blog posts using AI. A step-by-step workflow for content repurposing and SEO content creation.', date: '2026-03-16' },
    { slug: 'convert-youtube-video-to-blog-post-summary', title: 'Convert YouTube Video to Blog Post: Step-by-Step', description: 'Step-by-step guide to converting any YouTube video into a blog post using AI summarization. Repurpose your video content for SEO and reach new audiences.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-newsletter-content', title: 'YouTube Summarizer for Newsletter Content Creation', description: 'Use AI YouTube summarization to create newsletter content faster. Extract insights from videos and turn them into engaging newsletter sections in minutes.', date: '2026-03-16' },
    { slug: 'chrome-extension-to-summarize-youtube-videos', title: 'Chrome Extension to Summarize YouTube Videos', description: 'Find the best Chrome extensions to summarize YouTube videos directly in your browser. Compare options and get AI summaries without leaving YouTube.', date: '2026-03-16' },
    { slug: 'ios-app-to-summarize-youtube-videos', title: 'iOS App to Summarize YouTube Videos', description: 'Find the best iOS app to summarize YouTube videos on your iPhone or iPad. Get AI-powered video summaries on mobile and save time on the go.', date: '2026-03-16' },
    { slug: 'android-app-to-summarize-youtube-videos', title: 'Android App to Summarize YouTube Videos', description: 'Best Android apps and tools to summarize YouTube videos on your phone. Get AI-powered summaries on Android without watching full videos.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-mobile-app', title: 'YouTube Summarizer Mobile App: Best Options for 2026', description: 'Compare the best YouTube summarizer mobile apps in 2026. Find the right tool to get AI video summaries on your phone for iOS and Android.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-with-bullet-points', title: 'YouTube Summarizer with Bullet Points: Scan Content Fast', description: 'Get AI YouTube summaries formatted as bullet points for fast scanning. Extract key insights from any video in a structured, easy-to-read format.', date: '2026-03-16' },
    { slug: 'online-youtube-video-summary-generator', title: 'Online YouTube Video Summary Generator', description: 'Use an online YouTube video summary generator to instantly get AI-powered summaries of any YouTube video. No download or installation required.', date: '2026-03-16' },
    { slug: 'free-youtube-video-summary-generator', title: 'Free YouTube Video Summary Generator', description: 'Get free AI-generated summaries of YouTube videos instantly. No sign-up required to try. The best free YouTube video summary generator online.', date: '2026-03-16' },
    { slug: 'free-youtube-transcript-summary-tool', title: 'Free YouTube Transcript Summary Tool', description: 'Use a free YouTube transcript summary tool to extract key points from any video. AI-powered transcript summarization with no sign-up required.', date: '2026-03-16' },
    { slug: 'youtube-transcript-summarizer-for-research', title: 'YouTube Transcript Summarizer for Research', description: 'Use AI to summarize YouTube video transcripts for academic and professional research. Extract citations, key claims, and supporting evidence efficiently.', date: '2026-03-16' },
    { slug: 'summarize-youtube-tutorials-for-study', title: 'Summarize YouTube Tutorials for Study', description: 'Learn how to summarize YouTube tutorials for effective studying. Extract key steps, concepts, and actionable lessons from tutorial videos with AI.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-with-multi-language-support', title: 'YouTube Summarizer with Multi-Language Support', description: 'Summarize YouTube videos in multiple languages with AI. Get summaries of foreign-language content in English or your preferred language.', date: '2026-03-16' },
    { slug: 'translate-and-summarize-youtube-videos', title: 'Translate and Summarize YouTube Videos with AI', description: 'Translate and summarize YouTube videos in any language using AI. Understand foreign-language content and extract key insights without being fluent.', date: '2026-03-16' },
    { slug: 'summarize-youtube-videos-in-chinese-language', title: 'Summarize YouTube Videos in Chinese', description: 'Summarize Chinese YouTube videos with AI. Get English summaries of Mandarin and Cantonese content, or summarize any video in Chinese.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-spanish-videos', title: 'YouTube Summarizer for Spanish Videos', description: 'Summarize Spanish YouTube videos with AI. Get English summaries of Spanish content or summarize any video in Spanish.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-french-videos', title: 'YouTube Summarizer for French Videos', description: 'Summarize French YouTube videos with AI. Access French-language educational, news, and business content through instant AI-powered summaries.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-with-qa', title: 'YouTube Summarizer with Q&A: Ask Questions About Any Video', description: 'Use AI to summarize YouTube videos and ask questions about the content. Get instant answers from any YouTube video with AI-powered Q&A.', date: '2026-03-16' },
    { slug: 'top-5-free-ai-tools', title: 'Top 5 Free AI Tools for YouTube Video Summarization', description: 'Compare the top 5 free AI tools for summarizing YouTube videos. Find the best option for your needs and start saving time on video content today.', date: '2026-03-16' },
    { slug: 'ai-tool-to-summarize-academic-youtube-videos', title: 'AI Tool to Summarize Academic YouTube Videos', description: 'Use AI to summarize academic YouTube videos from universities and research institutions. Extract key findings, methodologies, and insights from scholarly video content.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-script-writing', title: 'YouTube Summarizer for Script Writing', description: 'Use AI YouTube summarization to research and write better video scripts. Extract key points, structures, and hooks from successful YouTube videos.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-with-chapter-breakdown', title: 'YouTube Summarizer with Chapter Breakdown', description: 'Get AI summaries of YouTube videos with chapter-by-chapter breakdowns. Navigate long videos efficiently with structured chapter summaries.', date: '2026-03-16' },
    { slug: 'summarize-government-hearings-on-youtube', title: 'Summarize Government Hearings on YouTube', description: 'Use AI to summarize government hearings, congressional testimonies, and public meetings published on YouTube. Extract key decisions and insights efficiently.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-meeting-recordings', title: 'YouTube Summarizer for Meeting Recordings', description: 'Summarize recorded meetings uploaded to YouTube. Extract action items, decisions, and key discussion points from long meeting recordings with AI.', date: '2026-03-16' },
    { slug: 'summarize-youtube-interviews-for-market-research', title: 'Summarize YouTube Interviews for Market Research', description: 'Use AI to summarize YouTube interviews for market research. Extract customer insights, expert opinions, and market trends from interview recordings efficiently.', date: '2026-03-16' },
    { slug: 'youtube-video-summarizer-for-training-videos', title: 'YouTube Video Summarizer for Training Videos', description: 'Summarize YouTube training videos with AI. Extract key learning points, procedures, and best practices from professional training content efficiently.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-investor-videos', title: 'YouTube Summarizer for Investor Videos', description: 'Use AI to summarize investor videos, earnings calls, and financial analysis on YouTube. Extract key investment insights and market intelligence efficiently.', date: '2026-03-16' },
    { slug: 'summarize-corporate-presentations-on-youtube', title: 'Summarize Corporate Presentations on YouTube', description: 'Use AI to summarize corporate presentations, investor days, and company announcements on YouTube. Extract key business insights efficiently.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-legal-depositions', title: 'YouTube Summarizer for Legal and Deposition Videos', description: 'Use AI to summarize legal proceedings, deposition recordings, and court hearing videos on YouTube. Extract key legal arguments and testimony efficiently.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-for-academic-research-papers', title: 'YouTube Summarizer for Academic Research Paper Presentations', description: 'Summarize YouTube videos of academic research paper presentations. Extract hypotheses, methodologies, findings, and implications from scholarly video content.', date: '2026-03-16' },
    { slug: 'students-youtube-summaries', title: 'How Students Use YouTube Summaries to Get Better Grades', description: 'Discover proven strategies students use with AI YouTube summaries to study more effectively, retain more information, and achieve better academic results.', date: '2026-03-16' },
    { slug: 'online-free-youtube-summarizer-with-translation', title: 'Online Free YouTube Summarizer with Translation', description: 'Use a free online YouTube summarizer with translation to understand videos in any language. Get AI summaries and translations of YouTube content instantly.', date: '2026-03-16' },
    { slug: 'youtube-summarizer-with-mind-map-output', title: 'YouTube Summarizer with Mind Map Output', description: 'Get YouTube video summaries visualized as mind maps. Understand complex video content through structured visual diagrams and AI-powered summarization.', date: '2026-03-16' },
    { slug: 'fitness-video-summaries-get-the-workout-plan-faster', title: 'Fitness Video Summaries: Get the Workout Plan Faster', description: 'Learn how to quickly summarize fitness training videos using AI-powered tools. Save time and extract key insights from YouTube content.', date: '2026-03-15' },
    { slug: 'productivity-hacks-summarize-youtube-videos-fast', title: 'Productivity Hacks: Summarize YouTube Videos Fast', description: 'Learn how to quickly summarize productivity tips videos using AI-powered tools. Save time and extract key insights from YouTube content.', date: '2026-03-15' },
    { slug: 'digital-marketing-video-summary-tips', title: 'Digital Marketing Video Summary Tips', description: 'Learn how to quickly summarize digital marketing videos using AI-powered tools. Save time and extract key insights from YouTube content.', date: '2026-03-15' },
    { slug: 'crypto-explained-video-summaries-made-simple', title: 'Crypto Explained: Video Summaries Made Simple', description: 'Learn how to quickly summarize cryptocurrency videos using AI-powered tools. Save time and extract key insights from YouTube content.', date: '2026-03-12' },
    { slug: 'data-science-video-summary-guide', title: 'Data Science Video Summary Guide', description: 'Learn how to quickly summarize data science videos using AI-powered tools. Save time and extract key insights from YouTube content.', date: '2026-03-12' },
    { slug: 'web-development-video-summaries-skip-to-what-matters', title: 'Web Development Video Summaries: Skip to What Matters', description: 'Learn how to quickly summarize web development videos using AI-powered tools. Save time and extract key insights from YouTube content.', date: '2026-03-12' },
    { slug: 'python-tutorial-video-summary-learn-faster', title: 'Python Tutorial Video Summary: Learn Faster', description: 'Learn how to quickly summarize python programming videos using AI-powered tools. Save time and extract key insights from YouTube content.', date: '2026-03-12' },
    { slug: 'how-to-summarize-machine-learning-videos-with-ai', title: 'How to Summarize Machine Learning Videos with AI', description: 'Learn how to quickly summarize machine learning videos using AI-powered tools. Save time and extract key insights from YouTube content.', date: '2026-03-12' },
    { slug: 'how-to-summarize-youtube-videos', title: 'How to Summarize YouTube Videos with AI', description: 'Save time and extract key insights from any YouTube video in seconds.', date: '2026-03-12' },
  ]

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ff0055' }}>
          YT Summarizer Blog
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#666' }}>
          Tips, guides, and insights on YouTube video summarization
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
