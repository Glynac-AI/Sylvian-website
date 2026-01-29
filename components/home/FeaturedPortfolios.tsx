// components/home/FeaturedPortfolios.tsx
'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { mockPortfolios } from '@/data/mockPortfolios'
import AuthModal from '@/components/auth/AuthModal'

export default function FeaturedPortfolios() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [authModalOpen, setAuthModalOpen] = useState(false)

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-white/90 text-[#095520]'
            case 'Closing Soon':
                return 'bg-amber-100 text-amber-800'
            case 'Closed':
                return 'bg-gray-100 text-gray-600'
            default:
                return 'bg-gray-100 text-gray-600'
        }
    }

    return (
        <>
            <section ref={ref} className="py-24 md:py-32 px-6 bg-[#F3F4F1]">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="flex items-end justify-between mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#095520] tracking-tight">
                                Current Offerings
                            </h2>
                            <p className="mt-3 text-[#013220]/70 text-sm md:text-base max-w-xl">
                                Explore our curated selection of institutional-quality real estate investments
                            </p>
                        </div>
                        <button
                            onClick={() => setAuthModalOpen(true)}
                            className="hidden md:flex items-center gap-2 text-sm text-[#095520] hover:text-[#013220] transition-colors group"
                        >
                            <span className="font-medium">View all</span>
                            <svg
                                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </motion.div>

                    {/* Portfolio Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockPortfolios.slice(0, 3).map((portfolio, index) => (
                            <motion.div
                                key={portfolio.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                            <Link href={`/offerings/${portfolio.id}`} className="group">
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                    {/* Image */}
                                    <div className="relative h-44 overflow-hidden">
                                        <Image
                                            src={portfolio.image}
                                            alt={portfolio.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                                        {/* Badges */}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#095520] text-yellow-400">
                                                {portfolio.strategy}
                                            </span>
                                        </div>
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusColor(portfolio.fundingStatus)}`}>
                                                {portfolio.fundingStatus}
                                            </span>
                                        </div>

                                        {/* Target Yield Overlay */}
                                        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5">
                                            <p className="text-[10px] text-[#095520]/70 font-medium uppercase tracking-wide">Target Yield</p>
                                            <p className="text-lg font-bold text-[#095520]">{portfolio.targetYield}</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h3 className="text-base font-semibold text-[#095520] mb-2 group-hover:text-[#008929] transition-colors line-clamp-1">
                                            {portfolio.title}
                                        </h3>

                                        <div className="flex items-center gap-3 text-xs text-[#013220]/60">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                {portfolio.portfolioMetrics.totalProperties} Properties
                                            </span>
                                            <span className="text-[#095520]/20">•</span>
                                            <span>{portfolio.investmentTerm}</span>
                                            <span className="text-[#095520]/20">•</span>
                                            <span>{portfolio.minimumInvestment}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile View All */}
                    <motion.div
                        className="mt-8 text-center md:hidden"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <button
                            onClick={() => setAuthModalOpen(true)}
                            className="inline-flex items-center gap-2 text-sm text-[#095520] font-medium"
                        >
                            <span>View all offerings</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Auth Modal */}
            <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
        </>
    )
}
