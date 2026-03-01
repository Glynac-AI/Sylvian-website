// components/home/StatementSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function StatementSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-gray-50 py-24 border-b border-[#E5E7EB] overflow-hidden">
            {/* Increased max-width to max-w-6xl to prevent line wrapping on the heading */}
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="w-12 h-1 bg-[#0A3F28] mx-auto mb-10"></div>

                    {/* Two-liner Roman/Italic Heading */}
                    <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-[#111827] mb-10">
                        <span className="block font-normal">Sylvan gives you what sponsor diligence has always lacked:</span>
                        <span className="block italic text-[#0A3F28]">observable, repeatable behavioral evidence.</span>
                    </h2>

                    {/* Compact Subtext */}
                    <div className="grid md:grid-cols-2 gap-8 text-left text-gray-600 text-base leading-normal max-w-3xl mx-auto">
                        <p>
                            Sponsor evaluation no longer depends on what a sponsor chooses to show. It depends on contractual obligations where non-compliance has immediate, enforceable consequences.
                        </p>
                        <p>
                            You see how sponsors manage cash flow stress, maintain cash reserves, and disclose problems not through what they choose to share, but through uniform contractual requirements.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}