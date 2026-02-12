// app/sponsors/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SponsorCard from '@/components/sponsors/SponsorCard'
import { mockSponsors } from '@/data/mockSponsors'

export default function SponsorsPage() {
    const [selectedCompliance, setSelectedCompliance] = useState('All')

    // Filter sponsors based on compliance status
    const filteredSponsors = mockSponsors.filter(sponsor => {
        const complianceMatch = selectedCompliance === 'All' || sponsor.complianceStatus === selectedCompliance
        return complianceMatch
    })

    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#0A3F28] text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,100 L100,0 L100,100 Z" fill="white"/>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-6 block">
                            Platform Sponsors
                        </span>
                        <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-6">
                            Verified Sponsor Directory
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            Real estate sponsors with verified track records and transparent operating behavior.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="bg-white py-12 px-6 border-l-4 border-[#D9B44A]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl italic font-serif leading-relaxed text-gray-700">
                        &ldquo;Verified sponsors with transparent operating records and consistent performance under standardized obligations.&rdquo;
                    </p>
                </div>
            </section>

            {/* Filters Section */}
            <section className="bg-gray-50 border-b border-gray-200 py-6 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-sm font-semibold text-[#111827] uppercase tracking-widest">Filter by:</span>

                        {/* Compliance Status Filter */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSelectedCompliance('All')}
                                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition ${
                                    selectedCompliance === 'All'
                                        ? 'bg-[#0A3F28] text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-[#0A3F28]'
                                }`}
                            >
                                All Sponsors
                            </button>
                            <button
                                onClick={() => setSelectedCompliance('EXCELLENT')}
                                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition ${
                                    selectedCompliance === 'EXCELLENT'
                                        ? 'bg-[#0A3F28] text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-[#0A3F28]'
                                }`}
                            >
                                Excellent
                            </button>
                            <button
                                onClick={() => setSelectedCompliance('GOOD')}
                                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition ${
                                    selectedCompliance === 'GOOD'
                                        ? 'bg-[#0A3F28] text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-[#0A3F28]'
                                }`}
                            >
                                Good
                            </button>
                        </div>

                        <div className="ml-auto text-sm text-gray-600">
                            Showing <span className="font-bold text-[#0A3F28]">{filteredSponsors.length}</span> {filteredSponsors.length === 1 ? 'sponsor' : 'sponsors'}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsors Grid */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {filteredSponsors.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredSponsors.map((sponsor, index) => (
                                <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0A3F28]/5 flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#0A3F28]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-[#111827] mb-2">No sponsors found</h3>
                            <p className="text-gray-600">Try adjusting your filters to see more results</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="bg-[#0A3F28] py-20 px-6 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-1 bg-[#D9B44A] mx-auto mb-8"></div>
                    <h2 className="text-3xl font-serif mb-6">Institutional Admission Standards</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        All sponsors listed on Sylvan have been admitted after demonstrating operating history,
                        financial controls, liquidity capacity, and commitment to standardized reporting frameworks.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded">
                            <h3 className="text-[#D9B44A] font-bold uppercase text-xs tracking-widest mb-2">Verified Credentials</h3>
                            <p className="text-sm text-gray-300">Operating history and financial controls validated before admission</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded">
                            <h3 className="text-[#D9B44A] font-bold uppercase text-xs tracking-widest mb-2">Active Monitoring</h3>
                            <p className="text-sm text-gray-300">Continuous compliance tracking across all obligations</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded">
                            <h3 className="text-[#D9B44A] font-bold uppercase text-xs tracking-widest mb-2">Transparent Records</h3>
                            <p className="text-sm text-gray-300">Standardized operating records updated in real-time</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
