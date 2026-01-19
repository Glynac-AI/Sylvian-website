// app/offerings/[id]/page.tsx
'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getPropertyById } from '@/data/mockProperties'
import DataRoomSection from '@/components/offerings/DataRoomSection'

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params)
    const property = getPropertyById(parseInt(resolvedParams.id))

    if (!property) {
        return (
            <div className="min-h-screen bg-[#F3F4F1] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-[#095520] mb-4">Property Not Found</h1>
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
                    src={property.image}
                    alt={property.title}
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
                    Back to Offerings
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
                                <span className={`px-4 py-1.5 text-sm font-semibold rounded-full border ${getStatusColor(property.fundingStatus)}`}>
                                    {property.fundingStatus}
                                </span>
                                <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-white/90 backdrop-blur-sm text-[#095520]">
                                    {property.propertyType}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-3">
                                {property.title}
                            </h1>
                            <p className="text-xl text-white/90 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {property.location}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Bar - Not Sticky */}
            <section className="bg-white border-b border-gray-200 py-8 px-6 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <p className="text-sm text-[#095520]/50 mb-1">Target Yield</p>
                            <p className="text-2xl font-semibold text-[#095520]">{property.targetYield}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#095520]/50 mb-1">Investment Term</p>
                            <p className="text-2xl font-semibold text-[#095520]">{property.investmentTerm}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#095520]/50 mb-1">Minimum Investment</p>
                            <p className="text-2xl font-semibold text-[#095520]">{property.minimumInvestment}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#095520]/50 mb-1">Total Raise</p>
                            <p className="text-2xl font-semibold text-[#095520]">{property.totalRaise}</p>
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
                                <h2 className="text-2xl font-semibold text-[#095520] mb-4">Property Overview</h2>
                                <p className="text-lg text-black leading-relaxed mb-6">{property.description}</p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {property.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-sm text-[#095520]/80">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Property Details */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Property Details</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-[#095520]/50">Address</p>
                                            <p className="text-base font-medium text-[#095520]">{property.propertyDetails.address}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#095520]/50">Year Built</p>
                                            <p className="text-base font-medium text-[#095520]">{property.propertyDetails.yearBuilt}</p>
                                        </div>
                                        {property.propertyDetails.totalUnits && (
                                            <div>
                                                <p className="text-sm text-[#095520]/50">Total Units</p>
                                                <p className="text-base font-medium text-[#095520]">{property.propertyDetails.totalUnits}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm text-[#095520]/50">Square Feet</p>
                                            <p className="text-base font-medium text-[#095520]">{property.propertyDetails.squareFeet.toLocaleString()} SF</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#095520]/50">Occupancy Rate</p>
                                            <p className="text-base font-medium text-[#095520]">{property.propertyDetails.occupancyRate}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#095520]/50">Annual Rent</p>
                                            <p className="text-base font-medium text-[#095520]">{property.propertyDetails.annualRent}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Investment Structure */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Investment Structure</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]/60">Structure Type</span>
                                        <span className="font-semibold text-[#095520]">{property.investmentStructure.structureType}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]/60">Senior Debt</span>
                                        <span className="font-semibold text-[#095520]">{property.investmentStructure.seniorDebt}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]/60">Loan-to-Value (LTV)</span>
                                        <span className="font-semibold text-[#095520]">{property.investmentStructure.loanToValue}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]/60">Debt Service Coverage</span>
                                        <span className="font-semibold text-[#095520]">{property.investmentStructure.debtServiceCoverage}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-[#095520]/60">Reserve Amount</span>
                                        <span className="font-semibold text-[#095520]">{property.investmentStructure.reserveAmount}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Financials */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white rounded-2xl p-8 shadow-md"
                            >
                                <h2 className="text-2xl font-semibold text-[#095520] mb-6">Financial Projections</h2>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]/60">Projected Annual Return</span>
                                        <span className="font-semibold text-[#095520]">{property.financials.projectedAnnualReturn}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]/60">Distribution Schedule</span>
                                        <span className="font-semibold text-[#095520]">{property.financials.cashDistributionSchedule}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-[#095520]/60">Hold Period</span>
                                        <span className="font-semibold text-[#095520]">{property.financials.holdPeriod}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3">
                                        <span className="text-[#095520]/60">Exit Strategy</span>
                                        <span className="font-semibold text-[#095520]">{property.financials.exitStrategy}</span>
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

                                {property.fundingStatus !== 'Funded' && (
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-[#095520]/60">Funding Progress</span>
                                            <span className="text-sm font-semibold text-[#095520]">{property.fundingProgress}%</span>
                                        </div>
                                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${property.fundingProgress}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-gradient-to-r from-[#095520] to-[#008929]"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#095520]/60">Target Yield</span>
                                        <span className="font-semibold text-[#095520]">{property.targetYield}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#095520]/60">Minimum</span>
                                        <span className="font-semibold text-[#095520]">{property.minimumInvestment}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#095520]/60">Term</span>
                                        <span className="font-semibold text-[#095520]">{property.investmentTerm}</span>
                                    </div>
                                </div>

                                <button className="w-full py-4 px-6 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-widest hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-100 mb-4">
                                    Express Interest
                                </button>

                                <p className="text-xs text-center text-[#095520]/50">
                                    Our team will contact you within 24 hours
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Room Section */}
            <DataRoomSection documents={property.documents} propertyTitle={property.title} />
        </main>
    )
}
