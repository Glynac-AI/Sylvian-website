// components/home/WhatSylvanTracks.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function WhatSylvanTracks() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-[#0A3F28] py-32 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20 max-w-2xl mx-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">
                        Observable Signals
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-serif mb-6 leading-tight">
                        Sylvan's Measurement System
                    </h2>

                    <p className="text-gray-400 text-base leading-normal">
                        Sylvan measures sponsor behavior through five observable signals captured across every deal. These signals aggregate into longitudinal sponsor operating records.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Payment Reliability */}
                    <motion.div
                        className="bg-[#072D1C] p-6 rounded border border-[#0A3F28] hover:border-[#D9B44A] transition group"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    >
                        <div className="h-24 mb-6 border-b border-[#0A3F28] flex items-end pb-4 gap-1">
                            <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
                            <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
                            <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
                            <div className="w-1.5 h-12 bg-green-500 rounded-sm shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            <div className="w-1.5 h-6 bg-green-500 rounded-sm"></div>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Payment Reliability
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            Whether scheduled payments are made on time, with each payment logged by due and receipt date
                        </p>
                    </motion.div>

                    {/* Capital Discipline */}
                    <motion.div
                        className="bg-[#072D1C] p-6 rounded border border-[#0A3F28] hover:border-[#D9B44A] transition group"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="h-24 mb-6 border-b border-[#0A3F28] flex items-center">
                            <div className="w-full h-1 bg-gray-600 rounded-full relative">
                                <div className="absolute left-0 top-0 h-1 bg-[#D9B44A] w-4/5 rounded-full"></div>
                                <div className="absolute right-0 -top-4 text-[9px] font-mono text-[#D9B44A]">80% RES</div>
                            </div>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Capital Discipline
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            Whether obligations are met from asset cash flow or sponsor capital, with each payment tracked by source, timing, and amount.
                        </p>
                    </motion.div>

                    {/* Forecast Accuracy */}
                    <motion.div
                        className="bg-[#072D1C] p-6 rounded border border-[#0A3F28] hover:border-[#D9B44A] transition group"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    >
                        <div className="h-24 mb-6 border-b border-[#0A3F28] flex items-center justify-center relative">
                            <svg width="100%" height="40" fill="none">
                                <path d="M0,20 Q25,10 50,20 T100,20" stroke="#6B7280" strokeDasharray="2,2" strokeWidth="1" />
                                <path d="M0,20 Q25,12 50,20 T100,20" stroke="#D9B44A" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Forecast Accuracy
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            How projections compare to actual results, with forecasts shown against performance and variance clearly measured.
                        </p>
                    </motion.div>

                    {/* Disclosure Patterns */}
                    <motion.div
                        className="bg-[#072D1C] p-6 rounded border border-[#0A3F28] hover:border-[#D9B44A] transition group"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    >
                        <div className="h-24 mb-6 border-b border-[#0A3F28] flex items-center">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 rounded-full bg-red-500 animate-ping absolute opacity-75"></div>
                                    <div className="w-3 h-3 rounded-full bg-red-600 relative"></div>
                                </div>
                                <div>
                                    <span className="block text-[9px] font-mono text-gray-400 uppercase">Alert Time</span>
                                    <span className="block text-sm font-mono text-white">01:45:00</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Disclosure Patterns
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            How quickly and transparently issues are disclosed, with timing and revisions tracked.
                        </p>
                    </motion.div>

                    {/* Consistency Over Time */}
                    <motion.div
                        className="bg-[#072D1C] p-6 rounded border border-[#0A3F28] hover:border-[#D9B44A] transition group"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                    >
                        <div className="h-24 mb-6 border-b border-[#0A3F28] flex items-end gap-1.5 pb-4 justify-center">
                            <div className="w-2 bg-gray-600 h-6"></div>
                            <div className="w-2 bg-gray-600 h-6"></div>
                            <div className="w-2 bg-gray-600 h-6"></div>
                            <div className="w-2 bg-[#D9B44A] h-6"></div>
                            <div className="w-2 bg-gray-600 h-6"></div>
                        </div>
                        <h3 className="text-[#D9B44A] font-bold text-xs uppercase tracking-widest mb-3">
                            Consistency Over Time
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                            Whether behavior remains consistent across assets and market cycles, revealing execution patterns over time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}