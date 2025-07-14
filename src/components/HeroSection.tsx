'use client'

import { useState, useEffect } from 'react'

const processSteps = [
  { title: 'Employee Onboarding', description: '8 steps documented', icon: '👤', color: 'blue' },
  { title: 'Customer Support', description: '12 steps documented', icon: '💬', color: 'green' },
  { title: 'Invoice Processing', description: '6 steps documented', icon: '💰', color: 'yellow' },
  { title: 'Product Launch', description: '15 steps documented', icon: '🚀', color: 'purple' },
]

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                🔥 Save $5,000+ vs hiring consultants
              </span>
            </div>

            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              <span className="block">Stop Losing</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Critical Knowledge
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 sm:text-2xl leading-relaxed">
              Transform your business chaos into <span className="font-semibold text-blue-600 dark:text-blue-400">crystal-clear documentation</span>. 
              Save 20+ hours per process, prevent costly mistakes, and keep your team aligned.
            </p>

            {/* Value Props */}
            <div className="mt-10 space-y-4">
              {[
                { icon: '⚡', text: 'Save 20+ hours', detail: 'of documentation work per process' },
                { icon: '📚', text: 'Reduce training time', detail: 'by 60% with clear procedures' },
                { icon: '🔒', text: 'Prevent knowledge loss', detail: 'when employees leave' }
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-gray-700/50">
                  <div className="flex-shrink-0 text-2xl mr-4">{item.icon}</div>
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white">{item.text}</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToPricing}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="relative flex items-center justify-center">
                    🚀 Get Lifetime Access - $29.99
                  </span>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('features')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white px-8 py-4 rounded-xl text-lg font-semibold border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200"
                >
                  👀 See Features
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start">
                <span className="flex items-center">
                  ✅ One-time payment • ✅ No subscriptions • ✅ Lifetime updates
                </span>
              </p>
            </div>
          </div>

          {/* Right Column - Interactive Process Demo */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="relative">
              {/* Main demo container */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 dark:border-gray-700/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Process Builder
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border transition-all duration-500 transform ${
                        index === currentStep
                          ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 scale-105 shadow-lg'
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/50 hover:scale-102'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`text-2xl ${index === currentStep ? 'animate-bounce' : ''}`}>
                            {step.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {step.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                          index === currentStep
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    📄 Export Documentation
                  </button>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                ✨ Live Demo
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                🎯 Real-time
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Happy Customers', icon: '😊' },
              { number: '23,000%', label: 'Average ROI', icon: '📈' },
              { number: '20+', label: 'Hours Saved', icon: '⏰' },
              { number: '60%', label: 'Faster Training', icon: '🎓' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/50">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}