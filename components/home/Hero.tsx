// components/home/Hero.tsx
'use client'

import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    const sectionRef = useRef(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Scroll-based parallax
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    const gradientX = useTransform(mouseX, [0, 1920], ['0%', '100%'])
    const gradientY = useTransform(mouseY, [0, 1080], ['0%', '100%'])

    // Parallax transforms
    const logoY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.02, 0])
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const floatingShape1Y = useTransform(scrollYProgress, [0, 1], [0, 150])
    const floatingShape2Y = useTransform(scrollYProgress, [0, 1], [0, -100])
    const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.025, 0])

    return (
        <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F3F4F1]">

            {/* Background Layers */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[850px] md:h-[850px] lg:w-[1000px] lg:h-[1000px]"
                    style={{
                        y: useTransform(
                            [mouseY, logoY],
                            ([mouse, scroll]) => (mouse as number * 0.03) + (scroll as number)
                        ),
                        opacity: logoOpacity
                    }}
                >
                    <Image src="/logo.png" alt="" fill className="object-contain opacity-100 translate-x-[20%]" priority />
                </motion.div>

                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: useTransform(
                            [gradientX, gradientY],
                            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(9, 85, 32, 0.04) 0%, transparent 50%)`
                        )
                    }}
                />

                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                        opacity: gridOpacity
                    }}
                />

                <motion.div
                    className="absolute top-[10%] right-[15%] w-[650px] h-[650px] rounded-full opacity-20 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(9, 85, 32, 0.12) 0%, transparent 70%)',
                        y: useTransform(
                            [mouseY, floatingShape1Y],
                            ([mouse, scroll]) => (mouse as number * 0.05) + (scroll as number)
                        )
                    }}
                />
                <motion.div
                    className="absolute bottom-[20%] left-[10%] w-[550px] h-[550px] rounded-full opacity-15 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 137, 41, 0.10) 0%, transparent 70%)',
                        y: useTransform(
                            [mouseY, floatingShape2Y],
                            ([mouse, scroll]) => (mouse as number * -0.03) + (scroll as number)
                        )
                    }}
                />
            </div>

            {/* Content with Parallax */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20"
                style={{ y: contentY }}
            >
                <div className="max-w-6xl space-y-10 md:space-y-12">

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-4"
                    >
                        <span className="block text-[1.9rem] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.4rem] xl:text-[4rem] font-semibold leading-[1.05] tracking-[-0.025em] text-[#095520]">
                            Structured real estate exposure
                        </span>
                        <span className="block text-[1.9rem] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.4rem] xl:text-[4rem] font-semibold leading-[1.05] tracking-[-0.025em] text-gray-500">
                            Simplified for RIAs
                        </span>
                    </motion.h1>

                    {/* Description - Improved spacing and hierarchy */}
                    <motion.div
                        className="space-y-5 max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-lg md:text-xl lg:text-[1.5rem] leading-[1.6] text-[#013220] font-normal">
                            Sylvan delivers structured real estate exposure through pre-approved, ring fenced SPVs with lockbox governed rental cash distributions.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl leading-[1.65] text-[#013220]/80 font-light">
                            All of which provides you a faster and more controlled path to real estate income.
                        </p>
                    </motion.div>

                    {/* CTA Button - Improved styling */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link href="/offerings">
                            <button
                                className="group inline-flex items-center gap-3 px-9 md:px-11 py-5 md:py-6 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm md:text-base uppercase tracking-[0.12em] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                            >
                                View Current Listings
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </Link>
                    </motion.div>

                </div>
            </motion.div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>

        </section>
    )
}
