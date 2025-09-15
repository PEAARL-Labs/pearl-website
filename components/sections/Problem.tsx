import Card from '../ui/Card'
import ComparisonChart from '../visualizations/ComparisonChart'

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">V&V Crisis</span> in Aerospace
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Current validation methods are failing to keep pace with AI complexity, 
              leading to costly delays and mission-critical failures.
            </p>
          </div>
          
          {/* Problem statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover-lift">
              <div className="text-4xl font-bold text-red-400 mb-4">70%</div>
              <h3 className="text-xl font-semibold mb-3">Development Time</h3>
              <p className="text-gray-400">
                Spent on testing and validation instead of innovation
              </p>
            </Card>
            
            <Card className="text-center hover-lift">
              <div className="text-4xl font-bold text-red-400 mb-4">$M+</div>
              <h3 className="text-xl font-semibold mb-3">Cost Per Mission</h3>
              <p className="text-gray-400">
                Current V&V methods cost millions per mission and take 2-3 years
              </p>
            </Card>
            
            <Card className="text-center hover-lift">
              <div className="text-4xl font-bold text-red-400 mb-4">8x</div>
              <h3 className="text-xl font-semibold mb-3">Uncertainty</h3>
              <p className="text-gray-400">
                Mars 2020&apos;s TRN system had 8x prediction uncertainty despite years of testing
              </p>
            </Card>
          </div>
          
          {/* Case study highlight */}
          <div className="glass-dark rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Real-World Impact</h3>
                <h4 className="text-xl font-semibold mb-4">NASA Ingenuity Mars Helicopter Crash</h4>
                <p className="text-gray-300 mb-4">
                  Despite extensive ground testing, Ingenuity crashed due to an edge case not covered 
                  in traditional validation: navigation system confusion over featureless terrain.
                </p>
                <p className="text-gray-300">
                  This exemplifies how manual testing cannot scale to discover the infinite edge cases 
                  that autonomous systems encounter in real environments.
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-red-400">Current V&V Limitations</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Manual test case generation misses critical edge cases
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Statistical confidence doesn&apos;t guarantee safety
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Simulation environments don&apos;t reflect physics constraints
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    Scaling to hundreds of autonomous systems is impossible
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Interactive Comparison */}
          <div className="mb-16">
            <ComparisonChart />
          </div>
          
          {/* Market context */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              The aerospace industry faces an impossible choice: spend millions on inadequate testing 
              or accept unacceptable risk in mission-critical systems.
            </p>
            <p className="text-xl font-semibold text-blue-400">
              The $2B+ annual V&V market demands a fundamental paradigm shift.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}