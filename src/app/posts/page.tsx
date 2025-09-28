import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Posts - World Friends Blog',
  description: 'Browse all stories about international friendships and cultural exchange.',
}

const POSTS_PER_PAGE = 12

async function getPosts(page: number = 1) {
  const from = (page - 1) * POSTS_PER_PAGE
  const to = from + POSTS_PER_PAGE - 1

  const { data, count } = await supabase
    .from('posts')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to)
  
  return { posts: data || [], totalCount: count || 0 }
}

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams
  const currentPage = parseInt(page || '1')
  const { posts, totalCount } = await getPosts(currentPage)
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">All Stories</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.featured_image_url && (
              <img 
                src={post.featured_image_url} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href={`/posts/${post.id}`} className="hover:text-[#818CF8]">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
              <div className="text-xs text-gray-500">
                {new Date(post.created_at).toLocaleDateString()}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          {currentPage > 1 && (
            <Link 
              href={`/posts?page=${currentPage - 1}`}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Previous
            </Link>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/posts?page=${page}`}
              className={`px-4 py-2 rounded ${
                page === currentPage
                  ? 'bg-[#818CF8] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page}
            </Link>
          ))}
          
          {currentPage < totalPages && (
            <Link 
              href={`/posts?page=${currentPage + 1}`}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  )
}