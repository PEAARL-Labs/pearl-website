import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const baseClasses = 'bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6'
  const hoverClasses = hover ? 'hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-300' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}