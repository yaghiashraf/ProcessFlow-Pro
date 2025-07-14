'use client'

import { useState } from 'react'
import { ThemeToggleIcon } from './ThemeToggle'
import HeroSection from './HeroSection'
import ProblemSolutionSection from './ProblemSolutionSection'
import FeaturesSection from './FeaturesSection'
import TestimonialsSection from './TestimonialsSection'
import PricingSection from './PricingSection'
import FAQSection from './FAQSection'
import Footer from './Footer'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl z-50 border-b border-white/20 dark:border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-glow">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ProcessFlow Pro
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('features')}
                  className="relative group text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-200"></span>
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="relative group text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-200"></span>
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="relative group text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-green-50 dark:hover:bg-green-900/20"
                >
                  Testimonials
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-200"></span>
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="relative group text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                >
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-200"></span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggleIcon />
              <button
                onClick={() => scrollToSection('pricing')}
                className="hidden md:block group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="group-hover:animate-bounce inline-block mr-1">🚀</span>
                Get Started
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50 animate-slide-up">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-lg text-base font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
              >
                ✨ Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-4 py-3 rounded-lg text-base font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
              >
                💰 Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-4 py-3 rounded-lg text-base font-medium hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200"
              >
                🗣️ Testimonials
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-4 py-3 rounded-lg text-base font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-200"
              >
                ❓ FAQ
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg text-base font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
              >
                🚀 Get Started - $29.99
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}