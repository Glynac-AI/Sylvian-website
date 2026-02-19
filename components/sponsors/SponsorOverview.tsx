// components/sponsors/SponsorOverview.tsx
'use client'

import { motion } from 'framer-motion'
import { Sponsor } from '@/data/mockSponsors'

interface SponsorOverviewProps {
    sponsor: Sponsor
}

export default function SponsorOverview({ sponsor }: SponsorOverviewProps) {
    return (
        <section id="sponsor-overview" className="bg-gray-50 py-12 border-b border-[#E5E7EB]">
            <div className="w-full px-6 lg:px-12">
                {/* Admission Badge Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-linear-to-r from-[#E8F5E9] to-[#F9FAFB] border-l-4 border-[#0A3F28] p-8 rounded-r">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-[#0A3F28] rounded">
                                        <svg className="w-4 h-4 text-[#D9B44A]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-white font-bold text-xs uppercase tracking-widest">{sponsor.admissionStatus}</span>
                                    </div>
                                    <span className="text-xs text-[#0A3F28] font-bold uppercase tracking-widest">
                                        Sylvan Platform Sponsor
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Admitted to Sylvan platform <span className="font-bold text-[#0A3F28]">{sponsor.platformAdmissionDate}</span> after meeting
                                    institutional admission criteria. Currently operating with <span className="font-bold text-[#0A3F28]">{sponsor.complianceStatus}</span> compliance
                                    status across all obligations.
                                </p>
                            </div>
                            <div className="flex gap-6">
                                <div className="text-center">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Active Since</p>
                                    <p className="text-2xl font-bold text-[#0A3F28]">{sponsor.platformAdmissionDate.split(' ')[1]}</p>
                                </div>
                                <div className="w-px bg-[#E5E7EB]"></div>
                                <div className="text-center">
                                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Compliance</p>
                                    <p className="text-2xl font-bold text-[#0A3F28]">{sponsor.complianceStatus}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
