'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SuccessContent() {
  const [sessionId, setSessionId] = useState<string>('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const id = searchParams.get('session_id')
    if (id) {
      setSessionId(id)
    }
  }, [searchParams])

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-green-100 dark:bg-green-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-8">
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to ProcessFlow Pro!
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Your payment was successful. You now have lifetime access to ProcessFlow Pro.
      </p>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          What's Next?
        </h2>
        <div className="space-y-4 text-left">
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
              1
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Check your email</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We've sent you a confirmation email with your receipt and access details.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
              2
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Set up your account</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Create your ProcessFlow Pro account to start documenting processes.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
              3
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Start documenting</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Use our templates and wizard to create your first process documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <Link
          href="/dashboard"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Access Your Dashboard
        </Link>
        <Link
          href="/"
          className="inline-block bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-md text-lg font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>

      {sessionId && (
        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Session ID: {sessionId}
        </div>
      )}
    </div>
  )
}