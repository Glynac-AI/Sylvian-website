// components/offerings/PortfolioFilters.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface PortfolioFiltersProps {
    selectedStatus: string
    setSelectedStatus: (status: string) => void
    minInvestment: string
    setMinInvestment: (amount: string) => void
    viewMode: 'grid' | 'list'
    setViewMode: (mode: 'grid' | 'list') => void
}

export default function PortfolioFilters({
    selectedStatus,
    setSelectedStatus,
    minInvestment,
    setMinInvestment,
    viewMode,
    setViewMode
}: PortfolioFiltersProps) {
    const [selectedTerm, setSelectedTerm] = useState('All')
    const [sortBy, setSortBy] = useState('newest')

    // Updated Status Options to match your previous request
    const statusOptions = ['All', 'Active', 'Closing Soon', 'Closed']
    const investmentRanges = ['All', '$25k-$50K', '$50K-$100K', '$100K-$250K', '$250K+']
    const termOptions = ['All', '1-3 years', '3-5 years', '5-7 years', '7+ years']

    return (
        <section className="sticky top-22 z-20 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-4"
                >
                    {/* Main Filter Row */}
                    <div className="flex items-center gap-4 mb-3 pb-3 border-b border-gray-100">
                        {/* Minimum Investment Slider/Dropdown */}
                        <div className="relative">
                            <select
                                value={minInvestment}
                                onChange={(e) => setMinInvestment(e.target.value)}
                                className="pl-4 pr-10 py-2 rounded-full text-sm font-medium bg-white text-[#095520] border border-gray-200 hover:border-[#095520]/30 focus:outline-none focus:ring-2 focus:ring-[#095520]/20 transition-all cursor-pointer appearance-none"
                            >
                                {investmentRanges.map((option) => (
                                    <option key={option} value={option}>
                                        {option === 'All' ? 'Min. Investment' : option}
                                    </option>
                                ))}
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#095520] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Term Dropdown */}
                        <div className="relative">
                            <select
                                value={selectedTerm}
                                onChange={(e) => setSelectedTerm(e.target.value)}
                                className="pl-4 pr-10 py-2 rounded-full text-sm font-medium bg-white text-[#095520] border border-gray-200 hover:border-[#095520]/30 focus:outline-none focus:ring-2 focus:ring-[#095520]/20 transition-all cursor-pointer appearance-none"
                            >
                                {termOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option === 'All' ? 'Term' : option}
                                    </option>
                                ))}
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#095520] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Sort By Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="pl-4 pr-10 py-2 rounded-full text-sm font-medium bg-white text-[#095520] border border-gray-200 hover:border-[#095520]/30 focus:outline-none focus:ring-2 focus:ring-[#095520]/20 transition-all cursor-pointer appearance-none"
                            >
                                <option value="newest">Newest</option>
                                <option value="yield-high">Highest Yield</option>
                                <option value="yield-low">Lowest Yield</option>
                                <option value="min-low">Min. Investment: Low to High</option>
                                <option value="min-high">Min. Investment: High to Low</option>
                                <option value="term-short">Term: Short to Long</option>
                                <option value="term-long">Term: Long to Short</option>
                            </select>
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#095520] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        {/* View Toggle */}
                        <div className="flex items-center gap-1 border border-gray-200 rounded-full p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-full transition-all duration-300 ${
                                    viewMode === 'grid'
                                        ? 'bg-[#095520] text-yellow-400'
                                        : 'text-[#095520]/50 hover:text-[#095520]'
                                }`}
                                title="Grid view"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-full transition-all duration-300 ${
                                    viewMode === 'list'
                                        ? 'bg-[#095520] text-yellow-400'
                                        : 'text-[#095520]/50 hover:text-[#095520]'
                                }`}
                                title="List view"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Status Filter Pills Row */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-[#095520]/50 uppercase tracking-wider">
                            Status:
                        </span>
                        {statusOptions.map((status) => (
                            <button
                                key={status}
                                onClick={() => setSelectedStatus(status)}
                                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                    selectedStatus === status
                                        ? 'bg-[#095520] text-yellow-400 shadow-md'
                                        : 'bg-gray-50 text-[#095520]/70 hover:bg-[#095520]/5 border border-gray-200'
                                }`}
                            >
                                {status}
                            </button>
                        ))}

                        {/* Clear Filters */}
                        {(selectedStatus !== 'All' || minInvestment !== 'All' || selectedTerm !== 'All') && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => {
                                    setSelectedStatus('All')
                                    setMinInvestment('All')
                                    setSelectedTerm('All')
                                }}
                                className="ml-auto text-xs text-[#095520]/60 hover:text-[#095520] underline underline-offset-2 transition-colors"
                            >
                                Clear all filters
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}