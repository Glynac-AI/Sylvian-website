// components/offerings/ProjectedReturnsChart.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProjectedReturnsChartProps {
    investmentTerm: string
    targetYield: string
    minimumInvestment: string
}

export default function ProjectedReturnsChart({
    investmentTerm,
    targetYield,
    minimumInvestment
}: ProjectedReturnsChartProps) {
    const [hoveredYear, setHoveredYear] = useState<number | null>(null)

    // Parse the investment term (e.g., "5 years" -> 5)
    const years = parseInt(investmentTerm.split(' ')[0])

    // Parse target yield (e.g., "8.5%" -> 8.5)
    const annualYield = parseFloat(targetYield.replace('%', ''))

    // Parse minimum investment (e.g., "$50,000" -> 50000)
    const minInvestmentAmount = parseInt(minimumInvestment.replace(/[^0-9]/g, ''))

    // Generate projection data
    const projectionData = Array.from({ length: years + 1 }, (_, i) => {
        const year = i
        const cumulativeReturn = Math.pow(1 + annualYield / 100, year)
        const investmentValue = minInvestmentAmount * cumulativeReturn
        const totalReturns = investmentValue - minInvestmentAmount

        return {
            year,
            investmentValue,
            totalReturns,
            cumulativeReturn: ((cumulativeReturn - 1) * 100).toFixed(1)
        }
    })

    // Find max value for scaling
    const maxValue = Math.max(...projectionData.map(d => d.investmentValue))

    // Format currency
    const formatCurrency = (value: number) => {
        if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(2)}M`
        }
        return `$${(value / 1000).toFixed(0)}K`
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="bg-gradient-to-br from-white to-[#F3F4F1]/30 rounded-2xl p-8 shadow-md border border-gray-100"
        >
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#095520] mb-2">Projected Investment Growth</h2>
                <p className="text-sm text-[#095520]/70">
                    Estimated value trajectory over {years}-year hold period at {targetYield} target annual return
                </p>
            </div>

            {/* Chart Area */}
            <div className="relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-12 w-20 flex flex-col justify-between text-right pr-4">
                    {[100, 75, 50, 25, 0].map((percent) => {
                        const value = (maxValue * percent) / 100
                        return (
                            <div key={percent} className="text-xs text-[#095520]/60 font-medium">
                                {formatCurrency(value)}
                            </div>
                        )
                    })}
                </div>

                {/* Grid lines */}
                <div className="ml-20 relative" style={{ height: '320px' }}>
                    <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-full border-t border-gray-200/60" />
                        ))}
                    </div>

                    {/* Bars and Line Chart Combined */}
                    <div className="relative h-full flex items-end justify-between gap-2 px-4">
                        {projectionData.map((data, index) => {
                            const height = (data.investmentValue / maxValue) * 100
                            const isHovered = hoveredYear === index

                            return (
                                <div
                                    key={index}
                                    className="flex-1 relative group cursor-pointer"
                                    onMouseEnter={() => setHoveredYear(index)}
                                    onMouseLeave={() => setHoveredYear(null)}
                                >
                                    {/* Bar */}
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${height}%` }}
                                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                        className={`relative rounded-t-lg transition-all duration-300 ${
                                            isHovered
                                                ? 'bg-gradient-to-t from-[#095520] to-[#008929]'
                                                : 'bg-gradient-to-t from-[#095520]/80 to-[#008929]/80'
                                        }`}
                                        style={{ minHeight: '4px' }}
                                    >
                                        {/* Hover tooltip */}
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#095520] text-white px-4 py-3 rounded-lg shadow-xl whitespace-nowrap z-10"
                                            >
                                                <div className="text-center">
                                                    <p className="text-xs text-yellow-400 font-medium mb-1">Year {data.year}</p>
                                                    <p className="text-base font-bold mb-1">{formatCurrency(data.investmentValue)}</p>
                                                    <p className="text-xs opacity-90">
                                                        +{formatCurrency(data.totalReturns)} returns
                                                    </p>
                                                    <p className="text-xs text-yellow-400 mt-1">
                                                        {data.cumulativeReturn}% cumulative
                                                    </p>
                                                </div>
                                                {/* Arrow */}
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                                                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#095520]" />
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>

                                    {/* Year label */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-[#095520]/70 whitespace-nowrap">
                                        {data.year === 0 ? 'Start' : `Y${data.year}`}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Connecting Line Overlay */}
                    <svg className="absolute inset-0 pointer-events-none" style={{ overflow: 'visible' }}>
                        <motion.path
                            d={projectionData
                                .map((data, index) => {
                                    const x = ((index + 0.5) / projectionData.length) * 100
                                    const y = 100 - (data.investmentValue / maxValue) * 100
                                    return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`
                                })
                                .join(' ')}
                            stroke="#FFD700"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                        />
                        {/* Data point circles */}
                        {projectionData.map((data, index) => {
                            const x = ((index + 0.5) / projectionData.length) * 100
                            const y = 100 - (data.investmentValue / maxValue) * 100
                            return (
                                <motion.circle
                                    key={index}
                                    cx={`${x}%`}
                                    cy={`${y}%`}
                                    r="4"
                                    fill="#FFD700"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                                />
                            )
                        })}
                    </svg>
                </div>
            </div>

            {/* Summary Stats Below Chart */}
            <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <p className="text-xs text-[#095520]/70 mb-1">Initial Investment</p>
                        <p className="text-xl font-bold text-[#095520]">{formatCurrency(minInvestmentAmount)}</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#095520]/5 to-[#008929]/5 rounded-xl border border-[#095520]/20">
                        <p className="text-xs text-[#095520]/70 mb-1">Projected Value (Year {years})</p>
                        <p className="text-xl font-bold text-[#095520]">
                            {formatCurrency(projectionData[projectionData.length - 1].investmentValue)}
                        </p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
                        <p className="text-xs text-[#095520]/70 mb-1">Total Projected Returns</p>
                        <p className="text-xl font-bold text-[#008929]">
                            +{formatCurrency(projectionData[projectionData.length - 1].totalReturns)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-xs text-amber-900 leading-relaxed">
                    <span className="font-semibold">Important:</span> This projection is for illustrative purposes only and assumes a constant annual return of {targetYield}.
                    Actual returns may vary significantly and are not guaranteed. Past performance does not guarantee future results.
                    Please review all offering documents for complete risk disclosures.
                </p>
            </div>
        </motion.div>
    )
}
