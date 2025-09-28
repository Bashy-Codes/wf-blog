import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'World Friends Blog - Connect Cultures Through Stories',
  description: 'Discover amazing stories about international friendships, cultural exchange, and language learning.',
}

async function getFeaturedPost() {
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()
  
  return data
}

async function getLatestPosts() {
  const { data } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(6)
  
  return data || []
}

export default async function HomePage() {
  const [featuredPost, latestPosts] = await Promise.all([
    getFeaturedPost(),
    getLatestPosts()
  ])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Connect Cultures Through Stories
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover amazing stories about international friendships, cultural exchange, 
          and language learning from our global community.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Story</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {featuredPost.featured_image_url && (
              <img 
                src={featuredPost.featured_image_url} 
                alt={featuredPost.title}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href={`/posts/${featuredPost.id}`} className="hover:text-[#818CF8]">
                  {featuredPost.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
              <Link 
                href={`/posts/${featuredPost.id}`}
                className="inline-block bg-[#818CF8] text-white px-6 py-2 rounded-lg hover:bg-[#6366F1]"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Stories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {post.featured_image_url && (
                <img 
                  src={post.featured_image_url} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/posts/${post.id}`} className="hover:text-[#818CF8]">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                <div className="text-xs text-gray-500">
                  {new Date(post.created_at).toLocaleDateString()}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/posts"
            className="inline-block bg-[#818CF8] text-white px-8 py-3 rounded-lg hover:bg-[#6366F1]"
          >
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  )
}