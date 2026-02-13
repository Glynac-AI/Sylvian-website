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
            className="max-w-7xl mx-auto"
        >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
                    <div>
                        <p className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Sponsor Profile</p>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-1 h-10 bg-[#D9B44A] mt-2"></div>
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#0A3F28]">{sponsorProfile.name}</h2>
                        </div>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
                            {sponsorProfile.description}
                        </p>

                        <div className="mt-8">
                            <Link href="/sponsors/1">
                                <button className="bg-[#0A3F28] text-white py-3 px-8 rounded-lg font-semibold text-sm uppercase tracking-widest hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2">
                                    View Full Operating Record
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </Link>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mt-4">
                                See complete behavioral metrics and track record
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-8">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Total AUM</p>
                                <p className="text-2xl font-semibold text-[#0A3F28]">{sponsorProfile.totalAUM}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Avg. IRR</p>
                                <p className="text-2xl font-semibold text-[#0A3F28]">{sponsorProfile.historicalPerformance.split(': ')[1]}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Properties</p>
                                <p className="text-2xl font-semibold text-[#0A3F28]">{sponsorProfile.propertiesManaged}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Experience</p>
                                <p className="text-2xl font-semibold text-[#0A3F28]">{sponsorProfile.yearsInBusiness} years</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Team Size</p>
                                <p className="text-2xl font-semibold text-[#0A3F28]">{sponsorProfile.teamSize}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Approach</p>
                                <p className="text-2xl font-semibold text-[#0A3F28]">Integrated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
