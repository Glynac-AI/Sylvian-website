// components/home/HeroCards.tsx
'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const cards = [
    {
        tag: 'Semi-Stabilized Asset',
        status: 'Active',
        statusColor: '#16a34a',
        image: '/home/hero/image-_1_.webp',
        targetYield: '8.5%',
        title: 'Value-Add Opportunity Portfolio',
        term: '4 years',
        minimum: '$100,000',
        progress: 28,
    },
    {
        tag: 'Stabilized Asset',
        status: 'Active',
        statusColor: '#16a34a',
        image: '/home/hero/image-_2_.webp',
        targetYield: '7.8%',
        title: 'Sunbelt Multifamily Growth',
        term: '5 years',
        minimum: '$50,000',
        progress: 42,
    },
    {
        tag: 'Stabilized Asset',
        status: 'Closing Soon',
        statusColor: '#d97706',
        image: '/home/hero/image-_3_.webp',
        targetYield: '7.2%',
        title: 'Metro Core Mixed-Use',
        term: '7 years',
        minimum: '$75,000',
        progress: 73,
    },
]

type Position = 'center' | 'left' | 'right'

const variants: Variants = {
    center: {
        scale: 1,
        x: 0,
        rotateY: 0,
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 30,
    },
    left: {
        scale: 0.82,
        x: -150,
        rotateY: 12,
        opacity: 0.7,
        filter: 'blur(1px)',
        zIndex: 10,
    },
    right: {
        scale: 0.82,
        x: 150,
        rotateY: -12,
        opacity: 0.7,
        filter: 'blur(1px)',
        zIndex: 10,
    },
}

function getPosition(index: number, activeIndex: number): Position {
    const total = cards.length
    const diff = (index - activeIndex + total) % total
    if (diff === 0) return 'center'
    if (diff === 1) return 'right'
    return 'left'
}

function Card({ tag, status, statusColor, image, targetYield, title, term, minimum, progress }: (typeof cards)[0]) {
    return (
        <div
            style={{
                width: 260,
                borderRadius: 16,
                background: '#ffffff',
                border: '1px solid #E5E7EB',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
                flexShrink: 0,
                overflow: 'hidden',
            }}
        >
            {/* Image with floating tags */}
            <div style={{ position: 'relative', height: 200 }}>
                <Image
                    src={image}
                    alt={title}
                    width={260}
                    height={200}
                    className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 60%)',
                }} />
                {/* Tag top-left */}
                <span style={{
                    position: 'absolute', top: 8, left: 8,
                    background: 'rgba(255,255,255,0.92)',
                    borderRadius: 20,
                    padding: '2px 8px',
                    fontSize: 9,
                    fontWeight: 600,
                    color: '#111827',
                    letterSpacing: '0.02em',
                }}>
                    {tag}
                </span>
                {/* Status tag top-right */}
                <span style={{
                    position: 'absolute', top: 8, right: 8,
                    background: statusColor === '#16a34a' ? 'rgba(10,63,40,0.85)' : 'rgba(180,130,20,0.85)',
                    borderRadius: 20,
                    padding: '2px 8px',
                    fontSize: 9,
                    fontWeight: 600,
                    color: '#ffffff',
                    letterSpacing: '0.02em',
                }}>
                    {status}
                </span>
            </div>
            {/* Target Yield floating box — sits between image and body, not clipped */}
            <div style={{ position: 'relative', height: 32 }}>
                <div style={{
                    position: 'absolute', top: -32, left: '50%', transform: 'translateX(-50%)',
                    background: '#0A3F28',
                    borderRadius: 10,
                    padding: '8px 16px',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    zIndex: 1,
                    minWidth: 110,
                }}>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Target Yield</div>
                    <div style={{ fontSize: 20, color: '#ffffff', fontWeight: 700, lineHeight: 1.2 }}>{targetYield}</div>
                </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '10px 16px 16px' }}>
                {/* Title */}
                <div style={{ fontSize: 13, fontWeight: 600, color: '#111827', marginBottom: 12, lineHeight: 1.3, paddingRight: 50 }}>
                    {title}
                </div>

                {/* Metrics row */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                    <div style={{ flex: 1, background: '#F9FAFB', borderRadius: 8, padding: '6px 8px', textAlign: 'center' }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#111827' }}>{term}</div>
                        <div style={{ fontSize: 9, color: '#9CA3AF', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Term</div>
                    </div>
                    <div style={{ flex: 1, background: '#F9FAFB', borderRadius: 8, padding: '6px 8px', textAlign: 'center' }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#111827' }}>{minimum}</div>
                        <div style={{ fontSize: 9, color: '#9CA3AF', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Minimum</div>
                    </div>
                    <div style={{ flex: 1, background: '#F9FAFB', borderRadius: 8, padding: '6px 8px', textAlign: 'center' }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: statusColor }}>{progress}%</div>
                        <div style={{ fontSize: 9, color: '#9CA3AF', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {status === 'Closing Soon' ? 'Closing' : 'Active'}
                        </div>
                    </div>
                </div>

                {/* Progress bar */}
                <div style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 9, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Funded</span>
                        <span style={{ fontSize: 9, color: '#111827', fontWeight: 600 }}>{progress}%</span>
                    </div>
                    <div style={{ height: 4, background: '#E5E7EB', borderRadius: 99, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${progress}%`, background: '#0A3F28', borderRadius: 99 }} />
                    </div>
                </div>

                {/* Action button */}
                <Link href="/offerings" style={{
                    background: '#0A3F28',
                    borderRadius: 8,
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        View Details
                    </span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default function HeroCards() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        if (isHovered) return
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isHovered])

    return (
        <div className="flex flex-col items-center gap-5">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    position: 'relative',
                    width: 440,
                    height: 460,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    perspective: '1000px',
                }}
            >
                {cards.map((card, i) => {
                    const position = getPosition(i, activeIndex)
                    return (
                        <motion.div
                            key={i}
                            className="absolute"
                            variants={variants}
                            animate={position}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                transformStyle: 'preserve-3d',
                                cursor: position !== 'center' ? 'pointer' : 'default',
                            }}
                            onClick={() => {
                                if (position !== 'center') setActiveIndex(i)
                            }}
                        >
                            <Card {...card} />
                        </motion.div>
                    )
                })}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        style={{
                            width: i === activeIndex ? 20 : 6,
                            height: 6,
                            borderRadius: 20,
                            background: i === activeIndex ? '#0A3F28' : '#D1D5DB',
                            border: 'none',
                            padding: 0,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
