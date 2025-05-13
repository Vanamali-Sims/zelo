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
    <main className="relative min-h-screen bg-gradient-to-b from-[#f1f6ff] to-[#e8f2ff] overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#e1eeff_0%,transparent_70%)] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(60deg,#dfeaff_0%,transparent_80%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#c7dbff_0%,transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#d4e4ff_0%,transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,#e5edff_0%,transparent_60%)] opacity-30" />
      
      {/* Content */}
      <div className="relative">
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
              <span className="inline-block px-4 py-1.5 bg-white/70 backdrop-blur-sm rounded-full text-blue-600 text-sm font-medium mb-4 border border-blue-100/40 shadow-[0_2px_8px_-2px_rgba(0,112,243,0.08)]">
                Coming Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#1e293b] to-[#334155]"
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
                  className="flex-1 px-6 py-4 rounded-lg bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 border border-blue-100/30"
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 shadow-[0_2px_10px_-3px_rgba(59,130,246,0.4)]"
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
                <div
                  key={feature.title}
                  className="p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-50 transition-all duration-200 hover:bg-white/80 hover:shadow-lg hover:shadow-blue-100/30 group"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors duration-200">{feature.title}</h3>
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
