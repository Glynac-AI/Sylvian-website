// components/offerings/CapitalStackVisualization.tsx
'use client'

import { motion } from 'framer-motion'

interface CapitalStackLayer {
    layer: string
    amount: string
    percentage: number
    yieldRange?: string
}

interface CapitalStackVisualizationProps {
    capitalStack: CapitalStackLayer[]
}

export default function CapitalStackVisualization({ capitalStack }: CapitalStackVisualizationProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 shadow-md"
        >
            <h2 className="text-2xl font-semibold text-[#095520] mb-6">Capital Stack Structure</h2>

            <p className="text-sm text-black leading-relaxed mb-8">
                The capital stack shows the investment structure and priority of claims.
                <span className="font-medium text-[#095520]"> Sylvan Capital holds common equity and absorbs first losses, ensuring alignment with investors.</span>
            </p>

            {/* Clean Stacked Breakdown */}
            <div className="space-y-3">
                {capitalStack.map((layer, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="relative"
                    >
                        <div className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 hover:border-[#095520]/20 transition-all duration-300">
                            <div className="flex items-center gap-4 flex-1">
                                <div className="flex-shrink-0 w-16 text-center">
                                    <p className="text-2xl font-semibold text-[#095520]">{layer.percentage}%</p>
                                </div>
                                <div className="flex-1 border-l-2 border-gray-200 pl-4">
                                    <h3 className="text-base font-semibold text-black mb-1">{layer.layer}</h3>
                                    <p className="text-xs text-[#095520]/70">
                                        {layer.layer === 'Senior Debt' && 'First in line for repayment • Lowest risk'}
                                        {layer.layer === 'Junior Debt' && 'Subordinate to senior debt • Moderate risk'}
                                        {layer.layer === 'Preferred Equity' && 'Priority over common equity • Preferred returns'}
                                        {layer.layer === 'Common Equity' && 'Sponsor position • Absorbs first losses'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 text-right ml-4">
                                <p className="text-lg font-semibold text-black">{layer.amount}</p>
                                {layer.yieldRange && (
                                    <p className="text-xs text-[#095520]/70 mt-1">
                                        {layer.yieldRange}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Simple Trust Signal */}
            <div className="mt-6 p-4 bg-[#F3F4F1] rounded-xl">
                <p className="text-sm text-black">
                    <span className="font-semibold text-[#095520]">Alignment of Interests:</span> As the common equity holder, Sylvan Capital absorbs first losses before any investor capital is impacted.
                </p>
            </div>
        </motion.div>
    )
}
