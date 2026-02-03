// components/sponsors/SponsorPortfolio.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { mockPortfolios } from '@/data/mockPortfolios'

interface SponsorPortfolioProps {
    portfolioIds: number[]
    sponsorName: string
}

export default function SponsorPortfolio({ portfolioIds, sponsorName }: SponsorPortfolioProps) {
    const portfolios = mockPortfolios.filter(p => portfolioIds.includes(p.id))

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
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore available investment opportunities from {sponsorName}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolios.map((portfolio, index) => (
                        <motion.div
                            key={portfolio.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={`/offerings/${portfolio.id}`}>
                                <div className="group bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-gray-100">
                                        <Image
                                            src={portfolio.image}
                                            alt={portfolio.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
                                                portfolio.fundingStatus === 'Active' ? 'bg-white text-[#095520] border border-white' :
                                                portfolio.fundingStatus === 'Closing Soon' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                                                'bg-gray-100 text-gray-600 border border-gray-300'
                                            }`}>
                                                {portfolio.fundingStatus}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-[#0A3F28] text-[#D9B44A] text-xs font-bold rounded mb-3">
                                            {portfolio.noteType}
                                        </span>
                                        <h3 className="text-lg font-semibold text-[#111827] mb-3 group-hover:text-[#0A3F28] transition-colors">
                                            {portfolio.title}
                                        </h3>

                                        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-[#E5E7EB]">
                                            <div>
                                                <p className="text-xs text-gray-600 mb-1">Target Yield</p>
                                                <p className="text-lg font-bold text-[#0A3F28]">{portfolio.targetYield}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600 mb-1">Investment Term</p>
                                                <p className="text-lg font-bold text-[#111827]">{portfolio.investmentTerm}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600">Min. Investment</span>
                                            <span className="font-semibold text-[#111827]">{portfolio.minimumInvestment}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {portfolios.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No active offerings at this time.</p>
                    </div>
                )}
            </div>
        </section>
    )
}
