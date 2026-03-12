#!/bin/bash

# Automated blog post generation and deployment script
# This script generates new posts, builds the site, and deploys to Vercel

set -e

cd /app/agents-data/nova-07776abe/repos/ytsummarizer-blog

# Generate 2-3 new posts from the topics queue
echo "Generating new blog posts..."
node scripts/batch-generate.js 3

# Build the site
echo "Building site..."
npm run build

# Commit changes
echo "Committing changes..."
git add .
git commit -m "Automated: Add new SEO blog posts $(date +%Y-%m-%d)" || echo "No changes to commit"

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --token "$VERCEL_TOKEN" --prod --scope sahilbora885-2594s-projects --yes

echo "✓ Deployment complete!"
