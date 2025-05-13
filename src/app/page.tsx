'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1000)
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#ffffff,#f8fafc,#f1f5f9)] overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-primary-50 via-primary-50/30 to-transparent -z-10 blur-[100px] opacity-60" />
        <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-50 via-blue-50/30 to-transparent -z-10 blur-[100px] opacity-60" />
        
        <div className="container mx-auto px-4 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full text-primary-700 text-sm font-medium mb-4 border border-primary-100 shadow-sm">
                Coming Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
            >
              Agentic AI Systems for Your Business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-12"
            >
              Transform your business with purpose-built AI that works.
              <span className="block mt-2 text-gray-500">Intelligent. Adaptable. Powerful.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-sm"
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02, boxShadow: '0 4px 20px rgba(14, 165, 233, 0.15)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
                </motion.button>
              </form>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-primary-600 font-medium"
                >
                  Thanks for joining! We'll be in touch soon.
                </motion.p>
              )}
            </motion.div>

            {/* Features Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: 'Intelligent Automation',
                  description: 'AI that learns and adapts to your business needs'
                },
                {
                  title: 'Seamless Integration',
                  description: 'Works with your existing tools and workflows'
                },
                {
                  title: 'Enterprise Ready',
                  description: 'Built for scale with security and compliance in mind'
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-50 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
