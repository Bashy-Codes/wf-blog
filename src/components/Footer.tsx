import Link from 'next/link'
import Image from 'next/image'
import Container from './ui/Container'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="World Friends Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                World Friends
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connecting cultures through stories and experiences. Join our global community of world friends.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Home
              </Link>
              <Link href="/posts" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                All Posts
              </Link>
              <Link href="/admin" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
                Admin
              </Link>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-gray-600 hover:text-indigo-600 transition-colors text-sm">
              Privacy Policy
            </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm flex items-center">
            © 2025 World Friends Blog. Made with 
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            for global connections.
          </div>
          <div className="text-gray-500 text-xs mt-2 md:mt-0">
            Optimized for search engines and AI agents
          </div>
        </div>
      </Container>
    </footer>
  )
}