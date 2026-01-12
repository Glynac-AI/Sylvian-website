// app/page.tsx
'use client'

import Hero from '@/components/home/Hero'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Section 2: Accelerate capital deployment */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em]">
              <span className="text-[#095520]">Accelerate capital deployment</span>
              <span className="block mt-2 text-[#8C9196]">with a standardized framework</span>
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-[#095520]/75 font-light">
                RIAs face long approval cycles for unfamiliar investment products. Sylvan structures every investment around existing income-producing real estate held in ring-fenced SPVs with predefined assets and cash flows.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#095520]/60 font-light">
                Approve our framework once, then deploy capital into multiple assets without analyzing a new structure every time.
              </p>
            </div>

            <div className="pt-6">
              <motion.button
                onClick={() => window.location.href = '/offerings'}
                className="group relative inline-flex items-center gap-3 px-10 md:px-12 py-5 md:py-6 bg-[#095520] text-white rounded-full font-semibold text-sm md:text-base uppercase tracking-[0.1em] overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Current Listings
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#008929] via-[#095520] to-[#008929]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Section 3: Lockbox protected cash flows */}
      <section className="py-32 px-6 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em]">
              <span className="text-[#095520]">Lockbox protected</span>
              <span className="block mt-2 text-[#8C9196]">cash flows by design</span>
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-[#095520]/75 font-light">
                With Sylvan, RIAs do not face uncertainty around cash flow control and capital priority. We enforce a prioritized distribution waterfall where rental income flows to the bank and Sylvan investors before the developer can access a single dollar.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#095520]/60 font-light">
                You gain the peace of mind that comes from a rigorous legal structure designed specifically to mitigate risk and prioritize the safety of your principal.
              </p>
            </div>

            <div className="pt-6">
              <motion.button
                onClick={() => window.location.href = '/offerings'}
                className="group relative inline-flex items-center gap-3 px-10 md:px-12 py-5 md:py-6 bg-[#095520] text-white rounded-full font-semibold text-sm md:text-base uppercase tracking-[0.1em] overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Current Listings
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#008929] via-[#095520] to-[#008929]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Section 4: Access established rental yields */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em]">
              <span className="text-[#095520]">Access established rental yields</span>
              <span className="block mt-2 text-[#8C9196]">without ownership risk</span>
            </h2>

            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-[#095520]/75 font-light">
                RIAs can bypass the volatility of developer equity by participating in standardized debt issuance on existing properties. You are buying into proven rental yields rather than betting on the operational success of a developer.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#095520]/60 font-light">
                You get direct exposure to the performance of the real estate asset itself with a clear and secure path to returns.
              </p>
            </div>

            <div className="pt-6">
              <motion.button
                onClick={() => window.location.href = '/offerings'}
                className="group relative inline-flex items-center gap-3 px-10 md:px-12 py-5 md:py-6 bg-[#095520] text-white rounded-full font-semibold text-sm md:text-base uppercase tracking-[0.1em] overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Current Listings
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#008929] via-[#095520] to-[#008929]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  )
}