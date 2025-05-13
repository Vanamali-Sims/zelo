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
    <main className="relative min-h-screen bg-gradient-to-br from-[#f6faff] to-[#dbeafe] overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#ffffff_0%,transparent_70%)] opacity-40" />
      <div className="absolute inset-0 bg-[linear-gradient(60deg,#f0f5ff_0%,transparent_80%)] opacity-30" />
      
      {/* Wave divider */}
      <div className="absolute left-0 right-0 top-[85vh] h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 backdrop-blur-[1px]" />
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" 
                fill="white" fillOpacity="0.1"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto py-20">
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-xl border border-white/60 px-8 py-12 sm:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div className="relative mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold text-[#1a2b3b] tracking-tight relative z-10"
                >
                  <span className="inline-block">
                    <span className="inline-block bg-gradient-to-r from-[#1a2b3b] via-[#1a2b3b] to-blue-600 bg-clip-text text-transparent">
                      Zelo
                    </span>
                  </span>
                  <br />
                  <span className="inline-block mt-1">for Your Business</span>
                </motion.h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 mb-12"
              >
                Helping small businesses leverage the power of new technology
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
                    className="flex-1 px-6 py-4 rounded-lg bg-white/90 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 border border-gray-200 shadow-sm"
                  />
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 shadow-md"
                  >
                    {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
                  </motion.button>
                </form>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-blue-600 font-medium"
                  >
                    Thanks for joining! We'll be in touch soon.
                  </motion.p>
                )}
              </motion.div>

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
                  <motion.div
                    key={feature.title}
                    whileHover={{ 
                      scale: 1.03,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 25 }
                    }}
                    className="group relative p-6 rounded-xl bg-gradient-to-b from-white/90 to-white/60 backdrop-blur-sm border border-white/60 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
