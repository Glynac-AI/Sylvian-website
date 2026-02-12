// components/sponsor-evaluation/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="bg-[#0A3F28] text-white pt-32 pb-40 min-h-[650px] relative overflow-hidden">
            {/* Triangle — bottom-right corner */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.07]">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L100,0 L100,100 Z" fill="#4ADE80"/>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="fade-in"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-6 block">
                        Sponsor Evaluation
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-8">
                        Sponsor operating behavior, <br />
                        <span className="italic text-gray-300">made visible.</span>
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-lg border-l border-[#145A3C] pl-6">
                        Sylvan shows how real estate sponsors <strong>actually operate</strong> when obligations are real. Not intentions. Not narratives. Observable behavior captured across live financial obligations.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}