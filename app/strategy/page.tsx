// app/strategy/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function StrategyPage() {
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)

    const section1InView = useInView(section1Ref, { once: true, margin: "-100px" })
    const section2InView = useInView(section2Ref, { once: true, margin: "-100px" })
    const section3InView = useInView(section3Ref, { once: true, margin: "-100px" })

    return (
        <main className="min-h-screen bg-[#F3F4F1]">
            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-white overflow-hidden border-b border-gray-200">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#095520] mb-6 tracking-tight leading-[1.1]">
                            The Sylvan Framework
                        </h1>
                        <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-3xl">
                            A standardized approach to real estate debt, designed for RIA compliance and capital efficiency.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: The Asset */}
            <section ref={section1Ref} className="py-32 px-6 bg-[#F3F4F1] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                        {/* Visualization */}
                        <motion.div
                            className="lg:col-span-5 relative order-2 lg:order-1"
                            initial={{ opacity: 0, x: -40 }}
                            animate={section1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-[#095520]/10 shadow-2xl">
                                <h3 className="text-xs font-bold text-[#095520]/40 uppercase tracking-widest mb-6 text-center">
                                    The Capital Stack
                                </h3>
                                <div className="space-y-3 max-w-xs mx-auto">
                                    <div className="p-4 bg-slate-200 text-slate-600 text-center rounded-lg text-sm font-medium border border-slate-300">
                                        Senior Bank Debt
                                    </div>
                                    <div className="p-6 bg-[#095520] text-yellow-400 text-center rounded-lg shadow-xl transform scale-105 z-10 relative">
                                        <div className="font-bold text-base">Sylvan Debt Position</div>
                                        <div className="text-xs text-yellow-400/70 mt-2">What you are buying</div>
                                    </div>
                                    <div className="p-4 bg-white border-2 border-dashed border-[#095520]/30 text-[#095520]/60 text-center rounded-lg text-sm">
                                        Developer Equity
                                        <span className="block text-xs text-[#095520]/40 mt-1">Absorbs volatility</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="lg:col-span-7 space-y-8 order-1 lg:order-2 lg:pl-12"
                            initial={{ opacity: 0, x: 40 }}
                            animate={section1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-emerald-600 font-bold mb-2 text-sm tracking-wide">
                                01. THE ASSET
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Standardized Debt on Stabilized Assets
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    With Sylvan, you aren't betting on a developer's operational success. You are buying a standardized debt position secured by existing, income-producing real estate.
                                </p>
                                <p className="text-black">
                                    This structure allows you to bypass the volatility of equity and gain direct exposure to proven rental yields.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: The Mechanics */}
            <section ref={section2Ref} className="py-32 px-6 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#008929]/[0.03] rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                        {/* Content */}
                        <motion.div
                            className="lg:col-span-7 space-y-8"
                            initial={{ opacity: 0, x: -40 }}
                            animate={section2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-emerald-600 font-bold mb-2 text-sm tracking-wide">
                                02. THE MECHANICS
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Lockbox Protected Cash Flows
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Rental income never touches the developer's accounts. Tenants pay directly into a third-party bank-controlled lockbox that functions like an independent escrow.
                                </p>
                                <p className="text-black">
                                    The bank releases funds in strict order enforced by contract. <strong>Direct operational expenses are funded first</strong>, then Sylvan investors receive their distributions. The developer can only access net profits after your payments are complete.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visualization */}
                        <motion.div
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, x: 40 }}
                            animate={section2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-white p-10 rounded-2xl border border-[#095520]/10 shadow-2xl">
                                <div className="flex flex-col items-center space-y-5">
                                    <div className="w-full p-4 bg-[#F3F4F1] border border-[#095520]/20 text-center rounded-lg">
                                        <div className="text-sm font-semibold text-[#095520]">Monthly Rent</div>
                                        <div className="text-xs text-[#095520]/50 mt-1">From tenants</div>
                                    </div>

                                    <div className="w-px h-8 bg-[#095520]/20"></div>

                                    <div className="w-full p-5 bg-[#095520] text-white text-center rounded-lg shadow-lg">
                                        <div className="text-xs font-bold text-yellow-400 uppercase mb-2">Bank Controlled</div>
                                        <div className="font-bold text-base mb-1">Lockbox Escrow</div>
                                        <div className="text-xs text-white/70">Third party enforces payment order</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Efficiency */}
            <section ref={section3Ref} className="py-32 px-6 bg-[#F3F4F1]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={section3InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="text-emerald-600 font-bold mb-2 text-sm tracking-wide">
                            03. THE EFFICIENCY
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520] mb-6">
                            Approve Once, Deploy Repeatedly
                        </h2>
                        <p className="text-base md:text-lg font-light text-black leading-relaxed">
                            Stop analyzing new legal structures for every deal. Approve the Sylvan framework once, then deploy capital into multiple pre-approved, ring-fenced SPVs.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={section3InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="p-8 bg-[#095520] text-white rounded-xl text-center w-72 shadow-xl">
                            <div className="text-4xl font-light mb-3">1</div>
                            <div className="text-sm font-semibold">Framework Approval</div>
                            <div className="text-xs text-white/70 mt-2">One time review</div>
                        </div>

                        <div className="hidden md:block text-[#095520]/30 text-3xl font-light">→</div>

                        <div className="flex space-x-3">
                            <div className="p-6 bg-white border-2 border-emerald-600 rounded-xl text-center w-32 shadow-sm">
                                <div className="text-xs text-emerald-600 font-bold uppercase mb-2">Deploy</div>
                                <div className="font-bold text-[#095520]">Portfolio A</div>
                            </div>
                            <div className="p-6 bg-white border-2 border-emerald-600 rounded-xl text-center w-32 shadow-sm">
                                <div className="text-xs text-emerald-600 font-bold uppercase mb-2">Deploy</div>
                                <div className="font-bold text-[#095520]">Portfolio B</div>
                            </div>
                            <div className="p-6 bg-white border-2 border-emerald-600 rounded-xl text-center w-32 shadow-sm">
                                <div className="text-xs text-emerald-600 font-bold uppercase mb-2">Deploy</div>
                                <div className="font-bold text-[#095520]">Portfolio C</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}