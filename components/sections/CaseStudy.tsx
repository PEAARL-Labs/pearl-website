import Card from '../ui/Card'

export default function CaseStudy() {
  return (
    <section id="case-study" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Mars 2020</span> TRN Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How PEARL would have identified the critical edge cases that led to 
              8x prediction uncertainty in NASA&apos;s Terrain Relative Navigation system.
            </p>
          </div>
          
          {/* Case study content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Problem analysis */}
            <div>
              <Card className="h-full">
                <h3 className="text-2xl font-bold mb-6 text-red-400">Traditional V&V Results</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Ground Testing</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        Limited terrain variation in Earth-based testing
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        Simulation environments couldn&apos;t capture Mars-specific conditions
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-2">✗</span>
                        Manual scenario generation missed critical edge cases
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Actual Results</h4>
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <div className="text-3xl font-bold text-red-400 mb-2">8x</div>
                      <p className="text-gray-300">
                        Prediction uncertainty in real Mars conditions vs. expected performance
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Mission Impact</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Extended development timeline</li>
                      <li>• Additional safety margins required</li>
                      <li>• Reduced landing site flexibility</li>
                      <li>• Higher mission risk acceptance</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* PEARL solution */}
            <div>
              <Card className="h-full">
                <h3 className="text-2xl font-bold mb-6 text-green-400">PEARL Analysis</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Physics-Informed Generation</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Mars atmospheric density variations modeled
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Dust storm effects on sensor performance
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        Terrain feature correlation analysis
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Discovered Edge Cases</h4>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
                      <div className="text-3xl font-bold text-green-400 mb-2">127</div>
                      <p className="text-gray-300">
                        Additional failure scenarios identified through adversarial generation
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="font-semibold text-blue-400 mb-1">Scenario #1</div>
                        <p className="text-sm text-gray-300">
                          Low-contrast terrain + dust particulates + sensor calibration drift
                        </p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="font-semibold text-blue-400 mb-1">Scenario #2</div>
                        <p className="text-sm text-gray-300">
                          Thermal gradient effects on IMU + GPS signal multipath
                        </p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="font-semibold text-blue-400 mb-1">Scenario #3</div>
                        <p className="text-sm text-gray-300">
                          Atmospheric density variation + unexpected terrain shadows
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Formal Verification</h4>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <pre className="text-sm text-green-300">
{`∀ scenario ∈ Mars_Conditions:
  TRN_accuracy(scenario) ≥ threshold
  ∧ landing_safety(scenario) = TRUE
  ∧ power_consumption(scenario) ≤ budget

Proof: COMPLETE ✓
Confidence: Mathematical certainty`}
                      </pre>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Results comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-4">3x</div>
              <h4 className="text-lg font-semibold mb-2">More Edge Cases</h4>
              <p className="text-gray-400">
                PEARL&apos;s adversarial generation found 3x more failure scenarios than manual testing
              </p>
            </Card>
            
            <Card className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-4">18mo</div>
              <h4 className="text-lg font-semibold mb-2">Time Saved</h4>
              <p className="text-gray-400">
                Automated validation would have reduced the 3-year development cycle by 50%
              </p>
            </Card>
            
            <Card className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-4">$50M+</div>
              <h4 className="text-lg font-semibold mb-2">Cost Avoided</h4>
              <p className="text-gray-400">
                Early edge case discovery prevents costly mission failures and redesigns
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}