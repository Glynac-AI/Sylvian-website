// app/resources/for-ccos/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function ForCCOsPage() {
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)

    const section1InView = useInView(section1Ref, { once: true, margin: "-100px" })
    const section2InView = useInView(section2Ref, { once: true, margin: "-100px" })
    const section3InView = useInView(section3Ref, { once: true, margin: "-100px" })

    return (
        <main className="min-h-screen bg-[#F3F4F1]">
            {/* Hero Section */}
            <section className="bg-[#0A3F28] text-white pt-32 pb-20 relative overflow-hidden">
                {/* Two small triangles — top-right and bottom-left */}
                <div className="absolute inset-0 opacity-[0.07]">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M70,0 L100,0 L100,30 Z" fill="#99F6E4"/>
                        <path d="M0,70 L30,100 L0,100 Z" fill="#99F6E4"/>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-4">
                            Sylvan Resources
                        </h1>
                        <p className="text-lg text-gray-300 font-light">
                            For CCOs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: Ring-Fenced SPVs */}
            <section ref={section1Ref} className="py-20 px-6 bg-white relative overflow-hidden border-b border-gray-200">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                        {/* Content */}
                        <motion.div
                            className="lg:col-span-7 space-y-8"
                            initial={{ opacity: 0, x: -40 }}
                            animate={section1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-xs font-bold text-[#095520]/80 uppercase tracking-widest mb-4">
                                01. Asset Isolation
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Ring-Fenced SPVs
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Each investment sits in its own standalone legal entity, completely separate from the developer's other operations and liabilities.
                                </p>
                                <p className="text-black">
                                    If the developer faces litigation, creditor claims, or bankruptcy, those issues remain outside the SPV. The assets you invested in stays protected and isolated.
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
                            <div className="bg-[#F3F4F1] p-10 rounded-2xl border border-[#095520]/10 shadow-lg">
                                <div className="space-y-8">
                                    <div className="grid grid-cols-2 gap-4 opacity-40">
                                        <div className="p-4 bg-white border-2 border-dashed border-[#095520]/30 rounded text-center text-xs text-[#095520]">
                                            Developer's<br />Other Projects
                                        </div>
                                        <div className="p-4 bg-white border-2 border-dashed border-[#095520]/30 rounded text-center text-xs text-[#095520]">
                                            Developer's<br />Operating Liabilities
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex-1 h-px bg-[#095520]/30"></div>
                                        <div className="px-4 py-1 bg-[#095520] text-yellow-400 text-xs font-bold rounded-full">
                                            LEGAL WALL
                                        </div>
                                        <div className="flex-1 h-px bg-[#095520]/30"></div>
                                    </div>

                                    <div className="bg-white border-4 border-[#095520] p-8 rounded shadow-lg text-center relative">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">
                                            PROTECTED
                                        </div>
                                        <h4 className="font-bold text-[#095520] text-lg mb-1">Sylvan SPV</h4>
                                        <p className="text-sm text-[#095520]">Your investment asset</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Standardization by Product Category */}
            <section ref={section2Ref} className="py-32 px-6 bg-[#F3F4F1] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#008929]/[0.03] rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                        {/* Visualization */}
                        <motion.div
                            className="lg:col-span-5 relative order-2 lg:order-1"
                            initial={{ opacity: 0, x: -40 }}
                            animate={section2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-white p-10 rounded-2xl border border-[#095520]/10 shadow-lg">
                                <h3 className="text-xs font-bold text-[#095520]/40 uppercase tracking-widest mb-6 text-center">
                                    Standardized Framework
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-5 bg-[#F3F4F1] border border-[#095520]/20 rounded-lg text-center">
                                        <div className="font-semibold text-sm text-[#095520]">Legal Structure</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Identical documentation</div>
                                    </div>
                                    <div className="p-5 bg-[#F3F4F1] border border-[#095520]/20 rounded-lg text-center">
                                        <div className="font-semibold text-sm text-[#095520]">Controls</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Fixed requirements</div>
                                    </div>
                                    <div className="p-5 bg-[#F3F4F1] border border-[#095520]/20 rounded-lg text-center">
                                        <div className="font-semibold text-sm text-[#095520]">Disclosure</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Uniform standards</div>
                                    </div>
                                </div>
                                <div className="mt-6 p-5 bg-[#095520] text-white rounded-lg shadow-xl text-center">
                                    <div className="text-xs font-bold text-yellow-400 uppercase mb-2">No Exceptions</div>
                                    <div className="font-bold text-sm">Zero Sponsor Variations</div>
                                    <div className="text-xs text-white/70 mt-1">Consistent governance</div>
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
                            <div className="text-xs font-bold text-[#095520]/80 uppercase tracking-widest mb-4">
                                02. Product Standardization
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Standardization by Product Category
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Sylvan enforces standardized legal, structural, and reporting frameworks within each product category, with no sponsor-specific exceptions. Each transaction of the same product type follows identical documentation, controls, and disclosure requirements.
                                </p>
                                <p className="text-black">
                                    This product-level standardization reduces interpretation risk, supports consistent oversight, and ensures sponsor records are defensible, auditable, and comparable within defined governance boundaries.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Structural Protection */}
            <section ref={section3Ref} className="py-32 px-6 bg-white relative overflow-hidden">
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
                            <div className="text-xs font-bold text-[#095520]/80 uppercase tracking-widest mb-4">
                                03. Capital Protection
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Your Position is Structurally Protected
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    The developer's equity sits below you in the capital structure. This means their capital acts as a protective cushion for your investment.
                                </p>
                                <p className="text-black">
                                    If portfolio performance declines, the developer's equity absorbs the impact. Your principal remains protected unless their entire position is exhausted first.
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
                            <div className="bg-[#F3F4F1] p-12 rounded-2xl border border-[#095520]/10 shadow-lg flex flex-col items-center">
                                <div className="text-xs text-[#095520]/80 mb-6 text-center">Capital Structure</div>

                                <div className="w-full max-w-sm space-y-3 relative">
                                    <div className="relative">
                                        <div className="h-12 bg-slate-200 border border-slate-300 rounded flex items-center justify-center text-slate-600 text-sm font-medium">
                                            Senior Debt
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="h-20 bg-[#095520] text-yellow-400 flex flex-col items-center justify-center relative shadow-lg rounded">
                                            <div className="font-bold text-lg">Your Position</div>
                                            <div className="text-xs text-yellow-400/70 mt-1">Protected by equity below</div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="h-24 bg-white border-2 border-[#095520]/30 rounded flex flex-col items-center justify-center text-[#095520]/70 text-sm">
                                            <div className="font-medium">Developer Equity</div>
                                            <div className="text-xs text-[#095520]/80 mt-1">Absorbs impact first</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    )
}
