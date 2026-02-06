// components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center border-b border-[#E5E7EB]">
            <motion.div
                className="fade-in"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">
                    Institutional Diligence
                </span>
                <h1 className="text-5xl lg:text-6xl font-serif text-[#111827] leading-[1.1] mb-8">
                    Real estate sponsor <br />
                    <span className="italic text-[#0A3F28]">diligence, standardized.</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                    You evaluate how sponsors <strong>actually behave</strong> under financial pressure before you commit capital.
                </p>
                <RequestAccessButton className="bg-[#0A3F28] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#145A3C] transition shadow-lg">
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
        </section>
    )
}
