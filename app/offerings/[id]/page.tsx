// app/offerings/[id]/page.tsx
'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getPortfolioById } from '@/data/mockPortfolios'
import DataRoomSection from '@/components/offerings/DataRoomSection'

export default function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const portfolio = getPortfolioById(parseInt(resolvedParams.id))

    if (!portfolio) {
        return (
            <div className="min-h-screen bg-[#F3F4F1] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-[#095520] mb-4">Portfolio Not Found</h1>
                    <Link href="/offerings" className="text-[#095520] underline">
                        Back to Offerings
                    </Link>
                </div>
            </div>
        )
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Available':
                return 'bg-green-50 text-green-700 border-green-200'
            case 'Funding':
                return 'bg-yellow-50 text-yellow-700 border-yellow-200'
            case 'Funded':
                return 'bg-gray-100 text-gray-600 border-gray-300'
            default:
                return 'bg-gray-100 text-gray-600 border-gray-300'
        }
    }

    return (
        <main className="min-h-screen bg-[#F3F4F1]">
            {/* Hero Image Section */}
            <section className="relative h-[calc(100vh-210px)] min-h-[500px] overflow-hidden">
                <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Back Button */}
                <Link
                    href="/offerings"
                    className="absolute top-8 left-8 z-10 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[#095520] font-medium hover:bg-white transition-all duration-300 flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Listings
                </Link>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className={`px-4 py-1.5 text-sm font-semibold rounded-full border ${getStatusColor(portfolio.fundingStatus)}`}>
                                    {portfolio.fundingStatus}
                                </span>
                                <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-white/90 backdrop-blur-sm text-[#095520]">
                                    {portfolio.strategy}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-3">
                                {portfolio.title}
                            </h1>
                            <p className="text-xl text-white/90 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                {portfolio.portfolioMetrics.totalProperties} Properties • {portfolio.portfolioMetrics.geographicMarkets.length} Markets
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Bar */}
            <section className="bg-white border-b border-gray-200 py-8 px-6 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <p className="text-sm text-[#095520] mb-1">Target Yield</p>
                            <p className="text-2xl font-semibold text-[#095520]">{portfolio.targetYield}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#095520] mb-1">Investment Term</p>
                            <p className="text-2xl font-semibold text-[#095520]">{portfolio.investmentTerm}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#095520] mb-1">Minimum Investment</p>
                            <p className="text-2xl font-semibold text-[#095520]">{portfolio.minimumInvestment}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#095520] mb-1">Total Raise</p>
                            <p className="text-2xl font-semibold text-[#095520]">{portfolio.totalRaise}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Main Info */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-4">Portfolio Overview</h2>
                                <p className="text-lg text-black leading-relaxed mb-6">{portfolio.description}</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {portfolio.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-black">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Portfolio Metrics */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Portfolio Metrics</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-[#095520]">Total Properties</p>
                                            <p className="text-base font-medium text-black">{portfolio.portfolioMetrics.totalProperties}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#095520]">Total Portfolio Value</p>
                                            <p className="text-base font-medium text-black">{portfolio.portfolioMetrics.totalValue}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#095520]">Average Occupancy</p>
                                            <p className="text-base font-medium text-black">{portfolio.portfolioMetrics.averageOccupancy}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-[#095520]">Total Square Feet</p>
                                            <p className="text-base font-medium text-black">{portfolio.portfolioMetrics.totalSquareFeet.toLocaleString()} SF</p>
                                        </div>
                                        {portfolio.portfolioMetrics.totalUnits > 0 && (
                                            <div>
                                                <p className="text-sm text-[#095520]">Total Units</p>
                                                <p className="text-base font-medium text-black">{portfolio.portfolioMetrics.totalUnits}</p>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-sm text-[#095520]">Geographic Markets</p>
                                            <p className="text-base font-medium text-black">{portfolio.portfolioMetrics.geographicMarkets.join(', ')}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Property Allocation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Asset Allocation</h2>
                                <div className="space-y-4">
                                    {portfolio.propertyAllocation.map((allocation, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-black font-medium">{allocation.type}</span>
                                                <span className="text-black font-semibold">{allocation.percentage}% ({allocation.count} {allocation.count === 1 ? 'property' : 'properties'})</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${allocation.percentage}%` }}
                                                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                                                    className="h-full bg-gradient-to-r from-[#095520] to-[#008929]"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Diversification */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Risk Diversification</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Geographic Diversification</span>
                                        <span className="font-semibold text-black">{portfolio.diversification.geographicDiversification}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Asset Type Diversification</span>
                                        <span className="font-semibold text-black">{portfolio.diversification.assetTypeDiversification}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-[#095520]">Tenant Diversification</span>
                                        <span className="font-semibold text-black">{portfolio.diversification.tenantDiversification}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Individual Properties */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Properties in Portfolio</h2>
                                <div className="space-y-6">
                                    {portfolio.properties.map((property, index) => (
                                        <div key={index} className="group overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
                                            <div className="grid md:grid-cols-3 gap-0">
                                                {/* Property Image */}
                                                <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={property.image}
                                                        alt={property.name}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                    <div className="absolute top-4 right-4">
                                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#095520]/90 text-yellow-400 backdrop-blur-sm">
                                                            {property.propertyType}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Property Info */}
                                                <div className="md:col-span-2 p-6">
                                                    <div className="mb-4">
                                                        <h3 className="text-xl font-semibold text-[#095520] mb-2">{property.name}</h3>
                                                        <p className="text-sm text-[#095520] flex items-center gap-1">
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            {property.location}
                                                        </p>
                                                    </div>

                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                                                        <div>
                                                            <p className="text-[#095520] mb-1">Built</p>
                                                            <p className="font-semibold text-black">{property.yearBuilt}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[#095520] mb-1">Square Feet</p>
                                                            <p className="font-semibold text-black">{property.squareFeet.toLocaleString()} SF</p>
                                                        </div>
                                                        {property.totalUnits && (
                                                            <div>
                                                                <p className="text-[#095520] mb-1">Units</p>
                                                                <p className="font-semibold text-black">{property.totalUnits}</p>
                                                            </div>
                                                        )}
                                                        <div>
                                                            <p className="text-[#095520] mb-1">Occupancy</p>
                                                            <p className="font-semibold text-black">{property.occupancyRate}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[#095520] mb-1">Annual Rent</p>
                                                            <p className="font-semibold text-black">{property.annualRent}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[#095520] mb-1">Property Value</p>
                                                            <p className="font-semibold text-black">{property.propertyValue}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Investment Structure */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Investment Structure</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Structure Type</span>
                                        <span className="font-semibold text-black">{portfolio.investmentStructure.structureType}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Total Senior Debt</span>
                                        <span className="font-semibold text-black">{portfolio.investmentStructure.totalSeniorDebt}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Weighted Avg LTV</span>
                                        <span className="font-semibold text-black">{portfolio.investmentStructure.weightedAvgLTV}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Weighted Avg DSCR</span>
                                        <span className="font-semibold text-black">{portfolio.investmentStructure.weightedAvgDSCR}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-[#095520]">Total Reserves</span>
                                        <span className="font-semibold text-black">{portfolio.investmentStructure.totalReserves}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Financials */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Financial Projections</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Projected Annual Return</span>
                                        <span className="font-semibold text-black">{portfolio.financials.projectedAnnualReturn}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Distribution Schedule</span>
                                        <span className="font-semibold text-black">{portfolio.financials.cashDistributionSchedule}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Hold Period</span>
                                        <span className="font-semibold text-black">{portfolio.financials.holdPeriod}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]">Exit Strategy</span>
                                        <span className="font-semibold text-black">{portfolio.financials.exitStrategy}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-[#095520]">Total Annual Rent</span>
                                        <span className="font-semibold text-black">{portfolio.financials.totalAnnualRent}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column - CTA */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white rounded-2xl p-8 shadow-lg sticky top-[240px]"
                            >
                                <h3 className="text-xl font-semibold text-[#095520] mb-6">Investment Summary</h3>

                                {portfolio.fundingStatus !== 'Funded' && (
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-[#095520]">Funding Progress</span>
                                            <span className="text-sm font-semibold text-black">{portfolio.fundingProgress}%</span>
                                        </div>
                                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${portfolio.fundingProgress}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-[#095520] to-[#008929]"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#095520]">Target Yield</span>
                                        <span className="font-semibold text-black">{portfolio.targetYield}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#095520]">Minimum</span>
                                        <span className="font-semibold text-black">{portfolio.minimumInvestment}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#095520]">Term</span>
                                        <span className="font-semibold text-black">{portfolio.investmentTerm}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#095520]">Properties</span>
                                        <span className="font-semibold text-black">{portfolio.portfolioMetrics.totalProperties}</span>
                                    </div>
                                </div>

                                <button className="w-full py-4 px-6 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-widest hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 mb-4">
                                    Express Interest
                                </button>

                                <p className="text-xs text-center text-[#095520]">
                                    Our team will contact you within 24 hours
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Room Section */}
            <DataRoomSection documents={portfolio.documents} propertyTitle={portfolio.title} />
        </main>
    )
}
