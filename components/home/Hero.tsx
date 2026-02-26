// components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import RequestAccessButton from '@/components/RequestAccessButton'
import HeroCards from '@/components/home/HeroCards'

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 min-h-[650px] flex flex-col lg:flex-row gap-12 lg:gap-8 items-center border-b border-[#E5E7EB] overflow-visible">
            
            <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-4xl lg:text-4xl xl:text-5xl font-serif text-[#111827] leading-[1.1] mb-8 pr-4">
                    <span className="block font-normal">Know your real estate sponsors</span>
                    <span className="block italic text-[#0A3F28]">before you invest.</span>
                </h1>

                <div className="space-y-4 mb-10 max-w-lg xl:max-w-xl">
                    <p className="text-base text-gray-600 leading-normal">
                        Sylvan gives you a standardized operating record on every sponsor, built from contractual obligations and mandatory disclosures.
                    </p>
                    <p className="text-base text-gray-600 leading-normal">
                        You see how sponsors actually behave under financial pressure before you commit a single dollar.
                    </p>
                </div>

                <RequestAccessButton className="bg-[#0A3F28] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#145A3C] transition shadow-lg">
                    Request Access
                </RequestAccessButton>
            </motion.div>

            <motion.div
                className="w-full lg:w-[450px] xl:w-[500px] shrink-0 flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
                <HeroCards />
            </motion.div>
            
        </section>
    )
}