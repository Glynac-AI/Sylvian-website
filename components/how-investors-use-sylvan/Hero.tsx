// components/how-investors-use-sylvan/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="bg-[#0A3F28] text-white pt-32 pb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L100,0 L100,100 Z" fill="white"/>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="fade-in max-w-3xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-6 block">
                        How Investors Use Sylvan
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-serif leading-tight">
                        How Investors <br />
                        <span className="italic text-gray-300">Use Sylvan</span>
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}
