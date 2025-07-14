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
    <div id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Document Processes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful features designed specifically for small and medium businesses. 
            No complex setup, no learning curve.
          </p>
        </div>

        {/* Features Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Feature List */}
          <div className="lg:col-span-5 space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`cursor-pointer p-6 rounded-lg border transition-all duration-300 ${
                  activeFeature.id === feature.id
                    ? 'border-primary-300 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-600 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-primary-200 dark:hover:border-primary-700'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    activeFeature.id === feature.id ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Feature Demo */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeFeature.title}
                </h3>
                <div className="text-3xl">{activeFeature.icon}</div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {activeFeature.description}
              </p>

              {/* Demo Placeholder */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-6 text-center">
                <div className="text-gray-400 dark:text-gray-500 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m0 6V4h1m0 6v6m-1-6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {activeFeature.demo}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Interactive demo available after purchase
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Benefits:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeFeature.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Stats */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
              <p className="text-gray-600 dark:text-gray-300">Pre-built Templates</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5</div>
              <p className="text-gray-600 dark:text-gray-300">Export Formats</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">∞</div>
              <p className="text-gray-600 dark:text-gray-300">Process Documentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}