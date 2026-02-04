// components/offerings/PortfolioFilters.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface PortfolioFiltersProps {
    selectedStatus: string
    setSelectedStatus: (status: string) => void
    selectedStructure: string
    setSelectedStructure: (type: string) => void
    minInvestment: string
    setMinInvestment: (amount: string) => void
    viewMode: 'grid' | 'list'
    setViewMode: (mode: 'grid' | 'list') => void
}

export default function PortfolioFilters({
    selectedStatus,
    setSelectedStatus,
    selectedStructure,
    setSelectedStructure,
    minInvestment,
    setMinInvestment,
    viewMode,
    setViewMode
}: PortfolioFiltersProps) {
    const [selectedTerm, setSelectedTerm] = useState('All')

    const statusOptions = ['All', 'Active', 'Closing Soon', 'Closed']
    const structureOptions = ['All', 'Senior Secured', 'Bridge & Refinance', 'Completion']
    const investmentRanges = ['All', '$25k-$50K', '$50K-$100K', '$100K-$250K', '$250K+']
    const termOptions = ['All', '1-3 years', '3-5 years', '5-7 years', '7+ years']

    const hasActiveFilters = selectedStatus !== 'All' || selectedStructure !== 'All' || minInvestment !== 'All' || selectedTerm !== 'All'

    return (
        <section className="sticky top-16 md:top-18 z-20 bg-[#0A3F28]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-4"
                >
                    {/* Single Row Layout */}
                    <div className="flex items-center justify-between gap-6">
                        {/* Left: Product Structure Pills */}
                        <div className="flex items-center gap-2">
                            {structureOptions.map((structure) => (
                                <button
                                    key={structure}
                                    onClick={() => setSelectedStructure(structure)}
                                    className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                                        selectedStructure === structure
                                            ? 'bg-[#D9B44A] text-[#0A3F28]'
                                            : 'text-white/70 hover:text-white border border-white/20 hover:border-white/40'
                                    }`}
                                >
                                    {structure === 'All' ? 'All' : structure}
                                </button>
                            ))}
                        </div>

                        {/* Right: Dropdowns + View Toggle */}
                        <div className="flex items-center gap-3">
                            {/* Status Dropdown */}
                            <div className="relative">
                                <select
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    className="pl-4 pr-9 py-2 text-sm font-medium uppercase tracking-wide bg-transparent text-white/70 border border-white/20 hover:border-white/40 focus:outline-none transition-all cursor-pointer appearance-none"
                                >
                                    {statusOptions.map((option) => (
                                        <option key={option} value={option} className="text-gray-900 normal-case">
                                            {option === 'All' ? 'Status' : option}
                                        </option>
                                    ))}
                                </select>
                                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-white/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Min Investment Dropdown */}
                            <div className="relative">
                                <select
                                    value={minInvestment}
                                    onChange={(e) => setMinInvestment(e.target.value)}
                                    className="pl-4 pr-9 py-2 text-sm font-medium uppercase tracking-wide bg-transparent text-white/70 border border-white/20 hover:border-white/40 focus:outline-none transition-all cursor-pointer appearance-none"
                                >
                                    {investmentRanges.map((option) => (
                                        <option key={option} value={option} className="text-gray-900 normal-case">
                                            {option === 'All' ? 'Investment' : option}
                                        </option>
                                    ))}
                                </select>
                                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-white/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Term Dropdown */}
                            <div className="relative">
                                <select
                                    value={selectedTerm}
                                    onChange={(e) => setSelectedTerm(e.target.value)}
                                    className="pl-4 pr-9 py-2 text-sm font-medium uppercase tracking-wide bg-transparent text-white/70 border border-white/20 hover:border-white/40 focus:outline-none transition-all cursor-pointer appearance-none"
                                >
                                    {termOptions.map((option) => (
                                        <option key={option} value={option} className="text-gray-900 normal-case">
                                            {option === 'All' ? 'Term' : option}
                                        </option>
                                    ))}
                                </select>
                                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-white/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Clear Filters */}
                            {hasActiveFilters && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={() => {
                                        setSelectedStatus('All')
                                        setSelectedStructure('All')
                                        setMinInvestment('All')
                                        setSelectedTerm('All')
                                    }}
                                    className="text-xs text-[#D9B44A] hover:text-[#D9B44A]/80 transition-colors uppercase tracking-wide"
                                >
                                    Clear
                                </motion.button>
                            )}

                            {/* Divider */}
                            <div className="h-6 w-px bg-white/20" />

                            {/* View Toggle */}
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 transition-all duration-300 ${
                                        viewMode === 'grid'
                                            ? 'text-[#D9B44A]'
                                            : 'text-white/50 hover:text-white/70'
                                    }`}
                                    title="Grid view"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 transition-all duration-300 ${
                                        viewMode === 'list'
                                            ? 'text-[#D9B44A]'
                                            : 'text-white/50 hover:text-white/70'
                                    }`}
                                    title="List view"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}