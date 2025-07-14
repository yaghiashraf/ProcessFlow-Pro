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
    <div id="faq" className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-800 dark:text-purple-200 text-sm font-bold">
              ❓ Got Questions? We've Got Answers!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about ProcessFlow Pro
            <span className="block font-semibold text-purple-600 dark:text-purple-400 mt-2">
              Clear answers to help you decide! 💡
            </span>
          </p>
        </div>

        {/* Enhanced FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-200 dark:border-purple-700/50 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-102"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 dark:hover:from-purple-900/30 dark:hover:to-indigo-900/30 transition-all duration-300"
              >
                <span className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center transform transition-all duration-300 ${
                  openFAQ === faq.id ? 'rotate-180 scale-110' : 'group-hover:scale-105'
                }`}>
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openFAQ === faq.id && (
                <div className="px-8 pb-6 animate-slide-up">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700/30">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Still have questions? */}
        <div className="text-center mt-16">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-r from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/30 rounded-3xl p-10 shadow-2xl border border-purple-200 dark:border-purple-700">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're here to help! Get in touch with our team for personalized support.
                <span className="block font-semibold text-purple-600 dark:text-purple-400 mt-2">
                  👋 Fast, friendly support guaranteed!
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <span className="group-hover:animate-bounce inline-block mr-2">💬</span>
                  Contact Support
                </button>
                <button className="group border-2 border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200">
                  <span className="group-hover:animate-bounce inline-block mr-2">📹</span>
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}