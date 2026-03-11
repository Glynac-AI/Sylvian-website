// components/home/AccelerateSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function AccelerateSection() {
    return (
        <section className="relative py-32 md:py-40 px-6 bg-[#0A3F28] overflow-hidden">

            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
                    backgroundSize: '72px 72px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

                    {/* Left: Image */}
                    <motion.div
                        className="relative order-1"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <div className="relative overflow-hidden rounded-2xl min-h-[320px] md:min-h-[520px] shadow-2xl ring-1 ring-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                                alt="Institutional real estate investment building"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A3F28]/35 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="order-2 space-y-8 lg:space-y-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-normal leading-[1.1] tracking-[-0.02em] text-white"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            Sylvan&apos;s Products
                        </motion.h2>

                        <motion.div
                            className="space-y-6 text-base md:text-lg font-light leading-relaxed"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <p className="text-[#D1D5DB] subtext">
                                Each structure serves a distinct purpose while operating under the same contractual, reporting, and disclosure framework.
                            </p>
                            <p className="text-[#D1D5DB] subtext">
                                Sylvan packages institutional-grade real estate opportunities into repeatable products designed for consistent diligence, cleaner approvals, and clearer monitoring across offerings.
                            </p>
                            <p className="text-[#D1D5DB] subtext">
                                The result is a product set that can support different portfolio objectives without forcing advisors to relearn the legal, reporting, and operational foundation each time.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <button
                                onClick={() => window.location.href = '/offerings'}
                                className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white text-[#0A3F28] rounded-full font-semibold text-sm md:text-base uppercase tracking-[0.1em] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    View Current Listings
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white via-[#D1D5DB] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% auto' }} />
                            </button>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}