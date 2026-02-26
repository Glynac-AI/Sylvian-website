// components/home/MainFeatures.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

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
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div 
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">01. Dimensions</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-[#111827] leading-tight">
                            Complete Operating Visibility
                        </h2>

                        <div className="space-y-4 max-w-md">
                            <p className="text-gray-600 text-base leading-normal">
                                You see how a sponsor actually operates across every deal they bring to Sylvan. Whether they pay reliably and from what source. Whether they maintain required reserves or run lean and hope nothing goes wrong. Whether their original forecasts hold up against real performance. How fast they tell you when something changes. And whether any of these patterns repeat  across multiple projects.
                            </p>
                            {/* Updated to text-base to match the top paragraph perfectly */}
                            <p className="text-gray-600 text-base leading-normal">
                                Every metric is timestamped, contractually required, and captured uniformly, giving you the complete operating picture.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="order-1 lg:order-2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/home/operating-visibility.svg"
                                alt="Five dimensions of sponsor behavior tracking"
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 02: Lockbox Protected Payment Priority (Gray) */}
            <section ref={sec2Ref} className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div 
                        className="order-1 flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="relative w-full max-w-lg">
                            <Image
                                src="/home/lockbox.svg"
                                alt="Lockbox payment priority flow"
                                width={600}
                                height={550}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        className="order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">02. Mechanics</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-[#111827] leading-tight">
                            Lockbox Protected Payment Priority
                        </h2>

                        <div className="space-y-4 max-w-md">
                            <p className="text-gray-600 text-base leading-normal">
                                Rental income never touches the developer's accounts. Tenants pay directly into a lockbox that operates independently of the sponsor entirely.
                            </p>
                            <p className="text-gray-600 text-base leading-normal">
                                Funds are released in a strict contractual order that cannot be changed. Sylvan investors are paid first, and only the remaining cash goes to the sponsor.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 03: Standardized Comparability (White) */}
            <section ref={sec3Ref} className="w-full border-b border-[#E5E7EB] overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div 
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">03. Standards</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-[#111827] leading-tight">
                            Standardized Comparability
                        </h2>

                        <div className="space-y-4 max-w-md">
                            <p className="text-gray-600 text-base leading-normal">
                                Every offering on Sylvan operates under uniform covenant framework, reserve requirements, and reporting templates. Sponsors cannot negotiate exceptions or customize how they report.
                            </p>
                            {/* Updated to text-base to match the top paragraph perfectly */}
                            <p className="text-gray-600 text-base leading-normal">
                                When you compare two sponsors on Sylvan, you are comparing them against identical obligations and identical measurements.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="order-1 lg:order-2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={sec3InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/home/standardized-comparability.svg"
                                alt="Standardized comparison across sponsors"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 04: Risk Profile (Gray) */}
            <section ref={sec4Ref} className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div 
                        className="order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={sec4InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="bg-white p-8 border border-[#E5E7EB] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] rounded">
                            <svg width="100%" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
                                <line x1="40" y1="20" x2="40" y2="220" stroke="#D1D5DB" strokeWidth="1"/>
                                <text x="30" y="30" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="end">12%</text>
                                <text x="30" y="120" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="end">6%</text>
                                <text x="30" y="210" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="end">0%</text>

                                <line x1="40" y1="220" x2="380" y2="220" stroke="#D1D5DB" strokeWidth="1"/>
                                <text x="40" y="235" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF">Y1</text>
                                <text x="380" y="235" fontFamily="Roboto Mono" fontSize="8" fill="#9CA3AF" textAnchor="end">Y10</text>

                                <line x1="40" y1="120" x2="380" y2="120" stroke="#F3F4F6" strokeWidth="1"/>
                                <line x1="40" y1="70" x2="380" y2="70" stroke="#F3F4F6" strokeWidth="1"/>
                                <line x1="40" y1="170" x2="380" y2="170" stroke="#F3F4F6" strokeWidth="1"/>

                                <polyline points="40,180 70,100 100,190 130,50 160,150 190,40 220,160 250,90 280,200 310,60 380,140"
                                          fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinejoin="round" />
                                <text x="380" y="130" fontFamily="Inter" fontSize="10" fill="#9CA3AF" textAnchor="end">Equity Volatility</text>

                                <polyline points="40,140 380,100"
                                          fill="none" stroke="#0A3F28" strokeWidth="3" />
                                <circle cx="380" cy="100" r="3" fill="#0A3F28"/>
                                <text x="380" y="90" fontFamily="Inter" fontSize="10" fontWeight="bold" fill="#0A3F28" textAnchor="end">SYLVAN YIELD</text>
                            </svg>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={sec4InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">04. Risk Profile</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-serif mb-6 text-[#111827] leading-tight">
                            Consistent Yield Without Equity Risk
                        </h2>

                        <div className="space-y-4 max-w-md">
                            <p className="text-gray-600 text-base leading-normal">
                                Taking debt positions on existing income producing properties lets you bypass the volatility of developer equity. You are buying into proven rental yields rather than betting on the operational success of a developer.
                            </p>
                            <p className="text-gray-600 text-base leading-normal">
                                This gives you direct exposure to the performance of the real estate asset itself with a clear and secure path to returns.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}