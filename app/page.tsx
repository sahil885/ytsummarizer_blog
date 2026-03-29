import Link from 'next/link'

export default function Home() {
  const posts = [
    {
      slug: 'photography-tutorial-summaries-learn-the-techniques',
      title: 'Photography Tutorial Summaries: Learn the Techniques',
      description: 'Learn how to quickly summarize photography tips videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-29'
    },

    {
      slug: 'personal-finance-videos-get-the-tl-dr',
      title: 'Personal Finance Videos: Get the TL;DR',
      description: 'Learn how to quickly summarize personal finance videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-29'
    },

    {
      slug: 'stock-market-video-summary-for-investors',
      title: 'Stock Market Video Summary for Investors',
      description: 'Learn how to quickly summarize stock market analysis videos using AI-powered tools. Save time and extract key insights from YouTube content.',
      date: '2026-03-29'
    },

    { slug: 'best-free-youtube-summarizers-no-subscription-2026', title: 'Best Free YouTube Summarizers With No Subscription (2026)', description: 'Compare the best free YouTube summarizers that don\'t require a subscription. Find tools with lifetime deals, no-login access, and genuine free tiers.', date: '2026-03-24' },
    { slug: 'eightify-vs-ytsummarizer-which-youtube-summarizer-is-worth-it', title: 'Eightify vs YT Summarizer: Which YouTube Summarizer Is Worth It?', description: 'Honest comparison of Eightify vs YT Summarizer. Compare pricing, free tiers, features, and value to find the right YouTube summarizer.', date: '2026-03-24' },
    { slug: 'how-to-summarize-youtube-watch-later-backlog', title: 'How to Summarize Your Entire YouTube Watch Later Backlog', description: 'Clear your YouTube Watch Later backlog without watching everything. Use AI summarization to triage hundreds of saved videos and reclaim your time.', date: '2026-03-24' },
    { slug: 'recipe-video-summary-cook-without-watching', title: 'Recipe Video Summary: Cook Without Watching', description: 'Get AI summaries of YouTube cooking videos. Extract ingredients, steps, and techniques from recipe videos without watching them start to finish.', date: '2026-03-18' },
    { slug: 'business-video-summaries-for-executives', title: 'Business Video Summaries for Executives', description: 'Executives use AI YouTube summarization to stay informed on industry trends, competitor moves, and strategic insights without spending hours watching video content.', date: '2026-03-18' },
    { slug: 'ai-video-summary-stay-updated-on-automation', title: 'AI and Automation Video Summaries: Stay Current Without the Scroll', description: 'Use AI to summarize YouTube videos about artificial intelligence and automation. Keep up with rapidly evolving AI developments without watching every video.', date: '2026-03-18' },

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
    { slug: 'gaming-guide-video-summaries', title: 'Gaming Guide Video Summaries: Level Up Faster', description: 'Summarize gaming guide and tutorial YouTube videos with AI. Get the key strategies, tips, and walkthroughs without watching hours of gaming content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-doctors-and-medical-professionals', title: 'YouTube Summarizer for Doctors and Medical Professionals', description: 'Medical professionals use AI YouTube summarization to stay current on clinical research, conferences, and medical education content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-lawyers', title: 'YouTube Summarizer for Lawyers and Legal Professionals', description: 'Lawyers use AI YouTube summarization to efficiently review legal education content, CLE recordings, and court hearing coverage.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-teachers', title: 'YouTube Summarizer for Teachers and Educators', description: 'Teachers use AI YouTube summarization to find the best educational videos, prepare lessons, and curate classroom content efficiently.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-journalists', title: 'YouTube Summarizer for Journalists and Researchers', description: 'Journalists use AI YouTube summarization for source research, interview prep, fact verification, and monitoring news coverage on deadline.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-entrepreneurs', title: 'YouTube Summarizer for Entrepreneurs and Startup Founders', description: 'Founders use AI YouTube summarization to learn faster, research competitors, and build knowledge without sacrificing execution time.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-marketers', title: 'YouTube Summarizer for Marketers', description: 'Marketers use AI YouTube summarization to research competitors, stay current on marketing trends, and extract campaign insights from industry video content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-researchers', title: 'YouTube Summarizer for Academic and Professional Researchers', description: 'Researchers use AI YouTube summarization to efficiently process conference presentations, expert interviews, and educational content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-hr-professionals', title: 'YouTube Summarizer for HR Professionals', description: 'HR professionals use AI YouTube summarization to stay current on employment law, HR trends, and talent management research.', date: '2026-03-18' },
    { slug: 'how-to-use-youtube-summaries-for-note-taking', title: 'How to Use YouTube Video Summaries for Note-Taking', description: 'Learn how to integrate AI YouTube summaries into your note-taking system and build a searchable knowledge base from video content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-vs-manual-notes', title: 'YouTube Summarizer vs. Taking Manual Notes: Which Is Better?', description: 'Compare AI YouTube summarization versus taking manual notes from videos. Discover when each approach works best and how to combine them.', date: '2026-03-18' },
    { slug: 'how-accurate-are-youtube-video-summaries', title: 'How Accurate Are AI YouTube Video Summaries?', description: 'Understand the accuracy and limitations of AI YouTube video summaries. Learn when to trust summaries, when to verify, and how to get the best results.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-language-learning', title: 'YouTube Summarizer for Language Learning', description: 'Language learners use AI YouTube summarization to verify comprehension, study vocabulary in context, and efficiently process foreign-language content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-remote-workers', title: 'YouTube Summarizer for Remote Workers', description: 'Remote workers use AI YouTube summarization to efficiently consume professional development content and stay current on industry trends.', date: '2026-03-18' },
    { slug: 'how-to-summarize-ted-talks', title: 'How to Summarize TED Talks with AI', description: 'Use AI to summarize TED and TEDx talks on YouTube. Extract key ideas, frameworks, and insights from TED talks in seconds.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-product-managers', title: 'YouTube Summarizer for Product Managers', description: 'Product managers use AI YouTube summarization to research user problems, analyze competitors, and stay current on PM methodologies.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-data-analysts', title: 'YouTube Summarizer for Data Analysts', description: 'Data analysts use AI YouTube summarization to learn new tools, follow methodology discussions, and stay current on analytics developments.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-fitness-coaches', title: 'YouTube Summarizer for Fitness Coaches and Personal Trainers', description: 'Fitness coaches use AI YouTube summarization to stay current on exercise science, research new training methods, and find content to recommend to clients.', date: '2026-03-18' },
    { slug: 'what-is-a-youtube-summarizer', title: 'What Is a YouTube Summarizer? Complete Guide', description: 'Learn what a YouTube summarizer is, how AI video summarization works, what it can and cannot do, and how to choose the right tool.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-podcasters', title: 'YouTube Summarizer for Podcasters: Research Faster', description: 'Podcasters use AI YouTube summarization to research topics, prep guest interviews, analyze competitor shows, and find content angles faster.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-sales-teams', title: 'YouTube Summarizer for Sales Teams', description: 'Sales teams use AI YouTube summarization to research prospects, understand competitor positioning, and prep for calls with better intelligence.', date: '2026-03-18' },
    { slug: 'youtube-summary-for-book-reviews', title: 'Summarize YouTube Book Review Videos', description: 'Use AI to summarize YouTube book review and book summary videos. Get the key arguments and insights from books explained on YouTube.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-nonprofits', title: 'YouTube Summarizer for Nonprofits and NGOs', description: 'Nonprofits use AI YouTube summarization to research grant opportunities, stay current on policy developments, and process conference content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-real-estate-professionals', title: 'YouTube Summarizer for Real Estate Professionals', description: 'Real estate agents and investors use AI YouTube summarization to research market trends, stay current on regulations, and consume property investment content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-engineers', title: 'YouTube Summarizer for Software Engineers', description: 'Software engineers use AI YouTube summarization to learn new frameworks, follow tech talks, and research architecture decisions efficiently.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-designers', title: 'YouTube Summarizer for UX and Product Designers', description: 'Designers use AI YouTube summarization to learn new design tools, follow design systems thinking, and find creative inspiration efficiently.', date: '2026-03-18' },
    { slug: 'youtube-video-too-long-how-to-get-key-points', title: 'YouTube Video Too Long? How to Get Just the Key Points', description: 'When a YouTube video is too long to watch, AI summarization extracts just the key points you need in seconds.', date: '2026-03-18' },
    { slug: 'summarize-youtube-without-watching', title: 'How to Summarize a YouTube Video Without Watching It', description: 'Learn how to get the key information from any YouTube video without watching it using AI summarization tools.', date: '2026-03-18' },
    { slug: 'save-time-on-youtube-with-ai', title: 'Save Time on YouTube with AI: The Complete Guide', description: 'A complete guide to saving time on YouTube using AI tools. Learn how AI summarization can reclaim hours every week.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-youtube-shorts', title: 'Can You Summarize YouTube Shorts? What You Need to Know', description: 'Learn whether AI YouTube summarizers work on YouTube Shorts and what summarization can and cannot do for short-form vertical video content.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-api', title: 'YouTube Summarizer API: Build Video Summarization Into Your App', description: 'Explore YouTube summarizer APIs for developers. Learn how to integrate AI video summarization into your application or automation.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-privacy-and-security', title: 'YouTube Summarizer Privacy and Security: What to Know', description: 'Understand the privacy and security implications of using AI YouTube summarizers and how to choose a trustworthy service.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-high-school-students', title: 'YouTube Summarizer for High School Students', description: 'High school students use AI YouTube summarization to study efficiently, research essays, and prepare for exams.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-phd-students', title: 'YouTube Summarizer for PhD Students and Graduate Researchers', description: 'PhD students use AI YouTube summarization to efficiently process conference presentations, expert talks, and research seminar recordings.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-university-students', title: 'YouTube Summarizer for University Students', description: 'University students use AI YouTube summarization to study more efficiently, process lecture recordings, and research assignments.', date: '2026-03-18' },
    { slug: 'youtube-summarizer-for-news-consumption', title: 'YouTube Summarizer for News: Stay Informed Without the Doom Scroll', description: 'Use AI YouTube summarization to stay informed on current events without the anxiety of extended news watching.', date: '2026-03-18' },
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
