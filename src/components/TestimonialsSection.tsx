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
    <div id="testimonials" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full px-6 py-2 mb-6">
            <span className="text-green-800 dark:text-green-200 text-sm font-bold">
              🏆 Real Results from Real Businesses
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Thousands of
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how ProcessFlow Pro has transformed operations for SMEs across every industry.
            <span className="block font-semibold text-green-600 dark:text-green-400 mt-2">
              Join the success stories! 📈
            </span>
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
          
          <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-green-200 dark:border-green-700">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-lg animate-glow">
                {testimonials[currentTestimonial].avatar}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </p>
                <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    🏢 {testimonials[currentTestimonial].industry}
                  </span>
                </div>
              </div>
            </div>

            <blockquote className="text-2xl text-gray-700 dark:text-gray-300 italic mb-8 leading-relaxed relative">
              <span className="text-6xl text-green-300 dark:text-green-600 absolute -top-4 -left-2">"</span>
              <span className="relative z-10">{testimonials[currentTestimonial].content}</span>
              <span className="text-6xl text-green-300 dark:text-green-600 absolute -bottom-8 -right-2">"</span>
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-3 text-lg font-bold text-gray-900 dark:text-white">5.0 ⭐</span>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300 px-6 py-3 rounded-2xl font-bold text-lg">
                💰 {testimonials[currentTestimonial].savings}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonial Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentTestimonial 
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 shadow-lg animate-pulse' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-green-400 dark:hover:bg-green-500'
              }`}
            />
          ))}
        </div>

        {/* Enhanced Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(testimonial.id - 1)}
              className="text-center cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3 transition-all duration-300 transform group-hover:scale-110 shadow-lg ${
                currentTestimonial === testimonial.id - 1
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white animate-bounce'
                  : 'bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 text-gray-700 dark:text-gray-300 group-hover:from-green-100 group-hover:to-blue-100 dark:group-hover:from-green-900/30 dark:group-hover:to-blue-900/30 group-hover:text-green-600 dark:group-hover:text-green-400'
              }`}>
                {testimonial.avatar}
              </div>
              <p className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {testimonial.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {testimonial.industry}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="mt-16 bg-gradient-to-r from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-3xl p-10 shadow-2xl border border-blue-200 dark:border-blue-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              The Numbers Speak for Themselves
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join thousands of businesses already saving time and money
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-600/50">
              <div className="text-3xl mb-3">😊</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">10,000+</div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">Happy Customers</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-600/50">
              <div className="text-3xl mb-3">⭐</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">4.9/5</div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">Customer Rating</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-600/50">
              <div className="text-3xl mb-3">🏢</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">Industries Served</p>
            </div>
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-600/50">
              <div className="text-3xl mb-3">👍</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">98%</div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}