// components/sponsors/SponsorPortfolio.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface Offering {
    id: string
    title: string
    image: string
    noteType: string
    fundingStatus: string
    targetYield: string
    investmentTerm: string
    minimumInvestment: string
}

interface SponsorPortfolioProps {
    offerings: Offering[]
    sponsorName: string
}

export default function SponsorPortfolio({ offerings, sponsorName }: SponsorPortfolioProps) {
    return (
        <section className="bg-white py-20 border-t border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">
                        Active Portfolio
                    </span>
                    <h2 className="text-4xl font-serif text-[#111827] mb-4">
                        Current Offerings
                    </h2>
                    <p className="text-lg text-gray-800 max-w-2xl mx-auto">
                        Explore available investment opportunities from {sponsorName}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={offering.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={`/offerings/${offering.id}`}>
                                <div className="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-gray-100">
                                        {offering.image ? (
                                            <Image
                                                src={offering.image}
                                                alt={offering.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                                                offering.fundingStatus === 'Active' ? 'bg-white text-[#095520] border border-white' :
                                                offering.fundingStatus === 'Closing Soon' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                                                'bg-gray-100 text-gray-800 border border-gray-300'
                                            }`}>
                                                {offering.fundingStatus}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-[#0A3F28] text-[#D9B44A] text-xs font-bold rounded mb-3">
                                            {offering.noteType}
                                        </span>
                                        <h3 className="text-lg font-semibold text-[#111827] mb-3 group-hover:text-[#0A3F28] transition-colors">
                                            {offering.title}
                                        </h3>

                                        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-[#E5E7EB]">
                                            <div>
                                                <p className="text-xs text-gray-800 mb-1">Target Yield</p>
                                                <p className="text-lg font-bold text-[#0A3F28]">{offering.targetYield}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-800 mb-1">Investment Term</p>
                                                <p className="text-lg font-bold text-[#111827]">{offering.investmentTerm}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-800">Min. Investment</span>
                                            <span className="font-semibold text-[#111827]">{offering.minimumInvestment}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {offerings.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-800">No active offerings at this time.</p>
                    </div>
                )}
            </div>
        </section>
    )
}
