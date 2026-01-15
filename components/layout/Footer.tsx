// components/layout/Footer.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-[#E8EAE6] py-16 px-6 border-t border-gray-200 relative overflow-hidden">

            {/* Subtle Tree Background - Right Side */}
            <div className="absolute right-0 bottom-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] pointer-events-none">
                <Image
                    src="/tree.png"
                    alt=""
                    fill
                    className="object-contain object-bottom-right opacity-[0.04] translate-x-[10%]"
                />
            </div>

            {/* Subtle gradient orbs - very minimal */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#095520]/[0.015] rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <Image
                                src="/logo.png"
                                alt="Sylvan Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10"
                            />
                            <div className="text-2xl tracking-[0.3em] uppercase font-serif text-[#013220] select-none">
                                SYLVAN
                            </div>
                        </Link>
                        <p className="text-[#013220]/60 max-w-md leading-relaxed font-light mb-6">
                            Structured real estate exposure simplified for RIAs through pre-approved, ring-fenced SPVs with lockbox-governed rental cash distributions.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <motion.a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#013220]/5 flex items-center justify-center hover:bg-[#013220]/10 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5 text-[#013220]/60" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#013220]/5 flex items-center justify-center hover:bg-[#013220]/10 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5 text-[#013220]/60" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#013220]/5 flex items-center justify-center hover:bg-[#013220]/10 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-5 h-5 text-[#013220]/60" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-wide text-[#013220]">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Why Sylvan', href: '/' },
                                { label: 'Strategy', href: '/how-it-works' },
                                { label: 'Resources', href: '/library' },
                                { label: 'Contact Us', href: '/faq' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#013220]/60 hover:text-[#013220] transition-colors duration-300 font-light inline-block"
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

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 tracking-wide text-[#013220]">Resources</h3>
                        <ul className="space-y-3">
                            {[
                                { label: 'Offerings', href: '/offerings' },
                                { label: 'Governance', href: '/governance' },
                                { label: 'FAQ', href: '/faq' },
                                { label: 'Log In', href: '/login' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#013220]/60 hover:text-[#013220] transition-colors duration-300 font-light inline-block"
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
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#013220]/50">
                        <div className="flex flex-wrap items-center gap-6">
                            <span>© 2024 Sylvan. All rights reserved.</span>
                            <Link href="#" className="hover:text-[#013220]/70 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-[#013220]/70 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span>Structured Real Estate Platform</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}