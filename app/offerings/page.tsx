// app/offerings/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PropertyCard from '@/components/offerings/PropertyCard'
import PropertyFilters from '@/components/offerings/PropertyFilters'
import { mockProperties } from '@/data/mockProperties'

// Use mock property data
const properties = mockProperties

export default function OfferingsPage() {
    const [selectedType, setSelectedType] = useState('All')
    const [selectedStatus, setSelectedStatus] = useState('All')
    const [minInvestment, setMinInvestment] = useState('All')

    // Filter properties based on selections
    const filteredProperties = properties.filter(property => {
        const typeMatch = selectedType === 'All' || property.propertyType === selectedType
        const statusMatch = selectedStatus === 'All' || property.fundingStatus === selectedStatus
        const investmentMatch = minInvestment === 'All' ||
            (minInvestment === '$25,000' && parseInt(property.minimumInvestment.replace(/[^0-9]/g, '')) <= 25000) ||
            (minInvestment === '$50,000' && parseInt(property.minimumInvestment.replace(/[^0-9]/g, '')) <= 50000) ||
            (minInvestment === '$75,000+' && parseInt(property.minimumInvestment.replace(/[^0-9]/g, '')) >= 75000)

        return typeMatch && statusMatch && investmentMatch
    })

    // Get top listings (highest yield)
    const topListings = [...properties].sort((a, b) => {
        const yieldA = parseFloat(a.targetYield.replace('%', ''))
        const yieldB = parseFloat(b.targetYield.replace('%', ''))
        return yieldB - yieldA
    }).slice(0, 3)

    // Get recent listings (by funding status Available or Funding)
    const recentListings = properties.filter(p => p.fundingStatus === 'Available' || p.fundingStatus === 'Funding').slice(0, 3)

    return (
        <main className="min-h-screen bg-[#F3F4F1]">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center px-6 bg-[#F3F4F1] overflow-hidden border-b border-gray-200 -mt-[88px] pt-[88px]">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

                {/* Background Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.025 }}
                    transition={{ duration: 1 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[850px] md:h-[850px] lg:w-[1000px] lg:h-[1000px] pointer-events-none"
                >
                    <Image src="/logo.png" alt="" fill className="object-contain opacity-100 translate-x-[20%]" priority />
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] tracking-[-0.02em] text-[#095520] mb-8">
                            Investment Opportunities
                        </h1>
                        <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-3xl">
                            Explore our curated selection of income-producing real estate investments. Each opportunity is backed by established properties with proven rental yields and ring-fenced in structured SPVs.
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
                            Highest yielding investments available now
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topListings.map((property, index) => (
                            <PropertyCard key={property.id} property={property} index={index} />
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
                            Latest properties open for investment
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentListings.map((property, index) => (
                            <PropertyCard key={property.id} property={property} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* All Listings Section with Filters */}
            <section className="bg-white border-t border-gray-200">
                <PropertyFilters
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
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
                                All Listings
                            </h2>
                            <div className="flex items-center justify-between">
                                <p className="text-lg text-[#095520]/60">
                                    Browse our complete investment portfolio
                                </p>
                                <p className="text-sm text-[#095520]/60">
                                    Showing <span className="font-semibold text-[#095520]">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'opportunity' : 'opportunities'}
                                </p>
                            </div>
                        </motion.div>

                    {filteredProperties.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProperties.map((property, index) => (
                                <PropertyCard key={property.id} property={property} index={index} />
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
                            <h3 className="text-xl font-medium text-[#095520] mb-2">No opportunities found</h3>
                            <p className="text-[#095520]/60">Try adjusting your filters to see more results</p>
                        </motion.div>
                    )}
                    </div>
                </div>
            </section>
        </main>
    )
}
