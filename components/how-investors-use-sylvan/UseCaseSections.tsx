// components/how-investors-use-sylvan/UseCaseSections.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function UseCaseSections() {
    // Refs for animation triggers
    const sec1Ref = useRef(null)
    const sec2Ref = useRef(null)
    const sec3Ref = useRef(null)
    const sec4Ref = useRef(null)

    // InView hooks
    const sec1InView = useInView(sec1Ref, { once: true, margin: "-100px" })
    const sec2InView = useInView(sec2Ref, { once: true, margin: "-100px" })
    const sec3InView = useInView(sec3Ref, { once: true, margin: "-100px" })
    const sec4InView = useInView(sec4Ref, { once: true, margin: "-100px" })

    return (
        <>
            {/* Section 01: Verify Before You Commit (White) */}
            <section ref={sec1Ref} className="w-full border-b border-[#E5E7EB] overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            className="lg:col-span-5"
                            initial={{ opacity: 0, x: -50 }}
                            animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#111827] mb-6 leading-tight">
                                Verify Before You Commit
                            </h2>

                            <p className="text-gray-600 text-base mb-6 leading-normal">
                                Before you commit capital to a sponsor, you can review their operating record across every obligation they have fulfilled on the platform.
                            </p>
                            <p className="text-gray-600 text-sm mb-4 font-medium">You see:</p>
                            <ul className="space-y-4 mb-8 text-sm text-gray-700">
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    How reliably the sponsor meets payments, and whether those payments come from asset cash flow or their own capital
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Whether they maintain required reserves or deplete them under pressure
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    How closely their original projections match what actually happened
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    How quickly they disclose problems when they arise
                                </li>
                            </ul>
                            <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-[#E5E7EB] pt-4">
                                THESE TELLS YOU HOW A SPONSOR OPERATES BEFORE YOUR CAPITAL IS AT RISK.
                            </p>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, x: 50 }}
                            animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                <div className="flex justify-between items-end mb-8 border-b border-[#E5E7EB] pb-4">
                                    <h3 className="font-serif text-lg text-[#111827]">Sponsor Operating Summary</h3>
                                    <span className="text-[10px] font-mono uppercase text-gray-400">PRE-ALLOCATION REVIEW</span>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB]">
                                            <span className="text-[10px] font-mono text-gray-400 uppercase block mb-2">Payment History</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#0A3F28]"></div>
                                                <span className="text-lg font-bold text-[#111827]">98% On-Time</span>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB]">
                                            <span className="text-[10px] font-mono text-gray-400 uppercase block mb-2">Payment Source</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#0A3F28]"></div>
                                                <span className="text-lg font-bold text-[#111827]">92% Cash Flow</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB]">
                                            <span className="text-[10px] font-mono text-gray-400 uppercase block mb-2">Forecast Accuracy</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#D9B44A]"></div>
                                                <span className="text-lg font-bold text-[#111827]">-4% Avg Variance</span>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB]">
                                            <span className="text-[10px] font-mono text-gray-400 uppercase block mb-2">Disclosure Speed</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#0A3F28]"></div>
                                                <span className="text-lg font-bold text-[#111827]">&lt;24h Avg</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-[#E5E7EB] pt-4">
                                        <span className="text-[10px] font-mono text-gray-400 uppercase block mb-2">Obligations Tracked</span>
                                        <span className="text-2xl font-bold text-[#0A3F28]">12 Deals</span>
                                        <span className="text-sm text-gray-500 ml-2">over 4 years</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 02: Standardize Your Investment Review (Gray) */}
            <section ref={sec2Ref} className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            className="lg:col-span-7 order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-serif text-lg text-[#111827]">IC-Ready Materials</h3>
                                    <span className="text-[10px] font-mono text-gray-400 uppercase">FIDUCIARY DOCUMENTATION</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-4 border border-[#E5E7EB] bg-[#F9FAFB]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#0A3F28] flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-[#111827]">Sponsor operating summaries</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-[#0A3F28]">STANDARDIZED</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-[#E5E7EB] bg-[#F9FAFB]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#0A3F28] flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-[#111827]">Historical performance tables</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-[#0A3F28]">STANDARDIZED</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-[#E5E7EB] bg-[#F9FAFB]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#0A3F28] flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-[#111827]">Deal-level behavior context</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-[#0A3F28]">STANDARDIZED</span>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border border-[#E5E7EB] bg-[#F9FAFB]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#0A3F28] flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-[#111827]">Disclosure and monitoring timelines</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-[#0A3F28]">STANDARDIZED</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-5 order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#111827] mb-6 leading-tight">
                                Standardize Your Investment Review
                            </h2>

                            <p className="text-gray-600 text-base mb-6 leading-normal">
                                Sylvan produces investment-committee-ready materials suitable for fiduciary documentation.
                            </p>
                            <p className="text-gray-600 text-sm mb-4 font-medium">You use:</p>
                            <ul className="space-y-4 mb-8 text-sm text-gray-700">
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Sponsor operating summaries
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Performance records measured against the original underwriting
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Deal-level behavior tracked across payments, reserves, and disclosures
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Timestamped event logs that show exactly when things happened and when they were reported
                                </li>
                            </ul>
                            <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-gray-200 pt-4">
                                EVERY RECORD IS BUILT FROM CONTRACTUALLY REQUIRED DATA, NOT SPONSOR-PRODUCED MATERIALS.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 03: Monitor Your Portfolio (White) */}
            <section ref={sec3Ref} className="w-full border-b border-[#E5E7EB] overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            className="lg:col-span-5"
                            initial={{ opacity: 0, x: -50 }}
                            animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#111827] mb-6 leading-tight">
                                Monitor Your Portfolio
                            </h2>

                            <p className="text-gray-600 text-base mb-6 leading-normal">
                                After you invest, Sylvan continues capturing sponsor behavior every reporting period. You do not need to wait for something to go wrong to know a sponsor's performance is shifting.
                            </p>
                            <p className="text-gray-600 text-sm mb-4 font-medium">You use Sylvan to:</p>
                            <ul className="space-y-4 mb-8 text-sm text-gray-700">
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Track whether execution and reporting discipline are holding across periods
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Identify early warning signals before they become material problems
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Support watchlist and escalation decisions with documented evidence
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Conduct periodic sponsor reviews with a complete behavioral record already assembled
                                </li>
                            </ul>
                            <p className="text-xs font-bold text-[#0A3F28] uppercase tracking-wide border-t border-[#E5E7EB] pt-4">
                                BECAUSE BEHAVIOR IS CAPTURED CONSISTENTLY EVERY MONTH, CHANGES IN SPONSOR PERFORMANCE ARE VISIBLE EARLY.
                            </p>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, x: 50 }}
                            animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                <div className="flex justify-between items-end mb-6 border-b border-[#E5E7EB] pb-4">
                                    <h3 className="font-serif text-lg text-[#111827]">Portfolio Monitoring Dashboard</h3>
                                    <span className="text-[10px] font-mono uppercase text-gray-400">LIVE STATUS</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border-l-4 border-[#0A3F28] bg-[#F9FAFB]">
                                        <div>
                                            <span className="text-sm font-bold text-[#111827]">Sponsor Alpha Holdings</span>
                                            <span className="text-xs text-gray-500 ml-2">3 Active Deals</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#0A3F28]"></div>
                                            <span className="text-xs font-bold text-[#0A3F28]">COMPLIANT</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border-l-4 border-[#D9B44A] bg-[#FEF3C7]/30">
                                        <div>
                                            <span className="text-sm font-bold text-[#111827]">Sponsor Beta Capital</span>
                                            <span className="text-xs text-gray-500 ml-2">2 Active Deals</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#D9B44A]"></div>
                                            <span className="text-xs font-bold text-[#92400E]">WATCHLIST</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 border-l-4 border-[#0A3F28] bg-[#F9FAFB]">
                                        <div>
                                            <span className="text-sm font-bold text-[#111827]">Sponsor Gamma Partners</span>
                                            <span className="text-xs text-gray-500 ml-2">4 Active Deals</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#0A3F28]"></div>
                                            <span className="text-xs font-bold text-[#0A3F28]">COMPLIANT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 04: Support Your Fiduciary Obligations (Gray) */}
            <section ref={sec4Ref} className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <motion.div
                            className="lg:col-span-7 order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={sec4InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-serif text-lg text-[#111827]">Fiduciary Audit Trail</h3>
                                    <div className="border border-[#0A3F28] px-2 py-1">
                                        <span className="text-[8px] font-bold text-[#0A3F28] uppercase tracking-widest">Auditable Record</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 pb-4 border-b border-[#E5E7EB]">
                                        <div className="w-8 h-8 rounded-full bg-[#0A3F28] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-[#111827] block">Documented sponsor monitoring</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 pb-4 border-b border-[#E5E7EB]">
                                        <div className="w-8 h-8 rounded-full bg-[#0A3F28] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-[#111827] block">Consistent oversight standards applied uniformly across all sponsors</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 pb-4 border-b border-[#E5E7EB]">
                                        <div className="w-8 h-8 rounded-full bg-[#0A3F28] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-[#111827] block">Clear audit trails of disclosures, payment events, and performance variances</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#0A3F28] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-[#111827] block">Evidence-based decision processes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-5 order-1 lg:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={sec4InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#111827] mb-6 leading-tight">
                                Support Your Fiduciary Obligations
                            </h2>

                            <p className="text-gray-600 text-base mb-6 leading-normal">
                                Sylvan produces timestamped, auditable records of sponsor performance that exist independently of what sponsors choose to communicate. These records are available for fiduciary documentation and investment committee review.
                            </p>
                            <p className="text-gray-600 text-sm mb-4 font-medium">You use Sylvan to demonstrate:</p>
                            <ul className="space-y-4 mb-8 text-sm text-gray-700">
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Documented sponsor monitoring across every active obligation
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Consistent oversight standards applied uniformly across all sponsors
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Clear audit trails of disclosures, payment events, and performance variances
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Evidence-based decision processes
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}