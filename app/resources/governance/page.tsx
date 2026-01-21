// app/resources/governance/page.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

export default function GovernancePage() {
    const section1Ref = useRef(null)
    const section2Ref = useRef(null)
    const section3Ref = useRef(null)
    const section4Ref = useRef(null)
    
    const section1InView = useInView(section1Ref, { once: true, margin: "-100px" })
    const section2InView = useInView(section2Ref, { once: true, margin: "-100px" })
    const section3InView = useInView(section3Ref, { once: true, margin: "-100px" })
    const section4InView = useInView(section4Ref, { once: true, margin: "-100px" })

    return (
        <main className="min-h-screen bg-[#F3F4F1]">
            {/* Hero Section */}
            <section className="relative py-32 px-6 bg-white overflow-hidden border-b border-gray-200">
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(9, 85, 32, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 85, 32, 0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />
                
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#095520] mb-6 tracking-tight leading-[1.1]">
                            Governance & Control Framework
                        </h1>
                        <p className="text-xl md:text-2xl text-black font-light leading-relaxed max-w-3xl">
                            The structural controls that protect capital and cash flows across every Sylvan transaction.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: Asset Isolation */}
            <section ref={section1Ref} className="py-32 px-6 bg-white relative overflow-hidden border-b border-gray-200">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                        
                        {/* Content */}
                        <motion.div 
                            className="lg:col-span-7 space-y-8"
                            initial={{ opacity: 0, x: -40 }} 
                            animate={section1InView ? { opacity: 1, x: 0 } : {}} 
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-xs font-bold text-[#095520]/50 uppercase tracking-widest mb-4">
                                01. Asset Isolation
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Ring-Fenced SPVs
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Each investment sits in its own standalone legal entity, completely separate from the developer's other operations and liabilities.
                                </p>
                                <p className="text-black">
                                    If the developer faces litigation, creditor claims, or bankruptcy, those issues remain outside the SPV. The asset you invested in stays protected and isolated.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visualization */}
                        <motion.div 
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, x: 40 }} 
                            animate={section1InView ? { opacity: 1, x: 0 } : {}} 
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-[#F3F4F1] p-10 rounded-2xl border border-[#095520]/10 shadow-lg">
                                <div className="space-y-8">
                                    <div className="grid grid-cols-2 gap-4 opacity-40">
                                        <div className="p-4 bg-white border-2 border-dashed border-[#095520]/30 rounded text-center text-xs text-[#095520]/60">
                                            Developer's<br/>Other Projects
                                        </div>
                                        <div className="p-4 bg-white border-2 border-dashed border-[#095520]/30 rounded text-center text-xs text-[#095520]/60">
                                            Developer's<br/>Operating Liabilities
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex-1 h-px bg-[#095520]/30"></div>
                                        <div className="px-4 py-1 bg-[#095520] text-yellow-400 text-xs font-bold rounded-full">
                                            LEGAL WALL
                                        </div>
                                        <div className="flex-1 h-px bg-[#095520]/30"></div>
                                    </div>

                                    <div className="bg-white border-4 border-[#095520] p-8 rounded shadow-lg text-center relative">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded">
                                            PROTECTED
                                        </div>
                                        <h4 className="font-bold text-[#095520] text-lg mb-1">Sylvan SPV</h4>
                                        <p className="text-sm text-[#095520]/60">Your investment asset</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Payment Priority */}
            <section ref={section2Ref} className="py-32 px-6 bg-[#F3F4F1] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#008929]/[0.03] rounded-full blur-3xl" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                        
                        {/* Visualization */}
                        <motion.div 
                            className="lg:col-span-5 relative order-2 lg:order-1"
                            initial={{ opacity: 0, x: -40 }} 
                            animate={section2InView ? { opacity: 1, x: 0 } : {}} 
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-white p-10 rounded-2xl border border-[#095520]/10 shadow-lg">
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <div className="inline-block p-4 bg-[#F3F4F1] rounded-lg border border-[#095520]/20 mb-6">
                                            <div className="text-sm font-medium text-[#095520]">Monthly Rental Income</div>
                                            <div className="text-xs text-[#095520]/60 mt-1">From tenants</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="w-px h-8 bg-[#095520]/20"></div>
                                    </div>

                                    <div>
                                        <div className="p-6 bg-[#095520] text-white rounded-lg text-center shadow-xl">
                                            <div className="text-xs font-bold text-yellow-400 uppercase mb-2">Bank Controlled</div>
                                            <div className="text-lg font-bold mb-1">Lockbox Account</div>
                                            <div className="text-xs text-white/70">Developer cannot access directly</div>
                                            <div className="text-xs text-white/70 mt-3 pt-3 border-t border-white/20">Third party bank controls all distributions</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.div 
                            className="lg:col-span-7 space-y-8 order-1 lg:order-2 lg:pl-12"
                            initial={{ opacity: 0, x: 40 }} 
                            animate={section2InView ? { opacity: 1, x: 0 } : {}} 
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-xs font-bold text-[#095520]/50 uppercase tracking-widest mb-4">
                                02. Payment Priority
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Bank-Controlled Lockbox
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    Rental income flows directly into a bank-controlled lockbox that functions as an independent escrow. The developer never has direct access to these funds.
                                </p>
                                <p className="text-black">
                                    The bank distributes payments in a fixed order enforced by contract. While funds are released for direct operational expenses to keep the asset performing, the developer receives no profit distributions until you are paid.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Principal Protection */}
            <section ref={section3Ref} className="py-32 px-6 bg-white relative overflow-hidden border-b border-gray-200">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#095520]/[0.03] rounded-full blur-3xl" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                        
                        {/* Content */}
                        <motion.div 
                            className="lg:col-span-7 space-y-8"
                            initial={{ opacity: 0, x: -40 }} 
                            animate={section3InView ? { opacity: 1, x: 0 } : {}} 
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="text-xs font-bold text-[#095520]/50 uppercase tracking-widest mb-4">
                                03. Principal Protection
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520]">
                                Your Position is Structurally Protected
                            </h2>
                            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                <p className="text-black">
                                    The developer's equity sits below you in the capital structure. This means their capital acts as a protective cushion for your investment.
                                </p>
                                <p className="text-black">
                                    If portfolio performance declines, the developer's equity absorbs the impact. Your principal remains protected unless their entire position is exhausted first.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visualization */}
                        <motion.div 
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, x: 40 }} 
                            animate={section3InView ? { opacity: 1, x: 0 } : {}} 
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="bg-[#F3F4F1] p-12 rounded-2xl border border-[#095520]/10 shadow-lg flex flex-col items-center">
                                <div className="text-xs text-[#095520]/50 mb-6 text-center">Capital Structure</div>
                                
                                <div className="w-full max-w-sm space-y-3 relative">
                                    <div className="relative">
                                        <div className="h-12 bg-slate-200 border border-slate-300 rounded flex items-center justify-center text-slate-600 text-sm font-medium">
                                            Senior Debt
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="h-20 bg-[#095520] text-yellow-400 flex flex-col items-center justify-center relative shadow-lg rounded">
                                            <div className="font-bold text-lg">Your Sylvan Position</div>
                                            <div className="text-xs text-yellow-400/70 mt-1">Protected by equity below</div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="h-24 bg-white border-2 border-[#095520]/30 rounded flex flex-col items-center justify-center text-[#095520]/70 text-sm">
                                            <div className="font-medium">Developer Equity</div>
                                            <div className="text-xs text-[#095520]/50 mt-1">Protective cushion</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: Deployment Efficiency */}
            <section ref={section4Ref} className="py-32 px-6 bg-[#F3F4F1]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={section4InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="text-xs font-bold text-[#095520]/50 uppercase tracking-widest mb-4">
                            04. Deployment Efficiency
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.02em] text-[#095520] mb-4">
                            One Approval, Multiple Investments
                        </h2>
                        <p className="text-base md:text-lg font-light text-black leading-relaxed mt-4 max-w-2xl mx-auto">
                            You review and approve the Sylvan structure once. After that, you can deploy into multiple portfolios without repeating the full legal and compliance review process each time.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={section4InView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="bg-[#095520] text-white p-12 rounded-xl shadow-xl text-center">
                            <div className="text-xs font-bold text-yellow-400 uppercase mb-4 tracking-widest">Year 1</div>
                            <h3 className="text-2xl font-bold mb-4">Full Structure Review</h3>
                            <p className="text-sm text-white/70 mb-8">One-time approval of the Sylvan framework</p>
                            <div className="pt-6 border-t border-white/20">
                                <div className="text-3xl font-bold">3-4 weeks</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-6 bg-white border-2 border-emerald-600 rounded-lg shadow-sm text-center">
                                <div className="font-bold text-[#095520] text-lg mb-1">Portfolio 1</div>
                                <div className="text-sm text-[#095520]/60">Multifamily, Austin</div>
                            </div>

                            <div className="p-6 bg-white border-2 border-emerald-600 rounded-lg shadow-sm text-center">
                                <div className="font-bold text-[#095520] text-lg mb-1">Portfolio 2</div>
                                <div className="text-sm text-[#095520]/60">Industrial, Phoenix</div>
                            </div>

                            <div className="p-6 bg-white border-2 border-emerald-600 rounded-lg shadow-sm text-center">
                                <div className="font-bold text-[#095520] text-lg mb-1">Portfolio 3</div>
                                <div className="text-sm text-[#095520]/60">Retail, Denver</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}