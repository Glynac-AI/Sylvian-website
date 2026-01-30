// components/sponsor-standards/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 border-b border-[#E5E7EB]">
            <motion.div
                className="max-w-4xl fade-in"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-[#D9B44A]"></div>
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.1em]">
                        Sponsor Standards
                    </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-serif text-[#111827] leading-[1.1] mb-8">
                    Institutional readiness <br />
                    <span className="italic text-[#0A3F28]">is required.</span>
                </h1>
                <p className="text-xl text-[#4B5563] leading-relaxed mb-8 max-w-2xl">
                    Sylvan is designed to produce institution-grade sponsor operating records. Participation is limited to sponsors that meet clear admission standards and commit to ongoing transparency.
                </p>
                <div className="p-8 bg-white border border-[#E5E7EB] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] max-w-3xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#0A3F28]"></div>
                    <p className="text-lg text-[#4B5563] font-serif italic">
                        "These standards exist to protect the integrity of the evidence and the comparability of sponsor behavior across the platform."
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
