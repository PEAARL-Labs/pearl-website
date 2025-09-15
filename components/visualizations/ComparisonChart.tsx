'use client'

import { useState, useEffect, useRef } from 'react'

interface ChartData {
  traditional: {
    cost: 10,
    time: 36,
    coverage: 85,
    edgeCases: 10
  },
  pearl: {
    cost: 1,
    time: 18,
    coverage: 99,
    edgeCases: 30
  }
}

export default function ComparisonChart() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState({
    traditional: { cost: 0, time: 0, coverage: 0, edgeCases: 0 },
    pearl: { cost: 0, time: 0, coverage: 0, edgeCases: 0 }
  })
  const chartRef = useRef<HTMLDivElement>(null)

  const data: ChartData = {
    traditional: {
      cost: 10, // $10M
      time: 36, // 36 months
      coverage: 85, // 85%
      edgeCases: 10 // 10 edge cases
    },
    pearl: {
      cost: 1, // $1M
      time: 18, // 18 months
      coverage: 99, // 99%
      edgeCases: 30 // 30+ edge cases
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        // Easing function for smooth animation
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
        const easedProgress = easeOutCubic(progress)

        setAnimatedValues({
          traditional: {
            cost: Math.round(data.traditional.cost * easedProgress),
            time: Math.round(data.traditional.time * easedProgress),
            coverage: Math.round(data.traditional.coverage * easedProgress),
            edgeCases: Math.round(data.traditional.edgeCases * easedProgress)
          },
          pearl: {
            cost: Math.round(data.pearl.cost * easedProgress),
            time: Math.round(data.pearl.time * easedProgress),
            coverage: Math.round(data.pearl.coverage * easedProgress),
            edgeCases: Math.round(data.pearl.edgeCases * easedProgress)
          }
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }
  }, [isVisible, data])

  const getBarWidth = (value: number, max: number) => {
    return `${(value / max) * 100}%`
  }

  const metrics = [
    {
      name: 'Cost',
      unit: '$M',
      max: 10,
      traditional: animatedValues.traditional.cost,
      pearl: animatedValues.pearl.cost,
      tradColor: 'bg-red-500',
      pearlColor: 'bg-green-500'
    },
    {
      name: 'Time',
      unit: 'months',
      max: 36,
      traditional: animatedValues.traditional.time,
      pearl: animatedValues.pearl.time,
      tradColor: 'bg-red-500',
      pearlColor: 'bg-green-500'
    },
    {
      name: 'Coverage',
      unit: '%',
      max: 100,
      traditional: animatedValues.traditional.coverage,
      pearl: animatedValues.pearl.coverage,
      tradColor: 'bg-orange-500',
      pearlColor: 'bg-green-500'
    },
    {
      name: 'Edge Cases',
      unit: '',
      max: 30,
      traditional: animatedValues.traditional.edgeCases,
      pearl: animatedValues.pearl.edgeCases,
      tradColor: 'bg-red-500',
      pearlColor: 'bg-blue-500'
    }
  ]

  return (
    <div ref={chartRef} className="glass-dark rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 gradient-text">
          Traditional V&V vs PEARL Comparison
        </h3>
        <p className="text-gray-400">
          Real performance metrics across key validation parameters
        </p>
      </div>

      <div className="space-y-8">
        {metrics.map((metric, index) => (
          <div key={metric.name} className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-white">{metric.name}</h4>
              <div className="flex space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="text-gray-300">Traditional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-300">PEARL</span>
                </div>
              </div>
            </div>

            {/* Traditional Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Traditional V&V</span>
                <span className="text-sm font-bold text-red-400">
                  {metric.traditional}{metric.unit}
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden">
                <div
                  className={`h-full ${metric.tradColor} rounded-full transition-all duration-1000 ease-out relative`}
                  style={{ 
                    width: getBarWidth(metric.traditional, metric.max),
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                </div>
              </div>
            </div>

            {/* PEARL Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">PEARL Platform</span>
                <span className="text-sm font-bold text-green-400">
                  {metric.pearl}{metric.unit}
                  {metric.name === 'Edge Cases' && '+'}
                </span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-6 overflow-hidden">
                <div
                  className={`h-full ${metric.pearlColor} rounded-full transition-all duration-1000 ease-out relative`}
                  style={{ 
                    width: getBarWidth(metric.pearl, metric.max),
                    animationDelay: `${index * 0.2 + 0.1}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  {metric.name === 'Coverage' && metric.pearl >= 95 && (
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Improvement Indicator */}
            <div className="text-center">
              {metric.name === 'Cost' && (
                <div className="text-green-400 font-semibold text-sm">
                  💰 {Math.round((metric.traditional / metric.pearl) * 10) / 10}x Cost Reduction
                </div>
              )}
              {metric.name === 'Time' && (
                <div className="text-green-400 font-semibold text-sm">
                  ⚡ {Math.round(((metric.traditional - metric.pearl) / metric.traditional) * 100)}% Faster
                </div>
              )}
              {metric.name === 'Coverage' && (
                <div className="text-green-400 font-semibold text-sm">
                  📈 +{metric.pearl - metric.traditional}% Better Coverage
                </div>
              )}
              {metric.name === 'Edge Cases' && (
                <div className="text-blue-400 font-semibold text-sm">
                  🔍 {Math.round(metric.pearl / metric.traditional)}x More Edge Cases Discovered
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 pt-6 border-t border-gray-700/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-green-600/10 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-400">10x</div>
            <div className="text-xs text-gray-400">ROI Improvement</div>
          </div>
          <div className="bg-green-600/10 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-400">50%</div>
            <div className="text-xs text-gray-400">Time Savings</div>
          </div>
          <div className="bg-blue-600/10 rounded-lg p-3">
            <div className="text-2xl font-bold text-blue-400">99%</div>
            <div className="text-xs text-gray-400">Coverage Achieved</div>
          </div>
          <div className="bg-purple-600/10 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-400">3x</div>
            <div className="text-xs text-gray-400">More Edge Cases</div>
          </div>
        </div>
      </div>
    </div>
  )
}