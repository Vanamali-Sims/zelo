'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1000)
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Sticky Navigation */}
      <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between rounded-full border border-white/40 bg-white/80 px-6 py-3 backdrop-blur-md shadow-lg">
          <Link href="/" className="text-lg font-semibold text-gray-800">
            Zelo
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#agents" className="text-gray-700 hover:text-gray-900 transition">Agents</Link>
            <Link href="#consulting" className="text-gray-700 hover:text-gray-900 transition">Consulting</Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 transition">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#dbeafe_0%,transparent_70%)] opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(60deg,#bfdbfe_0%,transparent_80%)] opacity-40" />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-[#1a2b3b] tracking-tight"
            >
              <span className="inline-block">
                <span className="inline-block bg-gradient-to-r from-[#1a2b3b] via-[#1a2b3b] to-blue-600 bg-clip-text text-transparent">
                  Zelo
                </span>
              </span>
              <br />
              <span className="inline-block mt-1">for Your Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mt-6 mb-12"
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
                  className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 border border-gray-200 shadow-sm"
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 shadow-md"
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
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Prebuilt AI Agents That Just Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rostering Agent',
                description: 'Automate employee scheduling and shift management with AI-powered optimization'
              },
              {
                title: 'Onboarding Agent',
                description: 'Streamline new employee onboarding with intelligent process automation'
              },
              {
                title: 'Marketing Agent',
                description: 'Generate and optimize marketing content across multiple channels'
              }
            ].map((agent) => (
              <motion.div
                key={agent.title}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{agent.title}</h3>
                <p className="text-gray-700 leading-relaxed">{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Custom AI Built for Your Business</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-4 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-lg">Dojo grading systems with AI-powered assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-4 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-lg">Analytics agents for business intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-4 text-xl font-bold">•</span>
                  <span className="text-gray-700 text-lg">Custom workflow automation solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">About Zelo</h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Zelo is on a mission to make powerful AI tools accessible to small and medium enterprises. 
            As a solo-founded venture, we focus on delivering lean, secure, and effective AI solutions 
            that drive real business value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {['Adaptability', 'Automation', 'Affordability'].map((value) => (
              <div key={value} className="p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Get Started</h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Join our waitlist or reach out directly to learn more about how Zelo can help your business.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 border border-gray-300 shadow-sm text-lg"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-md text-lg"
            >
              Join Waitlist
            </button>
          </form>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-600 hover:text-blue-800 transition font-medium">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition font-medium">WhatsApp</a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition font-medium">Calendly</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-xl font-semibold mb-2">Zelo</div>
              <p className="text-slate-400">© 2024 Zelo. All rights reserved.</p>
            </div>
            <div className="space-y-2">
              <Link href="#" className="block text-slate-400 hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="block text-slate-400 hover:text-white transition">Terms of Service</Link>
              <Link href="#" className="block text-slate-400 hover:text-white transition">Contact</Link>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-slate-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="block text-slate-400 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  )
}
