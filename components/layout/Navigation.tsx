// components/layout/Navigation.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AuthModal from '@/components/auth/AuthModal'

export default function Navigation() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)
    const [authModalOpen, setAuthModalOpen] = useState(false)

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Sponsor Evaluation', href: '/sponsor-evaluation' },
        { label: 'Methodology', href: '/methodology' },
        { label: 'For Investors', href: '/how-investors-use-sylvan' },
        { label: 'Standards', href: '/sponsor-standards' },
        { label: 'Resources', href: '/resources' },
        { label: 'FAQ', href: '/faq' }
    ]

    return (
        <>
            <motion.nav
                className="w-full py-5 md:py-7 px-4 md:px-8 lg:px-12 flex justify-between items-center fixed top-0 left-0 right-0 bg-[#F3F4F1]/95 backdrop-blur-md z-50 border-b border-gray-200/50"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 md:gap-3">
                    <Image src="/logo.png" alt="Sylvan Logo" width={40} height={40} className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                    <motion.div
                        className="text-lg md:text-2xl tracking-[0.15em] md:tracking-[0.4em] uppercase font-serif text-[#013220] select-none"
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.2 }}
                    >
                        SYLVAN
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6 text-base tracking-[0.025em]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHoveredLink(link.href)}
                            onMouseLeave={() => setHoveredLink(null)}
                            className="relative py-2 whitespace-nowrap"
                        >
                            <span className={`transition-colors duration-200 ${pathname === link.href ? 'text-[#095520] font-medium' : 'text-[#013220] hover:text-[#095520]'}`}>
                                {link.label}
                            </span>
                            <motion.span
                                className="absolute -bottom-0.5 left-0 h-[1.5px] bg-[#095520]"
                                initial={{ width: 0 }}
                                animate={{ width: (hoveredLink === link.href || pathname === link.href) ? '100%' : 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <button
                        onClick={() => setAuthModalOpen(true)}
                        className="text-base tracking-[0.025em] text-[#013220] hover:text-[#095520] transition-colors"
                    >
                        Log in
                    </button>

                    <Link href="/request-access">
                        <motion.div
                            className="border border-[#013220] px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-transparent text-[#013220]"
                            whileHover={{
                                backgroundColor: '#095520',
                                borderColor: '#095520',
                                color: '#facc15'
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                        >
                            Request Access
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-[#013220] p-1"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed top-[68px] md:top-[84px] left-0 right-0 bg-[#F3F4F1] border-b border-gray-200 lg:hidden z-50 max-h-[calc(100vh-68px)] md:max-h-[calc(100vh-84px)] overflow-y-auto"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-col py-4 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`py-3 text-base tracking-[0.025em] ${pathname === link.href ? 'text-[#095520] font-medium' : 'text-[#013220]'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="border-t border-gray-200 mt-3 pt-4 space-y-3">
                                <button
                                    onClick={() => {
                                        setMobileOpen(false)
                                        setAuthModalOpen(true)
                                    }}
                                    className="block text-base tracking-[0.025em] text-[#013220] w-full text-left"
                                >
                                    Log in
                                </button>
                                <Link href="/request-access" onClick={() => setMobileOpen(false)}>
                                    <div className="text-center border border-[#013220] px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide text-[#013220]">
                                        Request Access
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Auth Modal */}
            <AuthModal
                isOpen={authModalOpen}
                onClose={() => setAuthModalOpen(false)}
                initialMode="login"
            />
        </>
    )
}
