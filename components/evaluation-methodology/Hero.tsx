// components/evaluation-methodology/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="bg-[#0A3F28] text-white pt-32 pb-40 min-h-[650px] relative overflow-hidden">
            {/* Triangle — top-left corner */}
            <div className="absolute top-0 left-0 w-1/2 h-full opacity-[0.07]">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L0,100 Z" fill="#2DD4BF"/>
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
                        Our Evaluation Methodology
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-8">
                        Evidence comes from <br />
                        <span className="italic text-gray-300">obligation, not interpretation.</span>
                    </h1>
                    {/* Updated text to use the quote content and style (serif italic) */}
                    <p className="text-lg text-gray-300 font-serif italic leading-relaxed max-w-2xl border-l border-[#D9B44A] pl-6">
                        Evidence is produced by placing sponsors under standardized contractual obligations and recording what happens when those obligations bind.
                    </p>
                </motion.div>
            </div>

            {/* Quote section removed */}
        </section>
    )
}