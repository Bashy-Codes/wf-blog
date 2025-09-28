import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
            © 2025 World Friends Blog. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-[#818CF8]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}