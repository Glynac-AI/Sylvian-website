// components/layout/Navigation.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    const navLinks = [
        { label: 'Why Sylvan', href: '/start' },
        { label: 'Strategy', href: '/how-it-works' },
        { label: 'Resources', href: '/library' },
        { label: 'Contact Us', href: '/contact' }
    ]

    return (
        <nav className="w-full py-6 px-4 md:px-12 flex justify-between items-center sticky top-0 bg-[#F3F4F1]/90 backdrop-blur-md z-50 border-b border-gray-200">
            {/* Logo */}
            <Link href="/" className="text-2xl tracking-[0.3em] uppercase font-serif text-[#013220] select-none hover:opacity-80 transition-opacity">
                S Y L V A N
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-normal">
                <Link href="/" className="nav-link text-[#013220] hover:opacity-70 transition-opacity">
                    Why Sylvan
                </Link>
                <Link href="/how-it-works" className="nav-link text-[#013220] hover:opacity-70 transition-opacity">
                    Strategy
                </Link>
                <Link href="/library" className="nav-link text-[#013220] hover:opacity-70 transition-opacity">
                    Resources
                </Link>
                <Link href="/faq" className="nav-link text-[#013220] hover:opacity-70 transition-opacity">
                    Contact Us
                </Link>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-6">
                <Link href="/login" className="text-sm hover:underline text-[#013220]">
                    Log in
                </Link>
                <Link
                    href="/offerings"
                    className="border-2 border-[#013220] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide bg-transparent text-[#013220] hover:bg-[#013220] hover:text-[#f0d597] transition-all"
                >
                    VIEW LISTINGS
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-[#013220]"
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

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#F3F4F1] border-b border-gray-200 md:hidden">
                    <div className="flex flex-col py-4 px-4 space-y-4">
                        <Link
                            href="/"
                            className="text-[#013220] hover:opacity-70 transition-opacity py-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            Why Sylvan
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="text-[#013220] hover:opacity-70 transition-opacity py-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            Strategy
                        </Link>
                        <Link
                            href="/library"
                            className="text-[#013220] hover:opacity-70 transition-opacity py-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            Resources
                        </Link>
                        <Link
                            href="/faq"
                            className="text-[#013220] hover:opacity-70 transition-opacity py-2"
                            onClick={() => setMobileOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <div className="border-t border-gray-200 pt-4 space-y-4">
                            <Link
                                href="/login"
                                className="block text-[#013220] hover:opacity-70 transition-opacity py-2"
                                onClick={() => setMobileOpen(false)}
                            >
                                Log in
                            </Link>
                            <Link
                                href="/offerings"
                                className="block text-center border-2 border-[#013220] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide bg-transparent text-[#013220] hover:bg-[#013220] hover:text-[#f0d597] transition-all"
                                onClick={() => setMobileOpen(false)}
                            >
                                VIEW LISTINGS
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}