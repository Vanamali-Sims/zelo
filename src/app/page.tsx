'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

export default function Home() { 
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    
    setSending(true)

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      { user_email: email },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    ).then(
      () => {
        alert('Email sent! We\'ll get back to you soon.')
        setEmail('')
      },
      (error) => {
        console.error('Failed to send email:', error)
        alert('Something went wrong. Try again later.')
      }
    ).finally(() => setSending(false))
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(45,212,191,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(45,212,191,0.06),transparent_50%)]" />
      
      {/* Animated geometric shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 left-32 w-48 h-48 bg-gradient-to-br from-teal-300/15 to-teal-500/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-teal-500/15 to-teal-700/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Premium Navigation */}
      <nav className="sticky top-6 z-50 mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl px-8 py-5 border border-white/20 ring-1 ring-black/5"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent" style={{ fontFamily: 'Inter, sans-serif' }}>
              Zelo
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-10">
            {['Agents', 'Consulting', 'About', 'Contact'].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium text-lg relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg bg-teal-600 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </motion.div>
      </nav>

      {/* Hero Section - Enhanced Design */}
      <section className="relative py-20 md:py-24 lg:py-32 min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/40" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-teal-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-teal-300/20 to-teal-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-16"
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <motion.span 
                  className="flex items-center justify-center gap-4 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 bg-clip-text text-transparent"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                >
                  Zelo
                  <motion.div
                    className="w-3 h-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.span>
                <motion.span 
                  className="block text-gray-900 mt-3 text-4xl md:text-5xl lg:text-6xl font-medium"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                  for your business
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-12"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Simple AI tools to automate your grind — one agent at a time.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative group">
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 25px 50px rgba(45, 212, 191, 0.5)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-5 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-xl transition-all duration-300 shadow-xl relative overflow-hidden group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center gap-3 transition-all duration-300 group-hover:gap-4">
                    Get in Touch
                    <motion.svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </motion.button>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-6 text-gray-500 text-sm md:text-base"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Click above to jump to our contact form below
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Adopters Strip */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-white/20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 text-lg text-gray-600 font-medium">
              <span className="text-2xl">⚡️</span>
              <span style={{ fontFamily: 'Inter, sans-serif' }}>
                One client down. One AI agent live-tested. Let's build the next with you.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Agents Section - Professional Cards */}
      <section id="agents" className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Prebuilt AI Agents
              <span className="block text-teal-600 mt-2">That Just Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Ready-to-deploy solutions that start working from day one
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rostering Agent',
                description: 'Automate employee scheduling and shift management with AI-powered optimization that adapts to your business needs.',
                icon: '🤖',
                features: ['Smart Scheduling', 'Conflict Resolution', 'Real-time Updates']
              },
              {
                title: 'Onboarding Agent',
                description: 'Streamline new employee onboarding with intelligent process automation and personalized guidance.',
                icon: '🚀',
                features: ['Document Processing', 'Training Automation', 'Progress Tracking']
              },
              {
                title: 'Marketing Agent',
                description: 'Generate and optimize marketing content across multiple channels with AI-driven insights and automation.',
                icon: '📊',
                features: ['Content Generation', 'Multi-channel Publishing', 'Performance Analytics'],
                inDevelopment: true
              }
            ].map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 25px 50px rgba(45, 212, 191, 0.15)",
                  scale: 1.02
                }}
                className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{agent.icon}</div>
                    {agent.inDevelopment && (
                      <span className="flex items-center gap-1 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                        <span>🛠️</span>
                        In Development
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {agent.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {agent.description}
                  </p>
                  <ul className="space-y-3">
                    {agent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Section - Modern Split Layout */}
      <section id="consulting" className="py-24 md:py-32 bg-gradient-to-br from-teal-50/50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Custom AI Solutions
                <span className="block text-teal-600 mt-2">Built for You</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Have an idea? We'll help you bring it to life with cutting-edge technology.
              </p>
              <p className="text-lg text-gray-700 mb-12 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                From simple automations to fully tailored AI agents, we build exactly what your business needs — no templates, just technology that works for you.
              </p>

              <div className="space-y-6">
                {[
                  { icon: '🛠️', title: 'Built-from-scratch AI tools', desc: 'Custom solutions tailored to your specific requirements' },
                  { icon: '🎯', title: 'Tailored to your workflow', desc: 'Seamlessly integrated with your existing processes' },
                  { icon: '⚡', title: 'Fast, affordable, and yours', desc: 'Quick delivery without compromising on quality' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-teal-800/20 z-10" />
                <Image
                  src="/pexels-googledeepmind-17484901.jpg"
                  alt="AI and technology concept"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20">
                    <p className="text-gray-800 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      "No templates. No fluff. Just useful tech that solves real problems."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Premium Design */}
      <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
              About <span className="text-teal-600">Zelo</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Zelo started as a side hustle between two friends who wanted to build things that actually work.
            </p>
            <p className="text-lg text-gray-700 mb-16 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              We've seen too many small businesses struggle with overpriced solutions that don't truly fit their needs. 
              That's why we build custom websites, AI agents, and automations that are crafted specifically 
              for your business — not cookie-cutter solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Personal Touch', 
                icon: '👥',
                description: 'Every project gets our undivided attention and expertise',
                gradient: 'from-teal-500 to-teal-600' 
              },
              { 
                title: 'Fair Pricing', 
                icon: '💰',
                description: 'Quality solutions at prices that actually make sense',
                gradient: 'from-teal-600 to-teal-700' 
              },
              { 
                title: 'Custom Built', 
                icon: '🔧',
                description: 'Tailored solutions designed specifically for your needs',
                gradient: 'from-teal-700 to-teal-800' 
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 25px 50px rgba(45, 212, 191, 0.2)",
                  scale: 1.02
                }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${item.gradient} text-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced - HIDDEN FOR NOW */}
      {false && (
        <section className="py-24 md:py-32 bg-gradient-to-br from-teal-50/50 to-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                What Our Clients Say
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Real stories from real people who trusted us with their vision
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Sarah Chen',
                  role: 'Local Restaurant Owner',
                  avatar: 'SC',
                  testimonial: 'The Zelo team built us a beautiful website that perfectly captures our restaurant\'s personality. What impressed me most was how they really listened to what we needed and delivered something uniquely ours - not just another template. The price was incredibly fair!',
                  rating: 5
                },
                {
                  name: 'Marcus Rodriguez',
                  role: 'E-commerce Business',
                  avatar: 'MR',
                  testimonial: 'Zelo automated our entire inventory management process. What used to take hours now happens automatically. They understood our workflow and built something that just works. The ROI was immediate and the team was incredibly responsive.',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 25px 50px rgba(45, 212, 191, 0.15)",
                    scale: 1.02
                  }}
                  className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg italic" style={{ fontFamily: 'Georgia, serif' }}>
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section - Premium CTA */}
      <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
              Let's Build <span className="text-teal-600">Together</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ready to bring your vision to life? Join our waitlist or reach out directly — we'd love to chat about your project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <form onSubmit={sendEmail} className="flex flex-col sm:flex-row gap-4 p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address here..."
                className="flex-1 px-8 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 border border-gray-200 text-lg font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
                required
              />
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(45, 212, 191, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold text-lg transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {sending ? 'Sending...' : 'Get in Touch'}
              </motion.button>
            </form>
          </motion.div>

                      <div className="text-center">
              <p className="text-gray-600 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Ready to discuss your project? Enter your email above and we'll get back to you.
              </p>
            </div>
        </div>
      </section>

      {/* Footer - Minimalistic Design */}
      <footer className="relative bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-teal-600 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Zelo
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Built by humans, for humans
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-2 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Legal
                </h4>
                <div className="space-y-2">
                  {['Privacy Policy', 'Terms of Service'].map((item) => (
                    <Link key={item} href="#" className="block text-gray-600 hover:text-teal-600 transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Connect
                </h4>
                <div className="space-y-2">
                  {['LinkedIn', 'GitHub'].map((item) => (
                    <Link key={item} href="#" className="block text-gray-600 hover:text-teal-600 transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contact
              </h4>
              <Link href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get in touch
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2024 Zelo. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Real humans. Real results. Just getting started.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </main>
  )
}
