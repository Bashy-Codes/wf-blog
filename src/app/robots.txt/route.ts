export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app'
  
  const robots = `User-agent: *
Allow: /
Allow: /posts
Allow: /privacy
Disallow: /admin
Disallow: /api

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Additional sitemaps for better indexing
Sitemap: ${baseUrl}/api/sitemap`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}