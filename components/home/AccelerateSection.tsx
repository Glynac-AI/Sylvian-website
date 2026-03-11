'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const products = [
    {
        number: 1,
        title: 'Stabilized Asset Notes',
        description: 'Secured notes on stabilized assets, prioritizing capital preservation and current income through defined payment priority.'
    },
    {
        number: 2,
        title: 'Semi-Stabilized Asset Notes',
        description: 'Notes on assets in refinance or repositioning phases, offering higher returns in exchange for defined execution and timing risk.'
    },
    {
        number: 3,
        title: 'Construction Notes',
        description: 'Notes for construction or stabilization completion, with returns reflecting construction and delivery risk tied to defined milestones.'
    }
]

export default function AccelerateSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="bg-[#0A3F28] py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    {/* Left column - Image */}
                    <motion.div
                        className="relative h-96 md:h-full md:min-h-[500px] rounded-lg overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                            alt="Institutional real estate investing"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right column - Product Content */}
                    <motion.div
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <div className="space-y-8">
                            {products.map((product, index) => (
                                <div key={product.number} className="relative">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#013220] rounded-full flex items-center justify-center">
                                            <span className="text-white text-lg font-bold">{product.number}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-xl text-white mb-2">{product.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
