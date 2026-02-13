// components/home/MainFeatures.tsx
'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function MainFeatures() {
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)
    const section4Ref = useRef(null)

    const section1InView = useInView(section1Ref, { once: true, margin: "-100px" })
    const section2InView = useInView(section2Ref, { once: true, margin: "-100px" })
    const section3InView = useInView(section3Ref, { once: true, margin: "-100px" })
    const section4InView = useInView(section4Ref, { once: true, margin: "-100px" })

    return (
        <>
            {/* Section 01: Complete Operating Visibility */}
            <section ref={section1Ref} className="bg-white border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        animate={section1InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">01. Dimensions</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-serif mb-6 text-[#111827]">Complete Operating <br /><span className="italic">Visibility</span></h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            You see five dimensions of sponsor behavior tracked across every obligation: how reliably they pay and from what source, how they manage capital and reserves under pressure, how accurate their forecasts are against actual performance, how quickly they disclose problems, and whether these patterns hold consistent across multiple deals.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                            Every metric is timestamped, contractually required, and captured uniformly, giving you the complete operating picture that references and pitch decks cannot provide.
                        </p>
                    </motion.div>
                    <motion.div
                        className="order-1 lg:order-2 flex justify-center"
                        initial={{ opacity: 0, x: 40 }}
                        animate={section1InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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

            {/* Section 02: Lockbox Protected Payment Priority */}
            <section ref={section2Ref} className="bg-[#F3F4F1] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        className="order-1 flex justify-center"
                        initial={{ opacity: 0, x: -40 }}
                        animate={section2InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                        initial={{ opacity: 0, x: 40 }}
                        animate={section2InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">02. Mechanics</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-serif mb-6 text-[#111827]">Lockbox Protected<br /><span className="italic"> Payment Priority</span></h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Rental income never touches the developer's accounts. Tenants pay directly into a third-party bank-controlled lockbox that functions like an independent escrow.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            The bank releases funds in strict order enforced by contract. Direct operational expenses are funded first, then Sylvan investors receive their distributions. The developer can only access net profits after your payments are complete.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 03: Standardized Comparability */}
            <section ref={section3Ref} className="bg-white border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        animate={section3InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">03. Standards</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-serif mb-6 text-[#111827]">Standardized <br /><span className="italic">Comparability</span></h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Every offering on Sylvan uses identical SPV structures, covenant frameworks, reserve requirements, and reporting templates. Sponsors cannot customize formats or negotiate exceptions. When comparing sponsors, each is evaluated against the same obligations, measurements, and standards.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm font-medium">
                            This level of structural standardization enables sponsor behavior to be compared consistently across different operators and asset types.
                        </p>
                    </motion.div>
                    <motion.div
                        className="order-1 lg:order-2 flex justify-center"
                        initial={{ opacity: 0, x: 40 }}
                        animate={section3InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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

            {/* Section 04: Risk Profile */}
            <section ref={section4Ref} className="bg-[#F3F4F1] border-b border-[#E5E7EB]">
                <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        className="order-1"
                        initial={{ opacity: 0, x: -40 }}
                        animate={section4InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                        initial={{ opacity: 0, x: 40 }}
                        animate={section4InView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em]">04. Risk Profile</span>
                            <div className="h-px bg-gray-200 w-12"></div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-serif mb-6 text-[#111827]">Consistent Yield Without<br /><span className="italic"> Equity Risk</span></h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Taking debt positions on existing income producing properties lets you bypass the volatility of developer equity. You are buying into proven rental yields rather than betting on the operational success of a developer.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            This gives you direct exposure to the performance of the real estate asset itself with a clear and secure path to returns.
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
