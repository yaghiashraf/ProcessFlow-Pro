'use client'

import { useState } from 'react'

const problems = [
  {
    id: 'knowledge-loss',
    title: 'Knowledge Walks Out the Door',
    description: 'When employees leave, critical processes disappear with them. New hires struggle to figure out "how we do things here."',
    icon: '🚪',
    stats: '73% of companies lose critical knowledge when employees leave',
  },
  {
    id: 'inconsistent-ops',
    title: 'Inconsistent Operations',
    description: 'Different employees do the same task differently, leading to quality issues and customer confusion.',
    icon: '🔄',
    stats: 'Inconsistent processes increase error rates by 40%',
  },
  {
    id: 'training-chaos',
    title: 'Training Takes Forever',
    description: 'New employees take months to get up to speed because there\'s no clear documentation of procedures.',
    icon: '⏰',
    stats: 'Poor documentation increases training time by 60%',
  },
  {
    id: 'costly-mistakes',
    title: 'Costly Mistakes',
    description: 'Without clear procedures, employees make expensive errors that could have been prevented.',
    icon: '💸',
    stats: 'Process errors cost SMEs $4,000+ per incident',
  },
]

const solutions = [
  {
    id: 'quick-documentation',
    title: 'Document Processes in Minutes',
    description: 'Our AI-powered wizard guides you through documenting any process step-by-step. No more blank page syndrome.',
    icon: '⚡',
    benefit: 'Save 20+ hours per process',
  },
  {
    id: 'standardized-ops',
    title: 'Standardize Operations',
    description: 'Create consistent, repeatable processes that anyone can follow. Reduce errors and improve quality.',
    icon: '📋',
    benefit: 'Reduce errors by 70%',
  },
  {
    id: 'instant-training',
    title: 'Instant Training Materials',
    description: 'Turn your processes into visual training materials and checklists. New hires get productive faster.',
    icon: '🎯',
    benefit: 'Cut training time in half',
  },
  {
    id: 'knowledge-preservation',
    title: 'Preserve Knowledge Forever',
    description: 'Never lose critical business knowledge again. Your processes are documented, searchable, and always available.',
    icon: '🔒',
    benefit: 'Protect your investment',
  },
]

export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState<'problems' | 'solutions'>('problems')

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stop Losing Money on Preventable Problems
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every day without proper process documentation costs your business time, money, and opportunities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('problems')}
              className={`px-8 py-3 rounded-md text-lg font-medium transition-colors ${
                activeTab === 'problems'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400'
              }`}
            >
              The Problems
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-8 py-3 rounded-md text-lg font-medium transition-colors ${
                activeTab === 'solutions'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400'
              }`}
            >
              The Solutions
            </button>
          </div>
        </div>

        {/* Problems Tab */}
        {activeTab === 'problems' && (
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-red-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{problem.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {problem.description}
                    </p>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-md p-3">
                      <p className="text-sm font-medium text-red-700 dark:text-red-300">
                        📊 {problem.stats}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Solutions Tab */}
        {activeTab === 'solutions' && (
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border-l-4 border-green-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{solution.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {solution.description}
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-md p-3">
                      <p className="text-sm font-medium text-green-700 dark:text-green-300">
                        ✅ {solution.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary-600 text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 text-primary-100">
              Join thousands of SMEs who've already saved countless hours and prevented costly mistakes.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Now - Only $29.99
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}