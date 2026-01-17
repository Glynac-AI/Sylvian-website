// components/home/LockboxSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function LockboxSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-32 px-6 bg-[#F8FAF9] relative overflow-hidden">

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#008929]/[0.03] rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        className="relative order-2 md:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#095520]/10 shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03]" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, #095520 1px, transparent 0)`,
                                    backgroundSize: '32px 32px'
                                }} />
                                <div className="relative h-full flex items-center justify-center p-12">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-[#095520]/5 flex items-center justify-center mb-6">
                                            <svg className="w-8 h-8 text-[#095520]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-[#095520]/40 font-medium tracking-wide">Visual Asset</p>
                                        <p className="text-xs text-[#095520]/30">Graphic Design Team</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#095520]/10 rounded-tl-2xl" />
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#095520]/10 rounded-br-2xl" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-6 order-1 md:order-2"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-3xl md:text-4xl text-[#095520] leading-tight font-medium">
                            Lockbox protected cash flows by design
                        </h2>
                        {/* BLACK TEXT & INCREASED SIZE (Change 2 & 4) */}
                        <div className="space-y-4 leading-relaxed text-lg">
                            <p className="text-black font-light">
                                With Sylvan, RIAs do not face uncertainty around cash flow control and capital priority. We enforce a prioritized distribution waterfall where rental income flows to the bank and Sylvan investors before the developer can access a single dollar.
                            </p>
                            <p className="text-black font-light">
                                You gain the peace of mind that comes from a rigorous legal structure designed specifically to mitigate risk and prioritize the safety of your principal.
                            </p>
                        </div>
                        <button
                            onClick={() => window.location.href = '/offerings'}
                            // YELLOW TEXT (Change 3)
                            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-[0.1em] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                View Current Listings
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#008929] via-[#095520] to-[#008929] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% auto' }} />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}