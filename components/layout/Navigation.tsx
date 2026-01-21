// components/layout/Navigation.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)
    const [resourcesOpen, setResourcesOpen] = useState(false)
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const navLinks = [
        { label: 'Why Sylvan', href: '#' },
        { label: 'Strategy', href: '/strategy' },
        { label: 'Resources', href: '/resources', hasDropdown: true },
        { label: 'Contact Us', href: '/contact' }
    ]

    const resourceLinks = [
        { 
            label: 'Governance & Compliance', 
            href: '/resources/governance',
            description: 'For Chief Compliance Officers'
        },
        { 
            label: 'Investment Strategy', 
            href: '/resources/investment-strategy',
            description: 'For Chief Investment Officers'
        },
        { 
            label: 'Client Advisory', 
            href: '/resources/client-advisory',
            description: 'For Registered Investment Advisors'
        }
    ]

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setResourcesOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <motion.nav 
            className="w-full py-6 px-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#F3F4F1]/90 backdrop-blur-md z-50 border-b border-gray-200"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="Sylvan Logo" width={40} height={40} className="h-8 w-8 md:h-10 md:w-10" />
                <motion.div
                    className="text-2xl tracking-[0.4em] uppercase font-serif text-[#013220] select-none"
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.2 }}
                >
                    SYLVAN
                </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-normal">
                {navLinks.map((link) => (
                    <div key={link.href} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                        {link.hasDropdown ? (
                            <>
                                <button
                                    onMouseEnter={() => {
                                        setHoveredLink(link.href)
                                        setResourcesOpen(true)
                                    }}
                                    onClick={() => setResourcesOpen(!resourcesOpen)}
                                    className="relative flex items-center gap-1"
                                >
                                    <motion.span
                                        className="text-[#013220]"
                                        whileHover={{ color: '#095520' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {link.label}
                                    </motion.span>
                                    <motion.svg 
                                        className="w-4 h-4 text-[#013220]"
                                        animate={{ rotate: resourcesOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                    <motion.span
                                        className="absolute -bottom-1 left-0 h-[2px] bg-[#095520]"
                                        initial={{ width: 0 }}
                                        animate={{ width: (hoveredLink === link.href || pathname.startsWith('/resources')) ? '100%' : 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {resourcesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                                            onMouseLeave={() => {
                                                setResourcesOpen(false)
                                                setHoveredLink(null)
                                            }}
                                        >
                                            <div className="p-2">
                                                {resourceLinks.map((resource, index) => (
                                                    <Link
                                                        key={resource.href}
                                                        href={resource.href}
                                                        onClick={() => setResourcesOpen(false)}
                                                    >
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.05 }}
                                                            className="p-4 rounded-lg hover:bg-[#F3F4F1] transition-colors group cursor-pointer"
                                                        >
                                                            <div className="text-sm font-semibold text-[#013220] mb-1 group-hover:text-[#095520] transition-colors">
                                                                {resource.label}
                                                            </div>
                                                            <div className="text-xs text-[#013220]/70 leading-relaxed">
                                                                {resource.description}
                                                            </div>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        ) : (
                            <Link
                                href={link.href}
                                onMouseEnter={() => setHoveredLink(link.href)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className="relative"
                            >
                                <motion.span
                                    className="text-[#013220]"
                                    whileHover={{ color: '#095520' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {link.label}
                                </motion.span>
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-[2px] bg-[#095520]"
                                    initial={{ width: 0 }}
                                    animate={{ width: (hoveredLink === link.href || pathname === link.href) ? '100%' : 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-6">
                <Link 
                    href="/login"
                    onMouseEnter={() => setHoveredLink('login')}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative text-sm"
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

                <Link href="/offerings">
                    <motion.div
                        className="relative border-2 border-[#013220] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide bg-transparent text-[#013220] overflow-hidden"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: '#095520',
                            borderColor: '#095520',
                            color: '#facc15'
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
                className="md:hidden text-[#013220]"
                whileHover={{ color: '#095520' }}
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
                        className="absolute top-full left-0 right-0 bg-[#F3F4F1] border-b border-gray-200 md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="flex flex-col py-4 px-4 space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    {link.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                                                className={`w-full flex items-center justify-between py-2 ${
                                                    pathname.startsWith('/resources') ? 'text-[#095520] font-semibold' : 'text-[#013220]'
                                                }`}
                                            >
                                                <span>{link.label}</span>
                                                <motion.svg
                                                    className="w-4 h-4"
                                                    animate={{ rotate: mobileResourcesOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </motion.svg>
                                            </button>

                                            <AnimatePresence>
                                                {mobileResourcesOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 pt-2 space-y-2">
                                                            {resourceLinks.map((resource) => (
                                                                <Link
                                                                    key={resource.href}
                                                                    href={resource.href}
                                                                    onClick={() => {
                                                                        setMobileOpen(false)
                                                                        setMobileResourcesOpen(false)
                                                                    }}
                                                                >
                                                                    <motion.div
                                                                        className={`p-3 rounded-lg transition-colors ${
                                                                            pathname === resource.href
                                                                                ? 'bg-[#095520]/10 border-l-4 border-[#095520]'
                                                                                : 'bg-white hover:bg-[#095520]/5'
                                                                        }`}
                                                                        whileHover={{ x: 4 }}
                                                                        transition={{ duration: 0.2 }}
                                                                    >
                                                                        <div className={`text-sm font-semibold mb-0.5 ${
                                                                            pathname === resource.href ? 'text-[#095520]' : 'text-[#013220]'
                                                                        }`}>
                                                                            {resource.label}
                                                                        </div>
                                                                        <div className="text-xs text-[#013220]/60">
                                                                            {resource.description}
                                                                        </div>
                                                                    </motion.div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link href={link.href} onClick={() => setMobileOpen(false)}>
                                            <motion.div
                                                className={`py-2 ${
                                                    pathname === link.href ? 'text-[#095520] font-semibold border-l-4 border-[#095520] pl-2' : 'text-[#013220]'
                                                }`}
                                                whileHover={{ color: '#095520', x: 8 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {link.label}
                                            </motion.div>
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div 
                                className="border-t border-gray-200 pt-4 space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                            >
                                <Link href="/login" onClick={() => setMobileOpen(false)}>
                                    <motion.div
                                        className="block text-[#013220] py-2"
                                        whileHover={{ color: '#095520', x: 8 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Log in
                                    </motion.div>
                                </Link>

                                <Link href="/offerings" onClick={() => setMobileOpen(false)}>
                                    <motion.div
                                        className="text-center border-2 border-[#013220] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide text-[#013220]"
                                        whileHover={{ backgroundColor: '#013220', color: '#facc15' }}
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