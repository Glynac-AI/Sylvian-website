// app/resources/investment-strategy/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function InvestmentStrategyPage() {
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)
    const section4Ref = useRef(null)

    const section1InView = useInView(section1Ref, { once: true, margin: "-100px" })
    const section2InView = useInView(section2Ref, { once: true, margin: "-100px" })
    const section3InView = useInView(section3Ref, { once: true, margin: "-100px" })
    const section4InView = useInView(section4Ref, { once: true, margin: "-100px" })

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
                            Structured Real Estate Credit
                        </h1>
                        <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-3xl">
                            Debt exposure on stabilized real estate with contractual priority and structural protections.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: Asset Selection */}
            <section ref={section1Ref} className="py-32 px-6 bg-[#F3F4F1] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                        {/* Content */}
                        <motion.div
                            className="lg:col-span-7 space-y-8"
                            initial={{ opacity: 0, x: -40 }}
                            animate={section1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-xs font-bold text-[#095520]/50 uppercase tracking-widest mb-4">
                                01. Asset Selection
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Income-Producing Real Estate Only
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Sylvan invests exclusively in properties with established rental income. No development risk, no construction uncertainty, and no reliance on future projections.
                                </p>
                                <p className="text-black">
                                    Your returns come from contractual debt payments backed by existing cash flows, not from betting on a developer's ability to execute or time an exit.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visualization */}
                        <motion.div
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, x: 40 }}
                            animate={section1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-white p-8 rounded-xl border border-[#095520]/10 shadow-lg">
                                <div className="mb-6 pb-4 border-b border-gray-200">
                                    <span className="text-sm font-bold text-[#095520]">Investment Requirements</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="bg-[#F3F4F1] p-5 rounded-lg border border-[#095520]/20 shadow-sm">
                                        <div className="flex items-start">
                                            <div className="mt-1 text-emerald-600 flex-shrink-0">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-bold text-[#095520] mb-1">Stabilized Cash Flow</h4>
                                                <p className="text-xs text-[#095520]/70 leading-relaxed">Rental income must already exist at the time of investment</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#F3F4F1] p-5 rounded-lg border border-[#095520]/20 shadow-sm">
                                        <div className="flex items-start">
                                            <div className="mt-1 text-emerald-600 flex-shrink-0">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-bold text-[#095520] mb-1">Legal Isolation</h4>
                                                <p className="text-xs text-[#095520]/70 leading-relaxed">Each portfolio sits in a separate SPV, protected from developer liabilities</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#F3F4F1] p-5 rounded-lg border border-[#095520]/20 shadow-sm">
                                        <div className="flex items-start">
                                            <div className="mt-1 text-emerald-600 flex-shrink-0">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-bold text-[#095520] mb-1">Uniform Structure</h4>
                                                <p className="text-xs text-[#095520]/70 leading-relaxed">Same legal and economic terms across all investments</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Capital Structure */}
            <section ref={section2Ref} className="py-32 px-6 bg-white relative overflow-hidden border-b border-gray-200">
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#008929]/[0.03] rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                        {/* Visualization */}
                        <motion.div
                            className="lg:col-span-5 relative order-2 lg:order-1"
                            initial={{ opacity: 0, x: -40 }}
                            animate={section2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-white p-16 rounded-xl border border-[#095520]/10 shadow-lg flex justify-center">
                                <div className="w-72 relative">
                                    <div className="h-16 bg-slate-200 border border-slate-300 rounded-t flex items-center justify-center">
                                        <span className="text-xs font-medium text-slate-600">Senior Bank Debt</span>
                                    </div>

                                    <div className="h-24 bg-[#095520] text-white flex flex-col items-center justify-center relative shadow-xl z-10 mx-[-8px] border-t border-[#095520]/70">
                                        <span className="font-bold text-base">Your Sylvan Position</span>
                                        <span className="text-xs text-yellow-400 mt-1">Priority claim on cash flows</span>
                                    </div>

                                    <div className="h-28 bg-[#F3F4F1] border-2 border-[#095520]/30 rounded-b flex flex-col items-center justify-center">
                                        <span className="text-sm font-medium text-[#095520]/70">Developer Equity</span>
                                        <span className="text-xs text-[#095520]/50 mt-1">Protective cushion</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            className="lg:col-span-7 space-y-8 order-1 lg:order-2 lg:pl-12"
                            initial={{ opacity: 0, x: 40 }}
                            animate={section2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-xs font-bold text-[#095520]/50 uppercase tracking-widest mb-4">
                                02. Capital Structure
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Senior Debt Position with Equity Protection
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Your investment is structured as debt with priority over the developer's equity. This means you have a senior claim on all cash flows generated by the portfolio.
                                </p>
                                <p className="text-black">
                                    The developer's equity sits below your position, creating a structural cushion that protects your capital. This subordination gives you enhanced security and priority access to the asset's income stream.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Payment Control */}
            <section ref={section3Ref} className="py-32 px-6 bg-[#F3F4F1] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                        {/* Content */}
                        <motion.div
                            className="lg:col-span-7 space-y-8"
                            initial={{ opacity: 0, x: -40 }}
                            animate={section3InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-xs font-bold text-[#095520]/50 uppercase tracking-widest mb-4">
                                03. Payment Control
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Lockbox-Enforced Payment Priority
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Rental income flows into a third-party bank-controlled lockbox account. This functions like an escrow where the bank, not the developer, controls when and how funds are released.
                                </p>
                                <p className="text-black">
                                    The lockbox enforces a strict payment order by contract. While funds are released for direct operational expenses to keep the asset performing, the developer receives no profit distributions until you are paid.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visualization */}
                        <motion.div
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, x: 40 }}
                            animate={section3InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-white p-10 rounded-xl border border-[#095520]/10 shadow-lg">
                                <div className="flex flex-col items-center w-full max-w-sm mx-auto">

                                    <div className="w-full p-4 bg-[#F3F4F1] border border-[#095520]/20 text-center rounded-lg mb-4">
                                        <div className="text-sm font-medium text-[#095520]">Monthly Rental Income</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">From property tenants</div>
                                    </div>

                                    <div className="w-px h-8 bg-[#095520]/20 mb-4"></div>

                                    <div className="w-full p-6 bg-[#095520] text-white text-center rounded-lg shadow-xl mb-4">
                                        <div className="text-xs font-bold text-yellow-400 uppercase mb-2">Third Party Control</div>
                                        <div className="text-base font-bold mb-1">Bank Lockbox</div>
                                        <div className="text-xs text-white/70">Enforces payment order</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: Portfolio Efficiency */}
            <section ref={section4Ref} className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={section4InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="text-xs font-bold text-[#095520]/50 uppercase tracking-widest mb-4">
                            04. Portfolio Efficiency
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520] mb-4">
                            Approve Once, Deploy Multiple Times
                        </h2>
                        <p className="text-base md:text-lg font-light text-black leading-relaxed mt-4 max-w-2xl mx-auto">
                            Your investment committee reviews and approves the Sylvan structure one time. After that approval, you can deploy capital into multiple properties without repeating the full structural review for each investment.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={section4InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="bg-[#095520] text-white p-12 rounded-xl shadow-xl text-center">
                            <div className="text-xs font-bold text-yellow-400 uppercase mb-4 tracking-widest">Initial Review</div>
                            <h3 className="text-2xl font-bold mb-4">Structure Approval</h3>
                            <p className="text-sm text-white/70 mb-8">One-time review of the Sylvan framework</p>
                            <div className="pt-6 border-t border-white/20">
                                <div className="text-3xl font-bold">3-4 weeks</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 bg-[#F3F4F1] border-2 border-emerald-600 rounded-lg shadow-sm text-center">
                                <div className="font-bold text-[#095520] text-lg">Portfolio 1</div>
                            </div>

                            <div className="p-6 bg-[#F3F4F1] border-2 border-emerald-600 rounded-lg shadow-sm text-center">
                                <div className="font-bold text-[#095520] text-lg">Portfolio 2</div>
                            </div>

                            <div className="p-6 bg-[#F3F4F1] border-2 border-emerald-600 rounded-lg shadow-sm text-center">
                                <div className="font-bold text-[#095520] text-lg">Portfolio 3</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}