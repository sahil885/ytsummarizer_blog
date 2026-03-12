# Google Search Console Setup Guide

Follow these steps to set up Google Search Console tracking for your YT Summarizer blog.

## Step 1: Add Property to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Choose **URL prefix** and enter: `https://ytsummarizer-blog.vercel.app`
4. Click **Continue**

## Step 2: Verify Ownership

Google will provide a verification HTML tag that looks like:
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

### Add the verification code:

1. Copy the verification code (just the alphanumeric string, not the full meta tag)
2. In Vercel dashboard, go to your `ytsummarizer-blog` project
3. Go to **Settings → Environment Variables**
4. Add a new variable:
   - **Name:** `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - **Value:** (paste your verification code)
   - **Environment:** Production, Preview, Development
5. Save and redeploy the site

### Or manually add it:

Edit `app/google-site-verification.tsx` and replace:
```typescript
const verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
```

with:
```typescript
const verificationCode = "YOUR_VERIFICATION_CODE_HERE"
```

Then commit and deploy.

## Step 3: Submit Sitemap

1. After verification is complete, go to **Sitemaps** in Google Search Console
2. Enter: `sitemap.xml`
3. Click **Submit**

Google will now start crawling your blog and you'll see:
- Search queries that led to your blog
- Click-through rates
- Average position in search results
- Pages indexed

## Step 4: Monitor Performance

Check back in 3-7 days to see:
- Which keywords are driving traffic
- Which posts are ranking
- Click-through rate and impressions
- Average search position

Use this data to:
- Double down on topics that rank well
- Optimize underperforming posts
- Identify new keyword opportunities
- Track organic growth over time

---

**Current Status:**
- ✅ Sitemap created at `/sitemap.xml`
- ✅ Robots.txt configured
- ✅ SEO metadata added
- ⏳ Pending: Google Search Console verification

**Next Action:** Complete Step 1-3 above to start tracking.
