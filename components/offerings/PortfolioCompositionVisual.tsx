// components/offerings/PortfolioCompositionVisual.tsx
'use client'

import { motion } from 'framer-motion'

interface PortfolioCompositionVisualProps {
    propertyAllocation: {
        type: string
        percentage: number
        count: number
    }[]
    totalProperties: number
}

export default function PortfolioCompositionVisual({
    propertyAllocation,
    totalProperties
}: PortfolioCompositionVisualProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="bg-gradient-to-br from-white via-[#F3F4F1]/30 to-white rounded-2xl p-10 shadow-md border border-gray-100 overflow-hidden relative"
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#095520]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#008929]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-semibold text-[#095520] mb-3">Portfolio at a Glance</h2>
                    <p className="text-sm text-[#095520]/70 max-w-2xl mx-auto">
                        A diversified real estate portfolio spanning {totalProperties} properties across multiple asset classes,
                        designed to optimize returns while managing risk through strategic allocation.
                    </p>
                </div>

                {/* Main Circular Composition */}
                <div className="flex items-center justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        {/* Center Circle with Key Metrics */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                        >
                            <div className="relative">
                                {/* Outer ring with subtle gradient */}
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#095520] to-[#008929] p-1 shadow-2xl">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                        <div className="text-center">
                                            <p className="text-5xl font-bold text-[#095520] mb-1">{totalProperties}</p>
                                            <p className="text-sm font-medium text-[#095520]/70">Properties</p>
                                            <div className="mt-3 pt-3 border-t border-gray-200">
                                                <p className="text-xs text-[#095520]/60">{propertyAllocation.length} Asset Classes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative pulse rings */}
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute inset-0 rounded-full border-4 border-[#095520]/20"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                    className="absolute inset-0 rounded-full border-4 border-[#095520]/10"
                                />
                            </div>
                        </motion.div>

                        {/* Orbital Asset Class Cards */}
                        <div className="relative w-full aspect-square">
                            {propertyAllocation.map((allocation, index) => {
                                const total = propertyAllocation.length
                                const angle = (360 / total) * index - 90 // Start from top
                                const radius = 220 // Distance from center
                                const x = Math.cos((angle * Math.PI) / 180) * radius
                                const y = Math.sin((angle * Math.PI) / 180) * radius

                                // Color scheme based on asset type
                                const getGradient = (type: string) => {
                                    const gradients: { [key: string]: string } = {
                                        'Multifamily': 'from-emerald-500 to-green-600',
                                        'Commercial Office': 'from-blue-500 to-indigo-600',
                                        'Office': 'from-blue-500 to-indigo-600',
                                        'Retail': 'from-amber-500 to-orange-600',
                                        'Industrial': 'from-slate-500 to-gray-600',
                                        'Mixed-Use': 'from-purple-500 to-violet-600'
                                    }
                                    return gradients[type] || 'from-emerald-500 to-green-600'
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            x: x,
                                            y: y
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.5 + index * 0.15,
                                            type: 'spring',
                                            stiffness: 100
                                        }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={{ zIndex: 10 - index }}
                                    >
                                        <div className="relative group cursor-pointer">
                                            {/* Connecting line to center */}
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                                                className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-[#095520]/20 to-transparent origin-left"
                                                style={{
                                                    width: `${radius - 60}px`,
                                                    transform: `translateY(-50%) rotate(${angle + 180}deg) translateX(-100%)`
                                                }}
                                            />

                                            {/* Asset Card */}
                                            <div className="relative">
                                                <div className={`w-40 bg-gradient-to-br ${getGradient(allocation.type)} rounded-2xl p-6 shadow-xl border-2 border-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}>
                                                    <div className="text-white">
                                                        {/* Percentage Badge */}
                                                        <div className="absolute -top-3 -right-3 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                                                            <span className="text-lg font-bold text-[#095520]">{allocation.percentage}%</span>
                                                        </div>

                                                        {/* Icon */}
                                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3 backdrop-blur-sm">
                                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                            </svg>
                                                        </div>

                                                        {/* Type */}
                                                        <h3 className="text-sm font-bold mb-1 line-clamp-2">{allocation.type}</h3>

                                                        {/* Property Count */}
                                                        <p className="text-xs opacity-90">
                                                            {allocation.count} {allocation.count === 1 ? 'Property' : 'Properties'}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Glow effect */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(allocation.type)} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Info Grid */}
                <div className="grid grid-cols-3 gap-6 mt-16">
                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-[#095520]/30 transition-colors">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#095520] to-[#008929] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <p className="text-2xl font-bold text-[#095520] mb-1">Balanced</p>
                        <p className="text-xs text-[#095520]/70">Portfolio Strategy</p>
                    </div>

                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-[#095520]/30 transition-colors">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#095520] to-[#008929] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-2xl font-bold text-[#095520] mb-1">Multi-Market</p>
                        <p className="text-xs text-[#095520]/70">Geographic Spread</p>
                    </div>

                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-[#095520]/30 transition-colors">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#095520] to-[#008929] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <p className="text-2xl font-bold text-[#095520] mb-1">Diversified</p>
                        <p className="text-xs text-[#095520]/70">Risk Management</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
