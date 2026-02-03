// components/sponsors/SponsorCard.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Sponsor } from '@/data/mockSponsors'

interface SponsorCardProps {
    sponsor: Sponsor
    index: number
}

export default function SponsorCard({ sponsor, index }: SponsorCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
            <Link href={`/sponsors/${sponsor.id}`}>
                <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Header Section */}
                    <div className="p-6 bg-[#0A3F28] border-b border-[#145A3C]">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-serif text-white transition-colors">
                                {sponsor.name}
                            </h3>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#D9B44A] rounded shrink-0">
                                <svg className="w-3 h-3 text-[#0A3F28]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-[#0A3F28] font-bold text-[9px] uppercase tracking-widest">{sponsor.admissionStatus}</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed">
                            {sponsor.tagline}
                        </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="p-6 flex-1">
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Total AUM</p>
                                <p className="text-xl font-bold text-[#0A3F28]">{sponsor.totalAUM}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Avg. IRR</p>
                                <p className="text-xl font-bold text-[#0A3F28]">{sponsor.historicalIRR}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Properties</p>
                                <p className="text-xl font-bold text-[#0A3F28]">{sponsor.propertiesManaged}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">Experience</p>
                                <p className="text-xl font-bold text-[#0A3F28]">{sponsor.yearsInBusiness} years</p>
                            </div>
                        </div>

                        {/* Operating Highlights */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">Operating Record</h4>
                            <div className="space-y-2.5">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">Payment Rate</span>
                                    <span className="text-xs font-bold text-[#0A3F28]">{sponsor.operatingRecord.paymentBehavior.onTimeRate}%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">Reserve Adequacy</span>
                                    <span className="text-xs font-bold text-[#0A3F28]">{sponsor.operatingRecord.reserveDiscipline.currentAdequacy}%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-600">Disclosure</span>
                                    <span className="text-xs font-bold text-[#0A3F28]">{sponsor.operatingRecord.disclosureBehavior.transparencyRating}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                            {sponsor.activePortfolios.length} Active {sponsor.activePortfolios.length === 1 ? 'Offering' : 'Offerings'}
                        </span>
                        <div className="flex items-center gap-2 text-[#0A3F28] font-semibold text-sm group-hover:gap-3 transition-all">
                            View Profile
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
