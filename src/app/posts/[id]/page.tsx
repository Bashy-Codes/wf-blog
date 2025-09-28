import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'

async function getPost(id: string) {
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()
  
  return data
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const post = await getPost(id)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | World Friends Blog`,
    description: post.excerpt,
    keywords: [
      'international friendship',
      'cultural exchange',
      'world friends',
      'global community',
      'cross-cultural communication'
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app'}/posts/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app'}/posts/${post.id}`,
      images: post.featured_image_url ? [post.featured_image_url] : [],
      publishedTime: post.created_at,
      modifiedTime: post.updated_at,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.featured_image_url ? [post.featured_image_url] : [],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await getPost(id)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
  }
  return (
    <div className="py-8">
      <Container size="md">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/posts">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Stories
            </Button>
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <time dateTime={post.created_at}>
                  {formatDate(post.created_at)}
                </time>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {estimateReadTime(post.content)} min read
              </div>
              <button className="flex items-center hover:text-indigo-600 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
            
            {post.featured_image_url && (
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.featured_image_url}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>
          <div 
            className="prose prose-lg prose-indigo max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link href="/posts">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  More Stories
                </Button>
              </Link>
              <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share this story
              </button>
            </div>
          </footer>
        </article>
      </Container>
    </div>
  )
}