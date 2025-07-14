'use client'

import { useState } from 'react'
import { redirectToCheckout } from '@/lib/stripe'

const features = [
  'Unlimited Process Documentation',
  'Smart Process Builder with AI Suggestions',
  '50+ Industry-Specific Templates',
  'Visual Workflow Creator',
  'Multiple Export Formats (PDF, Word, HTML)',
  'Team Collaboration Tools',
  'Centralized Knowledge Base',
  'Mobile-Friendly Access',
  'Priority Email Support',
  'Lifetime Updates',
  'Commercial License',
  'Money-Back Guarantee'
]

const comparison = [
  {
    option: 'Hiring a Consultant',
    cost: '$5,000 - $15,000',
    time: '4-8 weeks',
    outcome: 'One-time documentation'
  },
  {
    option: 'Internal Documentation',
    cost: '$2,000 - $8,000',
    time: '2-6 weeks',
    outcome: 'Inconsistent quality'
  },
  {
    option: 'ProcessFlow Pro',
    cost: '$29.99',
    time: '30 minutes',
    outcome: 'Professional documentation'
  }
]

export default function PricingSection() {
  const [showComparison, setShowComparison] = useState(false)

  const handlePurchase = async () => {
    try {
      await redirectToCheckout()
    } catch (error) {
      console.error('Purchase error:', error)
      alert('There was an error processing your purchase. Please try again.')
    }
  }

  return (
    <div id="pricing" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 rounded-full px-6 py-2 mb-6">
            <span className="text-green-800 dark:text-green-200 text-sm font-bold">
              🎯 Limited Time: Launch Special Price
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent 
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One price. Lifetime access. No subscriptions, no hidden fees, no limits.
            <span className="block font-semibold text-blue-600 dark:text-blue-400 mt-2">
              Pay once, use forever! 🚀
            </span>
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            
            <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-purple-200 dark:border-purple-700 overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                🔥 Most Popular
              </div>
              
              <div className="p-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full px-4 py-2 mb-4">
                    <span className="text-purple-800 dark:text-purple-200 text-sm font-bold">
                      💎 ProcessFlow Pro
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Lifetime Access
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Everything you need to document processes
                  </p>
                </div>

                <div className="text-center mb-10">
                  <div className="relative">
                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      $29.99
                    </div>
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full rotate-12">
                      Save 99%
                    </div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-2 line-through">
                    Regular price: $2,999
                  </div>
                  <div className="text-lg text-green-600 dark:text-green-400 font-bold mt-1">
                    💰 Save $5,000+ vs hiring consultants
                  </div>
                </div>

                <button
                  onClick={handlePurchase}
                  className="w-full relative group bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 px-8 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 overflow-hidden mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="relative flex items-center justify-center">
                    <span className="mr-3 group-hover:animate-bounce">🚀</span>
                    Get Lifetime Access Now
                    <span className="ml-3 group-hover:animate-bounce">🚀</span>
                  </span>
                </button>

                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8 space-y-2">
                  <div className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="font-semibold">30-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="font-semibold">Instant Access After Purchase</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span className="font-semibold">No Monthly Fees Ever</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800/50">
                      <div className="text-green-500 mr-3 text-lg">✨</div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why This Price Makes Sense
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Compare the cost of ProcessFlow Pro to your alternatives:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {comparison.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border ${
                  item.option === 'ProcessFlow Pro'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700'
                }`}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {item.option}
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Cost:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.cost}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Time:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Result:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.outcome}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Calculate Your ROI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              See how ProcessFlow Pro pays for itself in the first week:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Time Savings
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Documentation time saved:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">20+ hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Average hourly rate:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">$50/hour</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-600 dark:text-gray-300">Total savings:</span>
                  <span className="font-bold text-green-600 dark:text-green-400 text-xl">$1,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Cost Savings
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Prevented errors:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">$4,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Reduced training time:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">$2,000+</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-600 dark:text-gray-300">Total avoided costs:</span>
                  <span className="font-bold text-green-600 dark:text-green-400 text-xl">$6,000+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 p-6 bg-green-100 dark:bg-green-900/20 rounded-lg">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Total ROI: 23,000%+
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              ProcessFlow Pro pays for itself in the first use case alone.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <button
            onClick={handlePurchase}
            className="bg-primary-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 mb-4"
          >
            Start Documenting Processes Today
          </button>
          <p className="text-gray-500 dark:text-gray-400">
            Join 10,000+ businesses that have already transformed their operations
          </p>
        </div>
      </div>
    </div>
  )
}