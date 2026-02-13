// components/offerings/RiskFactorsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface RiskFactor {
    risk: string
    description: string
    mitigation: string
}

interface RiskFactorsSectionProps {
    riskFactors: RiskFactor[]
}

export default function RiskFactorsSection({ riskFactors }: RiskFactorsSectionProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-white rounded-2xl p-8 shadow-md"
        >
            {/* UPDATED: Heading to 3xl to match main page */}
            <h2 className="text-3xl font-semibold text-[#095520] mb-3">Risk Factors & Disclosures</h2>
            {/* UPDATED: Subtext to text-base */}
            <p className="text-base text-[#095520]/70 mb-8">
                Understanding the risks is essential for informed investment decisions
            </p>

            {/* Important Notice */}
            <div className="mb-8 p-5 bg-[#F3F4F1] rounded-xl border-l-4 border-[#095520]">
                <p className="text-sm text-black">
                    <span className="font-semibold">Important:</span> All investments carry risk, including potential loss of principal. Please review all offering documents carefully.
                </p>
            </div>

            {/* Risk Factors List */}
            <div className="space-y-4">
                {riskFactors.map((factor, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="rounded-xl border-2 border-gray-100 overflow-hidden hover:border-[#095520]/20 transition-all duration-300"
                    >
                        {/* Risk Header */}
                        <button
                            onClick={() => toggleExpand(index)}
                            className="w-full p-6 bg-white hover:bg-[#F3F4F1]/50 transition-all duration-300 text-left"
                        >
                            <div className="flex items-center justify-between gap-4">
                                {/* UPDATED: Risk Title to text-lg */}
                                <h3 className="text-lg font-semibold text-[#095520] flex-1">{factor.risk}</h3>
                                <svg
                                    className={`w-6 h-6 text-[#095520] transition-transform duration-300 flex-shrink-0 ${
                                        expandedIndex === index ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        {/* Expanded Content */}
                        {expandedIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="border-t-2 border-gray-100"
                            >
                                <div className="p-6 bg-[#F3F4F1]/30 space-y-5">
                                    {/* Description */}
                                    <div>
                                        <p className="text-xs font-semibold text-[#095520]/70 uppercase tracking-wider mb-2">Risk Description</p>
                                        {/* UPDATED: Description to text-base */}
                                        <p className="text-base text-black leading-relaxed">{factor.description}</p>
                                    </div>

                                    {/* Mitigation */}
                                    <div className="p-5 bg-white rounded-lg border border-gray-200">
                                        <p className="text-xs font-semibold text-[#095520] uppercase tracking-wider mb-2">Mitigation Strategy</p>
                                        {/* UPDATED: Mitigation to text-base */}
                                        <p className="text-base text-black leading-relaxed">{factor.mitigation}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-5 bg-[#F3F4F1] rounded-xl">
                <p className="text-base text-black">
                    For a comprehensive list of all risk factors, please review the Private Placement Memorandum in the Investment Documentation section.
                </p>
            </div>
        </motion.div>
    )
}