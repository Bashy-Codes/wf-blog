import { supabase } from '@/lib/supabase'
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import PostCard from '@/components/PostCard'
import Button from '@/components/ui/Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Stories - World Friends Blog | International Friendship Stories',
  description: 'Browse all stories about international friendships, cultural exchange, and language learning from our global community.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://worldfriends-blog.vercel.app'}/posts`,
  },
}

const POSTS_PER_PAGE = 9

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
    <div className="py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete collection of international friendship stories and cultural exchanges
          </p>
        </div>
      
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No stories found. Check back soon for new content!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                {currentPage > 1 && (
                  <Link href={`/posts?page=${currentPage - 1}`}>
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>
                  </Link>
                )}
                
                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <Link key={pageNum} href={`/posts?page=${pageNum}`}>
                        <Button
                          variant={pageNum === currentPage ? 'primary' : 'ghost'}
                          size="sm"
                          className="w-10 h-10"
                        >
                          {pageNum}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
                
                {currentPage < totalPages && (
                  <Link href={`/posts?page=${currentPage + 1}`}>
                    <Button variant="outline" size="sm">
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  )
}