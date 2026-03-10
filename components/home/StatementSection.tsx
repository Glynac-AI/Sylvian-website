// components/home/StatementSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function StatementSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-[#E8EBE4] py-20 border-b border-[#D1D5C8] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Green accent */}
                    <div className="w-8 h-px bg-[#0A3F28] mx-auto mb-8"></div>

                    {/* Heading */}
                    <h2 className="text-3xl lg:text-4xl font-serif leading-tight text-[#111827] mb-8">
                        <span className="block font-normal">Sylvan gives you what sponsor diligence has always lacked:</span>
                        <span className="block italic text-[#0A3F28] mt-2">observable, repeatable behavioral evidence.</span>
                    </h2>

                    {/* Two columns of serif body text */}
                    <div className="grid md:grid-cols-2 gap-px bg-[#C5C9BE]">
                        <p className="text-base text-gray-800 leading-relaxed text-left bg-[#E8EBE4] pr-10 py-2">
                            You see how sponsors manage cash flow stress, maintain cash reserves, and disclose problems not through what they choose to share, but through uniform contractual requirements.
                        </p>
                        <p className="text-base text-gray-800 leading-relaxed text-left bg-[#E8EBE4] pl-10 py-2">
                            Sponsor evaluation no longer depends on what a sponsor chooses to show. It depends on contractual obligations where non-compliance has immediate, enforceable consequences.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}