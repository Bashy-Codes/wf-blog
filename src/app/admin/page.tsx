'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function AdminPage() {
  const [user, setUser] = useState<any>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    setLoading(false)
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      alert(error.message)
    } else {
      checkUser()
    }
  }

  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h1>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={signIn}
            className="w-full bg-[#818CF8] text-white py-2 rounded-md hover:bg-[#6366F1]"
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <button
          onClick={signOut}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Sign Out
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/admin/create"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-transparent hover:border-[#818CF8]"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Create New Post</h2>
          <p className="text-gray-600">Write and publish a new blog post</p>
        </Link>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Generate Sitemap</h2>
          <p className="text-gray-600 mb-4">Update the sitemap after creating posts</p>
          <button
            onClick={() => window.open('/api/sitemap', '_blank')}
            className="bg-[#818CF8] text-white px-4 py-2 rounded-md hover:bg-[#6366F1]"
          >
            Generate Sitemap
          </button>
        </div>
      </div>
    </div>
  )
}