'use client'

import { useState } from 'react'

const features = [
  {
    id: 'process-builder',
    title: 'Smart Process Builder',
    description: 'Step-by-step wizard that guides you through documenting any business process. No experience needed.',
    icon: '🏗️',
    demo: 'Interactive drag-and-drop interface',
    benefits: ['AI-powered suggestions', 'Templates for common processes', 'Visual workflow creator']
  },
  {
    id: 'template-library',
    title: 'Template Library',
    description: '50+ pre-built templates for common business processes across all industries.',
    icon: '📚',
    demo: 'Browse industry-specific templates',
    benefits: ['HR processes', 'Sales procedures', 'Operations workflows', 'Customer service scripts']
  },
  {
    id: 'export-options',
    title: 'Multiple Export Formats',
    description: 'Export your processes as PDF, Word documents, HTML, or printable checklists.',
    icon: '📄',
    demo: 'One-click export to any format',
    benefits: ['Professional PDF reports', 'Editable Word documents', 'Printable checklists', 'Web-ready HTML']
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    description: 'Multiple team members can contribute to process documentation and reviews.',
    icon: '👥',
    demo: 'Real-time collaboration tools',
    benefits: ['Multi-user editing', 'Comment and review system', 'Version control', 'Role-based permissions']
  },
  {
    id: 'knowledge-base',
    title: 'Centralized Knowledge Base',
    description: 'All your processes in one searchable, organized hub that your team can access anytime.',
    icon: '🗂️',
    demo: 'Search and filter all processes',
    benefits: ['Advanced search', 'Category organization', 'Quick access', 'Mobile-friendly']
  },
  {
    id: 'visual-workflows',
    title: 'Visual Workflow Creator',
    description: 'Create flowcharts and decision trees that make complex processes easy to understand.',
    icon: '🎨',
    demo: 'Drag-and-drop flowchart builder',
    benefits: ['Decision trees', 'Process flowcharts', 'Custom shapes', 'Auto-layout']
  }
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <div id="features" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900 dark:via-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-800 dark:text-blue-200 text-sm font-bold">
              🚀 Powerful Features That Drive Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Document Processes
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed specifically for small and medium businesses. 
            <span className="block font-semibold text-indigo-600 dark:text-indigo-400 mt-2">
              No complex setup, no learning curve! 🎯
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Feature List */}
          <div className="lg:col-span-5 space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                  activeFeature.id === feature.id
                    ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 dark:border-blue-600 shadow-xl animate-scale-in'
                    : 'border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-3xl transition-all duration-300 ${
                    activeFeature.id === feature.id ? 'animate-bounce' : 'group-hover:scale-110'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      activeFeature.id === feature.id 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    activeFeature.id === feature.id 
                      ? 'bg-blue-500 border-blue-500 shadow-lg animate-pulse' 
                      : 'border-gray-300 dark:border-gray-600 group-hover:border-blue-400'
                  }`}>
                    {activeFeature.id === feature.id && (
                      <div className="w-2 h-2 bg-white rounded-full absolute top-0.5 left-0.5 animate-ping"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Demo */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              
              <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-blue-200 dark:border-blue-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {activeFeature.title}
                  </h3>
                  <div className="text-4xl animate-float">{activeFeature.icon}</div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  {activeFeature.description}
                </p>

                {/* Enhanced Demo Placeholder */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 mb-8 border border-blue-200 dark:border-blue-700 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
                  </div>
                  
                  <div className="relative text-center">
                    <div className="text-blue-500 dark:text-blue-400 mb-4">
                      <svg className="w-16 h-16 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {activeFeature.demo}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 inline-block">
                      🎯 Interactive demo available after purchase
                    </p>
                  </div>
                </div>

                {/* Enhanced Benefits */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <span className="text-green-500 mr-3">✨</span>
                    Key Benefits:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeFeature.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                        <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 animate-pulse" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Stats */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-3xl p-10 border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Everything You Need Included
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive features to document any business process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-600/50">
              <div className="text-4xl mb-3">📚</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">Pre-built Templates</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Ready-to-use process templates</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-600/50">
              <div className="text-4xl mb-3">🎯</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">5</div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">Export Formats</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">PDF, Word, HTML, and more</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-600/50">
              <div className="text-4xl mb-3">🔄</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">∞</div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">Process Documentation</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Unlimited processes forever</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}