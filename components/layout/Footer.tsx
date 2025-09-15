export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900/80 to-black/90 border-t border-gray-700/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold gradient-text">PEARL Labs</span>
                  <span className="text-sm text-gray-400">Physics Evaluation for AI Reliability & Logic</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Building the trust layer for autonomous aerospace systems through 
                provable safety validation. Transforming V&V from years of manual 
                testing to automated mathematical verification.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="glass rounded-lg px-3 py-2 text-xs">
                  <div className="text-green-400 font-semibold">TS/SCI Cleared</div>
                  <div className="text-gray-400">Security Architecture</div>
                </div>
                <div className="glass rounded-lg px-3 py-2 text-xs">
                  <div className="text-blue-400 font-semibold">Purdue Research</div>
                  <div className="text-gray-400">Academic Partnership</div>
                </div>
                <div className="glass rounded-lg px-3 py-2 text-xs">
                  <div className="text-purple-400 font-semibold">NSF SBIR</div>
                  <div className="text-gray-400">Government Funding</div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/PEAARL-Labs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-600/20 transition-all duration-300 hover-scale focus-ring"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:team@pearl-labs.ai" 
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-600/20 transition-all duration-300 hover-scale focus-ring"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Platform Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#solution" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Adversarial Testing
                  </a>
                </li>
                <li>
                  <a href="#solution" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Physics Validation
                  </a>
                </li>
                <li>
                  <a href="#solution" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Formal Verification
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    F Prime Integration
                  </a>
                </li>
                <li>
                  <a href="#case-study" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Mars 2020 Analysis
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#team" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#problem" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/PEAARL-Labs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    Open Source
                  </a>
                </li>
                <li>
                  <span className="text-gray-500 text-sm cursor-not-allowed">
                    Careers (Soon)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-6 glass-dark rounded-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">10x</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">50%</div>
              <div className="text-sm text-gray-400">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">3x</div>
              <div className="text-sm text-gray-400">Edge Cases Found</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">$2B+</div>
              <div className="text-sm text-gray-400">Market Size</div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} PEARL Labs. All rights reserved. 
                  Building the trust layer for autonomous aerospace systems.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Physics Evaluation for AI Reliability & Logic
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <span>Made with ❤️ for Aerospace</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">NASA • DoD • Commercial Space</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}