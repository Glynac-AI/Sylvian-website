// components/home/AccelerateSection.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AccelerateSection() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95])

    return (
        <section ref={sectionRef} className="relative py-32 px-6 bg-white overflow-hidden">

            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large floating orbs */}
                <motion.div
                    className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(9, 85, 32, 0.3) 0%, transparent 70%)',
                        y: y
                    }}
                />
                <motion.div
                    className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 137, 41, 0.25) 0%, transparent 70%)',
                        y: useTransform(scrollYProgress, [0, 1], [-80, 80])
                    }}
                />

                {/* Animated lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
                    <motion.path
                        d="M0,200 Q400,100 800,200 T1600,200"
                        fill="none"
                        stroke="rgba(9, 85, 32, 0.5)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />
                    <motion.path
                        d="M0,400 Q400,300 800,400 T1600,400"
                        fill="none"
                        stroke="rgba(0, 137, 41, 0.5)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />
                </svg>

                {/* Geometric shapes */}
               
                <motion.div
                    className="absolute bottom-[30%] right-[15%] w-24 h-24 border-2 border-[#008929]/10"
                    style={{ borderRadius: '30%' }}
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                style={{ opacity, scale }}
            >
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                    >

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-[-0.02em]">
                            <span className="text-[#095520]">Accelerate capital</span>
                            <br />
                            <span className="text-[#095520]">deployment with a</span>
                            <br />
                            <span className="text-[#095520]">standardized framework</span>
                        </h2>

                        <div className="space-y-4 text-lg text-[#095520]/70 font-light leading-relaxed">
                            <p>
                                RIAs face long approval cycles for unfamiliar investment products. Sylvan structures every investment around existing income-producing real estate held in ring-fenced SPVs with predefined assets and cash flows.
                            </p>
                            <p className="text-[#095520]/60">
                                Approve our framework once, then deploy capital into multiple assets without analyzing a new structure every time.
                            </p>
                        </div>

                        <motion.button
                            onClick={() => window.location.href = '/offerings'}
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#095520] text-white rounded-full font-semibold text-sm uppercase tracking-[0.1em] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                View Current Listings
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#008929] via-[#095520] to-[#008929] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% auto' }} />
                        </motion.button>
                    </motion.div>

                    {/* Right: Visual Element */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Main card */}
                            <motion.div
                                className="relative h-full rounded-3xl bg-[#F3F4F1]/80 backdrop-blur-sm border border-[#095520]/10 shadow-2xl overflow-hidden p-8"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Subtle grid background */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, #095520 1px, transparent 0)`,
                                    backgroundSize: '32px 32px'
                                }} />

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-between">

                                    {/* Top: Stats */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs uppercase tracking-[0.2em] text-[#095520]/40 font-semibold">
                                                Framework Overview
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-[#095520]/5 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Animated progress bars */}
                                        {[
                                            { label: 'Approval Speed', value: 95, delay: 0 },
                                            { label: 'Structure Consistency', value: 100, delay: 0.2 },
                                            { label: 'Deployment Efficiency', value: 90, delay: 0.4 }
                                        ].map((item, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-[#095520]/60 font-medium">{item.label}</span>
                                                    <span className="text-[#095520] font-bold">{item.value}%</span>
                                                </div>
                                                <div className="h-2 bg-[#095520]/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-[#095520] to-[#008929] rounded-full"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.value}%` }}
                                                        transition={{ duration: 1.5, delay: item.delay, ease: "easeOut" }}
                                                        viewport={{ once: true }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom: Features */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { icon: '🔒', label: 'Ring-Fenced' },
                                            { icon: '⚡', label: 'Pre-Approved' },
                                            { icon: '📊', label: 'Standardized' },
                                            { icon: '✓', label: 'Repeatable' }
                                        ].map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center gap-3 p-4 rounded-xl bg-[#095520]/5 border border-[#095520]/10"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(9, 85, 32, 0.08)' }}
                                            >
                                                <span className="text-2xl">{feature.icon}</span>
                                                <span className="text-xs font-semibold text-[#095520]">{feature.label}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating accent elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#095520]/20 to-transparent blur-2xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-tr from-[#008929]/20 to-transparent blur-2xl"
                                animate={{
                                    scale: [1.2, 1, 1.2],
                                    opacity: [0.8, 0.5, 0.8]
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}