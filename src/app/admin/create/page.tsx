'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/RichTextEditor'

export default function CreatePostPage() {
  const [user, setUser] = useState<any>(null)
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [featuredImageUrl, setFeaturedImageUrl] = useState('')
  const [featured, setFeatured] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/admin')
    } else {
      setUser(user)
    }
  }

  async function createPost() {
    if (!title || !excerpt || !content) {
      alert('Please fill in all required fields')
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          excerpt,
          content,
          featured_image_url: featuredImageUrl || null,
          featured,
        }
      ])

    if (error) {
      alert(error.message)
    } else {
      alert('Post created successfully!')
      router.push('/admin')
    }

    setLoading(false)
  }

  if (!user) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter post title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt *
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Brief description of the post"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image URL
          </label>
          <input
            type="url"
            value={featuredImageUrl}
            onChange={(e) => setFeaturedImageUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="featured"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="featured" className="text-sm font-medium text-gray-700">
            Featured Post
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <RichTextEditor
            content={content}
            onChange={setContent}
          />
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            onClick={createPost}
            disabled={loading}
            className="bg-[#818CF8] text-white px-6 py-2 rounded-md hover:bg-[#6366F1] disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>
          <button
            onClick={() => router.push('/admin')}
            className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}