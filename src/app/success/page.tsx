import { Suspense } from 'react'
import SuccessContent from '@/components/SuccessContent'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  )
}