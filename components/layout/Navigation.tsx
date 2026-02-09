// components/layout/Navigation.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function Navigation() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)
    const [resourcesOpen, setResourcesOpen] = useState(false)
    const [resourcesLeft, setResourcesLeft] = useState(0)
    const resourcesRef = useRef<HTMLDivElement>(null)

    const updateResourcesLeft = useCallback(() => {
        if (resourcesRef.current) {
            setResourcesLeft(resourcesRef.current.offsetLeft)
        }
    }, [])

    useEffect(() => {
        updateResourcesLeft()
        window.addEventListener('resize', updateResourcesLeft)
        return () => window.removeEventListener('resize', updateResourcesLeft)
    }, [updateResourcesLeft])

    const navLinksBeforeResources = [
        { label: 'Home', href: '/' },
        { label: 'Sponsor Evaluation', href: '/sponsor-evaluation' },
        { label: 'Methodology', href: '/evaluation-methodology' },
        { label: 'For Investors', href: '/how-investors-use-sylvan' },
        { label: 'Standards', href: '/sponsor-standards' }
    ]

    const navLinksAfterResources = [
        { label: 'FAQ', href: '/faq' }
    ]

    const resourceLinks = [
        { label: 'For CIOs', href: '/resources/for-cios' },
        { label: 'For CCOs', href: '/resources/for-ccos' }
    ]

    const isResourcesActive = pathname.startsWith('/resources')

    return (
        <>
            <motion.nav
                className="w-full fixed top-0 left-0 right-0 bg-[#F3F4F1]/95 backdrop-blur-md z-50 border-b border-gray-200/50"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Main navbar row */}
                <div className="py-4 md:py-5 px-4 md:px-8 lg:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <motion.div
                            whileHover={{ opacity: 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image src="/logo.png" alt="Sylvan" width={160} height={20} className="h-4 md:h-5 lg:h-6 w-auto" />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-5 text-sm tracking-[0.025em]">
                        {navLinksBeforeResources.map((link) => (
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

                        {/* Resources Toggle */}
                        <div
                            ref={resourcesRef}
                            className="relative py-2"
                            onMouseEnter={() => {
                                setResourcesOpen(true)
                                setHoveredLink('/resources')
                            }}
                            onMouseLeave={() => {
                                setResourcesOpen(false)
                                setHoveredLink(null)
                            }}
                        >
                            <button className="relative whitespace-nowrap flex items-center gap-1">
                                <span className={`transition-colors duration-200 ${isResourcesActive ? 'text-[#095520] font-medium' : 'text-[#013220] hover:text-[#095520]'}`}>
                                    Resources
                                </span>
                                <svg
                                    className={`w-3 h-3 transition-transform duration-200 ${isResourcesActive ? 'text-[#095520]' : 'text-[#013220]'} ${resourcesOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <motion.span
                                    className="absolute -bottom-0.5 left-0 h-[1.5px] bg-[#095520]"
                                    initial={{ width: 0 }}
                                    animate={{ width: (hoveredLink === '/resources' || isResourcesActive) ? '100%' : 0 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                />
                            </button>
                        </div>

                        {navLinksAfterResources.map((link) => (
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
                        <Link
                            href="/offerings"
                            className="border border-[#013220] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-transparent text-[#013220] hover:bg-[#095520] hover:border-[#095520] hover:text-[#facc15] transition-colors duration-200"
                        >
                            Offerings
                        </Link>
                        <RequestAccessButton className="border border-[#013220] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-transparent text-[#013220] hover:bg-[#095520] hover:border-[#095520] hover:text-[#facc15] transition-colors duration-200 cursor-pointer">
                            Request Access
                        </RequestAccessButton>
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
                </div>

                {/* Expanded Resources Row */}
                <div
                    className="hidden lg:block"
                    onMouseEnter={() => {
                        setResourcesOpen(true)
                        setHoveredLink('/resources')
                    }}
                    onMouseLeave={() => {
                        setResourcesOpen(false)
                        setHoveredLink(null)
                    }}
                >
                    <AnimatePresence>
                        {resourcesOpen && (
                            <motion.div
                                className="overflow-hidden border-t border-gray-200/50"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <div
                                    className="py-2.5 flex items-center gap-5"
                                    style={{ paddingLeft: resourcesLeft }}
                                >
                                    {resourceLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onMouseEnter={() => setHoveredLink(link.href)}
                                            onMouseLeave={() => setHoveredLink('/resources')}
                                            className={`relative py-1 text-sm tracking-[0.025em] transition-colors duration-200 ${
                                                pathname === link.href
                                                    ? 'text-[#095520] font-medium'
                                                    : 'text-[#013220]/70 hover:text-[#095520]'
                                            }`}
                                        >
                                            {link.label}
                                            <motion.span
                                                className="absolute -bottom-0.5 left-0 h-[1.5px] bg-[#095520]"
                                                initial={{ width: 0 }}
                                                animate={{ width: (hoveredLink === link.href || pathname === link.href) ? '100%' : 0 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed top-[56px] md:top-[68px] left-0 right-0 bg-[#F3F4F1] border-b border-gray-200 lg:hidden z-50 max-h-[calc(100vh-56px)] md:max-h-[calc(100vh-68px)] overflow-y-auto"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-col py-4 px-4">
                            {navLinksBeforeResources.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`py-3 text-base tracking-[0.025em] ${pathname === link.href ? 'text-[#095520] font-medium' : 'text-[#013220]'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Resources Expand in Mobile */}
                            <div>
                                <button
                                    onClick={() => setResourcesOpen(!resourcesOpen)}
                                    className={`w-full py-3 text-base tracking-[0.025em] text-left flex items-center gap-2 ${isResourcesActive ? 'text-[#095520] font-medium' : 'text-[#013220]'}`}
                                >
                                    Resources
                                    <svg
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <AnimatePresence>
                                    {resourcesOpen && (
                                        <motion.div
                                            className="pl-4 flex flex-col gap-1 overflow-hidden"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {resourceLinks.map((link) => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className={`inline-flex items-center gap-1.5 py-2 text-sm tracking-[0.025em] transition-colors duration-150 ${
                                                        pathname === link.href
                                                            ? 'text-[#095520] font-medium'
                                                            : 'text-[#013220]/70 hover:text-[#095520]'
                                                    }`}
                                                >
                                                    <span className={`w-1 h-1 rounded-full ${pathname === link.href ? 'bg-[#095520]' : 'bg-[#013220]/30'}`} />
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {navLinksAfterResources.map((link) => (
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
                                <Link
                                    href="/offerings"
                                    onClick={() => setMobileOpen(false)}
                                    className="text-center border border-[#013220] px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide text-[#013220] hover:bg-[#095520] hover:text-[#facc15] transition-colors duration-200 block w-full"
                                >
                                    Offerings
                                </Link>
                                <div onClick={() => setMobileOpen(false)}>
                                    <RequestAccessButton className="text-center border border-[#013220] px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide text-[#013220] hover:bg-[#095520] hover:text-[#facc15] transition-colors duration-200 cursor-pointer w-full">
                                        Request Access
                                    </RequestAccessButton>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}
