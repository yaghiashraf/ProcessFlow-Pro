'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Is this really a one-time payment?',
    answer: 'Yes! Pay once, use forever. No monthly fees, no subscription traps, no hidden costs. You get lifetime access to ProcessFlow Pro and all future updates.'
  },
  {
    id: 2,
    question: 'What if I\'m not satisfied?',
    answer: 'We offer a 30-day money-back guarantee. If ProcessFlow Pro doesn\'t save you time and improve your operations, we\'ll refund your payment completely.'
  },
  {
    id: 3,
    question: 'How long does it take to document a process?',
    answer: 'Most processes can be documented in 15-30 minutes using our smart wizard and templates. Complex processes might take an hour, but that\'s still 90% faster than traditional methods.'
  },
  {
    id: 4,
    question: 'Can multiple team members use this?',
    answer: 'Absolutely! Your one-time purchase includes unlimited team members. Everyone can collaborate on processes, add comments, and access the knowledge base.'
  },
  {
    id: 5,
    question: 'Do I need technical skills to use this?',
    answer: 'Not at all! ProcessFlow Pro is designed for business users, not technical experts. If you can use Microsoft Word, you can use ProcessFlow Pro.'
  },
  {
    id: 6,
    question: 'What export formats are supported?',
    answer: 'You can export your processes as PDF reports, Word documents, HTML web pages, printable checklists, and more. Perfect for sharing with team members or stakeholders.'
  },
  {
    id: 7,
    question: 'How is this different from other documentation tools?',
    answer: 'ProcessFlow Pro is specifically designed for business processes, not general documentation. We include industry templates, workflow builders, and AI suggestions tailored for SMEs.'
  },
  {
    id: 8,
    question: 'What happens to my data?',
    answer: 'Your data is stored securely and remains completely private. We never share, sell, or access your business processes. You can export everything at any time.'
  },
  {
    id: 9,
    question: 'Is there customer support?',
    answer: 'Yes! We provide priority email support to help you get the most out of ProcessFlow Pro. Most questions are answered within 24 hours.'
  },
  {
    id: 10,
    question: 'Can I use this for compliance documentation?',
    answer: 'Yes! ProcessFlow Pro generates professional documentation that meets most compliance requirements. Perfect for ISO, SOX, HIPAA, and other regulatory standards.'
  }
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about ProcessFlow Pro
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're here to help! Get in touch with our team for personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors">
                Contact Support
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}