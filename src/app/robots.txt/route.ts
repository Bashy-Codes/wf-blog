export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app'
  
  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}