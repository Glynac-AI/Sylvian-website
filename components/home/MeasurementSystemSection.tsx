'use client'

import { motion } from 'framer-motion'

const measurementCells = [
    'Payment Reliability',
    'Capital Discipline',
    'Forecast Accuracy',
    'Disclosure Patterns',
    'Consistency Over Time'
]

export default function MeasurementSystemSection() {
    return (
        <section className="relative px-6 py-24 md:py-28 bg-[#F3F4F1] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <motion.div
                        className="rounded-2xl bg-[#0A3F28] p-8 md:p-10 min-h-[240px] flex items-end shadow-xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-[1.05] tracking-[-0.02em] text-white">
                            Sylvan&apos;s Measurement System
                        </h2>
                    </motion.div>

                    {measurementCells.map((label, index) => (
                        <motion.div
                            key={label}
                            className="rounded-2xl bg-white p-8 md:p-10 min-h-[240px] border border-[#0A3F28]/10 shadow-[0_20px_60px_rgba(10,63,40,0.08)] flex items-end"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            <h3 className="text-2xl md:text-3xl font-serif font-normal leading-tight text-[#0A3F28]">
                                {label}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}