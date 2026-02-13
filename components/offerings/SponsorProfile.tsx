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
            className="w-full"
        >
            <div className="bg-[#0A3F28] rounded-2xl p-8 lg:p-10 shadow-xl text-white relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        {/* Left: Identity */}
                        <div>
                            <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block">
                                Sponsor Profile
                            </span>
                            <h2 className="text-3xl font-serif mb-5 leading-tight">
                                {sponsorProfile.name}
                            </h2>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-lg">
                                {sponsorProfile.description}
                            </p>
                            
                            <Link href="/sponsors/1">
                                <button className="inline-flex items-center gap-2 border-b border-[#D9B44A] pb-1 text-[10px] font-bold uppercase tracking-widest text-[#D9B44A] hover:text-white hover:border-white transition-colors">
                                    View Full Operating Record
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </Link>
                            <p className="text-[10px] text-gray-400 mt-2">
                                See complete behavioral metrics and track record
                            </p>
                        </div>

                        {/* Right: Metrics */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Total AUM</p>
                                <p className="text-xl font-semibold text-white">{sponsorProfile.totalAUM}</p>
                            </div>

                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Avg. IRR</p>
                                <p className="text-xl font-semibold text-white">{sponsorProfile.historicalPerformance.split(': ')[1]}</p>
                            </div>

                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Properties</p>
                                <p className="text-xl font-semibold text-white">{sponsorProfile.propertiesManaged}</p>
                            </div>

                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Experience</p>
                                {/* UPDATED: "years" is now white and matches the text size of the number */}
                                <p className="text-xl font-semibold text-white">{sponsorProfile.yearsInBusiness} years</p>
                            </div>

                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Team Size</p>
                                <p className="text-xl font-semibold text-white">{sponsorProfile.teamSize}</p>
                            </div>

                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Approach</p>
                                <p className="text-xl font-semibold text-white">Integrated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}