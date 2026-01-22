// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
    const footerLinks = {
        company: [
            { label: 'Why Sylvan', href: '/' },
            { label: 'Strategy', href: '/strategy' }
        ],
        resources: [
            { label: 'Governance & Compliance', href: '/resources/governance' },
            { label: 'Investment Strategy', href: '/resources/investment-strategy' },
            { label: 'Client Advisory', href: '/resources/client-advisory' }
        ],
        quickLinks: [
            { label: 'View Listings', href: '/offerings' },
            { label: 'Contact Us', href: '/contact' },
            { label: 'Login', href: '/login' }
        ]
    }

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: '#',
            icon: (
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            )
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            )
        },
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            )
        }
    ]

    return (
        <footer className="bg-[#E8EAE6] pt-20 pb-8 px-6 border-t border-gray-200 relative overflow-hidden">
            {/* Subtle Tree Background - Right Side */}
            <div className="absolute right-0 bottom-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] pointer-events-none">
                <Image
                    src="/tree.png"
                    alt=""
                    fill
                    className="object-contain object-bottom-right opacity-[0.04] translate-x-[10%]"
                />
            </div>

            {/* Subtle gradient orbs - very minimal */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#095520]/[0.02] rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column - Spans 2 columns on large screens */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <Image
                                src="/logo.png"
                                alt="Sylvan Logo"
                                width={48}
                                height={48}
                                className="h-12 w-12"
                            />
                            <div className="text-2xl tracking-[0.4em] uppercase font-serif text-[#013220] select-none group-hover:text-[#095520] transition-colors">
                                SYLVAN
                            </div>
                        </Link>

                        <p className="text-[#013220] leading-relaxed mb-6 max-w-sm">
                            Building sustainable wealth through carefully curated real estate portfolios. Your trusted partner in institutional-grade property investments.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="w-11 h-11 rounded-full bg-[#013220]/5 flex items-center justify-center hover:bg-[#095520] hover:text-yellow-400 text-[#013220] transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        {social.icon}
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-bold mb-5 tracking-wider text-[#013220] uppercase">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#013220] hover:text-[#095520] transition-colors duration-200 text-sm inline-block"
                                    >
                                        <motion.span
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                            className="inline-block"
                                        >
                                            {link.label}
                                        </motion.span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-sm font-bold mb-5 tracking-wider text-[#013220] uppercase">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#013220] hover:text-[#095520] transition-colors duration-200 text-sm inline-block"
                                    >
                                        <motion.span
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                            className="inline-block"
                                        >
                                            {link.label}
                                        </motion.span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold mb-5 tracking-wider text-[#013220] uppercase">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#013220] hover:text-[#095520] transition-colors duration-200 text-sm inline-block"
                                    >
                                        <motion.span
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                            className="inline-block"
                                        >
                                            {link.label}
                                        </motion.span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#013220]/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-[#013220]">
                            <span>© 2026 Sylvan. All rights reserved.</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#013220]">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>Institutional Real Estate Platform</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}