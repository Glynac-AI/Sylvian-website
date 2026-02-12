// components/home/OpeningSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function OpeningSection() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section ref={sectionRef} className="relative py-28 md:py-36 px-6 bg-[#F9FAFB] overflow-hidden border-b border-[#E5E7EB]">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] right-[8%] w-[400px] h-[400px] rounded-full opacity-[0.025] blur-3xl bg-[#095520]" />
                <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.2) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                    {/* Content */}
                    <motion.div 
                        className="lg:col-span-7 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Two-Liner Heading */}
                        <h2 className="text-3xl md:text-4xl font-serif leading-tight text-[#095520]">
                            <span className="block font-normal text-[#111827]">Sylvan gives you what sponsor diligence has always lacked:</span>
                            <span className="block italic">observable, repeatable behavioral evidence.</span>
                        </h2>

                        {/* Compact Subtext */}
                        <div className="space-y-5 text-base leading-normal text-black/80 max-w-lg">
                            <p>
                                You see how sponsors manage cash flow stress, maintain reserves, disclose problems, and forecast performance—not through sponsor-controlled reporting, but through uniform contractual requirements enforced by Sylvan.
                            </p>
                            <p>
                                Sponsor evaluation no longer depends on what a sponsor chooses to show. It depends on contractual obligations where non-compliance has immediate, enforceable consequences.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual Card */}
                    <motion.div 
                        className="lg:col-span-5 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="relative aspect-square max-w-sm mx-auto lg:ml-auto">
                            <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#F3F4F1] to-white border border-[#095520]/10 shadow-xl overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#095520]/30 to-transparent" />
                                <div className="relative h-full p-8 md:p-10 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#095520]/10 to-[#008929]/10 flex items-center justify-center">
                                            <svg className="w-7 h-7 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-xs uppercase tracking-[0.2em] text-[#095520] font-semibold mb-2">Evidence-Based</div>
                                            <div className="text-2xl font-serif text-[#095520] leading-tight">
                                                <span className="block font-normal">Observable</span>
                                                <span className="block italic">Behavior</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3 pt-4">
                                            {['Contractual Requirements', 'Enforced Compliance', 'Timestamped Records'].map((item, i) => (
                                                <div key={i} className="flex items-center gap-2.5 text-sm text-[#095520]">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#095520]" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#095520]/[0.04] -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}