'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() { 
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1000) 
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-teal-50 to-teal-100/50 overflow-x-hidden" style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Sticky Navigation */}
      <nav className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between rounded-xl bg-white/80 backdrop-blur-sm shadow-lg px-6 py-4 border border-teal-200/50">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="text-xl font-bold text-teal-600 hover:text-teal-700 transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Zelo
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#agents" className="text-gray-700 hover:text-teal-600 transition-colors font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Agents
            </Link>
            <Link href="#consulting" className="text-gray-700 hover:text-teal-600 transition-colors font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Consulting
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-teal-400 rounded-full opacity-20 blur-3xl animate-float" />
      <div className="absolute top-40 left-32 w-24 h-24 bg-teal-300 rounded-full opacity-15 blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-32 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

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
              className="text-4xl md:text-6xl font-bold text-gray-800 tracking-tight leading-tight"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <span className="inline-block">
                <motion.span 
                  className="inline-block text-teal-600"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Zelo
                </motion.span>
              </span>
              <br />
              <span className="inline-block mt-3 relative">
                for Your Business
                <div className="absolute -bottom-1 left-0 w-full h-px bg-teal-500 rounded-full"></div>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 mt-10 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Custom websites, AI agents, and automations built specifically for your business
              <span className="block mt-4 text-gray-600 text-lg font-normal">Personal. Affordable. Reliable.</span>
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
                  className="flex-1 px-6 py-3 rounded-xl bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 border border-teal-200 shadow-md"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-60 shadow-md"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
                </motion.button>
              </form>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-teal-600 font-normal"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Thanks for joining! We&apos;ll be in touch soon.
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 bg-gradient-to-br from-teal-100 to-teal-200/50 relative">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 relative" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Prebuilt AI Agents That Just Work
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-px bg-teal-500"></div>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>Ready-to-deploy solutions that start working from day one</p>
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
            ].map((agent, index) => (
              <motion.div
                key={agent.title}
                whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)" }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-teal-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white text-sm mb-6 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {agent.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>{agent.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-20 bg-gradient-to-br from-teal-50 to-teal-100 relative">
        <div className="absolute top-16 right-16 w-16 h-16 bg-teal-400/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-teal-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 relative" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Custom AI Solutions, Built for What You Need
                <div className="absolute -bottom-2 left-0 w-20 h-px bg-teal-500"></div>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Have an idea? We'll help you bring it to life.
              </p>
              <p className="text-gray-700 mb-10 text-lg leading-relaxed font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>
                From simple automations to fully tailored AI agents, we build exactly what your business needs — no templates, just tech that works for you.
              </p>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center text-white text-xs mr-5 mt-1 shrink-0 shadow-md">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>Built-from-scratch AI tools</span>
                </li>
                <li className="flex items-start">
                  <div className="w-7 h-7 bg-teal-500 rounded-lg flex items-center justify-center text-white text-xs mr-5 mt-1 shrink-0 shadow-md">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>Tailored to your workflow, your goals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-7 h-7 bg-teal-700 rounded-lg flex items-center justify-center text-white text-xs mr-5 mt-1 shrink-0 shadow-md">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>Fast, affordable, and actually yours</span>
                </li>
              </ul>
            </div>
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <Image
                  src="/pexels-googledeepmind-17484901.jpg"
                  alt="AI and technology concept - representing custom AI solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-teal-100 to-teal-200/50 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 relative" style={{ fontFamily: 'Manrope, sans-serif' }}>
            About Zelo
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-px bg-teal-500"></div>
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Zelo started as a passion project between two friends who believed that great technology 
            shouldn't come with an astronomical price tag. We've seen too many small businesses 
            struggle with overpriced solutions that don't truly fit their needs.
          </p>
          <p className="text-lg text-gray-600 mb-16 leading-relaxed max-w-3xl mx-auto font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>
            That's why we build. Custom websites, AI agents, and automations that are crafted specifically 
            for your business - not cookie-cutter solutions. Every project gets our personal touch, 
            because we believe your business deserves something uniquely yours, at a price that actually makes sense.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { value: 'Personal Touch', bg: 'bg-teal-600' },
              { value: 'Fair Pricing', bg: 'bg-teal-700' },
              { value: 'Custom Built', bg: 'bg-teal-500' }
            ].map((item) => (
              <motion.div 
                key={item.value} 
                whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)" }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`p-8 rounded-xl ${item.bg} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white mb-6 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.value}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-teal-100 relative">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 relative" style={{ fontFamily: 'Manrope, sans-serif' }}>
            What Our Clients Say
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-px bg-teal-500"></div>
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>Real stories from real people who trusted us with their vision</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)" }}
              transition={{ type: "spring", stiffness: 400 }}
              className="p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-teal-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-md">
                  SC
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>Sarah Chen</h4>
                  <p className="text-gray-600 text-sm font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>Local Restaurant Owner</p>
                </div>
              </div>
              <div className="relative">
                <span className="text-2xl text-teal-400/30 font-serif absolute -top-1 -left-1">"</span>
                <p className="text-gray-700 leading-relaxed mb-4 italic pl-4 text-base" style={{ fontFamily: 'Georgia, serif' }}>
                  The Zelo team built us a beautiful website that perfectly captures our restaurant's personality. 
                  What impressed me most was how they really listened to what we needed and delivered something 
                  uniquely ours - not just another template. And the price was incredibly fair!
                </p>
                <span className="text-2xl text-teal-400/30 font-serif absolute -bottom-4 right-0">"</span>
              </div>
              <div className="flex text-teal-500 mt-6">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-sm">{star}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.15)" }}
              transition={{ type: "spring", stiffness: 400 }}
              className="p-8 rounded-xl bg-white/80 backdrop-blur-sm border border-teal-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center text-white font-semibold text-sm shadow-md">
                  MR
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800 text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>Marcus Rodriguez</h4>
                  <p className="text-gray-600 text-sm font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>E-commerce Business</p>
                </div>
              </div>
              <div className="relative">
                <span className="text-2xl text-teal-400/30 font-serif absolute -top-1 -left-1">"</span>
                <p className="text-gray-700 leading-relaxed mb-4 italic pl-4 text-base" style={{ fontFamily: 'Georgia, serif' }}>
                  Zelo automated our entire inventory management process. What used to take hours now happens 
                  automatically. They understood our workflow and built something that just works. 
                  The ROI was immediate and the team was incredibly responsive throughout the project.
                </p>
                <span className="text-2xl text-teal-400/30 font-serif absolute -bottom-4 right-0">"</span>
              </div>
              <div className="flex text-teal-500 mt-6">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-sm">{star}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-teal-100 to-teal-200/50 relative">
        <div className="absolute top-16 right-16 w-16 h-16 bg-teal-400/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-teal-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="max-w-xl mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 relative" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Let's Build Together
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-teal-500"></div>
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-lg mx-auto font-light" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Ready to bring your vision to life? Join our waitlist or reach out directly - we'd love to chat about your project and show you how affordable custom solutions can be.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-10">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-6 py-3 rounded-xl bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 border border-teal-200 shadow-md text-lg font-normal"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-normal focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 shadow-md text-lg"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Join Waitlist
            </motion.button>
          </form>
          <div className="flex justify-center space-x-10">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              className="text-teal-600 hover:text-teal-700 transition-colors font-normal text-lg"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              className="text-teal-600 hover:text-teal-700 transition-colors font-normal text-lg"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              WhatsApp
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              className="text-teal-600 hover:text-teal-700 transition-colors font-normal text-lg"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Calendly
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800/20 to-teal-600/20"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <p className="text-xl font-bold mb-3 text-teal-400" style={{ fontFamily: 'Manrope, sans-serif' }}>
              "Built by humans, for humans"
            </p>
            <p className="text-white/70 text-base font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Two friends, endless possibilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-xl font-bold mb-4 text-teal-400" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Zelo
              </div>
              <p className="text-white/60 font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>© 2024 Zelo. All rights reserved.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-teal-400 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Legal</h4>
              <Link href="#" className="block text-white/60 hover:text-teal-400 transition-colors font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>Privacy Policy</Link>
              <Link href="#" className="block text-white/60 hover:text-teal-400 transition-colors font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>Terms of Service</Link>
              <Link href="#" className="block text-white/60 hover:text-teal-400 transition-colors font-normal" style={{ fontFamily: 'Manrope, sans-serif' }}>Contact</Link>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-teal-400 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Connect</h4>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.01 }}
                className="block text-white/60 hover:text-teal-400 transition-colors font-normal"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                LinkedIn
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.01 }}
                className="block text-white/60 hover:text-teal-400 transition-colors font-normal"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                GitHub
              </motion.a>
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
