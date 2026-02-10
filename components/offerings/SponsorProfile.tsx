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
            className="max-w-6xl mx-auto"
        >
            <div className="mb-8">
                <p className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-4">Sponsor Profile</p>
                <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">{sponsorProfile.name}</h2>
                <p className="text-base text-gray-200 leading-relaxed max-w-3xl">
                    {sponsorProfile.description}
                </p>
            </div>

            {/* Clean Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 py-8 border-y border-white/20">
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Total AUM</p>
                    <p className="text-2xl font-semibold text-white">{sponsorProfile.totalAUM}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Avg. IRR</p>
                    <p className="text-2xl font-semibold text-white">{sponsorProfile.historicalPerformance.split(': ')[1]}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Properties</p>
                    <p className="text-2xl font-semibold text-white">{sponsorProfile.propertiesManaged}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Experience</p>
                    <p className="text-2xl font-semibold text-white">{sponsorProfile.yearsInBusiness} years</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Team Size</p>
                    <p className="text-2xl font-semibold text-white">{sponsorProfile.teamSize}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Approach</p>
                    <p className="text-2xl font-semibold text-white">Integrated</p>
                </div>
            </div>

            {/* Link to Full Sponsor Profile */}
            <div className="pt-6 border-t border-white/20">
                <Link href="/sponsors/1">
                    <button className="w-full bg-white text-[#0A3F28] py-3 px-6 rounded-lg font-semibold text-sm uppercase tracking-widest hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                        View Full Operating Record
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link>
                <p className="text-xs text-center text-gray-300 mt-3">
                    See complete behavioral metrics and track record
                </p>
            </div>
        </motion.div>
    )
}
