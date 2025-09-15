'use client'

import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import HowItWorks from '@/components/sections/HowItWorks'
import CaseStudy from '@/components/sections/CaseStudy'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">
              PEARL Labs
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#problem" className="text-gray-300 hover:text-blue-400 transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-gray-300 hover:text-blue-400 transition-colors">
                Solution
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
                How It Works
              </a>
              <a href="#case-study" className="text-gray-300 hover:text-blue-400 transition-colors">
                Case Study
              </a>
              <a href="#team" className="text-gray-300 hover:text-blue-400 transition-colors">
                Team
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-gray-300 hover:text-blue-400"
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu')
                  mobileMenu?.classList.toggle('hidden')
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#problem" className="text-gray-300 hover:text-blue-400 transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-gray-300 hover:text-blue-400 transition-colors">
                Solution
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">
                How It Works
              </a>
              <a href="#case-study" className="text-gray-300 hover:text-blue-400 transition-colors">
                Case Study
              </a>
              <a href="#team" className="text-gray-300 hover:text-blue-400 transition-colors">
                Team
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content sections */}
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <CaseStudy />
      <Team />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-gray-700/50 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company info */}
              <div className="md:col-span-2">
                <div className="text-2xl font-bold gradient-text mb-4">PEARL Labs</div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Physics Evaluation for AI Reliability & Logic. Building the trust layer 
                  for autonomous aerospace systems through provable safety validation.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/PEAARL-Labs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Quick links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li><a href="#solution" className="text-gray-400 hover:text-blue-400 transition-colors">Adversarial Testing</a></li>
                  <li><a href="#solution" className="text-gray-400 hover:text-blue-400 transition-colors">Physics Validation</a></li>
                  <li><a href="#solution" className="text-gray-400 hover:text-blue-400 transition-colors">Formal Verification</a></li>
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">F Prime Integration</a></li>
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#team" className="text-gray-400 hover:text-blue-400 transition-colors">Team</a></li>
                  <li><a href="#case-study" className="text-gray-400 hover:text-blue-400 transition-colors">Case Studies</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
                  <li><a href="https://github.com/PEAARL-Labs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 PEARL Labs. All rights reserved. Building the trust layer for autonomous aerospace systems.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}