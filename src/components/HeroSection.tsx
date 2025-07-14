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
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 min-h-screen">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400 dark:bg-green-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-15 animate-pulse delay-3000"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full px-6 py-3 mb-8 shadow-lg dark:shadow-blue-900/30 border border-blue-200 dark:border-blue-700">
              <span className="text-blue-800 dark:text-blue-200 text-sm font-bold animate-pulse">
                🔥 Save $5,000+ vs hiring consultants
              </span>
            </div>

            <h1 className="text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-7xl md:text-8xl mb-8">
              <span className="block animate-fade-in">Stop Losing</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-slide-up">
                Critical Knowledge
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 sm:text-2xl leading-relaxed">
              Transform your business chaos into <span className="font-semibold text-blue-600 dark:text-blue-400">crystal-clear documentation</span>. 
              Save 20+ hours per process, prevent costly mistakes, and keep your team aligned.
            </p>

            {/* Value Props */}
            <div className="mt-12 space-y-6">
              {[
                { icon: '⚡', text: 'Save 20+ hours', detail: 'of documentation work per process', color: 'yellow' },
                { icon: '📚', text: 'Reduce training time', detail: 'by 60% with clear procedures', color: 'green' },
                { icon: '🔒', text: 'Prevent knowledge loss', detail: 'when employees leave', color: 'red' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border-2 ${
                  item.color === 'yellow' ? 'border-yellow-200 dark:border-yellow-700/50 shadow-yellow-200/20 dark:shadow-yellow-900/20' :
                  item.color === 'green' ? 'border-green-200 dark:border-green-700/50 shadow-green-200/20 dark:shadow-green-900/20' :
                  'border-red-200 dark:border-red-700/50 shadow-red-200/20 dark:shadow-red-900/20'
                } shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0 text-4xl mr-6 animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>{item.icon}</div>
                  <div>
                    <span className="font-bold text-xl text-gray-900 dark:text-white">{item.text}</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-2 text-lg">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={scrollToPricing}
                  className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 overflow-hidden animate-pulse"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center">
                    <span className="text-3xl mr-3 group-hover:animate-bounce">🚀</span>
                    Get Lifetime Access - $29.99
                    <span className="text-3xl ml-3 group-hover:animate-bounce">🚀</span>
                  </span>
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('features')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white px-12 py-6 rounded-2xl text-xl font-semibold border-2 border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <span className="text-2xl mr-3 group-hover:animate-bounce">👀</span>
                  See Features
                </button>
              </div>
              <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 flex items-center justify-center sm:justify-start">
                <span className="flex items-center bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-3 border border-green-200 dark:border-green-700">
                  <span className="text-2xl mr-2">✅</span>
                  One-time payment • No subscriptions • Lifetime updates
                </span>
              </p>
            </div>
          </div>

          {/* Right Column - Interactive Process Demo */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 dark:opacity-20 animate-pulse"></div>
              
              {/* Main demo container */}
              <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-3xl p-8 border-2 border-white/30 dark:border-gray-700/50 transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-3 shadow-lg animate-glow">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Process Builder
                    </h3>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse delay-100 shadow-lg"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-200 shadow-lg"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl border-2 transition-all duration-500 transform ${
                        index === currentStep
                          ? 'border-blue-400 dark:border-blue-500 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/40 dark:via-purple-900/40 dark:to-pink-900/40 scale-110 shadow-2xl animate-pulse'
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50/70 dark:bg-gray-700/70 hover:scale-105 hover:shadow-xl'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`text-3xl ${index === currentStep ? 'animate-bounce' : 'hover:animate-bounce'}`}>
                            {step.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                              {step.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          index === currentStep
                            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-2xl animate-pulse'
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white'
                        }`}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-110 animate-pulse">
                    <span className="text-2xl mr-3">📄</span>
                    Export Documentation
                    <span className="text-2xl ml-3">✨</span>
                  </button>
                </div>
              </div>

              {/* Enhanced Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold animate-bounce shadow-lg">
                <span className="text-lg mr-2">✨</span>
                Live Demo
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold animate-pulse shadow-lg">
                <span className="text-lg mr-2">🎯</span>
                Real-time
              </div>
              <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce delay-1000 shadow-lg">
                <span className="mr-1">🔥</span>
                Hot
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Trusted by Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real results from real businesses
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Happy Customers', icon: '😊', color: 'from-green-500 to-blue-500' },
              { number: '23,000%', label: 'Average ROI', icon: '📈', color: 'from-yellow-500 to-orange-500' },
              { number: '20+', label: 'Hours Saved', icon: '⏰', color: 'from-purple-500 to-pink-500' },
              { number: '60%', label: 'Faster Training', icon: '🎓', color: 'from-indigo-500 to-purple-500' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-5xl mb-4 animate-bounce" style={{ animationDelay: `${index * 0.3}s` }}>{stat.icon}</div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300 font-bold">
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