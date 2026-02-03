// components/offerings/SponsorProfile.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface SponsorProfileData {
    name: string
    totalAUM: string
    historicalPerformance: string
    propertiesManaged: number
    yearsInBusiness: number
    teamSize: string
    description: string
}

interface SponsorProfileProps {
    sponsorProfile: SponsorProfileData
}

export default function SponsorProfile({ sponsorProfile }: SponsorProfileProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="bg-white rounded-2xl p-8 shadow-md"
        >
            <h2 className="text-2xl font-semibold text-[#095520] mb-2">Sponsor Profile</h2>
            <p className="text-sm text-[#095520]/70 mb-6">The team managing your investment</p>

            <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-2">{sponsorProfile.name}</h3>
                <p className="text-sm text-black leading-relaxed">
                    {sponsorProfile.description}
                </p>
            </div>

            {/* Clean Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-[#095520]/70 mb-1">Total AUM</p>
                    <p className="text-xl font-semibold text-[#095520]">{sponsorProfile.totalAUM}</p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-[#095520]/70 mb-1">Avg. IRR</p>
                    <p className="text-xl font-semibold text-[#095520]">{sponsorProfile.historicalPerformance.split(': ')[1]}</p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-[#095520]/70 mb-1">Properties</p>
                    <p className="text-xl font-semibold text-[#095520]">{sponsorProfile.propertiesManaged}</p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-[#095520]/70 mb-1">Experience</p>
                    <p className="text-xl font-semibold text-[#095520]">{sponsorProfile.yearsInBusiness} years</p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-[#095520]/70 mb-1">Team Size</p>
                    <p className="text-xl font-semibold text-[#095520]">{sponsorProfile.teamSize}</p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200">
                    <p className="text-xs text-[#095520]/70 mb-1">Approach</p>
                    <p className="text-xl font-semibold text-[#095520]">Integrated</p>
                </div>
            </div>

            {/* Link to Full Sponsor Profile */}
            <div className="pt-6 border-t border-gray-200">
                <Link href="/sponsors/1">
                    <button className="w-full bg-[#095520] text-yellow-400 py-3 px-6 rounded-lg font-semibold text-sm uppercase tracking-widest hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                        View Full Operating Record
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link>
                <p className="text-xs text-center text-[#095520]/70 mt-3">
                    See complete behavioral metrics and track record
                </p>
            </div>
        </motion.div>
    )
}
