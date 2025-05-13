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
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:py-24">
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full max-w-2xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 text-[#F4A261] tracking-tight"
          style={{ letterSpacing: '-0.01em', fontFamily: 'var(--font-ibm-plex-sans, Inter, sans-serif)' }}
        >
          Zelo.ai
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-2xl font-medium mb-10 text-[#E0E1DD]"
        >
          <span className="block italic">Agentic AI Systems for Your Business, Built with Purpose.</span>
          <span className="block mt-1 text-sm sm:text-base not-italic text-[#A9B4C2]">AI That Works. Packs That Adapt.</span>
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-[#E0E1DD]/10 shadow-inner"
          style={{ boxShadow: '0 8px 32px 0 rgba(13,27,42,0.18)' }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 text-base font-medium bg-[#1B263B] text-white placeholder-[#E0E1DD] border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4A261] focus:outline-none transition-all duration-200 shadow-sm"
            style={{ minWidth: 0 }}
          />
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: 1.07, boxShadow: '0 6px 32px 0 #F4A26177' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="px-7 py-3 rounded-lg font-semibold text-base bg-[#F4A261] text-[#0D1B2A] shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#F4A261] focus:outline-none transition-all duration-200 disabled:opacity-60"
            style={{ boxShadow: '0 2px 8px 0 #F4A26133' }}
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </motion.button>
        </motion.form>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#F4A261] mt-4 text-base font-medium"
          >
            Thanks for joining! We will be in touch soon.
          </motion.p>
        )}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="mt-10 text-[#A9B4C2] text-sm sm:text-base"
        >
          Coming soon. Be the first to know when we launch.
        </motion.p>
      </motion.section>
    </main>
  )
}
