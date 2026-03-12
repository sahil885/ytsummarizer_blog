// Google Search Console verification placeholder
// After you verify with Google Search Console, add the verification meta tag here

export function GoogleSiteVerification() {
  // Replace with your actual verification code from Google Search Console
  const verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

  if (!verificationCode) {
    return null
  }

  return <meta name="google-site-verification" content={verificationCode} />
}
