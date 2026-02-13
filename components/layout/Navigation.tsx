'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    const navLinks = [
        { label: 'Why Sylvan', href: '/' },
        { label: 'Methodology', href: '/methodology' },
        { label: 'Strategy', href: '/how-it-works' },
        { label: 'Investors', href: '/investors' },
        { label: 'Resources', href: '/library' },
        { label: 'Contact Us', href: '/faq' }
    ]

    return (
        <motion.nav 
            className="w-full py-6 px-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#F3F4F1]/95 z-50 border-b border-gray-200"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095520] focus-visible:ring-offset-2 rounded-md">
                <motion.img 
                    src="/logo.png" 
                    alt="Sylvan Logo" 
                    className="h-8 w-8 md:h-10 md:w-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.div
                    className="text-2xl tracking-[0.3em] uppercase font-serif text-[#013220] select-none"
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.2 }}
                >
                    SYLVAN
                </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-normal">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                        <Link 
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHoveredLink(link.href)}
                            onMouseLeave={() => setHoveredLink(null)}
                            className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095520] focus-visible:ring-offset-2 rounded px-2 py-1"
                        >
                            <motion.span
                                className={isActive ? "text-[#095520] font-medium" : "text-[#013220]"}
                                whileHover={{ color: '#095520' }}
                                transition={{ duration: 0.3 }}
                            >
                                {link.label}
                            </motion.span>
                            <motion.span
                                className="absolute -bottom-1 left-0 h-[2px] bg-[#095520]"
                                initial={{ width: isActive ? '100%' : 0 }}
                                animate={{ width: hoveredLink === link.href || isActive ? '100%' : 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </Link>
                    )
                })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-6">
                <Link 
                    href="/login"
                    onMouseEnter={() => setHoveredLink('login')}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095520] focus-visible:ring-offset-2 rounded px-2 py-1"
                >
                    <motion.span
                        className="text-[#013220]"
                        whileHover={{ color: '#095520' }}
                        transition={{ duration: 0.3 }}
                    >
                        Log in
                    </motion.span>
                    <motion.span
                        className="absolute -bottom-0.5 left-0 h-[1px] bg-[#095520]"
                        initial={{ width: 0 }}
                        animate={{ width: hoveredLink === 'login' ? '100%' : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                </Link>

                <Link href="/offerings" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095520] focus-visible:ring-offset-2 rounded-full">
                    <motion.div
                        className="relative border-2 border-[#013220] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide bg-transparent text-[#013220] overflow-hidden shadow-sm"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: '#095520',
                            borderColor: '#095520',
                            color: '#ffffff',
                            boxShadow: '0 4px 12px rgba(9, 85, 32, 0.2)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        VIEW LISTINGS
                    </motion.div>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-[#013220] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095520] focus-visible:ring-offset-2 rounded p-1"
                whileHover={{ color: '#095520', scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label="Toggle menu"
            >
                <motion.svg 
                    className="w-6 h-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ rotate: mobileOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {mobileOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </motion.svg>
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="absolute top-full left-0 right-0 bg-[#F3F4F1]/98 border-b border-gray-200 md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="flex flex-col py-4 px-4 space-y-4">
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.08, duration: 0.3 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095520] focus-visible:ring-offset-2 rounded px-2"
                                        >
                                            <motion.div
                                                className={`py-2 ${isActive ? 'text-[#095520] font-medium' : 'text-[#013220]'}`}
                                                whileHover={{ 
                                                    color: '#095520',
                                                    x: 8
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {link.label}
                                            </motion.div>
                                        </Link>
                                    </motion.div>
                                )
                            })}

                            <motion.div 
                                className="border-t border-gray-200 pt-4 space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35, duration: 0.3 }}
                            >
                                <Link
                                    href="/login"
                                    onClick={() => setMobileOpen(false)}
                                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095520] focus-visible:ring-offset-2 rounded px-2"
                                >
                                    <motion.div
                                        className="block text-[#013220] py-2"
                                        whileHover={{ 
                                            color: '#095520',
                                            x: 8
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Log in
                                    </motion.div>
                                </Link>

                                <Link
                                    href="/offerings"
                                    onClick={() => setMobileOpen(false)}
                                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#095520] focus-visible:ring-offset-2 rounded-full"
                                >
                                    <motion.div
                                        className="text-center border-2 border-[#013220] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide text-[#013220] shadow-sm"
                                        whileHover={{ 
                                            backgroundColor: '#095520',
                                            borderColor: '#095520',
                                            color: '#ffffff',
                                            boxShadow: '0 4px 12px rgba(9, 85, 32, 0.2)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        VIEW LISTINGS
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}