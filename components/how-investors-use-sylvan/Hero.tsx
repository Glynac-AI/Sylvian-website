// components/how-investors-use-sylvan/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="bg-[#0A3F28] text-white pt-32 pb-40 min-h-[650px] relative overflow-hidden">
            {/* Two parallel diagonal stripes */}
            <div className="absolute inset-0 opacity-[0.07]">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M70,0 L100,0 L100,30 L30,100 L0,100 L0,70 Z" fill="#86EFAC"/>
                    <path d="M90,0 L100,0 L100,10 L10,100 L0,100 L0,90 Z" fill="#86EFAC" opacity="0.5"/>
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
                        How Investors Use Sylvan
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-8">
                        Real sponsor behavior, <br />
                        <span className="italic text-gray-300">actionable intelligence.</span>
                    </h1>
                    {/* Applied 'font-serif italic' and 'max-w-2xl' to match Methodology page style */}
                    <p className="text-lg text-gray-300 font-serif italic leading-relaxed max-w-2xl border-l border-[#D9B44A] pl-6">
                        Sylvan gives you a verified operating record on every sponsor so your allocation decisions are based on what sponsors actually do, not what they say they will do.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}