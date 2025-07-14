'use client'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg animate-glow">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ProcessFlow Pro
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
              Transform your business processes into professional documentation in minutes. 
              <span className="block font-semibold text-blue-400 mt-2">
                💡 Save time, prevent knowledge loss, and standardize operations.
              </span>
            </p>
            <div className="flex space-x-4">
              <button className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="group text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              <button className="group text-gray-400 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Enhanced Product Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-blue-400 mr-2">🚀</span>
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('features')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="group text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center"
                >
                  <span className="group-hover:animate-bounce mr-2">✨</span>
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('pricing')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="group text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center"
                >
                  <span className="group-hover:animate-bounce mr-2">💰</span>
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('testimonials')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="group text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center"
                >
                  <span className="group-hover:animate-bounce mr-2">🗣️</span>
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('faq')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="group text-gray-300 hover:text-indigo-400 transition-all duration-300 flex items-center"
                >
                  <span className="group-hover:animate-bounce mr-2">❓</span>
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Enhanced Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="text-purple-400 mr-2">💬</span>
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <button className="group text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center">
                  <span className="group-hover:animate-bounce mr-2">📚</span>
                  Help Center
                </button>
              </li>
              <li>
                <button className="group text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center">
                  <span className="group-hover:animate-bounce mr-2">📧</span>
                  Contact Us
                </button>
              </li>
              <li>
                <button className="group text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center">
                  <span className="group-hover:animate-bounce mr-2">🔐</span>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="group text-gray-300 hover:text-indigo-400 transition-all duration-300 flex items-center">
                  <span className="group-hover:animate-bounce mr-2">📄</span>
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gradient-to-r from-gray-700 to-gray-600 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 ProcessFlow Pro. All rights reserved. 
              <span className="block sm:inline text-blue-400 mt-1 sm:mt-0 sm:ml-2">
                🚀 Built with love for SMEs worldwide
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-full px-4 py-2">
                <span className="text-green-800 dark:text-green-200 text-sm font-bold">
                  💰 $29.99 - Limited Time!
                </span>
              </div>
              <button 
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="group-hover:animate-bounce inline-block mr-2">⬆️</span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}