'use client'

import { useState, useEffect, useRef } from 'react'

interface TimelineStep {
  phase: string
  traditional: {
    duration: string
    activities: string[]
    status: 'completed' | 'in-progress' | 'pending'
  }
  pearl: {
    duration: string
    activities: string[]
    status: 'completed' | 'in-progress' | 'pending'
  }
}

export default function TimelineVisualization() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  const timelineData: TimelineStep[] = [
    {
      phase: 'Planning & Setup',
      traditional: {
        duration: '6 months',
        activities: [
          'Manual test case design',
          'Environment configuration',
          'Team training & onboarding',
          'Tool selection & procurement'
        ],
        status: 'completed'
      },
      pearl: {
        duration: '2 weeks',
        activities: [
          'Automated platform integration',
          'One-click environment setup',
          'AI-driven test generation',
          'Instant deployment'
        ],
        status: 'completed'
      }
    },
    {
      phase: 'Test Generation',
      traditional: {
        duration: '12 months',
        activities: [
          'Manual scenario creation',
          'Expert domain knowledge gathering',
          'Incremental test case expansion',
          'Human review cycles'
        ],
        status: 'completed'
      },
      pearl: {
        duration: '2 months',
        activities: [
          'Adversarial AI generation',
          'Physics-constrained scenarios',
          'Automated edge case discovery',
          'Continuous test evolution'
        ],
        status: 'completed'
      }
    },
    {
      phase: 'Execution & Analysis',
      traditional: {
        duration: '18 months',
        activities: [
          'Sequential test execution',
          'Manual result analysis',
          'Statistical confidence building',
          'Iterative refinement'
        ],
        status: 'in-progress'
      },
      pearl: {
        duration: '6 months',
        activities: [
          'Parallel test execution',
          'Real-time AI analysis',
          'Mathematical proof generation',
          'Automated optimization'
        ],
        status: 'completed'
      }
    },
    {
      phase: 'Validation & Certification',
      traditional: {
        duration: '12 months',
        activities: [
          'Manual compliance checks',
          'Documentation generation',
          'Regulatory review cycles',
          'Certification process'
        ],
        status: 'pending'
      },
      pearl: {
        duration: '4 months',
        activities: [
          'Automated compliance verification',
          'Generated formal proofs',
          'Streamlined regulatory package',
          'Fast-track certification'
        ],
        status: 'in-progress'
      }
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % timelineData.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible, timelineData.length])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in-progress': return 'bg-blue-500'
      case 'pending': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )
      case 'in-progress':
        return (
          <svg className="w-4 h-4 text-white animate-spin" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
          </svg>
        )
      case 'pending':
        return (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div ref={timelineRef} className="glass-dark rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 gradient-text">
          V&V Process Timeline Comparison
        </h3>
        <p className="text-gray-400">
          From concept to certification: Traditional vs PEARL approach
        </p>
      </div>

      {/* Timeline Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-400">Traditional V&V: 48+ months</div>
          <div className="text-sm text-green-400 font-semibold">PEARL: 12 months</div>
        </div>
        <div className="relative">
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
              style={{ width: '100%' }}
            />
          </div>
          <div className="absolute top-0 w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: '25%' }}
            />
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>Start</span>
          <span>75% Time Saved</span>
          <span>Certification</span>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-6">
        {timelineData.map((step, index) => (
          <div 
            key={index}
            className={`border-l-4 pl-6 transition-all duration-500 ${
              index === activeStep 
                ? 'border-blue-500 bg-blue-600/5' 
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index === activeStep ? 'bg-blue-600' : 'bg-gray-700'
              }`}>
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <h4 className="text-lg font-semibold text-white ml-4">{step.phase}</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional Approach */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-semibold text-red-400">Traditional V&V</h5>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(step.traditional.status)}`} />
                    <span className="text-xs text-gray-400">{step.traditional.duration}</span>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {step.traditional.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getStatusColor(step.traditional.status)}`} />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* PEARL Approach */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-semibold text-green-400">PEARL Platform</h5>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(step.pearl.status)} flex items-center justify-center`}>
                      {getStatusIcon(step.pearl.status)}
                    </div>
                    <span className="text-xs text-gray-400">{step.pearl.duration}</span>
                  </div>
                </div>
                <div className="bg-green-900/10 border border-green-500/20 rounded-lg p-4">
                  <ul className="space-y-2">
                    {step.pearl.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start space-x-2 text-sm text-gray-300">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getStatusColor(step.pearl.status)}`} />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step Benefits */}
            {index === activeStep && (
              <div className="mt-4 p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-blue-400 font-semibold text-sm">PEARL Advantage</span>
                </div>
                <p className="text-gray-300 text-sm">
                  {index === 0 && "Instant platform deployment vs months of manual setup and training"}
                  {index === 1 && "AI discovers edge cases that human experts never consider"}
                  {index === 2 && "Mathematical proofs provide certainty beyond statistical confidence"}
                  {index === 3 && "Automated compliance generation accelerates regulatory approval"}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-8 pt-6 border-t border-gray-700/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-600/10 rounded-lg">
            <div className="text-2xl font-bold text-green-400 mb-1">75%</div>
            <div className="text-xs text-gray-400">Faster Time-to-Market</div>
          </div>
          <div className="text-center p-4 bg-blue-600/10 rounded-lg">
            <div className="text-2xl font-bold text-blue-400 mb-1">90%</div>
            <div className="text-xs text-gray-400">Automation Level</div>
          </div>
          <div className="text-center p-4 bg-purple-600/10 rounded-lg">
            <div className="text-2xl font-bold text-purple-400 mb-1">10x</div>
            <div className="text-xs text-gray-400">Edge Case Discovery</div>
          </div>
          <div className="text-center p-4 bg-cyan-600/10 rounded-lg">
            <div className="text-2xl font-bold text-cyan-400 mb-1">99%</div>
            <div className="text-xs text-gray-400">Confidence Level</div>
          </div>
        </div>
      </div>
    </div>
  )
}