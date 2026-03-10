// components/home/MainFeatures.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import SponsorKnowledgeGraph from '@/components/home/SponsorKnowledgeGraph'
import LockboxVisual from '@/components/home/LockboxVisual'
import PrismVisual from '@/components/home/PrismVisual'
import YieldChart from '@/components/home/YieldChart'

export default function MainFeatures() {
    const sec1Ref = useRef(null)
    const sec2Ref = useRef(null)
    const sec3Ref = useRef(null)
    const sec4Ref = useRef(null)

    const sec1InView = useInView(sec1Ref, { once: true, margin: "-100px" })
    const sec2InView = useInView(sec2Ref, { once: true, margin: "-100px" })
    const sec3InView = useInView(sec3Ref, { once: true, margin: "-100px" })
    const sec4InView = useInView(sec4Ref, { once: true, margin: "-100px" })

    return (
        <>
            {/* Section 01: Complete Operating Visibility (White) */}
            <section ref={sec1Ref} className="w-full border-b border-[#E5E7EB] overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                    {/* Text — always first on mobile */}
                    <motion.div
                        className="order-1 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">01. Dimensions</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-2xl lg:text-4xl font-serif mb-6 text-[#111827] leading-tight">
                            Complete Operating Visibility
                        </h2>
                        <div className="space-y-4 max-w-md">
                            <p className="text-gray-800 text-base leading-normal">
                                You see how a sponsor operates across every Sylvan deal, including payment reliability and sources, reserve discipline, forecast accuracy, speed of disclosure when conditions change, and whether patterns repeat across projects.
                            </p>
                            <p className="text-gray-800 text-base leading-normal">
                                Every metric is timestamped, contractually required, and captured uniformly, giving you the complete operating picture.
                            </p>
                        </div>
                    </motion.div>
                    {/* Visual — always second on mobile */}
                    <motion.div
                        className="order-2 lg:order-2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <SponsorKnowledgeGraph />
                    </motion.div>
                </div>
            </section>

            {/* Section 02: Lockbox Protected Payment Priority (Gray) */}
            <section ref={sec2Ref} className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                    {/* Text — always first on mobile */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">02. Mechanics</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-2xl lg:text-4xl font-serif mb-6 text-[#111827] leading-tight">
                            Lockbox Protected Payment Priority
                        </h2>
                        <div className="space-y-4 max-w-md">
                            <p className="text-gray-800 text-base leading-normal">
                                Rental income never touches the developer's accounts. Tenants pay directly into a lockbox that operates independently of the sponsor entirely.
                            </p>
                            <p className="text-gray-800 text-base leading-normal">
                                Funds are released in a strict contractual order that cannot be changed. Sylvan investors are paid first, and only the remaining cash goes to the sponsor.
                            </p>
                        </div>
                    </motion.div>
                    {/* Visual — always second on mobile */}
                    <motion.div
                        className="order-2 lg:order-1 flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <LockboxVisual />
                    </motion.div>
                </div>
            </section>

            {/* Section 03: Standardized Comparability (White) */}
            <section ref={sec3Ref} className="w-full border-b border-[#E5E7EB] overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                    {/* Text — always first on mobile */}
                    <motion.div
                        className="order-1 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">03. Standards</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-2xl lg:text-4xl font-serif mb-6 text-[#111827] leading-tight">
                            Standardized Comparability
                        </h2>
                        <div className="space-y-4 max-w-md">
                            <p className="text-gray-800 text-base leading-normal">
                                Every offering on Sylvan operates under uniform covenant framework, reserve requirements, and reporting templates. Sponsors cannot negotiate exceptions or customize how they report.
                            </p>
                            <p className="text-gray-800 text-base leading-normal">
                                When you compare two sponsors on Sylvan, you are comparing them against identical obligations and identical measurements.
                            </p>
                        </div>
                    </motion.div>
                    {/* Visual — always second on mobile */}
                    <motion.div
                        className="order-2 lg:order-2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <PrismVisual />
                    </motion.div>
                </div>
            </section>

            {/* Section 04: Risk Profile (Gray) */}
            <section ref={sec4Ref} className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
                    {/* Text — always first on mobile */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={sec4InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">04. Risk Profile</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-2xl lg:text-4xl font-serif mb-6 text-[#111827] leading-tight">
                            Consistent Yield Without Equity Risk
                        </h2>
                        <div className="space-y-4 max-w-md">
                            <p className="text-gray-800 text-base leading-normal">
                                Taking debt positions on existing income producing properties lets you bypass the volatility of developer equity. You are buying into proven rental yields rather than betting on the operational success of a developer.
                            </p>
                            <p className="text-gray-800 text-base leading-normal">
                                This gives you direct exposure to the performance of the real estate asset itself with a clear and secure path to returns.
                            </p>
                        </div>
                    </motion.div>
                    {/* Visual — always second on mobile */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={sec4InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <YieldChart />
                    </motion.div>
                </div>
            </section>
        </>
    )
}