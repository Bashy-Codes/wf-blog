import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#818CF8]">
            World Friends Blog
          </Link>
          <nav className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#818CF8]">
              Home
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-[#818CF8]">
              Posts
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-[#818CF8]">
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}