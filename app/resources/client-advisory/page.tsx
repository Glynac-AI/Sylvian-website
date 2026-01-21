// app/resources/client-advisory/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function ClientAdvisoryPage() {
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
                            Real Estate Income for Your Clients
                        </h1>
                        <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-3xl">
                            Offering real estate exposure with contractual payments and priority protection.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: Client Positioning */}
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
                                01. Client Positioning
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Real Estate Without Ownership Risk
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Your clients get exposure to real estate income without taking on the volatility of property ownership or the opacity of variable funds.
                                </p>
                                <p className="text-black">
                                    Instead of betting on appreciation or navigating complex fund structures, your clients receive contractual debt payments backed by existing rental income. This shifts the conversation from speculation to predictable cash flow.
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
                                <div className="space-y-6">
                                    <div className="bg-[#F3F4F1] p-6 rounded-lg border border-[#095520]/20 shadow-sm">
                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="text-sm font-bold text-[#095520]">Property Ownership</h4>
                                            <span className="text-xs font-bold text-[#095520]/40">Traditional</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-[#095520]/70">
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/40 mr-2">•</span>
                                                <span>Returns depend on portfolio value increase</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/40 mr-2">•</span>
                                                <span>Exposed to developer execution risk</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/40 mr-2">•</span>
                                                <span>Last to get paid from cash flows</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#F3F4F1] p-6 rounded-lg border border-[#095520]/20 shadow-sm">
                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="text-sm font-bold text-[#095520]">Other Standardized Platforms</h4>
                                            <span className="text-xs font-bold text-amber-600">Variable</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-[#095520]/70">
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/40 mr-2">•</span>
                                                <span>Structures vary across issuers and offerings</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/40 mr-2">•</span>
                                                <span>One underperforming asset impacts portfolio returns</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/40 mr-2">•</span>
                                                <span>Assets change over time, shifting risk profile</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#095520] text-white p-6 rounded-lg shadow-xl">
                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="text-sm font-bold">Sylvan Debt Position</h4>
                                            <span className="text-xs font-bold text-yellow-400">Priority</span>
                                        </div>
                                        <div className="space-y-2 text-xs text-white/80">
                                            <div className="flex items-center">
                                                <span className="text-yellow-400 mr-2">✓</span>
                                                <span>Returns from contractual debt payments</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-yellow-400 mr-2">✓</span>
                                                <span>Protected by developer equity cushion</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-yellow-400 mr-2">✓</span>
                                                <span>Priority access to rental income</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Client Benefits */}
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
                            <div className="bg-white p-10 rounded-xl border border-[#095520]/10 shadow-lg">
                                <div className="space-y-6">
                                    <div className="text-sm font-bold text-[#095520] mb-4">What Your Clients Actually Get</div>

                                    <div className="p-5 bg-emerald-50 border-2 border-emerald-600 rounded-lg">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-bold text-[#095520] mb-1">Predictable Income Stream</h4>
                                                <p className="text-xs text-[#095520]/80 leading-relaxed">Fixed debt payments from properties that are already generating rental income</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-[#F3F4F1] border border-[#095520]/30 rounded-lg">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-[#095520]/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <svg className="w-5 h-5 text-[#095520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-bold text-[#095520] mb-1">Priority Protection</h4>
                                                <p className="text-xs text-[#095520]/70 leading-relaxed">Senior position means they get paid before the developer accesses cash</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-[#F3F4F1] border border-[#095520]/30 rounded-lg">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 bg-[#095520]/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <svg className="w-5 h-5 text-[#095520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                                </svg>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-sm font-bold text-[#095520] mb-1">Structural Cushion</h4>
                                                <p className="text-xs text-[#095520]/70 leading-relaxed">Developer equity sits below their position, absorbing losses first</p>
                                            </div>
                                        </div>
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
                                02. Client Benefits
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Income Without the Uncertainty
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Traditional real estate equity investments require your clients to trust that the portfolio of properties will appreciate and the developer will execute well. That's a lot of unknowns.
                                </p>
                                <p className="text-black">
                                    Sylvan investments are backed by properties already producing rental income. Your clients receive debt payments based on existing cash flows, not future projections. The income is there from day one.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Risk Management */}
            <section ref={section3Ref} className="py-32 px-6 bg-[#F3F4F1] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />

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
                                03. Risk Management
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Protected by Structure, Not Just Promise
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Real estate ownership exposes your clients to construction risk, cost overruns, and developer mistakes. Sylvan eliminates these by putting clients in a senior debt position on stabilized properties.
                                </p>
                                <p className="text-black">
                                    Rental income flows into a bank-controlled lockbox that works like an escrow. The bank pays your clients first, then releases what's left to the developer. No discretion, no exceptions.
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
                            <div className="bg-white p-8 rounded-xl border border-[#095520]/10 shadow-lg">
                                <div className="mb-4">
                                    <div className="text-sm font-bold text-[#095520]">Risk Comparison</div>
                                </div>

                                <div className="space-y-3">
                                    <div className="bg-[#F3F4F1] p-4 rounded-lg border border-[#095520]/20">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-[#095520]">Construction Risk</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/60 mr-2">Equity Owner:</span>
                                                <span className="text-red-600 font-medium">Fully Exposed</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/60 mr-2">Sylvan:</span>
                                                <span className="text-emerald-600 font-bold">Avoided</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#F3F4F1] p-4 rounded-lg border border-[#095520]/20">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-[#095520]">Developer Performance</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/60 mr-2">Equity Owner:</span>
                                                <span className="text-red-600 font-medium">Critical</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/60 mr-2">Sylvan:</span>
                                                <span className="text-emerald-600 font-bold">Less Critical</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#F3F4F1] p-4 rounded-lg border border-[#095520]/20">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-[#095520]">Exit Timing Risk</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/60 mr-2">Equity Owner:</span>
                                                <span className="text-red-600 font-medium">High</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-[#095520]/60 mr-2">Sylvan:</span>
                                                <span className="text-emerald-600 font-bold">Reduced</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#095520] text-white p-4 rounded-lg shadow-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold">Payment Priority</span>
                                            <div className="flex items-center text-xs">
                                                <span className="text-white/70 mr-2">Equity:</span>
                                                <span className="mr-4">Last</span>
                                                <span className="text-white/70 mr-2">Sylvan:</span>
                                                <span className="font-bold text-yellow-400">First</span>
                                            </div>
                                        </div>
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
                            One Approval, Repeat Investing
                        </h2>
                        <p className="text-base md:text-lg font-light text-black leading-relaxed mt-4 max-w-2xl mx-auto">
                            You review and approve the Sylvan structure once. After that, you can allocate client capital into multiple properties without repeating the full due diligence process each time.
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
                            <h3 className="text-2xl font-bold mb-4">Framework Approval</h3>
                            <p className="text-sm text-white/70 mb-8">One-time review of the Sylvan structure and legal terms</p>
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