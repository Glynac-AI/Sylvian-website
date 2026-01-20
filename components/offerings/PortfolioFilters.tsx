// components/offerings/PortfolioFilters.tsx
'use client'

import { motion } from 'framer-motion'

interface PortfolioFiltersProps {
    selectedStrategy: string
    setSelectedStrategy: (strategy: string) => void
    selectedStatus: string
    setSelectedStatus: (status: string) => void
    minInvestment: string
    setMinInvestment: (amount: string) => void
}

export default function PortfolioFilters({
    selectedStrategy,
    setSelectedStrategy,
    selectedStatus,
    setSelectedStatus,
    minInvestment,
    setMinInvestment
}: PortfolioFiltersProps) {
    const strategies = ['All', 'Diversified Growth', 'Income-Focused', 'Value-Add']
    const statusOptions = ['All', 'Available', 'Funding', 'Funded']
    const investmentOptions = ['All', '$50,000', '$75,000', '$100,000+']

    const FilterButton = ({ label, isSelected, onClick }: { label: string, isSelected: boolean, onClick: () => void }) => (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isSelected
                    ? 'bg-[#095520] text-yellow-400 shadow-md'
                    : 'bg-white text-[#095520]/70 hover:bg-[#095520]/5 border border-gray-200'
            }`}
        >
            {label}
        </button>
    )

    return (
        <section className="sticky top-[88px] z-20 bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-6 flex-wrap"
                >
                    {/* Strategy Filter */}
                    <div className="flex items-center gap-2">
                        <label className="text-xs font-semibold text-[#095520]/50 uppercase tracking-wider whitespace-nowrap">
                            Strategy:
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                            {strategies.map((strategy) => (
                                <FilterButton
                                    key={strategy}
                                    label={strategy}
                                    isSelected={selectedStrategy === strategy}
                                    onClick={() => setSelectedStrategy(strategy)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Status Filter */}
                    <div className="flex items-center gap-2">
                        <label className="text-xs font-semibold text-[#095520]/50 uppercase tracking-wider whitespace-nowrap">
                            Status:
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                            {statusOptions.map((status) => (
                                <FilterButton
                                    key={status}
                                    label={status}
                                    isSelected={selectedStatus === status}
                                    onClick={() => setSelectedStatus(status)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Minimum Investment Filter */}
                    <div className="flex items-center gap-2">
                        <label className="text-xs font-semibold text-[#095520]/50 uppercase tracking-wider whitespace-nowrap">
                            Min:
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                            {investmentOptions.map((amount) => (
                                <FilterButton
                                    key={amount}
                                    label={amount}
                                    isSelected={minInvestment === amount}
                                    onClick={() => setMinInvestment(amount)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Clear Filters */}
                    {(selectedStrategy !== 'All' || selectedStatus !== 'All' || minInvestment !== 'All') && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => {
                                setSelectedStrategy('All')
                                setSelectedStatus('All')
                                setMinInvestment('All')
                            }}
                            className="text-xs text-[#095520]/60 hover:text-[#095520] underline underline-offset-2 transition-colors ml-auto"
                        >
                            Clear all
                        </motion.button>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
