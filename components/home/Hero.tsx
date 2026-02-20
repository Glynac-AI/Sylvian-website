// components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import RequestAccessButton from '@/components/RequestAccessButton'
import HeroCards from '@/components/home/HeroCards'

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 min-h-[650px] grid lg:grid-cols-2 gap-8 items-center border-b border-[#E5E7EB] overflow-visible">
            <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {/* Two-liner Roman/Italic Heading */}
                <h1 className="text-4xl lg:text-5xl font-serif text-[#111827] leading-[1.1] mb-8">
                    <span className="block font-normal">Know your real estate sponsors</span>
                    <span className="block italic text-[#0A3F28]">before you invest.</span>
                </h1>

                {/* Compact Subtext */}
                <div className="space-y-4 mb-10 max-w-lg">
                    <p className="text-base text-gray-600 leading-normal">
                        Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures.
                    </p>
                    <p className="text-base text-gray-600 leading-normal">
                        You evaluate how sponsors actually behave under financial pressure before you commit capital.
                    </p>
                </div>

                <RequestAccessButton className="bg-[#0A3F28] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#145A3C] transition shadow-lg">
                    Request Access
                </RequestAccessButton>
            </motion.div>

            <motion.div
                className="lg:col-span-1 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
                <HeroCards />
            </motion.div>
        </section>
    )
}