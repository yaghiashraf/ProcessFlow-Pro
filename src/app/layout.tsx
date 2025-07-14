import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProcessFlow Pro - Business Process Documentation Made Easy',
  description: 'Transform your business processes into professional documentation in minutes. Save time, prevent knowledge loss, and standardize operations.',
  keywords: 'business process, documentation, workflow, procedures, operations, SME, productivity',
  authors: [{ name: 'ProcessFlow Pro' }],
  openGraph: {
    title: 'ProcessFlow Pro - Business Process Documentation Made Easy',
    description: 'Transform your business processes into professional documentation in minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}