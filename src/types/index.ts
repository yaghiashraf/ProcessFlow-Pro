export interface ProcessStep {
  id: string
  title: string
  description: string
  order: number
  isOptional?: boolean
  estimatedTime?: number
  resources?: string[]
  tags?: string[]
}

export interface BusinessProcess {
  id: string
  title: string
  description: string
  category: string
  steps: ProcessStep[]
  createdAt: Date
  updatedAt: Date
  isTemplate?: boolean
  author?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  estimatedTime?: number
  tags?: string[]
}

export interface ProcessTemplate {
  id: string
  name: string
  description: string
  category: string
  steps: ProcessStep[]
  industry?: string
  isPopular?: boolean
  usageCount?: number
}

export interface User {
  id: string
  email: string
  name: string
  company?: string
  role?: string
  isPaid: boolean
  createdAt: Date
  processes: BusinessProcess[]
}

export interface PaymentSession {
  id: string
  userId: string
  status: 'pending' | 'completed' | 'failed'
  amount: number
  currency: string
  createdAt: Date
}