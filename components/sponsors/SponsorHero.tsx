// components/sponsors/SponsorHero.tsx
'use client'

import { motion } from 'framer-motion'
import { Sponsor } from '@/data/mockSponsors'

interface SponsorHeroProps {
    sponsor: Sponsor
}

export default function SponsorHero({ sponsor }: SponsorHeroProps) {
    const scrollToOverview = () => {
        document.getElementById('sponsor-overview')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="bg-[#0A3F28] text-white pt-20 pb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,100 L100,0 L100,100 Z" fill="white"/>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-2xl"
                >
                    <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-4">
                        {sponsor.name}
                    </h1>
                    <p className="text-base text-gray-400 leading-relaxed mb-8">
                        {sponsor.description}
                    </p>
                    <button
                        onClick={scrollToOverview}
                        className="inline-flex items-center gap-3 bg-[#D9B44A] text-[#013220] px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#E5C05D] transition shadow-lg"
                    >
                        View Operating Record
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
