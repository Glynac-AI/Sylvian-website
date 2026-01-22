// components/home/AccelerateSection.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function AccelerateSection() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const contentY = useTransform(scrollYProgress, [0, 1], [50, -50])
    const visualY = useTransform(scrollYProgress, [0, 1], [80, -80])

    return (
        <section ref={sectionRef} className="relative py-36 md:py-44 px-6 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] right-[8%] w-[450px] h-[450px] rounded-full opacity-[0.025] blur-3xl bg-[#095520]" />
                <div className="absolute inset-0 opacity-[0.012]" style={{ backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.2) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 lg:gap-16 items-center">

                    <motion.div
                        className="lg:col-span-7 space-y-10"
                        style={{ y: contentY }}
                    >
                        <motion.h2
                            className="text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] font-semibold leading-[1.12] tracking-[-0.02em] text-[#095520]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            Accelerate capital deployment with a standardized framework
                        </motion.h2>

                        <motion.div
                            className="space-y-7 text-base md:text-lg lg:text-[1.2rem] font-light leading-[1.7] max-w-2xl text-[#013220]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <p>
                                Unfamiliar investment structures mean long approval cycles and repeated internal reviews. Sylvan solves this by structuring every investment around existing income producing real estate held in ring fenced SPVs with predefined assets and cash flows.
                            </p>
                            <p>
                                Approve our framework once, then deploy capital into multiple assets without analysing a new structure every time.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
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
                    </motion.div>

                    <motion.div
                        className="lg:col-span-5 relative"
                        style={{ y: visualY }}
                    >
                        <motion.div
                            className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#F3F4F1] to-white border border-[#095520]/10 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#095520]/30 to-transparent" />
                                <div className="relative h-full p-10 md:p-12 flex flex-col justify-between">
                                    <div className="space-y-8">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="text-[10px] uppercase tracking-[0.25em] text-[#095520]/50 font-bold mb-3">Framework</div>
                                                <div className="text-2xl md:text-3xl font-semibold text-[#095520]">Standardized<br />Structure</div>
                                            </div>
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#095520]/10 to-[#008929]/10 flex items-center justify-center">
                                                <svg className="w-7 h-7 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="space-y-7 pt-6">
                                            {[
                                                { label: 'One-Time Approval', value: '1×', desc: 'Framework Review' },
                                                { label: 'Deployment Speed', value: '10×', desc: 'Faster Capital Access' },
                                                { label: 'Assets Available', value: 'Multiple', desc: 'Diversified Options' }
                                            ].map((metric, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="space-y-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.6 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="flex items-end justify-between">
                                                        <div>
                                                            <span className="text-sm font-medium text-[#095520]/70 block mb-1">{metric.label}</span>
                                                            <span className="text-xs text-[#095520]/50">{metric.desc}</span>
                                                        </div>
                                                        <span className="text-2xl font-bold text-[#095520]">{metric.value}</span>
                                                    </div>
                                                    <div className="h-[2px] bg-gradient-to-r from-[#095520] to-[#095520]/20" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-10 space-y-4">
                                        {['Ring Fenced SPVs', 'Pre-Approved Structure', 'Repeatable Process'].map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center gap-3 text-sm"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 1 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="w-2 h-2 rounded-full bg-[#095520]" />
                                                <span className="text-[#095520]/80 font-medium">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl bg-[#095520]/[0.06] -z-10" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
