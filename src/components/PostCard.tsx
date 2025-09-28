import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from './ui/Card'
import Badge from './ui/Badge'
import { Post } from '@/lib/supabase'
import { Calendar, Clock } from 'lucide-react'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
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

  if (featured) {
    return (
      <Card hover className="overflow-hidden">
        <div className="relative">
          {post.featured_image_url && (
            <div className="relative h-64 sm:h-80">
              <Image
                src={post.featured_image_url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          {post.featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="featured">Featured</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 line-clamp-2">
            <Link href={`/posts/${post.id}`} className="hover:text-indigo-600 transition-colors">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.created_at)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {estimateReadTime(post.content)} min read
              </div>
            </div>
          </div>
          <Link 
            href={`/posts/${post.id}`}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card hover className="overflow-hidden h-full">
      {post.featured_image_url && (
        <div className="relative h-48">
          <Image
            src={post.featured_image_url}
            alt={post.title}
            fill
            className="object-cover"
          />
          {post.featured && (
            <div className="absolute top-3 left-3">
              <Badge variant="featured">Featured</Badge>
            </div>
          )}
        </div>
      )}
      <CardContent className="p-4 flex flex-col h-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          <Link href={`/posts/${post.id}`} className="hover:text-indigo-600 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {formatDate(post.created_at)}
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {estimateReadTime(post.content)} min
          </div>
        </div>
      </CardContent>
    </Card>
  )
}