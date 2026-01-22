// components/home/LockboxSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function LockboxSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-36 md:py-44 px-6 bg-gradient-to-br from-[#F8FAF9] to-[#F3F4F1] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-[#095520]/[0.025] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#008929]/[0.025] rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #095520 1px, transparent 0)`, backgroundSize: '48px 48px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 lg:gap-16 items-center">

                    <motion.div
                        className="lg:col-span-5 relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative aspect-square max-w-md mx-auto lg:mr-auto">
                            <div className="absolute inset-0 bg-white rounded-2xl border border-[#095520]/10 shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #095520 1.5px, transparent 0)`, backgroundSize: '40px 40px' }} />
                                <div className="relative h-full flex items-center justify-center p-12">
                                    <div className="text-center space-y-6">
                                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#095520]/10 to-[#008929]/10 flex items-center justify-center mb-8">
                                            <svg className="w-10 h-10 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#095520]/50 font-semibold tracking-wider uppercase mb-2">Protected Structure</p>
                                            <p className="text-xs text-[#095520]/40">Lockbox Governed Cash Flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-4 -left-4 w-28 h-28 border-t-[3px] border-l-[3px] border-[#095520]/15 rounded-tl-2xl" />
                            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-[3px] border-r-[3px] border-[#095520]/15 rounded-br-2xl" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-7 space-y-10 order-1 lg:order-2 lg:pl-12"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[#095520]">
                            Lockbox protected cash flows by design
                        </h2>
                        <div className="space-y-7 text-base md:text-lg lg:text-[1.2rem] font-light leading-[1.7] max-w-2xl text-[#013220]">
                            <p>
                                With Sylvan, you do not face uncertainty around cash flow control and capital priority. We enforce a prioritized distribution waterfall where rental income flows to the bank and Sylvan investors before the developer can access a single dollar.
                            </p>
                            <p>
                                You gain the peace of mind that comes from a rigorous legal structure designed specifically to mitigate risk and prioritize the safety of your principal.
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

                </div>
            </div>
        </section>
    )
}
