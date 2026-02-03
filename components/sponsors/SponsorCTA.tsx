// components/sponsors/SponsorCTA.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface SponsorCTAProps {
    sponsorName: string
    portfolioIds: number[]
}

export default function SponsorCTA({ sponsorName, portfolioIds }: SponsorCTAProps) {
    return (
        <section className="bg-[#0A3F28] py-20 text-white text-center border-t border-[#145A3C]">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-16 h-1 bg-[#D9B44A] mx-auto mb-8"></div>
                    <h2 className="text-4xl lg:text-5xl font-serif mb-6">
                        Explore Investment Opportunities
                    </h2>
                    <p className="text-xl text-gray-300 font-serif italic mb-12">
                        {sponsorName} has {portfolioIds.length} active {portfolioIds.length === 1 ? 'offering' : 'offerings'} available
                    </p>

                    <div className="inline-block border border-white/20 p-8 rounded-sm bg-white/5 backdrop-blur-sm mb-12 max-w-2xl">
                        <p className="text-lg leading-relaxed text-gray-300">
                            Review the detailed operating record above, then explore available structured notes backed by
                            <span className="text-[#D9B44A] font-semibold"> verified performance data and transparent reporting.</span>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/offerings">
                            <button className="bg-[#D9B44A] text-[#0A3F28] px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#E5C05D] transition shadow-lg">
                                View All Offerings
                            </button>
                        </Link>
                        <Link href="/sponsor-evaluation">
                            <button className="border border-white/30 text-white px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition">
                                Learn About Evaluation
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
