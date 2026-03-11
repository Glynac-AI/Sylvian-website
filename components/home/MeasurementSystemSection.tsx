'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const signals = [
    {
        number: '01',
        title: 'Payment Reliability',
        description: 'Whether scheduled payments are made on time, with each payment logged by due and receipt date.'
    },
    {
        number: '02',
        title: 'Capital Discipline',
        description: 'Whether obligations are met from asset cash flow or sponsor capital, with each payment tracked by source, timing, and amount.'
    },
    {
        number: '03',
        title: 'Forecast Accuracy',
        description: 'How projections compare to actual results, with forecasts shown against performance and variance clearly measured.'
    },
    {
        number: '04',
        title: 'Disclosure Patterns',
        description: 'How quickly and transparently issues are disclosed, with timing and revisions tracked.'
    },
    {
        number: '05',
        title: 'Consistency Over Time',
        description: 'Whether behavior remains consistent across assets and market cycles, revealing execution patterns over time.'
    }
]

export default function MeasurementSystemSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-white py-32 overflow-hidden border-b border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
                    {/* First cell - Title block with dark green background */}
                    <motion.div
                        className="bg-[#013220] p-8 md:p-12 flex flex-col justify-center text-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-serif mb-4 leading-tight">
                            Sylvan's Measurement System
                        </h2>
                        <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                            Sylvan measures sponsor behavior through five observable signals captured across every deal. These signals aggregate into longitudinal sponsor operating records.
                        </p>
                    </motion.div>

                    {/* Signal cards */}
                    {signals.map((signal, index) => (
                        <motion.div
                            key={signal.number}
                            className="bg-white p-8 md:p-12 hover:bg-[#FAFAFA] transition cursor-default flex flex-col justify-start"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 + (index * 0.05), ease: 'easeOut' }}
                        >
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-[#D9B44A] font-serif">
                                    {signal.number}
                                </span>
                            </div>
                            <h3 className="text-lg font-serif text-[#013220] mb-3 leading-tight">
                                {signal.title}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {signal.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
