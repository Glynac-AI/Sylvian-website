// components/home/ValuePropositions.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const valueProps = [
    {
        titlePart1: "Complete Operating",
        titlePart2: "Visibility",
        description: "You see five dimensions of sponsor behavior tracked across every obligation: how reliably they pay and from what source, how they manage capital and reserves under pressure, how accurate their forecasts are against actual performance, how quickly they disclose problems, and whether these patterns hold consistent across multiple deals.",
        detail: "Every metric is timestamped, contractually required, and captured uniformly, giving you the complete operating picture that references and pitch decks cannot provide.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        titlePart1: "Lockbox Protected",
        titlePart2: "Payment Priority",
        description: "All cash flow moves through Sylvan's ring-fenced SPVs with lockbox-controlled distributions. Rental income flows first to debt service and required reserves, with any excess available to sponsors only after Sylvan investors are fully paid.",
        detail: "Payment source is tracked and classified by Sylvan, providing immediate visibility into whether obligations are satisfied from property income or sponsor liquidity support.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        )
    },
    {
        titlePart1: "Standardized",
        titlePart2: "Comparability",
        description: "Every offering on Sylvan uses identical SPV structures, covenant frameworks, reserve requirements, and reporting templates. Sponsors cannot customize formats or negotiate exceptions. When comparing sponsors, each is evaluated against the same obligations, measurements, and standards.",
        detail: "This level of structural standardization enables sponsor behavior to be compared consistently across different operators and asset types.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        )
    },
    {
        titlePart1: "Consistent Yield",
        titlePart2: "Without Equity Risk",
        description: "Taking debt positions on existing income producing properties lets you bypass the volatility of developer equity. You are buying into proven rental yields rather than betting on the operational success of a developer.",
        detail: "This gives you direct exposure to the performance of the real estate asset itself with a clear and secure path to returns.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        )
    }
]

export default function ValuePropositions() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-28 md:py-36 px-6 bg-white relative overflow-hidden border-b border-[#E5E7EB]">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-[#095520]/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#008929]/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="space-y-24 lg:space-y-28">
                    {valueProps.map((prop, index) => (
                        <div key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            
                            {/* Content - alternates left/right */}
                            <motion.div 
                                className={`space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                            >
                                {/* Two-Liner Heading */}
                                <h3 className="text-3xl lg:text-4xl font-serif text-[#095520] leading-tight">
                                    <span className="block font-normal text-[#111827]">{prop.titlePart1}</span>
                                    <span className="block italic">{prop.titlePart2}</span>
                                </h3>
                                
                                {/* Compact Subtext */}
                                <div className="max-w-md space-y-4">
                                    <p className="text-base leading-normal text-black/80">
                                        {prop.description}
                                    </p>
                                    <div className="pt-3 border-t border-[#095520]/10">
                                        <p className="text-sm text-[#095520] leading-normal font-medium">
                                            {prop.detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Visual - alternates right/left */}
                            <motion.div 
                                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.15 + 0.2, ease: 'easeOut' }}
                            >
                                <div className="relative aspect-square max-w-sm mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#095520]/5 to-[#008929]/5 rounded-2xl" />
                                    <div className="relative h-full bg-white rounded-2xl border border-[#095520]/10 shadow-lg p-8 md:p-10 flex items-center justify-center">
                                        <div className="text-center space-y-6">
                                            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#095520]/15 to-[#008929]/15 flex items-center justify-center text-[#095520]">
                                                <div className="scale-150">
                                                    {prop.icon}
                                                </div>
                                            </div>
                                            <div className="text-sm uppercase tracking-wider text-[#095520] font-semibold">
                                                {prop.titlePart1} {prop.titlePart2}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}