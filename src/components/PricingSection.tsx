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
    <div id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            One price. Lifetime access. No subscriptions, no hidden fees, no limits.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl border-2 border-primary-500 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              Most Popular
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ProcessFlow Pro
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lifetime Access
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-gray-900 dark:text-white">
                  $29.99
                </div>
                <div className="text-gray-500 dark:text-gray-400 mt-2">
                  One-time payment
                </div>
                <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Save $5,000+ vs hiring consultants
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 mb-6"
              >
                Get Lifetime Access Now
              </button>

              <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
                ✅ 30-Day Money-Back Guarantee<br />
                ✅ Instant Access After Purchase<br />
                ✅ No Monthly Fees Ever
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
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