// components/home/RentalYieldsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function RentalYieldsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-36 md:py-44 px-6 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#095520]/[0.025] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#008929]/[0.025] rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.15) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 lg:gap-16 items-center">

                    <motion.div
                        className="lg:col-span-7 space-y-10"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[#095520]">
                            Access established rental yields without ownership risk
                        </h2>
                        <div className="space-y-7 text-base md:text-lg lg:text-[1.2rem] font-light leading-[1.7] max-w-2xl text-[#013220]">
                            <p>
                                Taking debt positions on existing income producing properties lets you bypass the volatility of developer equity. You are buying into proven rental yields rather than betting on the operational success of a developer.
                            </p>
                            <p>
                                This gives you direct exposure to the performance of the real estate asset itself with a clear and secure path to returns.
                            </p>
                        </div>
                        <Link href="/offerings">
                            <button
                                className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm md:text-base uppercase tracking-[0.12em] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                            >
                                View Current Listings
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F3F4F1] to-white rounded-2xl border border-[#095520]/10 shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #095520 1.5px, transparent 0)`, backgroundSize: '40px 40px' }} />
                                <div className="relative h-full flex items-center justify-center p-12">
                                    <div className="text-center space-y-6">
                                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#095520]/10 to-[#008929]/10 flex items-center justify-center mb-8">
                                            <svg className="w-10 h-10 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#095520]/50 font-semibold tracking-wider uppercase mb-2">Proven Returns</p>
                                            <p className="text-xs text-[#095520]/40">Established Rental Yields</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -right-4 w-28 h-28 border-t-[3px] border-r-[3px] border-[#095520]/15 rounded-tr-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-b-[3px] border-l-[3px] border-[#095520]/15 rounded-bl-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
