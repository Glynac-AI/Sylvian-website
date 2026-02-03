// components/sponsors/SponsorHero.tsx
'use client'

import { motion } from 'framer-motion'
import { Sponsor } from '@/data/mockSponsors'

interface SponsorHeroProps {
    sponsor: Sponsor
}

export default function SponsorHero({ sponsor }: SponsorHeroProps) {
    return (
        <section className="bg-[#0A3F28] text-white pt-32 pb-24 relative overflow-hidden">
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
                >
                    <span className="text-[#D9B44A] font-bold text-[10px] uppercase tracking-[0.15em] mb-6 block">
                        Sponsor Operating Record
                    </span>

                    <h1 className="text-5xl lg:text-6xl font-serif leading-tight mb-4">
                        {sponsor.name}
                    </h1>

                    <p className="text-xl text-gray-300 font-serif italic mb-12 max-w-2xl">
                        {sponsor.tagline}
                    </p>

                    {/* Key Metrics Banner */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded">
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Total AUM</p>
                            <p className="text-2xl font-bold text-white">{sponsor.totalAUM}</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded">
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Avg. IRR</p>
                            <p className="text-2xl font-bold text-white">{sponsor.historicalIRR}</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded">
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Properties</p>
                            <p className="text-2xl font-bold text-white">{sponsor.propertiesManaged}</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded">
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Experience</p>
                            <p className="text-2xl font-bold text-white">{sponsor.yearsInBusiness}y</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
