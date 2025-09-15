'use client'

import { useState, useEffect } from 'react'
import Button from '../ui/Button'

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('')
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const phrases = [
    'Autonomous Systems You Can Trust',
    'Mathematical Verification for Aerospace AI',
    'Provable Safety for Space Missions'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[currentPhrase]
      
      if (!isDeleting) {
        setTypewriterText(current.substring(0, typewriterText.length + 1))
        
        if (typewriterText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setTypewriterText(current.substring(0, typewriterText.length - 1))
        
        if (typewriterText === '') {
          setIsDeleting(false)
          setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typewriterText, isDeleting, currentPhrase, phrases])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: yPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 hero-bg">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 102, 204, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 102, 204, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'float 20s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce-subtle opacity-60" style={{animationDelay: '0s'}} />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce-subtle opacity-40" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce-subtle opacity-50" style={{animationDelay: '4s'}} />
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-bounce-subtle opacity-30" style={{animationDelay: '6s'}} />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust Badges - Top */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="glass rounded-full px-4 py-2 text-sm fade-in">
                <span className="text-green-400 font-semibold">🛡️ TS/SCI Cleared</span>
              </div>
              <div className="glass rounded-full px-4 py-2 text-sm fade-in-1">
                <span className="text-blue-400 font-semibold">🎓 Purdue Research</span>
              </div>
              <div className="glass rounded-full px-4 py-2 text-sm fade-in-2">
                <span className="text-purple-400 font-semibold">💰 NSF SBIR</span>
              </div>
            </div>
          </div>
          
          {/* Company Branding */}
          <div className="mb-8 fade-in-1">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-2xl">P</span>
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  PEARL Labs
                </h1>
                <p className="text-lg text-gray-400 -mt-2">
                  Physics • AI • Verification
                </p>
              </div>
            </div>
          </div>
          
          {/* Typewriter Tagline */}
          <div className="mb-8 fade-in-2" style={{minHeight: '120px'}}>
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-400 mb-4">
              {typewriterText}
              <span className="animate-ping text-cyan-400">|</span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Physics Evaluation for AI Reliability & Logic
            </p>
          </div>
          
          {/* Value Proposition */}
          <div className="mb-12 fade-in-3">
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed">
              Transforming AI validation from <span className="line-through text-red-400">years of manual testing</span> to 
              <span className="text-green-400 font-semibold"> automated mathematical verification</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-gray-400">Traditional: $10M, 3 years, 85% coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">PEARL: $1M, 18 months, 99% coverage</span>
              </div>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 fade-in-4">
            <div className="card-premium text-center hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-gray-300 text-sm">ROI vs Traditional</div>
            </div>
            <div className="card-premium text-center hover-lift" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300 text-sm">Time Reduction</div>
            </div>
            <div className="card-premium text-center hover-lift" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-gray-300 text-sm">Edge Cases Found</div>
            </div>
            <div className="card-premium text-center hover-lift" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">$2B+</div>
              <div className="text-gray-300 text-sm">Market Opportunity</div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 fade-in-4">
            <Button 
              size="lg" 
              className="btn-primary animate-pulse-glow px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              🚀 Request Demo
              <span className="ml-2 text-sm opacity-75">(See PEARL in Action)</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="px-8 py-4 text-lg"
              onClick={() => scrollToSection('case-study')}
            >
              📊 Mars 2020 Analysis
              <span className="ml-2 text-sm opacity-75">(8x Uncertainty Solved)</span>
            </Button>
          </div>
          
          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 fade-in-5">
            <div className="glass-dark rounded-xl p-6 text-center hover-glow">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Adversarial AI</h3>
              <p className="text-gray-400 text-sm">
                AI finds edge cases humans never consider
              </p>
            </div>
            
            <div className="glass-dark rounded-xl p-6 text-center hover-glow">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Physics-Informed</h3>
              <p className="text-gray-400 text-sm">
                Scenarios respect orbital mechanics & natural laws
              </p>
            </div>
            
            <div className="glass-dark rounded-xl p-6 text-center hover-glow">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">Mathematical Proofs</h3>
              <p className="text-gray-400 text-sm">
                Guarantees beyond statistical confidence
              </p>
            </div>
          </div>
          
          {/* Customer Logos Placeholder */}
          <div className="fade-in-6">
            <p className="text-sm text-gray-500 mb-4">Trusted by Leading Aerospace Organizations</p>
            <div className="flex justify-center items-center space-x-8 opacity-50">
              <div className="glass rounded-lg px-4 py-2 text-sm text-gray-400">NASA</div>
              <div className="glass rounded-lg px-4 py-2 text-sm text-gray-400">DoD</div>
              <div className="glass rounded-lg px-4 py-2 text-sm text-gray-400">Purdue</div>
              <div className="glass rounded-lg px-4 py-2 text-sm text-gray-400">NSF</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs mb-2 text-gray-500">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}