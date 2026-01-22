// components/offerings/PortfolioCard.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Portfolio {
    id: number
    title: string
    strategy: string
    image: string
    targetYield: string
    investmentTerm: string
    minimumInvestment: string
    fundingStatus: string
    fundingProgress: number
    totalRaise: string
    portfolioMetrics: {
        totalProperties: number
        geographicMarkets: string[]
    }
    propertyAllocation: {
        type: string
        percentage: number
    }[]
}

interface PortfolioCardProps {
    portfolio: Portfolio
    index: number
    viewMode?: 'grid' | 'list'
}

export default function PortfolioCard({ portfolio, index, viewMode = 'grid' }: PortfolioCardProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Available':
                return 'bg-green-50 text-green-700 border-green-200'
            case 'Funding':
                return 'bg-[#F3F4F1] text-[#095520] border-[#095520]/20'
            case 'Funded':
                return 'bg-gray-100 text-gray-600 border-gray-300'
            default:
                return 'bg-gray-100 text-gray-600 border-gray-300'
        }
    }

    // List view layout - horizontal card
    if (viewMode === 'list') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
                <Link href={`/offerings/${portfolio.id}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row">
                        {/* Image - Smaller in list view */}
                        <div className="relative h-48 md:h-auto md:w-80 flex-shrink-0 overflow-hidden bg-gray-100">
                            <Image
                                src={portfolio.image}
                                alt={portfolio.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Content - Horizontal layout */}
                        <div className="flex-1 p-6 bg-white flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    {/* Badges */}
                                    <div className="flex items-center gap-2 flex-wrap mb-3">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(portfolio.fundingStatus)}`}>
                                            {portfolio.fundingStatus}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#F3F4F1] text-[#095520]">
                                            {portfolio.strategy}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-semibold text-[#095520] mb-2 group-hover:text-[#008929] transition-colors">
                                        {portfolio.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-[#095520]">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span>{portfolio.portfolioMetrics.totalProperties} Properties</span>
                                        <span className="text-[#095520]/30">•</span>
                                        <span>{portfolio.portfolioMetrics.geographicMarkets.length} Markets</span>
                                    </div>
                                </div>

                                {/* Target Yield - Prominent */}
                                <div className="text-center px-6 py-4 bg-gradient-to-br from-[#095520]/5 to-[#008929]/5 rounded-xl border border-[#095520]/10 ml-4">
                                    <p className="text-xs text-[#095520] font-medium mb-1">TARGET YIELD</p>
                                    <p className="text-4xl font-bold text-[#095520]">{portfolio.targetYield}</p>
                                </div>
                            </div>

                            {/* Horizontal Metrics */}
                            <div className="flex items-center gap-6 pt-4 border-t border-gray-100 mt-auto">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-black">{portfolio.investmentTerm}</p>
                                        <p className="text-xs text-[#095520]/60">Investment Term</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-black">{portfolio.minimumInvestment}</p>
                                        <p className="text-xs text-[#095520]/60">Minimum Investment</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#095520]/10 to-[#008929]/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xs font-bold text-[#095520]">{portfolio.fundingProgress}%</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-black">{portfolio.fundingStatus}</p>
                                        <p className="text-xs text-[#095520]/60">Status</p>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="ml-auto py-2.5 px-6 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-wider hover:shadow-xl transition-all duration-300 flex items-center gap-2 flex-shrink-0">
                                    View Details
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        )
    }

    // Grid view layout - original vertical card
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            <Link href={`/offerings/${portfolio.id}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    {/* Image - Better size */}
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                        <Image
                            src={portfolio.image}
                            alt={portfolio.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Content - Tighter spacing */}
                    <div className="p-5 bg-white space-y-3">
                        {/* Badges at top of content */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(portfolio.fundingStatus)}`}>
                                {portfolio.fundingStatus}
                            </span>
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#F3F4F1] text-[#095520]">
                                {portfolio.strategy}
                            </span>
                        </div>
                        {/* ONE BIG NUMBER - Target Yield prominently displayed */}
                        <div className="text-center py-3 bg-gradient-to-br from-[#095520]/5 to-[#008929]/5 rounded-xl border border-[#095520]/10">
                            <p className="text-xs text-[#095520] font-medium mb-1">TARGET YIELD</p>
                            <p className="text-4xl font-bold text-[#095520]">{portfolio.targetYield}</p>
                        </div>

                        {/* Title */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#095520] mb-2 group-hover:text-[#008929] transition-colors line-clamp-2">
                                {portfolio.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-[#095520]">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span>{portfolio.portfolioMetrics.totalProperties} Properties</span>
                                <span className="text-[#095520]/30">•</span>
                                <span>{portfolio.portfolioMetrics.geographicMarkets.length} Markets</span>
                            </div>
                        </div>

                        {/* Simple Icon-based Metrics */}
                        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
                            <div className="text-center">
                                <div className="flex justify-center mb-1">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-black">{portfolio.investmentTerm}</p>
                                <p className="text-xs text-[#095520]/60">Term</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-1">
                                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-black">{portfolio.minimumInvestment}</p>
                                <p className="text-xs text-[#095520]/60">Minimum</p>
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center mb-1">
                                    {portfolio.fundingStatus !== 'Funded' ? (
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#095520]/10 to-[#008929]/10 flex items-center justify-center relative">
                                           
                                            <span className="absolute text-xs font-bold text-[#095520]">{portfolio.fundingProgress}%</span>
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <p className="text-sm font-semibold text-black">{portfolio.fundingStatus}</p>
                                <p className="text-xs text-[#095520]/60">Status</p>
                            </div>
                        </div>

                        {/* CTA Button - Cleaner */}
                        <button className="w-full py-2.5 px-4 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-wider hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                            View Details
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
