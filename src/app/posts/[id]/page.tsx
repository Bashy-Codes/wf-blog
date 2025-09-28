import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

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
    title: `${post.title} - World Friends Blog`,
    description: post.excerpt,
    openGraph: {
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

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="text-gray-600 mb-6">
          Published on {new Date(post.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
        {post.featured_image_url && (
          <img 
            src={post.featured_image_url} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        )}
      </header>

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}