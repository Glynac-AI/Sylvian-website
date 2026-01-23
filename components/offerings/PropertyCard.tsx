// components/offerings/PropertyCard.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Property {
    id: number
    title: string
    location: string
    propertyType: string
    image: string
    targetYield: string
    investmentTerm: string
    minimumInvestment: string
    fundingStatus: string
    fundingProgress: number
    totalRaise: string
    description: string
    highlights: string[]
}

interface PropertyCardProps {
    property: Property
    index: number
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-50 text-green-700 border-green-200'
            case 'Closing Soon':
                return 'bg-amber-50 text-amber-700 border-amber-200'
            case 'Closed':
                return 'bg-gray-100 text-gray-600 border-gray-300'
            default:
                return 'bg-gray-100 text-gray-600 border-gray-300'
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            <Link href={`/offerings/${property.id}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                        <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(property.fundingStatus)}`}>
                                {property.fundingStatus}
                            </span>
                        </div>
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#095520]/90 text-yellow-400 backdrop-blur-sm">
                                {property.propertyType}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                        {/* Title & Location */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#095520] mb-1 group-hover:text-[#008929] transition-colors">
                                {property.title}
                            </h3>
                            <p className="text-sm text-[#095520]/60 flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {property.location}
                            </p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-gray-100">
                            <div>
                                <p className="text-xs text-[#095520]/50 mb-0.5">Target Yield</p>
                                <p className="text-base font-semibold text-[#095520]">{property.targetYield}</p>
                            </div>
                            <div>
                                <p className="text-xs text-[#095520]/50 mb-0.5">Term</p>
                                <p className="text-base font-semibold text-[#095520]">{property.investmentTerm}</p>
                            </div>
                            <div>
                                <p className="text-xs text-[#095520]/50 mb-0.5">Minimum</p>
                                <p className="text-base font-semibold text-[#095520]">{property.minimumInvestment}</p>
                            </div>
                            <div>
                                <p className="text-xs text-[#095520]/50 mb-0.5">Total Raise</p>
                                <p className="text-base font-semibold text-[#095520]">{property.totalRaise}</p>
                            </div>
                        </div>

                        {/* Funding Progress */}
                        {property.fundingStatus !== 'Closed' && (
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-[#095520]/50">Funding Progress</span>
                                    <span className="text-xs font-semibold text-[#095520]">{property.fundingProgress}%</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${property.fundingProgress}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="h-full bg-gradient-to-r from-[#095520] to-[#008929]"
                                    />
                                </div>
                            </div>
                        )}

                        {/* CTA Button */}
                        <button className="w-full py-3 px-4 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm uppercase tracking-widest hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]">
                            View Details
                            <svg className="inline-block w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}