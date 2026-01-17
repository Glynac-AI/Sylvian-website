// components/home/Hero.tsx
'use client'

import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

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
    const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.025, 0])
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const floatingShape1Y = useTransform(scrollYProgress, [0, 1], [0, 150])
    const floatingShape2Y = useTransform(scrollYProgress, [0, 1], [0, -100])
    const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.03, 0])

    return (
        <section ref={sectionRef} className="relative h-screen flex items-center overflow-hidden bg-[#F3F4F1] -mt-[88px] pt-[88px]">

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
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: useTransform(
                            [gradientX, gradientY],
                            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(9, 85, 32, 0.05) 0%, transparent 50%)`
                        )
                    }}
                />

                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.2) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                        opacity: gridOpacity
                    }}
                />

                <motion.div
                    className="absolute top-[10%] right-[15%] w-[650px] h-[650px] rounded-full opacity-25 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(9, 85, 32, 0.15) 0%, transparent 70%)',
                        y: useTransform(
                            [mouseY, floatingShape1Y],
                            ([mouse, scroll]) => (mouse as number * 0.05) + (scroll as number)
                        )
                    }}
                />
                <motion.div
                    className="absolute bottom-[20%] left-[10%] w-[550px] h-[550px] rounded-full opacity-20 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(0, 137, 41, 0.12) 0%, transparent 70%)',
                        y: useTransform(
                            [mouseY, floatingShape2Y],
                            ([mouse, scroll]) => (mouse as number * -0.03) + (scroll as number)
                        )
                    }}
                />

                <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
                    <defs>
                        <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path d="M0,100 Q50,80 100,100 T200,100" fill="none" stroke="rgba(9, 85, 32, 0.8)" strokeWidth="1.5" />
                            <path d="M0,120 Q50,100 100,120 T200,120" fill="none" stroke="rgba(9, 85, 32, 0.6)" strokeWidth="1" />
                            <path d="M0,80 Q50,60 100,80 T200,80" fill="none" stroke="rgba(9, 85, 32, 0.6)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#topo)" />
                </svg>

                <div
                    className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />
            </div>

            {/* Content with Parallax */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12"
                style={{ y: contentY }}
            >
                <div className="max-w-6xl space-y-8 md:space-y-10">

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* UPDATE (1): Increased font size slightly to make the quote "bigger" as requested */}
                        <span className="block text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.8rem] font-medium leading-[1] tracking-[-0.03em] text-[#095520]">
                            Structured real estate exposure
                        </span>
                        <span className="block text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.8rem] font-medium leading-[1] tracking-[-0.03em] mt-3 text-[#8C9196]">
                            Simplified for RIAs
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        className="space-y-4 max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-lg md:text-xl lg:text-2xl leading-[1.65] text-black font-light">
                            Sylvan delivers structured real estate exposure through pre-approved, ring-fenced SPVs with lockbox-governed rental cash distributions.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl leading-[1.65] text-black font-light">
                            All of which provides RIAs a faster and more controlled path to real estate income.
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={() => window.location.href = '/offerings'}
                            className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#095520] text-yellow-400 rounded-full font-semibold text-sm md:text-base uppercase tracking-[0.1em] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                View Current Listings
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>

                            <div className="absolute inset-0 bg-gradient-to-r from-[#008929] via-[#095520] to-[#008929] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" style={{ backgroundSize: '200% auto' }} />
                        </button>
                    </motion.div>

                </div>
            </motion.div>

        </section>
    )
}