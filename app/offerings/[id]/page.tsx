// app/offerings/[id]/page.tsx
'use client'

import { use, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getPortfolioById } from '@/data/mockPortfolios'
import DataRoomSection from '@/components/offerings/DataRoomSection'
import CapitalStackVisualization from '@/components/offerings/CapitalStackVisualization'
import SponsorProfile from '@/components/offerings/SponsorProfile'
import RiskFactorsSection from '@/components/offerings/RiskFactorsSection'
import DetailsPageNav from '@/components/offerings/DetailsPageNav'

export default function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const portfolio = getPortfolioById(parseInt(resolvedParams.id))
    const [isAuthenticated, setIsAuthenticated] = useState(false)

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
            case 'Active':
                return 'bg-white text-[#095520] border-white'
            case 'Closing Soon':
                return 'bg-amber-100 text-amber-800 border-amber-200'
            case 'Closed':
                return 'bg-gray-100 text-gray-600 border-gray-300'
            default:
                return 'bg-gray-100 text-gray-600 border-gray-300'
        }
    }

    return (
        <main className="min-h-screen bg-[#F3F4F1] -mt-20 md:-mt-24">
            {/* Sticky Navigation - Only show when authenticated */}
            {isAuthenticated && <DetailsPageNav portfolioTitle={portfolio.title} />}

            {/* Back Button Section - Gap Above Image */}
            <section className="py-6 px-6 bg-[#F3F4F1] pt-24 md:pt-28">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/offerings"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#095520] font-medium hover:shadow-md transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Listings
                    </Link>
                </div>
            </section>

            {/* Hero Image Section */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden px-6">
                <div className="relative h-full rounded-3xl overflow-hidden">
                    <Image
                        src={portfolio.image}
                        alt={portfolio.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-6 left-6 flex gap-3 z-10">
                        <span className={`px-4 py-1.5 text-sm font-semibold rounded-full shadow-md border ${getStatusColor(portfolio.fundingStatus)}`}>
                            {portfolio.fundingStatus}
                        </span>
                        <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-[#095520] text-yellow-400 border border-[#095520] shadow-md">
                            {portfolio.strategy}
                        </span>
                    </div>

                    {/* Bottom content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                        <div className="max-w-7xl mx-auto">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 drop-shadow-lg">
                                {portfolio.title}
                            </h1>
                            <p className="text-white/80 flex items-center gap-2 text-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {portfolio.portfolioMetrics.totalProperties} Properties across {portfolio.portfolioMetrics.geographicMarkets.length} Markets
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Bar - Only when NOT authenticated (teaser) */}
            {!isAuthenticated && (
                <section className="bg-white py-6 px-6 shadow-lg -mt-6 mx-6 rounded-2xl relative z-20 mb-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="text-center">
                                <p className="text-xs text-[#095520]/60 uppercase tracking-wider mb-1">Target Yield</p>
                                <p className="text-2xl md:text-3xl font-bold text-[#095520]">{portfolio.targetYield}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-[#095520]/60 uppercase tracking-wider mb-1">Investment Term</p>
                                <p className="text-2xl md:text-3xl font-bold text-[#095520]">{portfolio.investmentTerm}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-[#095520]/60 uppercase tracking-wider mb-1">Minimum</p>
                                <p className="text-2xl md:text-3xl font-bold text-[#095520]">{portfolio.minimumInvestment}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-[#095520]/60 uppercase tracking-wider mb-1">Total Raise</p>
                                <p className="text-2xl md:text-3xl font-bold text-[#095520]">{portfolio.totalRaise}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Full Metrics Section - Only when authenticated (original layout) */}
            {isAuthenticated && (
                <section className="bg-white py-12 px-6 mt-8 mb-8 shadow-md">
                    <div className="max-w-7xl mx-auto">
                        {/* Key Metrics Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                            <div>
                                <p className="text-sm text-[#095520]/60 uppercase tracking-wider mb-1">Target Yield</p>
                                <p className="text-2xl font-bold text-[#095520]">{portfolio.targetYield}</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#095520]/60 uppercase tracking-wider mb-1">Investment Term</p>
                                <p className="text-2xl font-bold text-[#095520]">{portfolio.investmentTerm}</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#095520]/60 uppercase tracking-wider mb-1">Minimum</p>
                                <p className="text-2xl font-bold text-[#095520]">{portfolio.minimumInvestment}</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#095520]/60 uppercase tracking-wider mb-1">Total Raise</p>
                                <p className="text-2xl font-bold text-[#095520]">{portfolio.totalRaise}</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#095520]/60 uppercase tracking-wider mb-1">Total Value</p>
                                <p className="text-2xl font-bold text-[#095520]">{portfolio.portfolioMetrics.totalValue}</p>
                            </div>
                            <div>
                                <p className="text-sm text-[#095520]/60 uppercase tracking-wider mb-1">Avg. Occupancy</p>
                                <p className="text-2xl font-bold text-[#095520]">{portfolio.portfolioMetrics.averageOccupancy}</p>
                            </div>
                        </div>

                        {/* Funding Progress Bar */}
                        {portfolio.fundingStatus !== 'Closed' && (
                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-[#095520]">Funding Progress</span>
                                    <span className="text-sm font-semibold text-[#095520]">{portfolio.fundingProgress}%</span>
                                </div>
                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${portfolio.fundingProgress}%` }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="h-full bg-gradient-to-r from-[#095520] to-[#008929]"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Main Content */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Pre-auth Content - Overview + Login CTA */}
                    {!isAuthenticated && (
                        <>
                            {/* Overview */}
                            <motion.div
                                id="overview"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-2xl p-8 md:p-10 shadow-md"
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold text-[#095520] mb-6">Portfolio Overview</h2>
                                <p className="text-lg md:text-xl text-black leading-relaxed mb-8 max-w-4xl">{portfolio.description}</p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                    {portfolio.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 bg-[#F3F4F1]/50 rounded-xl">
                                            <svg className="w-5 h-5 text-[#095520] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm md:text-base text-[#013220]">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Login CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-12 text-center max-w-2xl mx-auto"
                            >
                                <div className="bg-gradient-to-br from-[#095520]/5 to-[#008929]/5 rounded-2xl p-10 border border-[#095520]/10">
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#095520]/10 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-[#095520]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-[#095520] mb-3">
                                        Sign in to view full details
                                    </h3>
                                    <p className="text-[#013220]/70 mb-8 max-w-md mx-auto">
                                        Access detailed financials, property information, investment structure, and documents.
                                    </p>
                                    <button
                                        onClick={() => setIsAuthenticated(true)}
                                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#095520] text-white rounded-full font-medium hover:bg-[#074418] transition-colors"
                                    >
                                        Sign in to continue
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}

                    {/* Full Content - Only when authenticated */}
                    <AnimatePresence>
                        {isAuthenticated && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Main Info */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Portfolio Overview */}
                            <motion.div
                                id="overview"
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
                                            <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-black">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Portfolio Metrics */}
                            <motion.div
                                id="metrics"
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
                                            <p className="text-base font-medium text-black">{portfolio.portfolioMetrics.totalSquareFeet.toLocaleString('en-US')} SF</p>
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

                            {/* Sponsor Profile */}
                            <div id="sponsor">
                                <SponsorProfile sponsorProfile={portfolio.sponsorProfile} />
                            </div>

                            {/* Removed Asset Allocation Section */}

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

                            {/* Risk Factors */}
                            <div id="risks">
                                <RiskFactorsSection riskFactors={portfolio.riskFactors} />
                            </div>

                            {/* Individual Properties */}
                            <motion.div
                                id="properties"
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
                                                </div>

                                                {/* Property Info */}
                                                <div className="md:col-span-2 p-6">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className="flex-1">
                                                            <h3 className="text-xl font-semibold text-[#095520] mb-2">{property.name}</h3>
                                                            <p className="text-sm text-[#095520] flex items-center gap-1">
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                                {property.location}
                                                            </p>
                                                        </div>
                                                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#F3F4F1] text-[#095520] border border-[#095520]/10 ml-4">
                                                            {property.propertyType}
                                                        </span>
                                                    </div>

                                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                                                        <div>
                                                            <p className="text-[#095520] mb-1">Built</p>
                                                            <p className="font-semibold text-black">{property.yearBuilt}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[#095520] mb-1">Square Feet</p>
                                                            <p className="font-semibold text-black">{property.squareFeet.toLocaleString('en-US')} SF</p>
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
                                id="structure"
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

                            {/* Capital Stack Visualization */}
                            <CapitalStackVisualization capitalStack={portfolio.capitalStack} />

                            {/* Financials */}
                            <motion.div
                                id="financials"
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
                                className="bg-white rounded-2xl p-8 shadow-lg sticky top-[120px]"
                            >
                                <h3 className="text-xl font-semibold text-[#095520] mb-6">Investment Summary</h3>

                                {portfolio.fundingStatus !== 'Closed' && (
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Data Room Section - Only when authenticated */}
            {isAuthenticated && (
                <div id="documents">
                    <DataRoomSection documents={portfolio.documents} propertyTitle={portfolio.title} />
                </div>
            )}
        </main>
    )
}