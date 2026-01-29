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
    const logoY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.02, 0])
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -100])
    const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.025, 0])

    return (
        <section ref={sectionRef} className="relative min-h-[calc(100vh-4.25rem)] md:min-h-[calc(100vh-5.25rem)] flex items-center overflow-hidden bg-[#F3F4F1]">
            {/* Background Layers */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[750px] md:h-[750px] lg:w-[900px] lg:h-[900px]"
                    style={{
                        y: useTransform([mouseY, logoY], ([mouse, scroll]) => (mouse as number * 0.03) + (scroll as number)),
                        opacity: logoOpacity
                    }}
                >
                    <Image src="/logo.png" alt="" fill className="object-contain opacity-100 translate-x-[20%]" priority />
                </motion.div>

                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: useTransform([gradientX, gradientY], ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(9, 85, 32, 0.04) 0%, transparent 50%)`)
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

                <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-gradient-to-br from-[#095520]/20 to-transparent" />
                <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full opacity-15 blur-3xl bg-gradient-to-br from-[#008929]/15 to-transparent" />
            </div>

            {/* Content */}
            <motion.div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12" style={{ y: contentY }}>
                <div className="max-w-3xl space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[#095520]"
                    >
                        Real estate sponsor diligence, standardized
                    </motion.h1>

                    <motion.div
                        className="space-y-5 max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-base md:text-lg leading-[1.7] text-black">
                            Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures.
                        </p>
                        <p className="text-base md:text-lg leading-[1.7] text-[#013220]">
                            You evaluate how sponsors actually behave under financial pressure before you commit capital.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link href="/request-access">
                            <button className="group inline-flex items-center gap-2.5 px-8 py-5 bg-[#095520] text-yellow-400 rounded-full font-semibold text-base uppercase tracking-[0.1em] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                                Request Access
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
