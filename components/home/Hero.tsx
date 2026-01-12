// components/home/Hero.tsx
'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    const gradientX = useTransform(mouseX, [0, window.innerWidth], ['0%', '100%'])
    const gradientY = useTransform(mouseY, [0, window.innerHeight], ['0%', '100%'])

    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-[#F8FAF9] -mt-[88px] pt-[88px]">

            {/* Background Layers */}
            <div className="absolute inset-0 pointer-events-none">

                {/* Mouse-tracking gradient */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: useTransform(
                            [gradientX, gradientY],
                            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(9, 85, 32, 0.03) 0%, transparent 50%)`
                        )
                    }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />

                {/* Floating shapes with parallax */}
                <motion.div
                    className="absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl bg-gradient-radial from-[#095520]/15 to-transparent"
                    style={{
                        y: useTransform(mouseY, [0, window.innerHeight], [0, 50])
                    }}
                />
                <motion.div
                    className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl bg-gradient-radial from-[#008929]/12 to-transparent"
                    style={{
                        y: useTransform(mouseY, [0, window.innerHeight], [0, -30])
                    }}
                />

                {/* Topographic SVG lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
                    <defs>
                        <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <path d="M0,100 Q50,80 100,100 T200,100" fill="none" stroke="rgba(9, 85, 32, 0.8)" strokeWidth="1.5" />
                            <path d="M0,120 Q50,100 100,120 T200,120" fill="none" stroke="rgba(9, 85, 32, 0.6)" strokeWidth="1" />
                            <path d="M0,80 Q50,60 100,80 T200,80" fill="none" stroke="rgba(9, 85, 32, 0.6)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#topo)" />
                </svg>

                {/* Noise texture */}
                <div
                    className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-6xl space-y-8 md:space-y-10">

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="block text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem] font-medium leading-[1] tracking-[-0.03em] text-[#095520]">
                            Structured real estate 
                        </span>
                        <span className="block text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem] font-medium leading-[1] tracking-[-0.03em] mt-3 text-[#8C9196]">
                            exposure simplified for RIAs
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.div
                        className="space-y-4 max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-base md:text-lg lg:text-xl leading-[1.65] text-[#095520]/75 font-light">
                            Sylvan delivers structured real estate exposure through pre-approved, ring-fenced SPVs with lockbox-governed rental cash distributions.
                        </p>
                        <p className="text-sm md:text-base lg:text-lg leading-[1.65] text-[#095520]/60 font-light">
                            All of which provides RIAs a faster and more controlled path to real estate income.
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.button
                            onClick={() => window.location.href = '/offerings'}
                            className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#095520] text-white rounded-full font-semibold text-sm md:text-base uppercase tracking-[0.1em] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
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

                            {/* Gradient overlay on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#008929] via-[#095520] to-[#008929]"
                                initial={{ opacity: 0, x: '-100%' }}
                                whileHover={{ opacity: 1, x: '100%' }}
                                transition={{
                                    opacity: { duration: 0.3 },
                                    x: { duration: 1.5, repeat: Infinity, ease: "linear" }
                                }}
                            />
                        </motion.button>
                    </motion.div>

                </div>
            </div>

        </section>
    )
}