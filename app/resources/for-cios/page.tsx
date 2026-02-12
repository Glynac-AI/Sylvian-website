// app/resources/for-cios/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function ForCIOsPage() {
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
                            For CIOs
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-white py-12 px-6 border-l-4 border-[#D9B44A]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl italic font-serif leading-relaxed text-gray-700">
                        &ldquo;Investors interpret standardized sponsor operating records to make informed capital allocation decisions.&rdquo;
                    </p>
                </div>
            </section>

            {/* Section 1: Contractual Cash Flow */}
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
                                01. Cash Flow Structure
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Contractual Cash Flow Across the Asset Lifecycle
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Sylvan structures senior debt investments across stabilized, semi-stabilized, and construction assets, with payment obligations governed by contractual priority. Depending on the asset stage, debt service is supported by existing rental income, funded interest reserves, or sponsor capital support.
                                </p>
                                <p className="text-black">
                                    Your returns are driven by enforceable payment structures and controlled cash flow, not by assumptions about development success or exit timing.
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
                                <h3 className="text-xs font-bold text-[#095520]/40 uppercase tracking-widest mb-6 text-center">
                                    Asset Lifecycle
                                </h3>
                                <div className="space-y-3 max-w-xs mx-auto">
                                    <div className="p-4 bg-white border-2 border-[#095520]/30 text-[#095520] text-center rounded-lg">
                                        <div className="font-semibold text-sm">Stabilized</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Rental income</div>
                                    </div>
                                    <div className="p-4 bg-white border-2 border-[#095520]/30 text-[#095520] text-center rounded-lg">
                                        <div className="font-semibold text-sm">Semi-Stabilized</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Interest reserves</div>
                                    </div>
                                    <div className="p-4 bg-white border-2 border-[#095520]/30 text-[#095520] text-center rounded-lg">
                                        <div className="font-semibold text-sm">Construction</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Sponsor support</div>
                                    </div>
                                </div>
                                <div className="mt-6 p-5 bg-[#095520] text-yellow-400 text-center rounded-lg shadow-xl">
                                    <div className="font-bold text-sm">Contractual Priority</div>
                                    <div className="text-xs text-yellow-400/70 mt-1">Enforceable payment structures</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Product-Level Standardization */}
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
                                    Defined Product Types
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-5 bg-[#F3F4F1] border border-[#095520]/20 rounded-lg text-center">
                                        <div className="font-semibold text-sm text-[#095520]">Fixed Structures</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Non-negotiable terms</div>
                                    </div>
                                    <div className="p-5 bg-[#F3F4F1] border border-[#095520]/20 rounded-lg text-center">
                                        <div className="font-semibold text-sm text-[#095520]">Standard Covenants</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Consistent requirements</div>
                                    </div>
                                    <div className="p-5 bg-[#F3F4F1] border border-[#095520]/20 rounded-lg text-center">
                                        <div className="font-semibold text-sm text-[#095520]">Uniform Reporting</div>
                                        <div className="text-xs text-[#095520]/60 mt-1">Comparable formats</div>
                                    </div>
                                </div>
                                <div className="mt-6 p-5 bg-[#095520] text-white rounded-lg shadow-xl text-center">
                                    <div className="text-xs font-bold text-yellow-400 uppercase mb-2">Result</div>
                                    <div className="font-bold text-sm">Meaningful Comparison</div>
                                    <div className="text-xs text-white/70 mt-1">Same risk & duration profile</div>
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
                                02. Standardization
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Product-Level Standardization
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Sylvan operates a small number of defined product types, each aligned to a specific stage of the real estate lifecycle. Within each product type, structures, covenants, reserve requirements, and reporting formats are fixed and non-negotiable.
                                </p>
                                <p className="text-black">
                                    This allows you to meaningfully compare sponsor performance within the same risk and duration profile, ensuring differences in outcomes reflect execution rather than structural variation.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Senior Debt Position */}
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
                                            Senior Bank Debt
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="h-20 bg-[#095520] text-yellow-400 flex flex-col items-center justify-center relative shadow-lg rounded">
                                            <div className="font-bold text-lg">Your Sylvan Position</div>
                                            <div className="text-xs text-yellow-400/70 mt-1">Senior claim on cash flows</div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="h-24 bg-white border-2 border-[#095520]/30 rounded flex flex-col items-center justify-center text-[#095520]/70 text-sm">
                                            <div className="font-medium">Developer Equity</div>
                                            <div className="text-xs text-[#095520]/80 mt-1">Structural cushion</div>
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
