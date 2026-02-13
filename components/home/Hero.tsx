// components/home/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import RequestAccessButton from '@/components/RequestAccessButton'

export default function Hero() {
    return (
        <section className="bg-white border-b border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-6 py-24 min-h-[650px] grid lg:grid-cols-3 gap-16 items-center">
                <motion.div
                    className="fade-in lg:col-span-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* <span className="text-[#0A3F28] font-bold text-[10px] uppercase tracking-[0.15em] mb-4 block">
                        Institutional Diligence
                    </span> */}
                    <h1 className="text-5xl lg:text-6xl font-serif text-[#111827] leading-[1.1] mb-8">
                        Know your real estate <br />
                        sponsors <span className="italic text-[#0A3F28]">before you invest.</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                        Sylvan provides standardized sponsor operating records through enforced contractual obligations and mandatory disclosures.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
                        You evaluate how sponsors actually behave under financial pressure before you commit capital.
                    </p>
                    <RequestAccessButton className="bg-[#0A3F28] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#145A3C] transition shadow-lg">
                        Request Access
                    </RequestAccessButton>
                </motion.div>

                <motion.div
                    className="fade-in lg:col-span-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                >
                    <div className="bg-white p-2 rounded shadow-[0_20px_40px_-4px_rgba(10,63,40,0.1)] border border-[#E5E7EB]">
                        <div className="bg-gray-50 border-b border-[#E5E7EB] p-3 flex justify-between items-center rounded-t-sm">
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                    Record ID: SV-8821
                                </div>
                                <div className="text-sm font-bold text-[#0A3F28] font-serif">
                                    Sponsor Operating Record
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 bg-white border border-[#E5E7EB] rounded">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[9px] font-mono font-bold text-gray-600">LIVE FEED</span>
                            </div>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-8 bg-[#E5E7EB] group-hover:bg-[#0A3F28] transition-colors"></div>
                                    <div>
                                        <div className="text-xs font-bold text-[#111827]">Cash Flow Stress Test</div>
                                        <div className="text-[10px] text-gray-400 font-mono uppercase">
                                            METRIC: DSCR-STRESS-01
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-mono font-bold text-[#111827]">PASS (1.45x)</div>
                                    <div className="text-[10px] text-green-600 font-bold uppercase tracking-wide">
                                        ● Verified
                                    </div>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100 w-full"></div>
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-8 bg-[#E5E7EB] group-hover:bg-[#0A3F28] transition-colors"></div>
                                    <div>
                                        <div className="text-xs font-bold text-[#111827]">Reserve Maintenance</div>
                                        <div className="text-[10px] text-gray-400 font-mono uppercase">
                                            METRIC: RES-FUND-04
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-mono font-bold text-[#111827]">102% Funded</div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                                        Target: 100%
                                    </div>
                                </div>
                            </div>
                            <div className="h-px bg-gray-100 w-full"></div>
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-8 bg-[#E5E7EB] group-hover:bg-[#0A3F28] transition-colors"></div>
                                    <div>
                                        <div className="text-xs font-bold text-[#111827]">Disclosure Latency</div>
                                        <div className="text-[10px] text-gray-400 font-mono uppercase">
                                            METRIC: COMMS-LAT-09
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs font-mono font-bold text-[#111827]">&lt; 24 Hours</div>
                                    <div className="text-[10px] text-[#D9B44A] font-bold uppercase tracking-wide">
                                        Top Tier
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}