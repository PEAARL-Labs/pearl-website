'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['hero', 'problem', 'solution', 'how-it-works', 'case-study', 'team', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80 // Account for fixed navbar
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">PEARL Labs</span>
                <span className="text-xs text-gray-400 -mt-1">Physics • AI • Verification</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-400 focus-ring ${
                    activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
            
            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <Button 
                className="hidden sm:flex btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Request Demo
              </Button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass hover:bg-blue-600/20 transition-all duration-300 focus-ring"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-3 rotate-45' : 'top-1'
                  }`} />
                  <span className={`absolute left-0 top-3 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div className={`absolute top-20 left-4 right-4 glass-dark rounded-2xl p-6 transform transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
        }`}>
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-blue-600/20 hover:text-blue-400 focus-ring ${
                  activeSection === item.id ? 'text-blue-400 bg-blue-600/10' : 'text-gray-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-700/50">
              <Button 
                className="w-full btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className={`fixed top-20 right-6 z-40 transition-all duration-500 ${
        isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}>
        <div className="flex flex-col space-y-2">
          <div className="glass rounded-lg px-3 py-1 text-xs text-center">
            <div className="text-green-400 font-semibold">TS/SCI</div>
            <div className="text-gray-400">Cleared</div>
          </div>
          <div className="glass rounded-lg px-3 py-1 text-xs text-center">
            <div className="text-blue-400 font-semibold">Purdue</div>
            <div className="text-gray-400">Research</div>
          </div>
          <div className="glass rounded-lg px-3 py-1 text-xs text-center">
            <div className="text-purple-400 font-semibold">NSF</div>
            <div className="text-gray-400">SBIR</div>
          </div>
        </div>
      </div>
    </>
  )
}