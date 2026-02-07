// components/how-investors-use-sylvan/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="bg-[#0A3F28] text-white pt-32 pb-20 relative overflow-hidden">
            {/* Two parallel diagonal stripes */}
            <div className="absolute inset-0 opacity-[0.07]">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M70,0 L100,0 L100,30 L30,100 L0,100 L0,70 Z" fill="#86EFAC"/>
                    <path d="M90,0 L100,0 L100,10 L10,100 L0,100 L0,90 Z" fill="#86EFAC" opacity="0.5"/>
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
