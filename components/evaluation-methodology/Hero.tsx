// components/evaluation-methodology/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="bg-[#0A3F28] text-white pt-32 pb-40 relative overflow-hidden">
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
                    <p className="text-lg text-gray-300 leading-relaxed max-w-lg border-l border-[#145A3C] pl-6">
                        Sylvan does not rely on sponsor narratives, discretionary reporting, or retrospective explanations.
                    </p>
                </motion.div>
            </div>

            {/* Quote — bottom right */}
            <div className="hidden lg:block absolute bottom-28 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 z-10">
                <div className="flex justify-end">
                    <motion.div
                        className="max-w-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                    >
                        <p className="text-[15px] text-gray-300 font-serif italic leading-relaxed">
                            &ldquo;Evidence is produced by placing sponsors under standardized contractual obligations and recording what happens when those obligations bind.&rdquo;
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
