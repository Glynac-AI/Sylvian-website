// components/sponsors/SponsorOverview.tsx
'use client'

import { motion } from 'framer-motion'
import { Sponsor } from '@/data/mockSponsors'

interface SponsorOverviewProps {
    sponsor: Sponsor
}

export default function SponsorOverview({ sponsor }: SponsorOverviewProps) {
    return (
        <section className="bg-gray-50 py-24 border-b border-[#E5E7EB]">
            <div className="w-full px-6 lg:px-12">
                {/* Admission Badge Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
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

                {/* Main Overview Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Left: About & Strategy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">
                            Company Overview
                        </span>
                        <h2 className="text-2xl lg:text-3xl font-serif text-[#111827] mb-6">About {sponsor.name}<br /><span className="italic">company overview.</span></h2>
                        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                            {sponsor.description}
                        </p>

                        {/* Key Stats Row */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-gray-50 p-4 rounded border border-[#E5E7EB]">
                                <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Transactions</p>
                                <p className="text-2xl font-bold text-[#0A3F28]">{sponsor.totalTransactions}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded border border-[#E5E7EB]">
                                <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Deployed</p>
                                <p className="text-2xl font-bold text-[#0A3F28]">{sponsor.totalCapitalDeployed}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded border border-[#E5E7EB]">
                                <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Experience</p>
                                <p className="text-2xl font-bold text-[#0A3F28]">{sponsor.yearsInBusiness}y</p>
                            </div>
                        </div>

                        {/* Investment Strategy */}
                        <div className="bg-[#F9FAFB] p-6 rounded border border-[#E5E7EB]">
                            <h3 className="text-sm font-bold text-[#111827] uppercase tracking-widest mb-3 flex items-center gap-2">
                                <div className="w-1 h-4 bg-[#D9B44A]"></div>
                                Investment Strategy
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {sponsor.investmentStrategy}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Markets, Assets & Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Core Markets */}
                        <div className="bg-white p-6 rounded border-2 border-[#E5E7EB] shadow-sm">
                            <h3 className="text-sm font-bold text-[#111827] uppercase tracking-widest mb-4 flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#0A3F28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Core Markets
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {sponsor.coreMarkets.map((market, index) => (
                                    <span key={index} className="px-3 py-1.5 bg-[#E8F5E9] text-[#0A3F28] text-xs font-semibold rounded border border-[#0A3F28]/20">
                                        {market}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Asset Classes */}
                        <div className="bg-white p-6 rounded border-2 border-[#E5E7EB] shadow-sm">
                            <h3 className="text-sm font-bold text-[#111827] uppercase tracking-widest mb-4 flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#0A3F28]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Asset Class Focus
                            </h3>
                            <div className="space-y-3">
                                {sponsor.assetClassFocus.map((assetClass, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#0A3F28] rounded-full"></div>
                                        <span className="text-sm text-gray-700 font-semibold">{assetClass}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="bg-linear-to-br from-[#0A3F28] to-[#145A3C] p-6 rounded shadow-lg text-white">
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#D9B44A]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Key Achievements
                            </h3>
                            <div className="space-y-3">
                                {sponsor.achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <svg className="w-4 h-4 text-[#D9B44A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm text-white/90 leading-relaxed">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Transparency Commitment Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-[#F9FAFB] border-l-4 border-[#D9B44A] p-8 rounded-r"
                >
                    <div className="flex items-start gap-4">
                        <div className="shrink-0">
                            <div className="w-12 h-12 bg-[#0A3F28] rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#D9B44A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-serif text-[#111827] mb-3">Transparency Commitment</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {sponsor.transparencyCommitment}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
