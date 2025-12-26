'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

type NavItem = {
    label: string
    href?: string
    children?: NavItem[]
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Framework',
        children: [
            { label: 'Start Here', href: '/start' },
            { label: 'How Sylvan Works', href: '/how-it-works' },
            { label: 'Income & Downside Behavior', href: '/income-downside' },
            { label: 'Portfolio Role', href: '/portfolio' },
        ],
    },
    {
        label: 'Offerings',
        children: [
            { label: 'Offerings Overview', href: '/offerings' },
            {
                label: 'Sample Offerings',
                children: [
                    { label: 'Core Income', href: '/offerings/core-income' },
                    { label: 'Offset Income', href: '/offerings/offset-income' },
                    { label: 'DST Access', href: '/offerings/dst-access' },
                ],
            },
            { label: 'DST Access Explained', href: '/dst-explained' },
        ],
    },
    {
        label: 'Governance',
        children: [
            { label: 'Governance & Exam Narrative', href: '/governance' },
            { label: 'Operations Walkthrough', href: '/operations' },
        ],
    },
    {
        label: 'Resources',
        children: [
            { label: 'Implementation Resources', href: '/implementation' },
            { label: 'Resource Library', href: '/library' },
            { label: 'Sylvan Learning', href: '/learning' },
        ],
    },
    { label: 'FAQ', href: '/faq' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null)
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const subCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = (label: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
        }
        setOpenDropdown(label)
    }

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setOpenDropdown(null)
            setOpenSubDropdown(null)
        }, 150)
    }

    const handleSubMouseEnter = (label: string) => {
        if (subCloseTimeoutRef.current) {
            clearTimeout(subCloseTimeoutRef.current)
        }
        setOpenSubDropdown(label)
    }

    const handleSubMouseLeave = () => {
        subCloseTimeoutRef.current = setTimeout(() => {
            setOpenSubDropdown(null)
        }, 150)
    }

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
            if (subCloseTimeoutRef.current) clearTimeout(subCloseTimeoutRef.current)
        }
    }, [])

    const isActive = (href?: string) => {
        if (!href) return false
        return pathname === href || pathname.startsWith(href + '/')
    }

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
            <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-wide text-slate-900 transition-colors hover:text-blue-600"
                >
                    SYLVAN
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => {
                        if (item.href) {
                            // Simple link
                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${isActive(item.href)
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        }

                        // Dropdown
                        return (
                            <li
                                key={item.label}
                                className="group relative"
                                onMouseEnter={() => handleMouseEnter(item.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-900"
                                >
                                    {item.label}
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {openDropdown === item.label && (
                                    <div
                                        className="absolute left-0 top-full pt-1"
                                        onMouseEnter={() => handleMouseEnter(item.label)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="min-w-[240px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                                            {item.children?.map((child) => {
                                                if (child.href) {
                                                    // Simple child link
                                                    return (
                                                        <Link
                                                            key={child.label}
                                                            href={child.href}
                                                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${isActive(child.href)
                                                                    ? 'bg-blue-50 text-blue-600'
                                                                    : 'text-slate-700 hover:bg-slate-50'
                                                                }`}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    )
                                                }

                                                // Sub-dropdown
                                                return (
                                                    <div
                                                        key={child.label}
                                                        className="relative"
                                                        onMouseEnter={() => handleSubMouseEnter(child.label)}
                                                        onMouseLeave={handleSubMouseLeave}
                                                    >
                                                        <button className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
                                                            {child.label}
                                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>

                                                        {/* Sub-dropdown Menu */}
                                                        {openSubDropdown === child.label && (
                                                            <div
                                                                className="absolute left-full top-0 pl-1"
                                                                onMouseEnter={() => handleSubMouseEnter(child.label)}
                                                                onMouseLeave={handleSubMouseLeave}
                                                            >
                                                                <div className="min-w-[200px] rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
                                                                    {child.children?.map((subChild) => (
                                                                        <Link
                                                                            key={subChild.label}
                                                                            href={subChild.href!}
                                                                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${isActive(subChild.href)
                                                                                    ? 'bg-blue-50 text-blue-600'
                                                                                    : 'text-slate-700 hover:bg-slate-50'
                                                                                }`}
                                                                        >
                                                                            {subChild.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white lg:hidden"
                    aria-label="Toggle menu"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        {mobileOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="border-t border-slate-200 bg-white px-6 pb-6 lg:hidden">
                    <MobileMenu items={navItems} pathname={pathname} />
                </div>
            )}
        </header>
    )
}

// Mobile Menu Component
function MobileMenu({ items, pathname }: { items: NavItem[]; pathname: string }) {
    const [openItems, setOpenItems] = useState<string[]>([])

    const toggleItem = (label: string) => {
        setOpenItems((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        )
    }

    const isActive = (href?: string) => {
        if (!href) return false
        return pathname === href || pathname.startsWith(href + '/')
    }

    const renderItem = (item: NavItem, level: number = 0) => {
        if (item.href) {
            return (
                <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-lg px-4 py-3 text-base font-semibold transition-all ${isActive(item.href)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    style={{ paddingLeft: `${1 + level * 1}rem` }}
                >
                    {item.label}
                </Link>
            )
        }

        const isOpen = openItems.includes(item.label)

        return (
            <div key={item.label}>
                <button
                    onClick={() => toggleItem(item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-900"
                    style={{ paddingLeft: `${1 + level * 1}rem` }}
                >
                    {item.label}
                    <svg
                        className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isOpen && item.children && (
                    <div className="mt-1 space-y-1">
                        {item.children.map((child) => renderItem(child, level + 1))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="space-y-1 pt-4">
            {items.map((item) => renderItem(item))}
        </div>
    )
}