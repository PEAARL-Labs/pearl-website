import Card from '../ui/Card'
import TimelineVisualization from '../visualizations/TimelineVisualization'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How <span className="gradient-text">PEARL</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A simple three-step process that transforms your existing simulation environment 
              into a comprehensive validation powerhouse.
            </p>
          </div>
          
          {/* Process steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <Card className="text-center hover-lift">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-white">1</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Connect</h3>
                <p className="text-gray-300 mb-4">
                  PEARL connects to your existing simulation environment through our platform-agnostic API. 
                  No code changes required.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 text-left">
                  <pre className="text-sm text-blue-300">
{`# Simple integration
pearl connect --sim matlab
pearl connect --sim stk
pearl connect --sim custom`}
                  </pre>
                </div>
              </Card>
              
              {/* Step 2 */}
              <Card className="text-center hover-lift">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-white">2</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Generate</h3>
                <p className="text-gray-300 mb-4">
                  Our AI generates physics-constrained adversarial scenarios targeting your system&apos;s 
                  potential failure modes across 6 testing dimensions.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 text-left">
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Boundary condition tests</li>
                    <li>• Sequence timing attacks</li>
                    <li>• Resource exhaustion scenarios</li>
                    <li>• Physics constraint violations</li>
                  </ul>
                </div>
              </Card>
              
              {/* Step 3 */}
              <Card className="text-center hover-lift">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-white">3</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-400">Verify</h3>
                <p className="text-gray-300 mb-4">
                  Receive formal mathematical proofs of safety properties along with comprehensive 
                  risk assessment and actionable recommendations.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 text-left">
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Risk score: 0-100</li>
                    <li>• Safety property proofs</li>
                    <li>• Failure mode analysis</li>
                    <li>• Mitigation strategies</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Process Timeline */}
          <div className="mt-16 mb-16">
            <TimelineVisualization />
          </div>
          
          {/* Integration showcase */}
          <div className="mt-16 glass-dark rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  NASA F Prime Integration
                </h3>
                <p className="text-gray-300 mb-4">
                  PEARL provides native support for NASA&apos;s F Prime flight software framework, 
                  the standard for small spacecraft missions.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Automatic .fpp component parsing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    C++ code analysis for aerospace patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Gateway mission validation ready
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Earth-independent operation testing
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-green-400">Sample Output</h4>
                <pre className="text-sm text-green-300 whitespace-pre-wrap">
{`PEARL Validation Report
═══════════════════════

System: Gateway Autonomous Navigation
Risk Score: 23/100 (LOW RISK)

Safety Properties Verified:
✓ Collision avoidance: PROVEN
✓ Power management: PROVEN  
✓ Communication fallback: PROVEN

Edge Cases Found: 3
- Scenario: Dual IMU failure + GPS denied
- Mitigation: Backup stellar navigation
- Priority: HIGH

Formal Verification Status: COMPLETE
Mathematical proof: ∀t ∈ T, Safe(system(t)) = TRUE`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}