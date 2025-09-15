import Card from '../ui/Card'

export default function Solution() {
  return (
    <section id="solution" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              PEARL&apos;s <span className="gradient-text">Three-Pillar</span> Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automated, physics-informed validation that provides mathematical guarantees 
              while reducing time and cost by an order of magnitude.
            </p>
          </div>
          
          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover-lift h-full">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Adversarial Testing</h3>
              <p className="text-gray-300 mb-4">
                AI-driven edge case discovery through co-evolutionary algorithms that find failure modes 
                human testers never considered.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• 6 scenario types: boundary, sequence, resource, timing, physics, corruption</li>
                <li>• Automated test generation</li>
                <li>• Black-box testing (no source code needed)</li>
              </ul>
            </Card>
            
            <Card className="text-center hover-lift h-full">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Physics-Constrained Validation</h3>
              <p className="text-gray-300 mb-4">
                Realistic scenario generation that respects natural laws, orbital mechanics, 
                and physical constraints of aerospace environments.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Orbital dynamics integration</li>
                <li>• Atmospheric modeling</li>
                <li>• Sensor physics simulation</li>
              </ul>
            </Card>
            
            <Card className="text-center hover-lift h-full">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Formal Verification</h3>
              <p className="text-gray-300 mb-4">
                Mathematical safety proofs that provide guarantees beyond statistical confidence, 
                meeting NASA&apos;s strictest safety requirements.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Mathematical proof generation</li>
                <li>• Safety property verification</li>
                <li>• NASA/DoD compliance ready</li>
              </ul>
            </Card>
          </div>
          
          {/* Technical differentiators */}
          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">
              Technical Differentiators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-400">Platform Agnostic</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Works with any simulation platform (MATLAB, STK, custom)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Integrates with existing workflows
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    No source code access required
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-green-400">Proven Results</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    3x improvement in edge-case discovery
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    50% reduction in validation timelines
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Mathematical safety guarantees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}