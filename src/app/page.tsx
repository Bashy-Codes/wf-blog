import { supabase } from '@/lib/supabase'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import PostCard from '@/components/PostCard'
import Button from '@/components/ui/Button'
import { ArrowRight, Globe, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'World Friends Blog - Connect Cultures Through Stories | International Friendships & Cultural Exchange',
  description: 'Discover amazing stories about international friendships, cultural exchange, and language learning. Join our global community of world friends sharing experiences from around the globe.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app'}`,
  },
  openGraph: {
    title: 'World Friends Blog - Connect Cultures Through Stories',
    description: 'Discover amazing stories about international friendships, cultural exchange, and language learning from our global community.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app',
    images: ['/logo.png'],
  },
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
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Connect <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Cultures</span> Through Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover amazing stories about international friendships, cultural exchange, 
            and language learning from our global community of world friends.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-indigo-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Friendships</div>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{latestPosts.length}+</div>
              <div className="text-gray-600">Stories</div>
            </div>
          </div>
          
          <Link href="/posts">
            <Button size="lg" className="group">
              Explore Stories
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <Container>
          {featuredPost && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Story</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Dive into our most inspiring story of cultural connection and friendship
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <PostCard post={featuredPost} featured />
              </div>
            </div>
          )}

          {/* Latest Posts */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fresh perspectives and new friendships from around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestPosts.slice(0, 6).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/posts">
              <Button size="lg" variant="outline" className="group">
                View All Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}