'use client'

import { useState } from 'react'

const problems = [
  {
    id: 'knowledge-loss',
    title: 'Knowledge Walks Out the Door',
    description: 'When employees leave, critical processes disappear with them. New hires struggle to figure out "how we do things here."',
    icon: '🚨',
    stats: '73% of companies lose critical knowledge when employees leave',
    color: 'red',
  },
  {
    id: 'inconsistent-ops',
    title: 'Inconsistent Operations',
    description: 'Different employees do the same task differently, leading to quality issues and customer confusion.',
    icon: '⚠️',
    stats: 'Inconsistent processes increase error rates by 40%',
    color: 'orange',
  },
  {
    id: 'training-chaos',
    title: 'Training Takes Forever',
    description: 'New employees take months to get up to speed because there\'s no clear documentation of procedures.',
    icon: '😵‍💫',
    stats: 'Poor documentation increases training time by 60%',
    color: 'amber',
  },
  {
    id: 'costly-mistakes',
    title: 'Costly Mistakes',
    description: 'Without clear procedures, employees make expensive errors that could have been prevented.',
    icon: '💸',
    stats: 'Process errors cost SMEs $4,000+ per incident',
    color: 'red',
  },
]

const solutions = [
  {
    id: 'quick-documentation',
    title: 'Document Processes in Minutes',
    description: 'Our AI-powered wizard guides you through documenting any process step-by-step. No more blank page syndrome.',
    icon: '⚡',
    benefit: 'Save 20+ hours per process',
    color: 'blue',
  },
  {
    id: 'standardized-ops',
    title: 'Standardize Operations',
    description: 'Create consistent, repeatable processes that anyone can follow. Reduce errors and improve quality.',
    icon: '🎯',
    benefit: 'Reduce errors by 70%',
    color: 'green',
  },
  {
    id: 'instant-training',
    title: 'Instant Training Materials',
    description: 'Turn your processes into visual training materials and checklists. New hires get productive faster.',
    icon: '🚀',
    benefit: 'Cut training time in half',
    color: 'purple',
  },
  {
    id: 'knowledge-preservation',
    title: 'Preserve Knowledge Forever',
    description: 'Never lose critical business knowledge again. Your processes are documented, searchable, and always available.',
    icon: '🔒',
    benefit: 'Protect your investment',
    color: 'indigo',
  },
]

export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState<'problems' | 'solutions'>('problems')

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 dark:bg-red-900/30 rounded-full px-6 py-2 mb-6">
            <span className="text-red-800 dark:text-red-200 text-sm font-bold">
              💡 The Hidden Costs of Poor Documentation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Stop Losing Money on 
            <span className="block text-red-600 dark:text-red-400">Preventable Problems</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every day without proper process documentation costs your business time, money, and opportunities. 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> But there's a solution.</span>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/20 dark:border-gray-700/50">
            <button
              onClick={() => setActiveTab('problems')}
              className={`relative px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 ${
                activeTab === 'problems'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
              }`}
            >
              {activeTab === 'problems' && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl opacity-0 animate-pulse"></div>
              )}
              <span className="relative">😰 The Problems</span>
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`relative px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 ${
                activeTab === 'solutions'
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20'
              }`}
            >
              {activeTab === 'solutions' && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl opacity-0 animate-pulse"></div>
              )}
              <span className="relative">🎉 The Solutions</span>
            </button>
          </div>
        </div>

        {/* Problems Tab */}
        {activeTab === 'problems' && (
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.id}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-200 dark:border-red-800/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl animate-bounce">{problem.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {problem.description}
                    </p>
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-4 border border-red-200 dark:border-red-700/50">
                      <p className="text-sm font-bold text-red-700 dark:text-red-300 flex items-center">
                        <span className="text-lg mr-2">📊</span>
                        {problem.stats}
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
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-200 dark:border-green-800/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl animate-bounce delay-200">{solution.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl p-4 border border-green-200 dark:border-green-700/50">
                      <p className="text-sm font-bold text-green-700 dark:text-green-300 flex items-center">
                        <span className="text-lg mr-2">✅</span>
                        {solution.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Comparison Visual */}
        <div className="mt-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              The Cost of Inaction vs. ProcessFlow Pro
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See the dramatic difference ProcessFlow Pro makes for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without ProcessFlow Pro */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800/50">
              <h4 className="text-xl font-bold text-red-700 dark:text-red-300 mb-4 flex items-center">
                <span className="text-2xl mr-3">😱</span>
                Without ProcessFlow Pro
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <span className="mr-3">❌</span>
                  <span>20+ hours per process documentation</span>
                </div>
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <span className="mr-3">❌</span>
                  <span>$4,000+ lost per process error</span>
                </div>
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <span className="mr-3">❌</span>
                  <span>60% longer training periods</span>
                </div>
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <span className="mr-3">❌</span>
                  <span>Critical knowledge walks out the door</span>
                </div>
              </div>
            </div>

            {/* With ProcessFlow Pro */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800/50">
              <h4 className="text-xl font-bold text-green-700 dark:text-green-300 mb-4 flex items-center">
                <span className="text-2xl mr-3">🎉</span>
                With ProcessFlow Pro
              </h4>
              <div className="space-y-3">
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <span className="mr-3">✅</span>
                  <span>Document processes in 30 minutes</span>
                </div>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <span className="mr-3">✅</span>
                  <span>70% reduction in process errors</span>
                </div>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <span className="mr-3">✅</span>
                  <span>50% faster employee training</span>
                </div>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <span className="mr-3">✅</span>
                  <span>Knowledge preserved forever</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl border border-blue-400/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 animate-pulse"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business? 🚀
              </h3>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join thousands of SMEs who've already saved countless hours and prevented costly mistakes.
                <span className="block font-semibold text-white mt-2">Your 23,000% ROI starts today!</span>
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('pricing')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group bg-white text-blue-600 px-10 py-4 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span className="group-hover:animate-bounce inline-block mr-2">🎯</span>
                Get Started Now - Only $29.99
                <span className="group-hover:animate-bounce inline-block ml-2">🎯</span>
              </button>
              <p className="mt-4 text-blue-200 text-sm">
                ⚡ Instant access • 💰 One-time payment • 🔄 Lifetime updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}