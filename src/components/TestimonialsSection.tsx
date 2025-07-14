'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Operations Manager',
    company: 'TechFlow Solutions',
    industry: 'Software Development',
    content: 'ProcessFlow Pro saved us 40+ hours when documenting our client onboarding process. What used to take weeks now takes minutes. Our new hires are productive from day one.',
    rating: 5,
    savings: '$8,000 in training costs',
    avatar: 'SC'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'HR Director',
    company: 'GreenLeaf Manufacturing',
    industry: 'Manufacturing',
    content: 'After an experienced supervisor left, we almost lost our entire quality control process. ProcessFlow Pro helped us document everything systematically. Never again!',
    rating: 5,
    savings: 'Prevented $50K+ in errors',
    avatar: 'MR'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Practice Manager',
    company: 'Summit Dental Group',
    industry: 'Healthcare',
    content: 'The template library is amazing! We documented our entire patient intake process in 30 minutes. Our staff loves having clear, step-by-step procedures.',
    rating: 5,
    savings: '60% faster patient processing',
    avatar: 'EJ'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CEO',
    company: 'LocalEats Restaurant',
    industry: 'Food Service',
    content: 'From kitchen procedures to customer service scripts, ProcessFlow Pro helped us standardize everything. Now we can train new staff consistently across all locations.',
    rating: 5,
    savings: 'Reduced training time by 50%',
    avatar: 'DP'
  },
  {
    id: 5,
    name: 'Jessica Martinez',
    role: 'Operations Lead',
    company: 'ClearView Consulting',
    industry: 'Professional Services',
    content: 'The visual workflow creator is incredible. Our complex client delivery process is now crystal clear. Clients love the transparency and our team loves the clarity.',
    rating: 5,
    savings: 'Improved client satisfaction 40%',
    avatar: 'JM'
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Store Manager',
    company: 'Urban Fitness',
    industry: 'Retail',
    content: 'We documented our entire membership sales process with ProcessFlow Pro. New sales staff hit their targets 3x faster than before. The ROI is incredible.',
    rating: 5,
    savings: 'Increased sales by 30%',
    avatar: 'RK'
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Thousands of Businesses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how ProcessFlow Pro has transformed operations for SMEs across every industry.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
              {testimonials[currentTestimonial].avatar}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[currentTestimonial].industry}
              </p>
            </div>
          </div>

          <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
            "{testimonials[currentTestimonial].content}"
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600 dark:text-gray-300">5.0</span>
            </div>
            <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
              {testimonials[currentTestimonial].savings}
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(testimonial.id - 1)}
              className="text-center cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold text-lg mx-auto mb-2 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {testimonial.avatar}
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {testimonial.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {testimonial.industry}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10,000+</div>
              <p className="text-gray-600 dark:text-gray-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">4.9/5</div>
              <p className="text-gray-600 dark:text-gray-300">Customer Rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
              <p className="text-gray-600 dark:text-gray-300">Industries Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">98%</div>
              <p className="text-gray-600 dark:text-gray-300">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}