interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'featured' | 'new'
  className?: string
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    featured: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white',
    new: 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}