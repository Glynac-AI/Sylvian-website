// components/home/RentalYieldsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RentalYieldsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#008929]/[0.03] rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                    <motion.div 
                        className="lg:col-span-7 space-y-8" 
                        initial={{ opacity: 0, x: -40 }} 
                        animate={isInView ? { opacity: 1, x: 0 } : {}} 
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 
                            className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]"
                        >
                            {/* MODIFICATION: Removed manual break so it flows naturally */}
                            Access established rental yields without ownership risk
                        </h2>
                        <div 
                            /* MODIFICATION: Changed max-w-xl to max-w-lg to pull the text inside your red line */
                            className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-lg"
                        >
                            <p className="text-black">
                                RIAs can bypass the volatility of developer equity by participating in standardized debt issuance on existing properties. You are buying into proven rental yields rather than betting on the operational success of a developer.
                            </p>
                            <p className="text-black">
                                You get direct exposure to the performance of the real estate asset itself with a clear and secure path to returns.
                            </p>
                        </div>
                        <button
                            onClick={() => window.location.href = '/offerings'}
                            className="group relative inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-[0.1em] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100"
                        >
                            <span className="flex items-center gap-3">
                                View Current Listings
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </button>
                    </motion.div>

                    <motion.div 
                        className="lg:col-span-5 relative" 
                        initial={{ opacity: 0, x: 40 }} 
                        animate={isInView ? { opacity: 1, x: 0 } : {}} 
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
                            <div className="absolute inset-0 bg-[#F3F4F1]/80 backdrop-blur-sm rounded-2xl border border-[#095520]/10 shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #095520 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
                                <div className="relative h-full flex items-center justify-center p-12">
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-[#095520]/5 flex items-center justify-center mb-6">
                                            <svg className="w-8 h-8 text-[#095520]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-[#095520]/40 font-medium tracking-wide">Visual Asset</p>
                                        <p className="text-xs text-[#095520]/30">Graphic Design Team</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[#095520]/10 rounded-tr-2xl" />
                            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[#095520]/10 rounded-bl-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}