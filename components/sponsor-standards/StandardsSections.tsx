// components/sponsor-standards/StandardsSections.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function StandardsSections() {
    // Refs for animation triggers
    const sec1Ref = useRef(null)
    const sec2Ref = useRef(null)
    const sec3Ref = useRef(null)

    // InView hooks
    const sec1InView = useInView(sec1Ref, { once: true, margin: "-100px" })
    const sec2InView = useInView(sec2Ref, { once: true, margin: "-100px" })
    const sec3InView = useInView(sec3Ref, { once: true, margin: "-100px" })

    return (
        <>
            {/* Section 01: Published Admission Criteria (White) */}
            <section ref={sec1Ref} className="w-full border-b border-[#E5E7EB] overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div 
                            className="order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.1em] mb-4 block">01. Admission</span>
                            <h2 className="text-4xl font-serif text-[#111827] mb-6">Published Admission Criteria</h2>
                            <p className="text-[#4B5563] mb-6 leading-relaxed">
                                Sponsors are evaluated for participation based on minimum requirements, including:
                            </p>

                            <ul className="space-y-3 mb-6">
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    <span className="text-sm text-gray-700">Demonstrated operating history in relevant asset types</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    <span className="text-sm text-gray-700">Established financial controls and accounting practices</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    <span className="text-sm text-gray-700">Sufficient liquidity and balance-sheet capacity</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    <span className="text-sm text-gray-700">Ability to operate within standardized SPV, covenant, and reserve frameworks</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    <span className="text-sm text-gray-700">Commitment to mandatory, uniform reporting and disclosure requirements</span>
                                </li>
                            </ul>

                            <p className="text-[#4B5563] mt-6 leading-relaxed">
                                Admission reflects readiness to operate under institutional discipline, not marketing strength or deal volume.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="order-1 lg:order-2 flex justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            <div className="relative w-full max-w-md">
                                <div className="bg-white border border-[#E5E7EB] p-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
                                        <h3 className="font-serif text-lg text-[#111827]">Admission Review</h3>
                                        <span className="text-[10px] font-mono text-gray-400 uppercase">STANDARD CRITERIA</span>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-[#4B5563]">Operating History</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-[#0A3F28] rounded-full"></div>
                                                <span className="text-xs font-bold text-[#0A3F28]">VERIFIED</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-[#4B5563]">Financial Controls</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-[#0A3F28] rounded-full"></div>
                                                <span className="text-xs font-bold text-[#0A3F28]">VERIFIED</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-[#4B5563]">Liquidity Capacity</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-[#0A3F28] rounded-full"></div>
                                                <span className="text-xs font-bold text-[#0A3F28]">VERIFIED</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-[#4B5563]">SPV Compatibility</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-[#0A3F28] rounded-full"></div>
                                                <span className="text-xs font-bold text-[#0A3F28]">VERIFIED</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-[#4B5563]">Reporting Commitment</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-20 h-2 bg-[#0A3F28] rounded-full"></div>
                                                <span className="text-xs font-bold text-[#0A3F28]">VERIFIED</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-center">
                                        <span className="text-xs font-bold text-[#0A3F28] uppercase tracking-widest">Admission Approved</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 02: Ongoing Participation Requirements (Gray) */}
            <section ref={sec2Ref} className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div 
                            className="flex justify-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            <div className="bg-white p-8 border border-[#E5E7EB] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] w-full max-w-md">
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E7EB]">
                                    <h3 className="font-serif text-lg text-[#111827]">Ongoing Requirements</h3>
                                    <span className="text-[10px] font-mono text-gray-400 uppercase">CONTINUOUS</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-[#F9FAFB] border-l-4 border-[#0A3F28]">
                                        <span className="text-xs font-bold text-[#0A3F28] uppercase tracking-widest block mb-1">Reporting</span>
                                        <p className="text-sm text-[#4B5563]">Timely and complete reporting on fixed schedules</p>
                                    </div>

                                    <div className="p-4 bg-[#F9FAFB] border-l-4 border-[#0A3F28]">
                                        <span className="text-xs font-bold text-[#0A3F28] uppercase tracking-widest block mb-1">Disclosure</span>
                                        <p className="text-sm text-[#4B5563]">Accurate disclosure of payment sources and liquidity support</p>
                                    </div>

                                    <div className="p-4 bg-[#F9FAFB] border-l-4 border-[#0A3F28]">
                                        <span className="text-xs font-bold text-[#0A3F28] uppercase tracking-widest block mb-1">Compliance</span>
                                        <p className="text-sm text-[#4B5563]">Compliance with covenant and reserve requirements</p>
                                    </div>

                                    <div className="p-4 bg-[#F9FAFB] border-l-4 border-[#0A3F28]">
                                        <span className="text-xs font-bold text-[#0A3F28] uppercase tracking-widest block mb-1">Communication</span>
                                        <p className="text-sm text-[#4B5563]">Transparent communication when issues arise</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.1em] mb-4 block">02. Participation</span>
                            <h2 className="text-4xl font-serif text-[#111827] mb-6">Ongoing Participation Requirements</h2>
                            <h3 className="text-lg text-[#4B5563] mb-6 font-medium">Participation on Sylvan is continuous, not one-time.</h3>
                            <p className="text-[#4B5563] mb-6 leading-relaxed">
                                Sponsors are expected to maintain:
                            </p>
                            <ul className="space-y-3 mb-8 text-sm text-gray-700">
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Timely and complete reporting on fixed schedules
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Accurate disclosure of payment sources and liquidity support
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Compliance with covenant and reserve requirements
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Transparent communication when issues arise
                                </li>
                            </ul>
                            <div className="p-6 border-l-2 border-[#D9B44A] bg-white">
                                <p className="text-sm font-serif italic text-[#111827]">
                                    "Operating behavior is observed and recorded across every obligation."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 03: Enforcement and Accountability (White) */}
            <section ref={sec3Ref} className="w-full border-b border-[#E5E7EB] overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.1em] mb-4 block">03. Enforcement</span>
                            <h2 className="text-4xl font-serif text-[#111827] mb-6">Enforcement and Accountability</h2>
                            <h3 className="text-lg text-[#4B5563] mb-6 font-medium">Standards are enforced to preserve the integrity of sponsor operating records.</h3>
                            <p className="text-[#4B5563] mb-6 leading-relaxed">
                                Reporting or disclosure failures are treated first as platform compliance matters, with defined resolution periods. Persistent or material non-compliance can result in:
                            </p>
                            <ul className="space-y-3 mb-8 text-sm text-gray-700">
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Heightened monitoring status
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Restrictions on future offerings
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-[#0A3F28] font-bold">↳</span>
                                    Suspension or removal from the platform
                                </li>
                            </ul>
                            <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">
                                These outcomes are governance actions, not judgments.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="flex justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            <div className="relative py-10 pl-10 pr-4">
                                <div className="absolute left-[59px] top-0 bottom-0 w-px bg-gray-300"></div>

                                <div className="space-y-12">
                                    <div className="relative flex items-center gap-6">
                                        <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-white border-2 border-[#0A3F28] z-10"></div>
                                        <div className="bg-white border border-[#E5E7EB] p-4 w-64 shadow-sm">
                                            <span className="text-[9px] font-mono text-[#9CA3AF] block mb-1">STAGE 01</span>
                                            <h4 className="text-sm font-bold text-[#111827]">Compliance Notice</h4>
                                            <p className="text-xs text-[#4B5563] mt-1">Defined resolution period begins.</p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center gap-6">
                                        <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#D9B44A] border-2 border-white z-10 shadow-sm"></div>
                                        <div className="bg-white border-l-4 border-[#D9B44A] p-4 w-64 shadow-sm">
                                            <span className="text-[9px] font-mono text-[#D9B44A] block mb-1">STAGE 02</span>
                                            <h4 className="text-sm font-bold text-[#111827]">Heightened Monitoring</h4>
                                            <p className="text-xs text-[#4B5563] mt-1">Increased oversight and reporting frequency.</p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center gap-6">
                                        <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#D9B44A] border-2 border-white z-10 shadow-sm"></div>
                                        <div className="bg-white border-l-4 border-[#D9B44A] p-4 w-64 shadow-sm">
                                            <span className="text-[9px] font-mono text-[#D9B44A] block mb-1">STAGE 03</span>
                                            <h4 className="text-sm font-bold text-[#111827]">Offering Restrictions</h4>
                                            <p className="text-xs text-[#4B5563] mt-1">Limitations on future offerings.</p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center gap-6">
                                        <div className="absolute -left-[30px] w-4 h-4 rounded-full bg-[#111827] border-2 border-white z-10 shadow-sm"></div>
                                        <div className="bg-[#111827] text-white p-4 w-64 shadow-md">
                                            <span className="text-[9px] font-mono text-gray-400 block mb-1">STAGE 04</span>
                                            <h4 className="text-sm font-bold text-white">Suspension or Removal</h4>
                                            <p className="text-xs text-gray-400 mt-1">Platform participation terminated.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}