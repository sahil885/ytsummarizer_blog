#!/usr/bin/env node

/**
 * Generate SEO-optimized blog posts for YT Summarizer
 *
 * Usage:
 *   node scripts/generate-post.js "machine learning" "Machine Learning Video Summary Guide"
 */

const fs = require('fs');
const path = require('path');

const topic = process.argv[2];
const title = process.argv[3];

if (!topic || !title) {
  console.error('Usage: node generate-post.js "<topic>" "<title>"');
  console.error('Example: node generate-post.js "machine learning" "Machine Learning Video Summary Guide"');
  process.exit(1);
}

// Generate slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const date = new Date().toISOString().split('T')[0];

// Generate SEO-optimized content
const content = generateContent(topic, title);

// Read the current blog post file
const blogPostPath = path.join(__dirname, '../app/blog/[slug]/page.tsx');
let blogPostContent = fs.readFileSync(blogPostPath, 'utf8');

// Extract the posts object
const postsMatch = blogPostContent.match(/const posts: Record<string, { title: string; content: string; date: string; metaDescription: string }> = ({[\s\S]*?})\n\n/);

if (!postsMatch) {
  console.error('Could not find posts object in blog post file');
  process.exit(1);
}

// Parse the existing posts
const postsCode = postsMatch[1];

// Add new post to the posts object
const newPost = `  '${slug}': {
    title: '${title}',
    metaDescription: '${content.metaDescription}',
    date: '${date}',
    content: \`${content.html}\`
  },`;

// Insert the new post at the beginning of the posts object
const updatedPostsCode = postsCode.replace('{', '{\n' + newPost);
blogPostContent = blogPostContent.replace(postsCode, updatedPostsCode);

// Write the updated file
fs.writeFileSync(blogPostPath, blogPostContent);

// Also update the homepage to include the new post
const homePagePath = path.join(__dirname, '../app/page.tsx');
let homePageContent = fs.readFileSync(homePagePath, 'utf8');

const postsArrayMatch = homePageContent.match(/const posts = \[([\s\S]*?)\]/);

if (postsArrayMatch) {
  const newPostEntry = `    {
      slug: '${slug}',
      title: '${title}',
      description: '${content.metaDescription}',
      date: '${date}'
    },`;

  const updatedPostsArray = postsArrayMatch[1].trim()
    ? `\n${newPostEntry}\n${postsArrayMatch[1]}`
    : `\n${newPostEntry}\n  `;

  homePageContent = homePageContent.replace(
    /const posts = \[([\s\S]*?)\]/,
    `const posts = [${updatedPostsArray}]`
  );

  fs.writeFileSync(homePagePath, homePageContent);
}

console.log(`✓ Generated post: ${title}`);
console.log(`  Slug: ${slug}`);
console.log(`  Date: ${date}`);
console.log(`  URL: /blog/${slug}`);

function generateContent(topic, title) {
  const metaDescription = `Learn how to quickly summarize ${topic} videos using AI-powered tools. Save time and extract key insights from YouTube content.`;

  const html = `
      <p>Want to save time watching ${topic} videos on YouTube? AI-powered summarization can help you extract key insights in seconds instead of watching hours of content.</p>

      <h2>Why Summarize ${topic} Videos?</h2>
      <p>${topic.charAt(0).toUpperCase() + topic.slice(1)} content on YouTube is valuable but often lengthy. Whether you're learning, researching, or staying updated, video summarization helps you:</p>
      <ul>
        <li>Quickly evaluate if a video has the information you need</li>
        <li>Extract actionable insights without watching the full video</li>
        <li>Save hours of watch time every week</li>
        <li>Create searchable notes from video content</li>
      </ul>

      <h2>How to Summarize ${topic} Videos</h2>
      <p>Modern AI tools can analyze video transcripts and generate comprehensive summaries. Here's what makes a good ${topic} video summary:</p>
      <ul>
        <li><strong>Main concepts:</strong> Key ${topic} topics covered in the video</li>
        <li><strong>Important details:</strong> Specific examples, data points, or insights</li>
        <li><strong>Actionable takeaways:</strong> What you can apply from the content</li>
        <li><strong>Timestamps:</strong> Links to important moments in the video</li>
      </ul>

      <h2>Best Practices</h2>
      <p>When summarizing ${topic} videos, focus on:</p>
      <ul>
        <li>Understanding the core concepts before diving into details</li>
        <li>Identifying practical applications of the information</li>
        <li>Noting any resources or tools mentioned</li>
        <li>Capturing specific examples that illustrate key points</li>
      </ul>

      <h2>Get Started with AI Summarization</h2>
      <p>Ready to save time on ${topic} videos? <a href="https://ytsummarizer.app" style="color: #ff0055; font-weight: 600;">Try YT Summarizer</a> to instantly summarize any YouTube video with AI.</p>

      <p>Simply paste a ${topic} video URL and get a comprehensive summary in seconds. Perfect for students, professionals, and anyone learning about ${topic}.</p>
    `;

  return {
    metaDescription,
    html
  };
}
