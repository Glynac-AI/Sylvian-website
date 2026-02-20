'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const cards = [
    {
        company: 'Clearwater Holdings',
        metric: 'Cash Flow Stress Test',
        value: 'PASS (2.1x)',
        image: '/home/hero/image-_1_.webp',
    },
    {
        company: 'Oakbridge Capital Fund',
        metric: 'Cash Flow Stress Test',
        value: 'PASS (1.45x)',
        image: '/home/hero/image-_2_.webp',
    },
    {
        company: 'Trinity Retail Partners',
        metric: 'Cash Flow Stress Test',
        value: 'PASS (1.96x)',
        image: '/home/hero/image-_3_.webp',
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
        scale: 0.85,
        x: -210,
        rotateY: 20,
        opacity: 0.55,
        filter: 'blur(1.5px)',
        zIndex: 10,
    },
    right: {
        scale: 0.85,
        x: 210,
        rotateY: -20,
        opacity: 0.55,
        filter: 'blur(1.5px)',
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

function Card({ company, metric, value, image }: (typeof cards)[0]) {
    return (
        <div
            style={{
                width: 300,
                minHeight: 370,
                borderRadius: 16,
                border: '1px solid #EEEFF2',
                padding: 18,
                background: '#F4F6F5',
                gap: 14,
                flexShrink: 0,
            }}
            className="flex flex-col"
        >
            {/* Header row */}
            <div className="flex items-start justify-between" style={{ gap: 2 }}>
                <div style={{ width: 220, gap: 3 }} className="flex flex-col">
                    <span
                        className="text-[12px] leading-none"
                        style={{ color: '#6B7280', fontWeight: 400 }}
                    >
                        Operating Signals
                    </span>
                    <span
                        className="text-[16px] font-semibold leading-tight"
                        style={{ color: '#1A3C28' }}
                    >
                        {company}
                    </span>
                </div>

                {/* Live badge */}
                <div
                    style={{
                        width: 30,
                        height: 13,
                        borderRadius: 20,
                        paddingTop: 2,
                        paddingBottom: 2,
                        paddingLeft: 5,
                        paddingRight: 5,
                        background: '#E4EDE4',
                        boxShadow: '0px 0px 4px 0px #00000033 inset',
                        border: '0.25px solid #88A78B',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        flexShrink: 0,
                    }}
                >
                    <div
                        className="animate-pulse"
                        style={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            background: '#2E7D32',
                            flexShrink: 0,
                        }}
                    />
                    <span
                        style={{
                            fontSize: 6,
                            fontWeight: 600,
                            color: '#2E7D32',
                            letterSpacing: '0.02em',
                            lineHeight: 1,
                        }}
                    >
                        Live
                    </span>
                </div>
            </div>

            {/* Property image */}
            <div
                style={{
                    width: '100%',
                    height: 150,
                    overflow: 'hidden',
                    borderRadius: 10,
                    flexShrink: 0,
                }}
            >
                <Image
                    src={image}
                    alt={company}
                    width={280}
                    height={150}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: 8 }}
                />
            </div>

            {/* Metric label + value */}
            <div className="flex flex-col" style={{ gap: 2, flex: 1 }}>
                <span
                    style={{
                        fontSize: 13,
                        color: '#6B7280',
                        fontWeight: 400,
                        lineHeight: 1.3,
                    }}
                >
                    {metric}
                </span>
                <span
                    style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: '#1A3C28',
                        lineHeight: 1.2,
                    }}
                >
                    {value}
                </span>
            </div>

            {/* Verified button */}
            <div
                style={{
                    width: '100%',
                    height: 38,
                    borderRadius: 20,
                    border: '0.25px solid #88A78B',
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    background: '#E4EDE4',
                    boxShadow: '0px 0px 4px 0px #FFFFFFCC inset',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 7,
                    flexShrink: 0,
                }}
            >
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                    <path
                        d="M1 4.5L4 7.5L10 1.5"
                        stroke="#1A3C28"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span
                    style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: '#1A3C28',
                        letterSpacing: '0.01em',
                    }}
                >
                    Verified
                </span>
            </div>
        </div>
    )
}

export default function HeroCards() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            style={{
                position: 'relative',
                width: 700,
                height: 420,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                perspective: '1200px',
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
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <Card {...card} />
                    </motion.div>
                )
            })}
        </div>
    )
}
