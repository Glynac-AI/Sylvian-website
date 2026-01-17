// components/home/AccelerateSection.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AccelerateSection() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const contentY = useTransform(scrollYProgress, [0, 1], [50, -50])
    const visualY = useTransform(scrollYProgress, [0, 1], [80, -80])
    const logoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.02, 0])

    return (
        <section ref={sectionRef} className="relative py-32 md:py-40 px-6 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[700px] md:h-[700px]"
                    style={{ y: visualY, opacity: logoOpacity }}
                >
                    <Image src="/logo.png" alt="" fill className="object-contain opacity-100 -translate-x-[20%]" />
                </motion.div>
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl" style={{ background: 'radial-gradient(circle, rgba(9, 85, 32, 1) 0%, transparent 70%)' }} />
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                    <motion.div 
                        className="lg:col-span-7 space-y-8" 
                        style={{ y: contentY }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            Accelerate capital deployment with <br className="hidden lg:block" /> a standardized framework
                        </motion.h2>

                        <motion.div
                            /* MODIFICATION: Added max-w-xl here. 
                               This constrains the width of the paragraphs to align with the red line 
                               you indicated, without changing the card size or layout columns. */
                            className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <p className="text-black">
                                RIAs face long approval cycles for unfamiliar investment products. Sylvan structures every investment around existing income-producing real estate held in ring-fenced SPVs with predefined assets and cash flows.
                            </p>
                            <p className="text-black">
                                Approve our framework once, then deploy capital into multiple assets without analyzing a new structure every time.
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
                                className="group relative inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-[0.1em] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    View Current Listings
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#008929] via-[#095520] to-[#008929] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% auto' }} />
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="lg:col-span-5 relative" 
                        style={{ y: visualY }}
                    >
                        <motion.div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, margin: "-100px" }}>
                            <div className="relative h-full rounded-2xl bg-[#F3F4F1] border border-[#095520]/5 shadow-xl overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#095520]/20 to-transparent" />
                                <div className="relative h-full p-8 md:p-10 flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="text-[10px] uppercase tracking-[0.2em] text-[#095520]/40 font-semibold mb-2">Framework</div>
                                                <div className="text-2xl font-medium text-[#095520]">Standardized Structure</div>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-[#095520]/5 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="space-y-6 pt-4">
                                            {[
                                                { label: 'One-Time Approval', value: '1×', color: 'from-[#095520] to-[#008929]' },
                                                { label: 'Deployment Speed', value: '10×', color: 'from-[#008929] to-[#095520]' },
                                                { label: 'Assets Available', value: 'Multiple', color: 'from-[#095520] to-[#095520]/70' }
                                            ].map((metric, i) => (
                                                <motion.div key={i} className="space-y-2" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
                                                    <div className="flex items-end justify-between">
                                                        <span className="text-sm text-[#095520]/60">{metric.label}</span>
                                                        <span className="text-xl font-semibold text-[#095520]">{metric.value}</span>
                                                    </div>
                                                    <div className="h-[2px] bg-gradient-to-r opacity-20" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`, '--tw-gradient-from': '#095520', '--tw-gradient-to': '#008929' } as React.CSSProperties} />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-8 space-y-3">
                                        {['Ring-Fenced SPVs', 'Pre-Approved Structure', 'Repeatable Process'].map((feature, i) => (
                                            <motion.div key={i} className="flex items-center gap-2 text-sm" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#095520]" />
                                                <span className="text-[#095520]/70">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#095520]/5 -z-10" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}