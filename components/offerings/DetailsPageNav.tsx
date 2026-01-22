// components/offerings/DetailsPageNav.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface DetailsPageNavProps {
    portfolioTitle: string
}

export default function DetailsPageNav({ portfolioTitle }: DetailsPageNavProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'metrics', label: 'Metrics' },
        { id: 'sponsor', label: 'Sponsor' },
        { id: 'allocation', label: 'Allocation' },
        { id: 'risks', label: 'Risks' },
        { id: 'properties', label: 'Properties' },
        { id: 'structure', label: 'Structure' },
        { id: 'financials', label: 'Financials' },
        { id: 'documents', label: 'Documents' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            // Show nav after scrolling past hero section (adjust threshold as needed)
            setIsVisible(window.scrollY > 400)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 100 // Account for sticky nav height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            })
            setMobileMenuOpen(false) // Close mobile menu after navigation
        }
    }

    return (
        <>
            {/* Desktop Navigation - Only on Large Screens */}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hidden xl:block fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-md"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-3">
                            <div className="flex items-center gap-4">
                                {/* Back Button - Compact */}
                                <Link
                                    href="/offerings"
                                    className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 hover:bg-[#095520]/5 rounded-full transition-all duration-300 group"
                                >
                                    <svg className="w-4 h-4 text-[#095520] transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    <span className="text-sm font-medium text-[#095520]">Back</span>
                                </Link>

                                {/* Portfolio Title - Compact */}
                                <div className="flex-shrink-0 min-w-0 border-l border-gray-200 pl-3">
                                    <h3 className="text-sm font-semibold text-[#095520] truncate max-w-[200px]">
                                        {portfolioTitle}
                                    </h3>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                                                activeSection === item.id
                                                    ? 'bg-[#095520] text-yellow-400 shadow-sm'
                                                    : 'text-[#095520] hover:bg-[#095520]/10'
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </nav>

                                {/* CTA Button */}
                                <div className="flex-shrink-0">
                                    <button className="px-4 py-2 bg-[#095520] text-yellow-400 rounded-full text-xs font-semibold uppercase tracking-wider hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                                        Express Interest
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Navigation Button - Shows below xl breakpoint */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="xl:hidden fixed right-4 bottom-6 z-50 bg-[#095520] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <motion.svg
                            className="w-6 h-6"
                            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </motion.svg>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Side Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && isVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 300 }}
                        transition={{ duration: 0.3 }}
                        className="xl:hidden fixed right-0 top-0 bottom-0 w-64 bg-white shadow-2xl z-40 overflow-y-auto"
                    >
                        <div className="p-6 pt-24">
                            <h3 className="text-lg font-semibold text-[#095520] mb-4">Jump to Section</h3>
                            <nav className="space-y-2">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                                            activeSection === item.id
                                                ? 'bg-[#095520] text-yellow-400 font-semibold'
                                                : 'text-[#095520] hover:bg-[#095520]/10 font-medium'
                                        }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </nav>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <button className="w-full py-3 bg-[#095520] text-yellow-400 rounded-full text-sm font-semibold uppercase tracking-wider hover:shadow-lg transition-all duration-300">
                                    Express Interest
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Menu Backdrop */}
            <AnimatePresence>
                {mobileMenuOpen && isVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="xl:hidden fixed inset-0 bg-black/30 z-30 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>
        </>
    )
}
