#!/usr/bin/env node

/**
 * Batch generate SEO blog posts from topics.json
 *
 * Usage:
 *   node scripts/batch-generate.js [count]
 *
 * Examples:
 *   node scripts/batch-generate.js      # Generate all topics
 *   node scripts/batch-generate.js 5    # Generate first 5 topics
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const count = parseInt(process.argv[2]) || Infinity;
const topicsPath = path.join(__dirname, 'topics.json');
const topics = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const topicsToGenerate = topics.slice(0, count);

console.log(`Generating ${topicsToGenerate.length} blog posts...\n`);

topicsToGenerate.forEach((item, index) => {
  console.log(`[${index + 1}/${topicsToGenerate.length}] Generating: ${item.title}`);

  try {
    execSync(
      `node scripts/generate-post.js "${item.topic}" "${item.title}"`,
      { stdio: 'inherit', cwd: path.join(__dirname, '..') }
    );
  } catch (error) {
    console.error(`Failed to generate post for "${item.title}":`, error.message);
  }

  console.log('');
});

console.log('✓ Batch generation complete!');
console.log('\nNext steps:');
console.log('  1. Review the generated posts');
console.log('  2. Run `npm run build` to build the site');
console.log('  3. Run `vercel --prod` to deploy');
