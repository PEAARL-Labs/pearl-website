import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Company name and tagline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            <span className="gradient-text">PEARL Labs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 fade-in-1">
            Physics Evaluation for AI Reliability & Logic
          </p>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-blue-400 fade-in-2">
            Provable Safety for Autonomous Aerospace Systems
          </h2>
          
          {/* Value proposition */}
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed fade-in-3">
            PEARL transforms AI validation from years of manual testing to automated mathematical verification, 
            reducing costs by <span className="text-blue-400 font-semibold">10x</span> while increasing coverage 
            <span className="text-blue-400 font-semibold"> 3x</span>.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 fade-in-4">
            <div className="glass rounded-xl p-6 metric-counter">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50%</div>
              <div className="text-gray-300">Reduction in V&V timelines</div>
            </div>
            <div className="glass rounded-xl p-6 metric-counter" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10x</div>
              <div className="text-gray-300">ROI vs traditional testing</div>
            </div>
            <div className="glass rounded-xl p-6 metric-counter" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$2B+</div>
              <div className="text-gray-300">Annual V&V market</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-4">
            <Button 
              size="lg" 
              className="btn-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}