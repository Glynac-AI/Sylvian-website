// components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function Hero() {
    return (
        <section className="bg-[#0A3F28] text-white relative overflow-hidden min-h-screen">
            {/* Layered flowing shapes */}
            <div className="absolute inset-0 opacity-[0.07]">
                <svg width="100%" height="100%" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
                    {/* Large sweeping curve from bottom-left */}
                    <path d="M-100,700 C200,600 400,200 800,150 C1100,110 1300,250 1500,200" fill="none" stroke="#A7F3D0" strokeWidth="80" />
                    {/* Secondary curve */}
                    <path d="M-100,700 C250,550 500,100 900,80 C1200,65 1350,180 1500,120" fill="none" stroke="#6EE7B7" strokeWidth="40" />
                    {/* Accent circle glow — top right */}
                    <circle cx="1200" cy="120" r="200" fill="#34D399" opacity="0.5" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center relative z-10 min-h-screen">
                <motion.div
                    className="fade-in"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">
                        Institutional Diligence
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
                        Real estate sponsor <br />
                        <span className="italic text-gray-300">diligence, standardized.</span>
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-10">
                        You evaluate how sponsors <strong className="text-white">actually behave</strong> under financial pressure before you commit capital.
                    </p>
                    <RequestAccessButton className="bg-[#D9B44A] text-[#0A3F28] px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#C4A243] transition shadow-lg">
                        Request Access
                    </RequestAccessButton>
                </motion.div>

                <motion.div
                    className="fade-in flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                >
                    <div className="relative w-full max-w-lg">
                        <Image
                            src="/home/hero-section.svg"
                            alt="Sponsor Operating Record Dashboard"
                            width={600}
                            height={500}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
