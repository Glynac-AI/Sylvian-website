// app/offerings/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PortfolioCard from '@/components/offerings/PortfolioCard'
import PortfolioFilters from '@/components/offerings/PortfolioFilters'
import { mockPortfolios } from '@/data/mockPortfolios'

// Use mock portfolio data
const portfolios = mockPortfolios

export default function OfferingsPage() {
    const [selectedStrategy, setSelectedStrategy] = useState('All')
    const [selectedStatus, setSelectedStatus] = useState('All')
    const [minInvestment, setMinInvestment] = useState('All')

    // Filter portfolios based on selections
    const filteredPortfolios = portfolios.filter(portfolio => {
        const strategyMatch = selectedStrategy === 'All' || portfolio.strategy === selectedStrategy
        const statusMatch = selectedStatus === 'All' || portfolio.fundingStatus === selectedStatus
        const investmentMatch = minInvestment === 'All' ||
            (minInvestment === '$50,000' && parseInt(portfolio.minimumInvestment.replace(/[^0-9]/g, '')) <= 50000) ||
            (minInvestment === '$75,000' && parseInt(portfolio.minimumInvestment.replace(/[^0-9]/g, '')) <= 75000) ||
            (minInvestment === '$100,000+' && parseInt(portfolio.minimumInvestment.replace(/[^0-9]/g, '')) >= 100000)

        return strategyMatch && statusMatch && investmentMatch
    })

    // Get top listings (highest yield)
    const topListings = [...portfolios].sort((a, b) => {
        const yieldA = parseFloat(a.targetYield.replace('%', ''))
        const yieldB = parseFloat(b.targetYield.replace('%', ''))
        return yieldB - yieldA
    }).slice(0, 3)

    // Get recent listings (by funding status Available or Funding)
    const recentListings = portfolios.filter(p => p.fundingStatus === 'Available' || p.fundingStatus === 'Funding').slice(0, 3)

    return (
        <main className="min-h-screen bg-[#F3F4F1]">
            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-white overflow-hidden border-b border-gray-200">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#095520] mb-6 tracking-tight leading-[1.1]">
                            Investment Portfolios
                        </h1>
                        <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-3xl">
                            Explore our curated selection of diversified real estate portfolios. Each portfolio combines multiple properties to provide balanced returns, risk diversification, and professional asset management.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Top Listings Section */}
            <section className="py-16 px-6 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#095520] mb-3">
                            Top Opportunities
                        </h2>
                        <p className="text-lg text-[#095520]/60">
                            Highest yielding portfolios available now
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topListings.map((portfolio, index) => (
                            <PortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Listings Section */}
            <section className="py-16 px-6 bg-[#F3F4F1]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#095520] mb-3">
                            Recently Listed
                        </h2>
                        <p className="text-lg text-[#095520]/60">
                            Latest portfolios open for investment
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentListings.map((portfolio, index) => (
                            <PortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* All Listings Section with Filters */}
            <section className="bg-white border-t border-gray-200">
                <PortfolioFilters
                    selectedStrategy={selectedStrategy}
                    setSelectedStrategy={setSelectedStrategy}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    minInvestment={minInvestment}
                    setMinInvestment={setMinInvestment}
                />

                <div className="py-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-[#095520] mb-3">
                                All Portfolios
                            </h2>
                            <div className="flex items-center justify-between">
                                <p className="text-lg text-[#095520]/60">
                                    Browse our complete portfolio collection
                                </p>
                                <p className="text-sm text-[#095520]/60">
                                    Showing <span className="font-semibold text-[#095520]">{filteredPortfolios.length}</span> {filteredPortfolios.length === 1 ? 'portfolio' : 'portfolios'}
                                </p>
                            </div>
                        </motion.div>

                    {filteredPortfolios.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPortfolios.map((portfolio, index) => (
                                <PortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#095520]/5 flex items-center justify-center">
                                <svg className="w-8 h-8 text-[#095520]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-[#095520] mb-2">No portfolios found</h3>
                            <p className="text-[#095520]/60">Try adjusting your filters to see more results</p>
                        </motion.div>
                    )}
                    </div>
                </div>
            </section>
        </main>
    )
}
